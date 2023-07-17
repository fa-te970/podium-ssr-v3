import React from "react";
import Link from "next/link";
import {DefaultSeo} from "next-seo";

const Img404 = "/assets/img/404.svg";

const Page404 = (props: any) => {
  let { link= "/", message="صفحه اول پادیوم", type="صفحه" } = props;

  return (
    <section className="padding_wrapper error_page">
      <DefaultSeo title={"صفحه ۴۰۴"} />

      <img src={Img404} alt="" />
      <h4>متاسفیم! اما {type} مورد نظر تان را پیدا نکردیم!</h4>
      <p>
          پیشنهاد می‌کنیم <Link href={link}>{message}</Link> را مشاهده کنید!
        </p>
    </section>
  );
};

export default Page404;
