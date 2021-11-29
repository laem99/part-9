export interface Diagnose {
    code: string
    name: string
    latin?: string
}

export enum Enum { Male = 'male', Female = 'female', Other = 'other' }

export interface Patient {
    id: string;
    name: string;
    dateOfBirth: string;
    gender: string;
    occupation: string;
    ssn: string;
    entries: Entry[];
}

export enum HealthCheckRating {
    "Healthy" = 0,
    "LowRisk" = 1,
    "HighRisk" = 2,
    "CriticalRisk" = 3
}

interface HealthCheckEntry extends BaseEntry {
    type: "HealthCheck";
    healthCheckRating: HealthCheckRating;
}

export interface BaseEntry {
    id: string;
    description: string;
    date: string;
    specialist: string;
    diagnosisCodes?: Array<Diagnose['code']>;
}

export type SickLeave = {
    startDate: string,
    endDate: string,
};

export interface OccupationalHealthcareEntry extends BaseEntry {
    type: 'OccupationalHealthcare',
    employerName: string,
    sickLeave: SickLeave
}

export type Discharge = {
    date: string,
    criteria: string,
};

export interface HospitalEntry extends BaseEntry {
    type: 'Hospital',
    discharge: Discharge
}

export type Types = 'Hospital' | 'OccupationalHealthcare' | 'HealthCheck';

export type Entry =
    | HospitalEntry
    | OccupationalHealthcareEntry
    | HealthCheckEntry;

type UnionOmit<T, K extends string | number | symbol> = T extends unknown ? Omit<T, K> : never;
export type newEntryForPatient = UnionOmit<Entry, 'id'>;
export type NonSensitivePatientEntry = Omit<Patient, 'ssn'>;
export type PublicPatient = Omit<Patient, 'ssn' | 'entries'>;
export type newPatientEntry = Omit<Patient, 'id'>;