import { useEffect, useState, useRef } from "react";
import { DATA_URL } from "../utils/const"
import { Filter, Search } from "lucide-react";
import ResturantCard from "./ResturantCard";

export default function Body(){

    const [resList,setResList] = useState([]);
    const [filteredResturant, setFilteredResturant] = useState([]);
    const [search,setSearch] = useState("");

    const searchInputRef = useRef(null);


    useEffect(()=>{
        fetchData();

        const handleFocusSearch = () => {
            if (searchInputRef.current) {
                searchInputRef.current.focus();
            }
        };

        window.addEventListener('focusSearchInput', handleFocusSearch);

        //Cleanup the listener when component unmounts
        return () => {
            window.removeEventListener('focusSearchInput', handleFocusSearch);
        };
    },[])


    async function fetchData(){
        const data = await fetch(DATA_URL);
        const res = await data.json();
        //console.log(res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setResList(res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredResturant(res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }


    return(
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="mb-8">

                <h1 className="text-3xl font-bold text-gray-800 mb-2">Hungry?  We got you !!</h1>
                <p className="text-gray-600">Discover the best food and Drinks in Delhi</p>

            </div>

            {/* Seasarch and Filter */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div className="mb-8">
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                        <div className="pl-4">
                            <div>
                                <Search sixe={20} className="text-gray-400" />
                            </div>
                        </div>
                        <input 
                            type="text"
                            ref={searchInputRef}
                            className="w-full p-3 outline-none" 
                            placeholder="Enter your query here "
                            value={search}
                            onChange={(e)=>setSearch(e.target.value)}
                        />

                        <button 
                            className="bg-orange-500 text-white px-6 py-3 cursor-pointer hover:bg-orange-600 transition-colors"
                            onClick={()=>{
                                const filteredRes = resList.filter((ele)=>
                                ele.info.name.toLowerCase().includes(search.toLowerCase())
                            );
                            setFilteredResturant(filteredRes);
                            }}
                        >
                        Search
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-auto">
                    <button
                        className="flex items-center gap-2 bg-white border-gray-300 font-medium py-3 px-4 rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer"
                        onClick={()=>{
                        const filteredData = resList.filter(
                            (ele)=> parseFloat(ele.info.avgRating) > 4.0 // Use parseFloat to compare as a number and 4.0 for more results
                        );
                        setFilteredResturant(filteredData);
                    }}
                    >
                        <Filter size={16} />
                        <span>Top Rated Restaurants</span>
                    </button>
                </div>
            </div>

            {/* Restuarnts showing grid */}
            { filteredResturant.length ===0 ? (<p>Loading...</p>): (
                <div> 
                    <h2 className="text-2xl font-bold text-gray-800 mb-6"> {filteredResturant.length} Resturants to Explore</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredResturant.map((ele)=>(
                            <ResturantCard key={ele.info.id} res={ele} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}