import styles from "../styles/NickCard.module.css";
import ajd_t from "./assets/ajd_t.png";
import Image from  "next/image";

import {motion,useMotionValue,useTransform} from "framer-motion";

const NickCard=()=>{
  const x=useMotionValue(0);
  const y=useMotionValue(0);
  const rotateX=useTransform(y,[-100,100],[-30,30]);
  const rotateY=useTransform(x,[-100,100],[-30,30]);

  const z=useMotionValue();

  return(
   <div style={{perspective:"2000"}}>
     <motion.div className={styles.card_container} style={{x,y,rotateX,rotateY,z:100}} drag dragElastic={0.16} dragConstraints={{top:0,right:0,left:0,bottom:0}}>
        <div className={styles.mainY_container}>
            <div className={styles.y_container}></div>
            <h1>Hello</h1>
         </div>
         <div className={styles.z_container}>
            <h1>Nike Air</h1>
            <motion.div className={styles.image_container} style={{rotate:-30,x,y,rotateX,rotateY,z:10000}} drag dragElastic={0.16} dragConstraints={{top:0,bottom:0,left:0,right:0}}>
               <Image layout="fill" objectFit="contain" src={ajd_t}/>
             </motion.div>
             <div className={styles.info_container}>
                  <div>
                     <h2>NIKE AIR JORDAN M1 8S</h2>
                     <h2>YOUR NEXT SHOE</h2>
                  </div>
                </div>
          </div>
       </motion.div>
    </div>
  );
}

export default NickCard;
