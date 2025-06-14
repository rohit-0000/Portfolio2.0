import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const AnimateRightToLeft = ({ children }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
          const Observer=new IntersectionObserver(
              ([entry])=>setInView(entry.isIntersecting),
              {threshold:0.01}
          )
          if(ref.current) Observer.observe(ref.current);
        return () => {
          Observer.disconnect();
        };
      }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ x:"90vw", opacity: 0 }}
      animate={inView ? { x:0, opacity: 1 } : { x:"90vw", opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateRightToLeft;
