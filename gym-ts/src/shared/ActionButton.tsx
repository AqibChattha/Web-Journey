import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { PageType } from "./types";

type Props = {
    children: React.ReactNode,
    setSelectedPage: (value: PageType) => void,
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return <AnchorLink
    className="rounded-md bg-grey-500 px-10 py-2 hover:bg-grey-700 hover:text-white" 
    onClick={() => setSelectedPage(PageType.ContactUs)}
    href={`#${PageType.ContactUs}`}
  >{children}</AnchorLink>;
};

export default ActionButton;
