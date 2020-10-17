import { useState, useEffect } from 'react'
import cn from 'classnames'

export default function Filter({ entries, filterEntries }) {
    const [active, setActive] = useState(false);

    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [length, setLength] = useState()
    const [publication, setPublication] = useState()    
    
    useEffect(() => {
        filterChanges();
    }, [length, publication])

    const filterChanges = () => {
        let filtered = entries;        
        if (length) {            
            if (length !== "Any") {
                if (length === "8+ min") filtered = filtered.filter(post => post.readTime > 8)
                else {
                    let bounds = length.split('-');
                    let lower = bounds[0];
                    let upper = bounds[1];
                    filtered = filtered.filter(post => lower <= post.readTime && post.readTime <= upper);
                }
            }
        }

        if (publication) {
            if (publication === "SUPERJUMP") filtered = filtered.filter(post => post.publication == "SUPERJUMP")
        }

        console.log(publication);
        
        filterEntries(filtered);
    }

    const onLengthChange = (e) => {
        setLength(e.target.value)        
    }

    const onPublicationChange = (e) => {
        setPublication(e.target.value)        
    }

    const clearFilters = (e) => {
        setLength();
        setPublication();
    }

    return (
        <div className={cn("flex justify-end", { "mb-4": active, "mb-0": !active })}>
            <div className={cn("border-l-2 pl-2 text-gray-600", {
                "opacity-100 border-green-600 transition ease-out duration-150": active,
                "opacity-0 border-gray-100 transition ease-in duration-300 transform translate-x-16": !active,
            })}>
                <input autoComplete="off" className="text-left text-sm focus:outline-none"
                    type="text" value={startDate} name="search" placeholder="Start Date" />
                <input autoComplete="off" className="text-left text-sm focus:outline-none"
                    type="text" value={endDate} name="search" placeholder="End Date" />
            </div>
            <div className="relative inline-block text-left">
                <div>
                    <span className="rounded-md shadow-sm">
                        <button onClick={() => setActive(!active)} /* onBlur={() => setActive(false)}  */ type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-1 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-green-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150" id="options-menu" aria-haspopup="true" aria-expanded="true">
                            Filter
                            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </span>
                </div>


                <div className={cn("origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg", {
                    "transition ease-in-out duration-150 opacity-100": active,
                    "transition ease-in-out duration-150 opacity-0": !active,
                })}>
                    <div className="rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <div className="flex justify-between py-1">
                            <label className="block px-4 py-4 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                                Length
                            </label>
                            <div className="flex justify-between py-1">
                                <div className="relative">
                                    <select onChange={onLengthChange} className="block appearance-none text-sm w-full text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-publication">
                                        <option>Any</option>
                                        <option>0-2 min</option>
                                        <option>2-5 min</option>
                                        <option>5-8 min</option>
                                        <option>8+ min</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-100"></div>
                        <div className="flex justify-between py-1">
                            <label className="block px-4 py-4 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                                Publication
                             </label>
                            <div className="flex justify-end py-1">
                                <div className="relative">
                                    <select onChange={onPublicationChange} className="block appearance-none text-sm w-full text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-publication">
                                        <option>Any</option>
                                        <option>New Mexico</option>
                                        <option>Missouri</option>
                                        <option>SUPERJUMP</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-100"></div>
                        <div className="py-1">
                            <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                                Partnered
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                                Comment
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                                Submitted
                            </a>
                        </div>
                        <div className="border-t border-gray-100"></div>
                        <div className="py-1">
                            <a onClick={clearFilters} href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                                Clear
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}