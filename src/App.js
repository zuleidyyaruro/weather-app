import { useState, useEffect } from "react";
import {setBackgroundImage} from "./helpers/background";
import ContainerWeather from "./components/ContainerWeather";

function App() {
  
  const [weatherMain, setweatherMain]=useState("");
  const [background, setBackground]=useState("")

  useEffect(() => {
    setBackground(setBackgroundImage(weatherMain))
  }, [weatherMain])


  return (
    <div 
      className="app" 
      style={{
        backgroundSize:"cover", 
        backgroundImage:`url(${background})`, 
        backgroundRepeat: "no-repeat", 
        backgroundPosition:"center"}}
      >
         
      <ContainerWeather setweatherMain={setweatherMain}/>
    </div>
  );
}

export default App;
