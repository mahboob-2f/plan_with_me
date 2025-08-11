import Card from "./Card";

function Cards(props){
    return(
        <div className="pt-12 pb-4">
           <div className="grid grid-cols-3 space-x-2 gap-y-4 max-md:grid-cols-2 max-sm:grid-cols-1">
            {props.data.map((item,ind) =>{
                return <Card key={ind} {...item} removeCard={props.removeCard}></Card>
            })}
           </div>
        </div>
    )
}


export default Cards;