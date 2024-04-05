import Card from "../components/Card";
import Header from "../components/Header";
import TodoContainer from "../components/TodoContainer";
import { useLocation } from 'react-router-dom'

function App() {
    const data = useLocation()
    return (
        <div className="bg-black p-16">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
            {/* Header */}
            <Header name = {data.state.user}/>
            {/* Card */}
            <div className="flex justify-between gap-7 my-5 flex-wrap">
            <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
            <Card bgcolor={"#FD6663"} title={"December"} subtitle={"10:00:00"} />
            <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
            </div>
            {/* Todo Container */}
            <TodoContainer />
        </div>
        </div>
    );
}

export default App;
