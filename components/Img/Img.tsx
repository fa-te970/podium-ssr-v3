import { useState } from "react";


type PropsType = {
  src: string;
  defaultSrc: string;
  alt?: string;
};

export function Img(props: PropsType) {
  const [src, setSrc] = useState(props.src);

  const onBlogImageError = () => {
    setSrc(props.defaultSrc);
  };

  return <img src={src} onError={onBlogImageError} alt={props.alt ?? ""} />;
}

type PodImgProps = {
  hash: string;
  defaultSrc: string;
  alt?: string;
};

export function PodImg(props: PodImgProps) {
  return (
    <Img
      src={`${Url}${props.hash}`}
      defaultSrc={props.defaultSrc}
      alt={props.alt ?? ""}
    />
  );
}
