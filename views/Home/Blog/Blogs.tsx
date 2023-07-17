import React from "react";
import { useBlogs, Blog, BlogCard } from ".";

const CARD_COUNT = 4;

export function Blogs() {
  const { data } = useBlogs(CARD_COUNT);

  return (
    <section className="blog ">
      <div className="padding_wrapper">
        <div className="last_post clearfix">
          <h3>آخرین‌های بلاگ</h3>
          <a
            href="..."
            target="_blank"
            rel="noopener noreferrer"
          >
            همه مطالب
          </a>

          <div className="blog_post">
            <div>
              {!data
                ? "درحال دریافت اطلاعات"
                : data.map((blog: Blog) => (
                    <BlogCard key={blog?.id} blog={blog} />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
