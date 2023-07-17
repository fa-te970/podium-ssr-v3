import styles from "./shimmer.module.css";

const Shimmer = ({ styleSettings }) => {
  return (
    <div
      className={styles.shimmerCSS}
      style={styleSettings ? styleSettings : {}}
    ></div>
  );
};

export default Shimmer;
