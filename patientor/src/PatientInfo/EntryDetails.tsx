import React from "react";
import { Icon, Card } from "semantic-ui-react";
import { Diagnosis, Entry } from "../types";

export const HospitalEntry: React.FC<{ entry: Entry, dia: Diagnosis }> = ({ entry, dia }) => {
    return(
        <Card style={{ width: "90vw" }}>
            <h1>{entry.date} <Icon name="hospital" /></h1>
            <p>{dia.code}</p>
            <p>{dia.name}</p>
            <p>{entry.description}</p>
        </Card>
    );
};

export const OccupationEntry: React.FC<{ entry: Entry, dia: Diagnosis }> = ({ entry, dia }) => {
    return(
        <Card style={{ width: "90vw" }}>
            <h1>{entry.date} <Icon name="user doctor" /></h1>
            <p>{dia.code}</p>
            <p>{dia.name}</p>
            <p>{entry.description}</p>
        </Card>
    );
};

export const HealthCheckEntry: React.FC<{ entry: Entry, dia: Diagnosis }> = ({ entry, dia }) => {
    return(
        <Card style={{ width: "90vw" }}>
            <h1>{entry.date} <Icon name="stethoscope" /></h1>
            <p>{dia.code}</p>
            <p>{dia.name}</p>
            <p>{entry.description}</p>
        </Card>
    );
};

const EntryDetails: React.FC<{ entry: Entry, dia: Diagnosis }> = ({ entry, dia }) => {

    const assertNever = (value: never): never => {
        throw new Error(
            `Unhandled discriminated member: ${JSON.stringify(value)}`
        );
    };

    switch (entry.type) {
        case 'Hospital':
            return <HospitalEntry entry={entry} dia={dia} />;
        case 'OccupationalHealthcare':
            return <OccupationEntry entry={entry} dia={dia} />;
        case 'HealthCheck':
            return <HealthCheckEntry entry={entry} dia={dia} />;
        default:
            return assertNever(entry);
    }
};

export default EntryDetails;