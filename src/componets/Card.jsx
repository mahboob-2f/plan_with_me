import { useState } from "react";

function Card({id,name,info,image,price,removeCard}){

    const[readmore,setReadmore]=useState(true);

    const description = readmore ? ` ${info.substring(0,100)}....   `:info;

    const readmoreHandler = ()=>{
        setReadmore(!readmore);
    }

    return(
        <div className="p-2 bg-[#c9c7c748] shadow-md ml-2 space-y-1 relative">
            <img src={image} alt="" className="rounded-[2px]" />
            <p className="flex items-center text-xl gap-x-1 font-bold "> <span className="font-bold  text-2xl text-[green]">₹</span> {price}</p>
            <p className="text-2xl font-[600] capitalize font-serif py-1">
                {name}
            </p>
            <div className="w-[95%] mx-auto font-serif">
                {description}
                <span onClick={readmoreHandler} className="text-[blue] cursor-pointer">{readmore? "read more":"show less "}</span>
            </div>
            <div className="flex justify-center pt-8 pb-4 relative">
                <button className="bg-[#413e3e] text-white px-6 py-2 rounded-md font-serif font-semibold
                    hover:bg-[#242424] hover:text-lg transition-all duration-200 cursor-pointer relative  bottom-0 
                " onClick={()=>removeCard(id)}>Not Interested</button>
            </div>
            
        </div>
    )
}

export default Card;