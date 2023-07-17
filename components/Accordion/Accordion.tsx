import React, { useState, useRef } from "react";
import DOMPurify from "isomorphic-dompurify";
import Chevron from "./Chevron";
import styles from "./accordion.module.css";

type PropTypes = {
  title: string;
  content: React.ReactNode;
  title_dangerouslySetInnerHTML?: boolean;
};

const Accordion = (props: PropTypes) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className={styles.accordion__section}>
      <button
        className={`${styles.accordion} ${
          setActive === "active" ? styles.active : ""
        }`}
        onClick={toggleAccordion}
      >
        {
          props.title_dangerouslySetInnerHTML ? 
            <span
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(props?.title || ""),
              }} />
          :  
            <span
              className={styles.accordion__title}
            >
              {props?.title}
        </span>
        }
          
        <Chevron
          className={`${
            setRotate === "accordion__icon"
              ? styles.accordion__icon
              : `${styles.accordion__icon} ${styles.rotate}`
          }`}
          fill={"#777"}
        />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={styles.accordion__content}
      >
        <div
          className={styles.accordion__text}
        >
          {props?.content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
