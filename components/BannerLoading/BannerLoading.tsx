import React from "react";
import Shimmer from "./Shimmer";
import styles from "./bannerloading.module.css";

export default function BannerLoading() {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Shimmer
          styleSettings={
            { 
              width: 180, 
              height: 180, 
              margin: "40px 70px 40px 20px",
          }}
        />

        <div className={styles.content}>
          <Shimmer
            styleSettings={
            { 
              width: 136, 
              height: 24, 
              marginBottom: "10px",
            }}
          />
          <Shimmer
            styleSettings={
            { 
              width: 255, 
              height: 83, 
            }}
          />
        </div>

      </div>
    </div>
  );
}
