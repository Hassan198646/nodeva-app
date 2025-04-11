import Frameone from '../../../assets/Frameone.svg'
import Frametwo from '../../../assets/Frametwo.svg'
import Framethree from '../../../assets/Framethree.svg'
import Framefour from '../../../assets/Framefour.svg'
import Framefive from '../../../assets/Framefive.svg'
import star from "../../../assets/tickerr/star.png";
import { motion } from "framer-motion";

// Animation variants for content
const itemVariants = {
  hiddenLeft: { opacity: 0, x: -200 },
  hiddenRight: { opacity: 0, x: 200 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 1.5,
      ease: "easeOut"
    }
  }
};

const iconVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 3,
      ease: "easeOut"
    }
  }
};

export default function Visions() {
  const services = [
    {
      id: 1,
      star: <img src={star}/>,
      title: "Website & App Prototyping",
      description: "Design intuitive and engaging web and mobile experiences for seamless user interaction.",
      icon: <img src={Frameone} className="w-[70px] md:w-[80px]"/>,
      iconBgColor: "bg-purple-500",
      position: "left"
    },
    {
      id: 2,
      star: <img src={star}/>,
      title: "Website & App Development",
      description: "We develop website and mobile apps that fit your needs perfectly.",
      icon: <img src={Frametwo}/>,
      iconBgColor: "bg-purple-500",
      position: "right"
    },
    {
      id: 3,
      title: "SaaS Development",
      star: <img src={star}/>,
      description: "We develop scalable, secure SaaS applications with robust architectures and seamless integrations.",
      icon: <img src={Framethree} className="w-[50px] md:w-[70px]"/>,
      iconBgColor: "bg-purple-500",
      position: "left"
    },
    {
      id: 4,
      title: "Brand Visuals",
      star: <img src={star}/>,
      description: "We design materials that visually express your values and represent your products.",
      icon: <img src={Framefour} className="w-[50px] md:w-[70px]"/>,
      iconBgColor: "bg-purple-500",
      position: "right"
    },
    {
      id: 5,
      title: "Email Template Design",
      star: <img src={star}/>,
      description: "We create custom, responsive email templates that boost engagement with your brand.",
      icon: <img src={Framefive} className="w-[50px] md:w-[70px]"/>,
      iconBgColor: "bg-purple-500",
      position: "left"
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }} 
      className="bg-purple-900 mx-auto max-w-[80rem] text-white p-4 md:p-8 lg:p-12"
    >
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-light mb-2">Your Vision, Our Expertise</h1>
        <p className="text-xs sm:text-sm text-gray-light">Achieving Results Through Customized Solutions</p>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-purple-700 transform -translate-x-1/2"></div>
        
        {services.map((service) => (
          <div 
            key={service.id} 
            className={`relative mb-2 md:mb-4 flex flex-col md:flex-row ${service.position === 'left' ? 'md:justify-start' : 'md:justify-end'}`}
          >
            <motion.div
              initial={service.position === 'left' ? 'hiddenLeft' : 'hiddenRight'}
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className={`w-full md:w-1/2 ${service.position === 'left' ? 'md:pr-8 lg:pr-16' : 'md:pl-8 lg:pl-16'} order-2 md:order-none`}
            >
              <div className={`p-4 md:p-6 rounded-lg ${service.position === 'left' ? 'md:text-right' : 'md:text-left'} text-center md:text-start`}>
                <h3 className="text-lg sm:text-xl baseText font-medium text-purple-300 mb-2 sm:mb-4">{service.title}</h3>
                <p className="text-xs sm:text-sm text-gray-light mb-4 md:mb-6 lg:mb-6">{service.description}</p>
                <button className="text-xs sm:text-sm text-purple-300 hover:text-purple-100 whitespace-nowrap px-4 py-2 border border-purple-300 rounded-full hover:bg-gradient-to-r hover:from-[#3D05DD] hover:to-[#EFA4F2] transition-all duration-400 ease-in-out">
                  See more
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={iconVariants}
              className={`flex flex-col items-center order-1 md:order-none mb-4 md:mb-0 ${service.position === 'left' ? 'md:absolute md:left-1/2' : 'md:absolute md:left-1/2'} md:transform md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2`}
            >
              <div className={`${service.iconBgColor} rounded-full p-2 md:p-3 flex items-center justify-center shadow-lg w-14 h-14 md:w-20 md:h-16`}>
                {service.icon}
              </div>
              <div className="hidden md:block w-0.5 h-[185px] bg-[#423155] relative bottom-[4px]"></div>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}