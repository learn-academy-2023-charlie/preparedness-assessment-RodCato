import React, { useState } from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {
  const [name, setName] = useState("")
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }
  const resetInput = () => {
    setName("")
  }

  return (
    <div className="entire-content">
    <h1 id="header">Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <Input type="text" 
           value={name} 
           onChange={(e) => setName(e.target.value)} 
           id="name"
           autoComplete="name"
           />
        </div>
        <Button onClick={toggleModal} id="btn-center">Click Me</Button>
        <Button type="reset" onClick={resetInput} id="btn-center">
          Reset
        </Button>
        <ModalComponent isOpen={modalOpen} toggle={toggleModal} name={name}/>
      </div>
    </div>

  )
}

export default App
