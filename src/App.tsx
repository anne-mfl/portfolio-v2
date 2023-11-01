import LeftScreen from "./pages/LeftScreen";
import RightScreen from "./pages/RightScreen";
import './App.css'
import ScrollAnimation from "react-animate-on-scroll";

function App() {
  return (
    <div className="font-rubik font-light text-stone-600">
      {/* <ScrollAnimation animateIn="fadeInLeft" initiallyVisible={true}> */}
        <LeftScreen />
      {/* </ScrollAnimation> */}
      {/* <ScrollAnimation animateIn="fadeInRight" initiallyVisible={true}> */}
        <RightScreen />
      {/* </ScrollAnimation> */}
    </div>
  );
}

export default App;
