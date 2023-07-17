import React from "react";
import Rating from "react-rating";
import classes from "./starRating.module.css";

type PropType = {
    initRate: number;
    readonly?: boolean;
    setRating: React.Dispatch<React.SetStateAction<number>>;
    setChangedRate?: React.Dispatch<React.SetStateAction<boolean>>;
};

const StarRating = (props: PropType) => {
  const { initRate, setRating, setChangedRate, readonly = false } = props;

  const handleChangeRating = (newRating) => {
    if (!readonly) {
      setRating(newRating);
      setChangedRate(true);
    }
  };

  return (
    <p>
      <Rating
        readonly={readonly}
        initialRating={initRate ?? 0}
        {...{
          emptySymbol: <span className={classes.starOff}>&#9734;</span>,
          fullSymbol: <span className={classes.starOn}>&#9733;</span>,
        }}
        onChange={(value) => handleChangeRating(value)}
      />
    </p>
  );
};

export default StarRating;
