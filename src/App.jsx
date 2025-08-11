import Data from "./componets/Data"
import Heading from "./componets/Heading"
import Cards from "./componets/Cards"


function App() {

  return (
    <div className="w-[100%] min-h-screen bg-gray-200">
      <Heading></Heading>
      <div className="w-[80%] bg-white mx-auto shadow-xl/30">
        <Cards data={Data}></Cards>
      </div>
    </div>
  )
}

export default App
