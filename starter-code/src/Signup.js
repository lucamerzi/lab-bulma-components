import React, { Component } from "react"

import FormField from "./FormField"
import Navbar from "./Navbar"
import CoolButton from "./CoolButton";
import Message from "./Message";


class Signup extends Component {
  render() {
    return (
      <div className="container" >
        <Navbar />
        <form>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" type="password" placeholder="We wont tell" />
          <CoolButton isSuccess>TAMERRR</CoolButton>
        </form>
        {/* JSX version */}
        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Message>
      </div>
    )
  }
}

export default Signup