import Data from "./componets/Data"
import Heading from "./componets/Heading"
import Cards from "./componets/Cards"
import { useState } from "react"



function App() {

  const [data, setData] = useState(Data);

  const removeCard = (n) => {
    const newData = data.filter(item => item.id !== n);
    setData(newData);
  }
  function refreshHandler(){
    setData(Data);
  }

  if (data.length === 0) {
    return (
      <div className="w-[100%] min-h-screen bg-gray-500 flex justify-center items-center flex-col text-2xl font-semibold capitalize font-serif
        gap-y-2
      "> 
          <p>no tour left</p>
          <button className="cursor-pointer bg-[#0a0a0a] text-[#c5bdbd] px-8 py-1 rounded-sm hover:text-white transition-all duration-200
          " onClick={refreshHandler}>Refresh</button> 
      </div>
    )
  }

  return (
    <div className="w-[100%] min-h-screen bg-gray-200">
      <Heading></Heading>
      <div className="w-[80%] bg-white mx-auto shadow-xl/30">
        <Cards data={data} removeCard={removeCard}></Cards>
      </div>
    </div>
  )
}

export default App
