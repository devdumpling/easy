import { useCallback, useState } from 'react'

export default function Search({ posts, setResults }) {
    const [query, setQuery] = useState('');    

    const onChange = useCallback((event) => {
        const query = event.target.value;
        setQuery(query);
        if (query.length) {            
            setResults(posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase())));                                           
        } else {
            setResults([]);            
        }
    }, [])

    return (
        <>
            <div className="flex flex-row text-gray-600">
                <input autoComplete="off" onChange={onChange} className="bg-white text-right text-sm focus:outline-none"
                    type="text" value={query} name="search" placeholder="Search" />                
            </div>            
        </>
    )
}