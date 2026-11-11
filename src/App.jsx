import { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Slider/>
      <Footer />

      
    </>
  );
}

export default App;
