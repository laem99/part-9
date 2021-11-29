import React from "react";
import { CoursePart } from "../types";

const Part = ({ part }: { part: CoursePart }) => {
    switch (part.type) {
        case "normal":
            return (
                <div>
                    <b>Name: {part.name}</b>
                    <p>Type: {part.type}</p>
                    {part.description && (
                        <p>Description: {part.description}</p>
                    )}
                    <p>Sum of exercises: {part.exerciseCount}</p>
                </div>
            );
        case "groupProject":
            return (
                <div>
                    <b>Name: {part.name}</b>
                    <p>Type: {part.type}</p>
                    <p>Sum of group projects: {part.groupProjectCount}</p>
                    <p>Sum of exercises: {part.exerciseCount}</p>
                </div>
            );
        case "submission":
            return (
                <div>
                    <b>Name: {part.name}</b>
                    <p>Type: {part.type}</p>
                    {part.description && (
                        <p>Description: {part.description}</p>
                    )}
                    <p>Link: <a href={part.exerciseSubmissionLink}>{part.exerciseSubmissionLink}</a></p>
                    <p>Sum of exercises: {part.exerciseCount}</p>
                </div>
            );
        case "special":
            return (
                <div>
                    <b>Name: {part.name}</b>
                    <p>Type: {part.type}</p>
                    {part.description && (
                        <p>Description: {part.description}</p>
                    )}
                    <p>Sum of exercises: {part.exerciseCount}</p>
                    <div><ul>Requirements: {part.requirements.map(r => <li key={r}>{r}</li>)}</ul></div>
                </div>
            )
    }
}

export default Part;