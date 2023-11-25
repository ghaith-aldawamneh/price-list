import { useState , useContext} from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';
import Map from "./Map";
import Header from "../../components/header/Header";
import StyleContext from "../../contexts/StyleContext";


import "./Contactme.scss";
const ContactForm = () => {
  const {Langsar} = useContext(StyleContext);//Langsar.intro_content
  const {isDark} = useContext(StyleContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        subject,
        message
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        "service_bpt9f78",
        "template_vwgbzwl",
        templateParams,
        "swnWUb5P7Re8-P6jC",
      );

      // Reset contact form fields after submission
      reset();
      // Display success toast
      toastifySuccess();
      // Re-enable form submission
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
    <Header />
    <div className='container-fluid '>
      <div className='greet-main'>
        <div className='row'>
          <div className='col col-md-6 text-center justify-content-between align-items-center'>
            <div className='h-100'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate
              className=' h-100 '
              >
                {/* Row 1 of form */}
                 <div className='h-100 col justify-content-between align-items-center'>
                    <div className='row d-flex justify-content-between align-items-center my-md-3'> 
                    <h6 className='col-2' >Name:</h6>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Please enter your name'
                        },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='col-10 form-control-lg formInput'
                      placeholder='Name'
                    ></input></div>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                 




                  <div className='col'>
                  <div className='row d-flex justify-content-between align-items-center  my-md-3'> 
                    <h6 className='col-2' >Email:</h6>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='col-10  form-control-lg formInput'
                      placeholder='Email address'
                    ></input></div>
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                  </div>
                  



                  <div className='col'>
                  <div className='row d-flex justify-content-between align-items-center  my-md-3'> 
                    <h6 className='col-2' >{Langsar.contactProblem}:</h6>
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: {
                          value: true,
                          message: 'Please enter a subject'
                        },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control-lg formInput input1 col-10'
                      placeholder={Langsar.contactProblem}
                    ></input></div>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                 
                </div>
                {/* Row 3 of form */}
                <div className='row formRow '>
                  <div className='col  my-md-3'>
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder={Langsar.contactMessage}
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                  </div>
                </div>

                <button className='submit-btn btn btn-primary my-2  my-md-3' disabled={disabled} type='submit'>
                {Langsar.contactSubmit}
                </button>
                </div>
              </form>
            </div>
            <ToastContainer />
          </div>
          <div className='col col-md-6'><Map /></div>
           



        </div>
      </div>
    </div></>
  );
};

export default ContactForm;