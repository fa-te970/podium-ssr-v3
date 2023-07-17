import { useEffect } from "react";
import {
  Main,
  Customers,
  Blogs
} from ".";
import {DefaultSeo} from "next-seo";

export default function Home() {

  useEffect(() => {
    const id = window.location.hash.slice(1);
    const element = document.getElementById(id);
    element?.scrollIntoView();
  });

  return (
    <>
        <DefaultSeo title={"پادیوم، بازارچه API و خدمات دیجیتال"} titleTemplate={"%s"} />
      <Main />
      <Customers />
      <Blogs />
    </>
  );
}
