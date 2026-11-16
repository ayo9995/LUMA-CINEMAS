import { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import NowShowing from "./Components/NowShowing";
import ComingSoon from "./Components/ComingSoon";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Slider/>
      <NowShowing/>
      <ComingSoon/>
      <Footer />
      
      
      
    </>
  );
}

export default App;
