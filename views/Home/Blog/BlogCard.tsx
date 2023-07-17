import React from "react";
import { formatDate } from "utils";
import { ImgNext } from "components/Img";
import { Blog } from ".";

const blogDefaultIcon = "/assets/img/2.insurance-low-scaled.jpg";

export function BlogCard({ blog }: { blog: Blog }) {
  const blogSrc = `${blog?._embedded["wp:featuredmedia"][0]?.media_details?.sizes["wide-blog-list"]?.source_url}`;

  return (
    <figure>
      <div className="img" style={{ height: 281, position: "relative" }}>
        <ImgNext
          src={blogSrc}
          defaultSrc={blogDefaultIcon}
          alt={blog?.title?.rendered}
          addParent={false}
        />
      </div>
      <figcaption>
        <span>{formatDate(blog?.date, "jDD jMMMM ماه jYYYY")}</span>
        <a href={blog?.link} target="_blank" rel="noopener noreferrer">
          <p>{blog?.title?.rendered}</p>
        </a>
      </figcaption>
    </figure>
  );
}
