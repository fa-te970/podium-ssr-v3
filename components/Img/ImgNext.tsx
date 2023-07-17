import { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
import { imageLoader } from "utils/utils";

type PropsType = {
  src: string;
  defaultSrc: string;
  alt: string;
  height?: number; 
  addParent: boolean;
};

export function ImgNext(props: PropsType){
  const { defaultSrc, alt, height, addParent } = props;
  const [src, setSrc] = useState(props.src);

  const onBlogImageError = () => {
    setSrc(defaultSrc);
  };

  useEffect(() => {
    let divElement = document.createElement("div");
    divElement.style.height = height + "";
    divElement.style.position = "relative";

    const childElement = document.getElementById("img_child");
    if (addParent) {
      divElement.insertBefore(childElement, null);
    }
  }, []);

  return (
    <Image
      loader={imageLoader}
      id="img_child"
      src={src}
      onError={onBlogImageError}
      alt={alt}
      layout={"fill"}
      objectFit="contain"
      loading={"lazy"}
    />
  );
}

type PodImgProps = {
  hash: string;
  defaultSrc: string;
  alt: string;
  height?: number;
  addParent: boolean;
};

export function PodImgNext(props: PodImgProps) {
  return (
    <ImgNext
      src={`${Url}${props.hash}`}
      defaultSrc={props.defaultSrc}
      alt={props.alt ?? ""}
      addParent={props.addParent}
      height={props?.height}
    />
  );
}
