import React, { useState } from "react";
import { Grid, Button } from "semantic-ui-react";
import { Entry, HealthCheckEntry, HealthCheckRating, HospitalEntry, OccupationalHealthcareEntry, Types, UnionOmit } from "../types";
import { Field, Formik, Form, FieldArray } from "formik";
import { TextField } from "../AddPatientModal/FormField";
import { TypeOption, SelectField, RatingOption, SelectField2 } from "./EntryFormField";

export type EntryFormValues = UnionOmit<Entry, "id">;

interface Props {
    onSubmit: (values: EntryFormValues) => void;
    onCancel: () => void;
}

const typeOptions: TypeOption[] = [
    { value: Types.Hospital, label: "Hospital" },
    { value: Types.OccupationalHealthcare, label: "OccupationalHealthcare" },
    { value: Types.HealthCheck, label: "HealthCheck" }
];

const rationgOptions: RatingOption[] = [
    { value: HealthCheckRating.Healthy, label: "Healthy" },
    { value: HealthCheckRating.LowRisk, label: "LowRisk" },
    { value: HealthCheckRating.HighRisk, label: "HighRisk" },
    { value: HealthCheckRating.CriticalRisk, label: "CriticalRisk" }
];

const Ho_initials: Omit<HospitalEntry, 'id'> = {
    date: '',
    description: '',
    specialist: '',
    diagnosisCodes: [''],
    discharge: { diDate: '', criteria: '' },
    type: 'Hospital',
};

const Oc_initials: Omit<OccupationalHealthcareEntry, 'id'> = {
    date: '',
    description: '',
    specialist: '',
    diagnosisCodes: [''],
    employerName: '',
    sickLeave: { endDate: '', startDate: '' },
    type: 'OccupationalHealthcare',
};

const He_initials: Omit<HealthCheckEntry, 'id'> = {
    date: '',
    description: '',
    specialist: '',
    diagnosisCodes: [''],
    healthCheckRating: 0,
    type: 'HealthCheck',
};

export const AddEntryForm = ({ onSubmit, onCancel }: Props) => {

    const [type, setType] = useState<'Hospital' | 'OccupationalHealthcare' | 'HealthCheck'>('Hospital');

    const onchange = () => {
        const field = document.getElementById('select') as HTMLSelectElement;
        setType(field.value as Types);
    };

    return (
        <Formik
            enableReinitialize={true}
            initialValues={(type === 'HealthCheck') ? He_initials : (type === 'Hospital') ? Ho_initials : Oc_initials}
            onSubmit={onSubmit}
            validate={values => {
                const requiredError = "Field is required";
                const errors: { [field: string]: string } = {};
                if (!values.date) {
                    errors.date = requiredError;
                }
                if (!values.description) {
                    errors.description = requiredError;
                }
                if (!values.specialist) {
                    errors.specialist = requiredError;
                }
                if (!values.diagnosisCodes) {
                    errors.diagnosisCodes = requiredError;
                }
                if (!values.type) {
                    errors.type = requiredError;
                }
                switch (values.type) {
                    case "HealthCheck":
                        if (!values.healthCheckRating) {
                            errors.healthCheckRating = requiredError;
                        }
                        return errors;
                    case "Hospital":
                        if (!values.discharge.criteria || !values.discharge.diDate) {
                            errors.discharge = requiredError;
                            errors.discharge = requiredError;
                        }
                        return errors;
                    case "OccupationalHealthcare":
                        if (!values.employerName) {
                            errors.employerName = requiredError;
                        }
                        if (!values.sickLeave) {
                            errors.startDate = requiredError;
                            errors.endDate = requiredError;
                        }
                        return errors;
                    default:
                        return errors;
                }
            }}
        >
            {({ isValid, dirty, setFieldValue }) => {
                return (
                    <Form className="form ui">
                        <SelectField
                            label="Type"
                            name="type"
                            options={typeOptions}
                            onChange={onchange}
                            handleChange={setFieldValue}
                        />
                        <Field
                            label="description"
                            placeholder="Description"
                            name="description"
                            component={TextField}
                        />
                        <Field
                            label="Specialist"
                            placeholder="Specialist"
                            name="specialist"
                            component={TextField}
                        />
                        <Field
                            label="Date"
                            placeholder="YYYY-MM-DD"
                            name="date"
                            component={TextField}
                        />

                        <div>
                            <label>Diagnosis Codes</label>
                            <FieldArray name="diagnosisCodes">
                                {
                                    (props) => {
                                        // eslint-disable-next-line @typescript-eslint/unbound-method
                                        const { push, remove, form } = props;
                                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                                        const { values } = form;
                                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                                        const { diagnosisCodes } = values;
                                        return <div>
                                            {
                                                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                                                diagnosisCodes.map((_code: string, index: number) => (
                                                    <div key={index}>
                                                        <Field name={`diagnosisCodes[${index}]`} />
                                                        {(diagnosisCodes.length !== 1)
                                                            ? <button type="button" onClick={() => remove(index)}> - </button>
                                                            : null}
                                                        <button type="button" onClick={() => push('')}> + </button>
                                                    </div>
                                                ))
                                            }
                                        </div>;
                                    }
                                }
                            </FieldArray>
                        </div>

                        {(type === 'OccupationalHealthcare') ?
                            <><Field
                                label="startDate"
                                placeholder="YYYY-MM-DD"
                                name="sickLeave.startDate"
                                component={TextField} />

                                <Field
                                    label="endDate"
                                    placeholder="YYYY-MM-DD"
                                    name="sickLeave.endDate"
                                    component={TextField}
                                />
                                
                                <Field
                                label="employer name"
                                placeholder="name here"
                                name="employerName"
                                component={TextField} /></>

                            : (type === 'HealthCheck') ?
                                <>
                                    <SelectField2
                                        label="healthCheckRating"
                                        name="healthCheckRating"
                                        options={rationgOptions} />
                                </>
                                : <>
                                    <Field
                                        label="Discharge Date"
                                        placeholder="YYYY-MM-DD"
                                        name="discharge.diDate"
                                        component={TextField}
                                    />
                                    <Field
                                        label="Criteria"
                                        placeholder="criteria"
                                        name="discharge.criteria"
                                        component={TextField}
                                    />
                                </>
                        }
                        <Grid>
                            <Grid.Column floated="left" width={5}>
                                <Button type="button" onClick={onCancel} color="red">
                                    Cancel
                                </Button>
                            </Grid.Column>
                            <Grid.Column floated="right" width={5}>
                                <Button
                                    type="submit"
                                    floated="right"
                                    color="green"
                                    disabled={!dirty || !isValid}
                                >
                                    Add
                                </Button>
                            </Grid.Column>
                        </Grid>
                    </Form>
                );
            }}
        </Formik>
    );
};
export default AddEntryForm;