import { useRef } from 'react'
import './portfolio.scss'
import {motion,useScroll,useSpring,useTransform } from 'framer-motion'


const items=[
    {
        id:1,
        title:"Ecommerce",
        img:"https://media.istockphoto.com/id/1471521270/photo/a-female-hand-and-a-shopping-cart-icon-concept-of-starting-a-sale-online-shopping-increasing.jpg?s=612x612&w=is&k=20&c=yG9alOFmB1GWbPx7rZwkWlzLZCfb2HmMv8ZhgEhRp7s=",
        desc:" An eCommerce website or app enables businesses to sell products online, providing users with a seamless shopping experience. Users can browse, add items to their carts, and securely complete transactions, enhancing convenience for both buyers and sellers."
    },
    {
        id:2,
        title:"Social Media",
        img:"https://media.istockphoto.com/id/1466050714/photo/social-media-marketing-digitally-generated-image-engagement.jpg?s=612x612&w=is&k=20&c=KXEpGvXoYALb2iYtTCZWByWjRmi_YN8AULf9WhzBgVU=",
        desc:" A full-stack social media project entails developing both the front-end and back-end components of a social media platform. The front-end includes the user interface where users interact with features like posting content, messaging, and engaging with others."
    },
    {
        id:3,
        title:"Real Estate",
        img:"https://media.istockphoto.com/id/1393537665/photo/modern-townhouse-design.jpg?s=612x612&w=is&k=20&c=Q3CQP6rd8CBC7TBI28DoRHXi4ARe4FVhW5JMuoy1jvA=",
        desc:" An eCommerce website or app enables businesses to sell products online, providing users with a seamless shopping experience. Users can browse, add items to their carts, and securely complete transactions, enhancing convenience for both buyers and sellers."
    },
    {
        id:4,
        title:"You-Tube",
        img:"https://media.istockphoto.com/id/1593519392/photo/e-learning-online-class-with-document-workshop-in-online-class-watching-video-on-internet.jpg?s=612x612&w=is&k=20&c=1Y0va_XbGrZGL6cRRiiXRw3eyNZdCFv3W-EIUKyRwRQ=",
        desc:" An eCommerce website or app enables businesses to sell products online, providing users with a seamless shopping experience. Users can browse, add items to their carts, and securely complete transactions, enhancing convenience for both buyers and sellers."
    },
]

const Single=({item})=>{
    const ref=useRef()
  
    const {scrollYProgress} =useScroll({target:ref})
    const y=useTransform(scrollYProgress,[0,1],[-300,300])
    return(
        <section >
          <div className="container">
            <div className="wrapper">
                <div className='imageContainer' ref={ref}>
                    <img src={item.img}/>
                </div>
             
             <motion.div className="textContainer" style={{y:y}}>
                <h2 >{item.title}</h2>
                <p>{item.desc}</p>
                <button>See Demo</button>
             </motion.div>
             </div>
          </div>
        </section>
    )
}



const Portfolio = () => {
   const ref=useRef()
    const {scrollYProgress} =useScroll({target:ref,offset:["end end","start start"]})

    const scaleX =useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    })
  return (
    <div className='portfolio' ref={ref}>
       
        <div className='progress'>
            <h1>Featured Works</h1>
            <motion.div style={{scaleX :scaleX}} className="progressBar">

            </motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio