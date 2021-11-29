import React from "react";
import { CoursePart } from "../types";
import Part from "./Part";

const Content = ({ courseParts }: { courseParts: Array<CoursePart> }) => {
    return (
        <div>
            {
                courseParts.map((part, id) => {
                    return <Part key={id} part={part} />
                })
            }
        </div>
    );
}

export default Content;