import React, { useState, useEffect } from "react";

type propType = {
  loading?: boolean;
  className?: string;
  text?: string;
  onClick?: () => void;
  startIcon: any;
};

const LoadingButton = (props: propType) => {
  const [loadingState, setLoadingState] = useState(false);
  const { className, text, onClick, loading, startIcon } = props;

  useEffect(() => {
    setLoadingState(props.loading || false);
  }, [props.loading]);

  return (
    <button
      type="button"
      className={`button-loading ${className} ${
        loadingState ? "spin button-loading-disabled" : ""
      }`}
      onClick={onClick}
    >
      <span>
        {loading ? <span className="spinner"></span> : <img src={startIcon} />}
        {text}
      </span>
    </button>
  );
};

export default LoadingButton;
