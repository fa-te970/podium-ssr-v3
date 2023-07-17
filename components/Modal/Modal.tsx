import React, { PropsWithChildren } from "react";
import Link from "next/link";
import clsx from "classnames";

const CloseImgSrc = "/assets/img/close.svg";

type PropsType = {
  open: boolean;
  hasPadding?: boolean;
  onClose: () => void;
};

export default function Modal(props: PropsWithChildren<PropsType>) {
  const handleClose = (event: any) => {
    event.preventDefault();
    props.onClose();
  };

  return (
    <div
      className={clsx(`popup_box`, { active: props.open })}
      onClick={props.onClose}
    >
      <div
        className={clsx(`popup`, { popup_padding: props.hasPadding })}
        onClick={(e) => e.stopPropagation()}
      >
        <Link href="/">
          <a className="close" onClick={handleClose}>
            <img src={CloseImgSrc} alt="" />
          </a>
        </Link>
        {props.children}
      </div>
    </div>
  );
}
