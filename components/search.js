import { useCallback, useState, useEffect } from 'react'
import YourDrafts from './your-drafts'

export default function Search({ posts }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const onChange = useCallback((event) => {
        const query = event.target.value;
        setQuery(query);
        if (query.length) {            
            setResults(posts.filter(post => post.title.toLowerCase().includes(query)));                                           
        } else {
            setResults([]);            
        }
    }, [])

    return (
        <>
            <div className="flex flex-row text-gray-600 mb-4">
                <input onChange={onChange} className="bg-white text-left text-sm focus:outline-none"
                    type="text" value={query} name="search" placeholder="Search" />                
            </div>
            {results.length > 0 && <YourDrafts drafts={results} />}
        </>
    )
}