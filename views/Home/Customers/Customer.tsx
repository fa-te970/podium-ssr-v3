import React from "react";
import { Img } from "components/Img";
import { HomeSection } from "..";

const WebDevelopmentImageSrc = "/assets/img/wd.svg";

export function Customer({ section }: { section: HomeSection }) {
  return (
    <div className="box">
      <Img
        src={section.icon}
        alt={section.subtitle}
        defaultSrc={WebDevelopmentImageSrc}
      />
      <h4>{section.subtitle}</h4>
      <p>{section.text}</p>
    </div>
  );
}
