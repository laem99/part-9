import React from "react";
import { HeaderTypes } from "../types";

const Header = (props: HeaderTypes) => {
    return <h1>{props.courseName}</h1>;
};

export default Header;