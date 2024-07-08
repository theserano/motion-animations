import { motion } from "framer-motion";
import "./layout.scss";



const Layout = () => {

  const characters = "Serano".split("");
  const totalCharacters = characters.length;
  const animationDuration = 1 * totalCharacters;


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
            scaleX: [1, 1.2, 1.3, 1.1, 1],
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
          animate={{
            x: [-100, -70, -50, 10, -50, -70, -100],
            scale: [0.2, 0.4, 0.6, 1.0, 0.6, 0.2],
            rotateZ: ["45deg", "180deg", "45deg"],
            borderRadius: ["0px", "5px", "15px", "10px", "0px"],
          }}
          transition={{
            duration: 1,
            ease: "linear",
            times: [0, 0.1, 0.3, 0.6, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      </motion.div>

      <motion.div
        className="box"
        style={{ display: "flex", overflow: "hidden" }}
      >
        {characters.map((char, index) => (
          <motion.span
            key={index}
            style={{ display: "inline-block", opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: ["100%", "0%", "0%", "-50%"],
            }}
            transition={{
              times: [0, 0.25, 0.75, 1],
              duration: animationDuration,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: index++,
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

      <motion.div className="box">
        {characters.map((char, index) => (
          <motion.span
            key={index}
            // style={{opacity: 0}}
            animate={{
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              times: [0, 0.25, 0.75, 1],
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: index,
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

      <motion.div className="box">
        <motion.span
          style={{
            border: "5px solid white",
            borderStyle: "none solid none none",
            overflow: "hidden",
          }}
          animate={{
            width: [0, 100, 320, 100, 0],
          }}
          transition={{
            times: [0, 0.25, 0.5, 0.75, 1],
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "circInOut",
            repeatDelay: 1,
          }}
        >
          Serano
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

export default Layout