import React, { useState } from 'react';
import Correo from './Correo';
import Codigo from './Codigo';

function OlvidasteContraseña() {

  const [activeTab, setActiveTab] = useState("tab1");
  const [steps, setSteps]= useState(1);
  console.log(steps)
  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  const [switchState, setSwitchState] = useState(false);

  const handleSwitchChange = () => {
    setSwitchState(!switchState);
    if (switchState) {
      setActiveTab("tab1");
    } else {
      setActiveTab("tab2");
    }
  };

  return <div>

    <link rel="stylesheet" href="index.css" />
    <section className='section_OlvidarContraseña'>
      <div class='outlet'>
        {steps=== 1 ? <Correo setSteps={setSteps} /> : <Codigo />}
      </div>
      
    </section>
  </div>
}

export default OlvidasteContraseña