import React from "react";
import Link from "next/link";
import {BreadcrumbJsonLd} from "next-seo";
import { config } from "utils/config";

export type Address = {
  path?: string;
  title: string;
};

type PropsType = {
  ids: Address[];
  DynamicAddress?: Address;
  className?: string;
};

export default function Breadcrumb(props: PropsType) {
  const { ids } = props;

  const renderBreadcrumb = () => {
    return ids.map((id, index) => (
      <li key={index}>
        {id?.path ? <Link href={id?.path?.trim()}>{id?.title?.trim()}</Link> : id?.title?.trim()}
      </li>
    ));
  };

  const generateBreadcrumbItems = () => {
    return ids.map((id, index) => {
      return {
        position: index+1,
        name: id?.title?.trim(),
        item: config.baseUrl + id?.path,
      }
    });
  }

  return (
      <>
        <BreadcrumbJsonLd
            itemListElements={generateBreadcrumbItems()}
        />

        <div className={`breadcrumb clearfix ${props.className}`}>
          <ul>
            {renderBreadcrumb()}
          </ul>
        </div>
      </>
  );
}
