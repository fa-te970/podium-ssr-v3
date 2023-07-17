import React from "react";
import styles from "./loader.module.css";

type PropType = {
  size?: string,
}

const Loader = (props: PropType) => {
  return (
    <div className={styles['loader-wrapper']}>
      <div 
        className={styles.loader}
        style={props?.size 
          ? { width: props.size, height: props.size }
          : {}
        }
      >
      </div>
    </div>
  );
};

export default Loader;




