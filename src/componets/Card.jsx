function Card({id,name,info,image,price}){
    return(
        <div className="p-2 bg-[#c9c7c748] shadow-md ml-2 space-y-1">
            <img src={image} alt="" className="rounded-[2px]" />
            <p className="flex items-center text-xl gap-x-1 font-bold "> <span className="font-bold  text-2xl text-[green]">₹</span> {price}</p>
            <p className="text-2xl font-[600] capitalize font-serif py-1">
                {name}
            </p>
            <div className="w-[95%]   mx-auto">
                {info}
            </div>
        </div>
    )
}

export default Card;