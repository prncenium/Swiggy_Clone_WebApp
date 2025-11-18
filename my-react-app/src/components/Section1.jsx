import { useEffect, useRef, useState } from "react";
import { CDN_url, DATA_URL } from "../utils/const";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Section1=()=>{

    const [resList,setResList] = useState([]);
    const scrollRef = useRef(null);

    useEffect(()=>{
        fetchData();
    },[])

    async function fetchData(){
        const data = await fetch(DATA_URL);
        const res = await data.json();
        //console.log(res.data.cards[0].card.card.gridElements.infoWithStyle.info);
        setResList(res.data.cards[0].card.card.gridElements.infoWithStyle.info)
    }

    const scroll = (direction)=>{
        if(scrollRef.current){
            scrollRef.current.scrollBy({
                left: direction==="left"? -300: 300,
                behavior:"smooth"
            })
        }
    }
    return(
        <div className="px-6 py-4 max-w-[1200px] m-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold ">What's on your mind?</h2>
                <div className="flex">
                    <button
                        onClick={()=>scroll("left")}
                     className="w-8 h-8 bg-gray-300 rounded-full shadown-md flex justify-center items-center mr-4"> <ArrowLeft className="cursor-pointer" />
                    </button>
                    <button
                        onClick={()=>scroll("right")}
                     className="w-8 h-8 bg-gray-300 rounded-full shadown-md flex justify-center items-center "><ArrowRight className="cursor-pointer" />
                    </button>
                </div>
            </div>
            <div className="relative flex items-center bg-gray-100">
                <div 
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 scrollbar-hide px-12 bg-gray-100"
                style={{scrollbarWidth:"none"}}
            >
                    {
                        resList.map((ele)=>(
                            <div key={ele.id} className="bg-gray-100 flex flex-col items-center flex-shrink-0 ">
                                <img src={`${CDN_url}${ele.imageId}`} alt={ele.action.text} className="w-40 h-auto mix-blend-multiply" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Section1;
 