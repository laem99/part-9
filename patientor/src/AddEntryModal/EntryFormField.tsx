import React from "react";
import { Field } from "formik";
import { Form } from "semantic-ui-react";
import { HealthCheckRating, Types } from "../types";

export type TypeOption = {
    value: Types;
    label: string;
};

export type RatingOption = {
    value: HealthCheckRating;
    label: string;
};

// props for select field component
type SelectFieldProps = {
    name: string;
    label: string;
    options: TypeOption[];
    onChange: () => void;
    handleChange: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
};

export const SelectField = ({
    name,
    label,
    options,
    onChange,
    handleChange,
}: SelectFieldProps) => (
    <Form.Field>
        <label>{label}</label>
        <Field onChange={(e: any) => {
            handleChange("type", e.value);
            onChange();
        }} id="select" as="select" name={name} className="ui dropdown">
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label || option.value}
                </option>
            ))}
        </Field>
    </Form.Field>
);

// props for select field component
type SelectFieldProps2 = {
    name: string;
    label: string;
    options: RatingOption[];
};

export const SelectField2 = ({
    name,
    label,
    options,
}: SelectFieldProps2) => (
    <Form.Field>
        <label>{label}</label>
        <Field as="select" name={name} className="ui dropdown">
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label || option.value}
                </option>
            ))}
        </Field>
    </Form.Field>
);