import React, { useState, useEffect } from "react";

type propType = {
  type?: 'submit' | 'reset' | 'button';
  loading?: boolean;
  className?: string;
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const LoadingButton = (props: propType) => {
  const [loadingState, setLoadingState] = useState(false);
  const {
    type,
    className,
    text,
    onClick,
    disabled
  } = props;

  useEffect(() => {
    setLoadingState(props.loading || false)
  }, [props.loading]);

  return (
    <button
      type={type ? type : "button"}
      disabled={loadingState || disabled}
      className={`button-loading 
      ${className} 
      ${loadingState ? "spin" : ""}
      ${disabled ? "button-loading-disabled" : ""}`}
      onClick={onClick}
    >
      {text}
      <span className="spinner"></span>
    </button>
  );
};

export default LoadingButton;