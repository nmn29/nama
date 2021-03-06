import "../stylesheet/contents.css";
import { Fade } from 'react-reveal'
import Icon from "../images/icon.jpg"
import { motion } from 'framer-motion'
import { Link } from "react-router-dom"

export default function contents(){ 
  return(
    <div className="contents">
      <div className="about-fadeup">
        <div className="about">
          <ul className="aboutul">
            <li className="icon-l">
            <div className="icon">
              <motion.div whileHover={{scale: 1.1}} whileTap={{ scale: 0.9 }}>
                <a onclick="javascript:location.reload();"><img className="icon-c" src={Icon} /></a>
              </motion.div>
            </div>
            </li>
            <li>
              <div className="aboutus">
                <Fade bottom><h1>about us</h1></Fade>                 
                <Fade bottom><p>namaです</p></Fade>                 
                <Fade bottom><p>駆け出しエンジニアの学生です</p></Fade>                 
                <Fade bottom><p>よろしくお願いします</p></Fade>                 
              </div>
            </li>
          </ul>
          <ul className="learn"> 
            <Fade bottom>
            <div className="Learning">
              <Fade bottom><h1>Learning</h1></Fade>  
            </div>           
              <li className="learn-l react-js">
                <img src="https://img.icons8.com/color/480/000000/react-native.png"/>
                <p>React.js</p>
              </li>
              <li className="learn-l vue-js">
                <img src="https://img.icons8.com/color/480/000000/vue-js.png"/>
                <p>Vue.js</p>
              </li>
              <li className="learn-l discord-bot">
                <img src="https://img.icons8.com/color/480/000000/discord-logo.png"/>
                <p>Discord bot</p>
              </li>
              <li className="learn-l python">
                <img src="https://img.icons8.com/color/480/000000/python--v1.png"/>
                <p>Python</p>
              </li>
              <li className="learn-l java">
                <img src="https://img.icons8.com/color/480/000000/java-coffee-cup-logo--v1.png"/>
                <p>Java</p>
              </li> 
            </Fade>        
          </ul> 
          <Fade bottom>
          <ul className="links">
            <li className="blog">
              <motion.div whileHover={{scale: 1.1}} whileTap={{ scale: 0.9 }}>
                <Link to="blog" className="blog-a"><span>Blog</span></Link>
              </motion.div>
            </li>
            <li className="works">
              <motion.div whileHover={{scale: 1.1}} whileTap={{ scale: 0.9 }}>
                <Link to="works" className="works-a"><span>Works</span></Link>
              </motion.div>
            </li>
          </ul>
          </Fade>
        </div>
      </div>
    </div>
  );
}