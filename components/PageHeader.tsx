import React from "react";
import Link from "next/link";
import { Button } from "@radix-ui/themes";
import LocalSearchbar from "./LocalSearchbar";

const PageHeader = ({
  pageTitle,
  lsroute,
  lsiconPosition,
  lsimgSrc,
  lsplaceholder,
  lsotherClasses,
}) => {
  return (
    <header className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">{pageTitle}</h1>
        <Link href="/project/new" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            New
          </Button>
        </Link>
      </div>
      <LocalSearchbar
        route={lsroute}
        iconPosition={lsiconPosition}
        imgSrc={lsimgSrc}
        placeholder={lsplaceholder}
        otherClasses={lsotherClasses}
      />
    </header>
  );
};

export default PageHeader;
