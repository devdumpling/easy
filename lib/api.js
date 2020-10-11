import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')
const draftsDirectory = join(process.cwd(), '_drafts')

export function getSlugs(dir) {
  return fs.readdirSync(dir)
}

export function getPostBySlug(slug, fields = [], draft) {
  const sourceDirectory = draft ? draftsDirectory : postsDirectory
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(sourceDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {  
  const slugs = getSlugs(postsDirectory)
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
  return posts
}

export function getAllDrafts(fields = []) {  
  const slugs = getSlugs(draftsDirectory)
  const drafts = slugs
    .map((slug) => getPostBySlug(slug, fields, true))
    // sort drafts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
  return drafts
}