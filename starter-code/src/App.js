import React, { Component } from "react"
import Navbar from "./Navbar"
import FormField from "./FormField"
import CoolButton from "./CoolButton"
import Signup from "./Signup"

class App extends Component{
  render(){
    return (
      < Signup />
      // <div className="container">
      // <Navbar />
      // <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      // <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      // {/* COOLBUTTON */}
      // <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      // <CoolButton isSmall isSuccess>Button 2</CoolButton>
      // </div>
    )
  }
}

export default App