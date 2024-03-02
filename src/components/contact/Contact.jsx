import { useRef } from 'react'
import './contact.scss'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser';

const variants={
    initial:{
      y:500,
      opacity:0,
    },
    animate:{
    y:0,
    opacity:1,
    transition:{
       duration:0.5,
       staggerChildren :0.1,
    }
    }
}


const Contact =()=>{

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_o3mdg18', 'template_7ob3ani', formRef.current, {
            publicKey: 'WdwBTwqdy4uW64PV2',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    const formRef=useRef()
    return(
        <motion.div className='contact' variants={variants} initial="initial" whileInView="animate">
            <motion.div className='textContainer' variants={variants}>
                <motion.h1>Lets work together</motion.h1>
                <motion.div className='item' variants={variants}>
                    <h2>Mail</h2>
                    <span>teramedewgezhagn@gmail.com</span>
                </motion.div>
                <motion.div className='item' variants={variants}>
                    <h2>Address</h2>
                    <span>Addis Ababa, Ethiopia</span>
                </motion.div>
                <motion.div className='item' variants={variants}>
                    <h2>Phone</h2>
                    <span>+251 921742834</span>
                </motion.div>
            </motion.div>
            <div className='formContainer'>
            <motion.div className='phoneSvg' initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:3,duration:1}}>
            <svg 
  xmlns="http://www.w3.org/2000/svg"
  width="500"
  height="500"
  viewBox="0 0 24 24"
  fill="none"
  stroke="orange"
  strokeWidth="1"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <motion.path 
   initial={{pathLength:0}}
   whileInView={{pathLength:1}}
   transition={{duration:3}}
  d="M14.05 6A5 5 0 0118 10m-3.95-8a9 9 0 018 7.94m0 7v3a2 2 0 01-2 2h-.19a19.79 19.79 0 01-8.63-3.07 19.52 19.52 0 01-6-6 19.82 19.82 0 01-3.11-8.69A2 2 0 013.93 2h3.18a2 2 0 012 1.72 13 13 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 13 13 0 002.81.7A2 2 0 0122 16.92z" />
</svg>

</motion.div>
                <motion.form ref={formRef} onSubmit={sendEmail} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:4,duration:1}}>
                    <input type="text" required placeholder="Name" name='name' />
                    <input type="email" required placeholder="Email" name='email' />
                    <textarea rows={8} placeholder="Message" name='message' />
                    <button>Submit</button>
                </motion.form>
            </div>
        </motion.div>
    )
}

export default Contact