import './hero.scss'
import {motion} from 'framer-motion'
const textVariant = {
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
        duration:1,
        staggerChildren:0.1,
    }
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
       duration:2,
       repeat:Infinity
    }
  }
}

const sliderVariant = {
  initial:{
    x:0,
    
  },
  animate:{
    x:"-220%",
    transition:{
        repeat:Infinity,
        repeatType:"mirror",
        duration:20,
      
    }
  },
  
}


const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
           <motion.div className="textContainer" variants={textVariant} initial="initial" animate="animate">
            <motion.h2 variants={textVariant}> Gezhagn Teramedew</motion.h2>
            <motion.h1 variants={textVariant}>Web developer and UI designer</motion.h1>
            <motion.div className="buttons" variants={textVariant}>
                <motion.button variants={textVariant}>See the Latest works</motion.button>
                <motion.button variants={textVariant}>Contact Me</motion.button>
            </motion.div>
            <motion.img variants={textVariant} animate="scrollButton" src="/scroll.png"/>
           </motion.div>
        </div>
         <motion.div className="slidingTextContainer" variants={sliderVariant} initial='initial' animate='animate'>
            Writer Content Creater Influencer
         </motion.div>
        <div className="imageContainer">
            <img src="/mecut.png"/>
        </div>
    </div>
  )
}

export default Hero