import React, {Component} from "react";
import ContactForm from "./ContactForm/ContactForm";

 export class App extends Component {
   formSubmitHandler = data => {
    console.log(data);
  }

  render() {
    

    return (
    <div>
        <ContactForm onSubmit={ this.formSubmitHandler} />

    </div>
  );
  }
  
};

