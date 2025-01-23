import { useRef } from "react";
import emailjs from "emailjs-com";

import StyledContactForm from "./ContactForm.styled";
import Button from "components/Button/Button";
import InputField from "components/InputField/InputField";

import userIcon from "assets/icons/user.svg"
import phoneIcon from "assets/icons/phone.svg";
import envelopeIcon from "assets/icons/envelope.svg";

const ContactForm = ({setAlert}) => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    
    // Access form data
    const formData = new FormData(form.current);
    
    // Extract individual form fields
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    
    // Perform validation of form data before sending
    if (!name || !email || !message) {
      alert("Please fill out all required fields.");
      return; // Don't send email if validation fails
    }
    
    // Send the form data via EmailJS
    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,  
        `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,  
        form.current,        
        `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`,

      )
      .then(
        (result) => {
          console.log("Message sent: ", result.text);
          setAlert(() =>({isVisible: true, isError: false})) 
          
          // Reset form fields
          form.current.reset()
        },
        (error) => {
          console.log("Error sending message: ", error.text);
          setAlert(() => ({isVisible: true, isError: true}))
        }
      );
      
      
    }

  return (
    <StyledContactForm ref={form} onSubmit={sendEmail}>
      <InputField
        label="Name"
        type="text"
        name="name"
        startIcon={userIcon}
        gutterBottom
        required
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        startIcon={envelopeIcon}
        gutterBottom
        required
      />
      <InputField
        label="Phone"
        type="tel"
        name="phone"
        startIcon={phoneIcon}
        gutterBottom
      />
      <InputField
        as="textarea"
        label="Message"
        name="message"
        textarea
        rows="5"
        required
      />
      <Button
        as="button"
        type="submit"
        variant="contained"
        mt="lg"
        fullWidth
        uppercase
      >
        Send
      </Button>
    </StyledContactForm>
  );
};

export default ContactForm;
