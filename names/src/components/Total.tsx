import React from "react";
import { CourseTypes } from "../types";

const Total = ({ courseParts }: { courseParts: Array<CourseTypes> }) => {
    return (
        <p>Number of exercises{" "}
        {courseParts. reduce((carry, part) => carry + part.exerciseCount, 0)}
        </p>
    )
}

export default Total;