import React from "react";
import Shimmer from "./Shimmer";
import styles from "./shimmer.module.css";

export default function CardLoading() {
  return (
    <div className="box">
      <div className={styles.header}>
        <Shimmer
          styleSettings={{ width: 40, height: 40, margin: "0 0 20px 10px", borderRadius: "50%"  }}
        />
        <Shimmer
          styleSettings={{
            height: "24px",
            width: "136px",
            margin: "8px 0 24px 65px",
            borderRadius: "4px",
          }}
        />
      </div>
      <Shimmer
        styleSettings={{
          height: 83,
          width: 255,
          margin: "20px 0 30px",
          borderRadius: "4px",
        }}
      />
      <div className={styles.buttons}>
        <Shimmer
          styleSettings={{ height: "24px", width: "50px", borderRadius: "4px" }}
        />
        <Shimmer
          styleSettings={{
            height: "24px",
            width: "50px",
            marginRight: "10px",
            borderRadius: "4px",
          }}
        />
      </div>
    </div>
  );
}
