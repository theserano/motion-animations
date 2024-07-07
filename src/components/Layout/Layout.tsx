import { motion } from "framer-motion";
import "./layout.scss";



const Layout = () => {

  return (
    <motion.div className="layout">
      <motion.div className="box">
        <motion.div
          className="circle"
          animate={{
            opacity: [0.2, 1, 0.6, 0.2],
            scale: [0.5, 1, 0.8, 0.5],
          }}
          transition={{
            ease: "easeOut",
            duration: 1,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        ></motion.div>
      </motion.div>

      <motion.div className="box">
        <motion.div
          className="square"
          animate={{
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      </motion.div>

      <motion.div className="box">
        <motion.div
          className="square"
          animate={{
            scaleY: [1, 1.2, 1.3, 1.1, 1],
            scaleX: [1, 1.1, 1.3, 1.1, 1],
            borderRadius: ["0px", "5px", "15px", "10px", "0px"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      </motion.div>

      <motion.div className="box">
        <motion.div
          className="square"
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      </motion.div>
      
    </motion.div>
  );
}

export default Layout