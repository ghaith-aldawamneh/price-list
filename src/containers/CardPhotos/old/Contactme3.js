import { useState , useContext} from 'react';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';
import StyleContext from "../../contexts/StyleContext";


import "./Contactme.scss";
const ContactForm = () => {
  const {Langsar} = useContext(StyleContext);//Langsar.intro_content
  const {isDark} = useContext(StyleContext);
  return (
    <>
  <div style={{ height: '100%', width: '100%' }}>sadas</div>
</>
  );
};

export default ContactForm;