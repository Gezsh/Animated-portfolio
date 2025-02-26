import { useRef } from "react"
import "./services.scss"
import {motion,useInView} from 'framer-motion'

const variants={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    }
}



const Services = () => {
    const ref=useRef()
    const isInView=useInView(ref,{margin:"500px"})
  return (
    <motion.div 
    className='services' 
    variants={variants} 
    initial='initial' 
    ref={ref}
    animate={isInView && "animate"}
    
    >
        <motion.div className="textContainer" variants={variants}>
            <p>I focus on helping your brand grow <br/> and move forward</p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                
                <img src="/people.webp" alt=""/>
                <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
             </div>   
             <div className="title">
                <h1><motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.</h1>
                <button>WHAT WE DO?</button>
             </div>

                
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>
                I am a software architect and a senior developer with 6+ years of experience working on international projects and platforms. I have strong experience designing and implementing robust, scalable, and simple solutions to solve real-life business cases.

                </p>
                <button>GO</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>
                I am a software architect and a senior developer with 6+ years of experience working on international projects and platforms. I have strong experience designing and implementing robust, scalable, and simple solutions to solve real-life business cases.

                </p>
                <button>GO</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>
                I am a software architect and a senior developer with 6+ years of experience working on international projects and platforms. I have strong experience designing and implementing robust, scalable, and simple solutions to solve real-life business cases.

                </p>
                <button>GO</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
               
                <h2>Branding</h2>
                <p>
                I am a software architect and a senior developer 
                with 6+ years of experience working on international
                 projects and platforms. I have strong experience designing
                  and implementing robust, scalable, and simple solutions to solve real-life business cases.

                </p>
                <button>GO</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services