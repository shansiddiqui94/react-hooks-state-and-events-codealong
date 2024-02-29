import React from "react";
import { useState } from "react";
function Toggle() {
  const [lightSwitch, setLightSwitch] = useState(false)

  function handleClick(){
    setLightSwitch((lightSwitch)=> !lightSwitch)
  }

  console.log(lightSwitch)

   return <button style={{background: "red"}} onClick={handleClick}>{lightSwitch ? 'ON' : "OFF"}</button>;
}

export default Toggle;
