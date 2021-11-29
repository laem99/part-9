import { newPatientEntry, Enum, newEntryForPatient, Entry } from "./types";

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const parseName = (name: unknown): string => {
    if (!name || !isString(name)) {
        throw new Error('Incorrect or missing name');
    }
    return name;
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

const parseDateOfBirth = (date: unknown): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isEnum = (param: any): param is Enum => {
    return Object.values(Enum).includes(param);
};

const parseGender = (gender: unknown): Enum => {
    if (!gender || !isEnum(gender)) {
        throw new Error('Incorrect or missing gender: ' + gender);
    }
    return gender;
};

const parseOccupation = (occupation: unknown): string => {
    if (!occupation || !isString(occupation)) {
        throw new Error('Incorrect or missing occupation');
    }

    return occupation;
};

const parseSsn = (ssn: unknown): string => {
    if (!ssn || !isString(ssn)) {
        throw new Error('Incorrect or missing ssn');
    }

    return ssn;
};

const parseDescription = (des: unknown): string => {
    if (!des || !isString(des)) {
        throw new Error('Incorrect or missing description');
    }

    return des;
};

const parseArray = (codes: unknown): string[] => {
    if (!Array.isArray(codes)) {
        throw new Error('Incorrect or missing description');
    }

    return codes;
};

type Fields = { name: unknown, dateOfBirth: unknown, gender: unknown, occupation: unknown, ssn: unknown };

const toNewPatientEntry = ({ name, dateOfBirth, gender, occupation, ssn }: Fields): newPatientEntry => {

    const newEntry: newPatientEntry = {
        name: parseName(name),
        dateOfBirth: parseDateOfBirth(dateOfBirth),
        gender: parseGender(gender),
        occupation: parseOccupation(occupation),
        ssn: parseSsn(ssn),
        entries: [],
    };

    return newEntry;
};

export const toNewEntryForPatient = (entry: Entry): newEntryForPatient => {

    switch (entry.type) {
        case "HealthCheck":
            return {
                type: entry.type,
                date: parseDateOfBirth(entry.date),
                description: parseDescription(entry.description),
                healthCheckRating: entry.healthCheckRating,
                specialist: parseName(entry.specialist),
                diagnosisCodes: parseArray(entry.diagnosisCodes),
            }
        case "Hospital":
            return {
                type: entry.type,
                date: parseDateOfBirth(entry.date),
                description: parseDescription(entry.description),
                specialist: parseName(entry.specialist),
                diagnosisCodes: parseArray(entry.diagnosisCodes),
                discharge: {
                    date: parseDateOfBirth(entry.date),
                    criteria: parseDescription(entry.discharge.criteria)
                }
            }
        case "OccupationalHealthcare":
            return {
                type: entry.type,
                date: parseDateOfBirth(entry.date),
                description: parseDescription(entry.description),
                specialist: parseName(entry.specialist),
                diagnosisCodes: parseArray(entry.diagnosisCodes),
                sickLeave: {
                    startDate: parseDateOfBirth(entry.sickLeave.startDate),
                    endDate: parseDateOfBirth(entry.sickLeave.endDate),
                },
                employerName: entry.employerName,
            }
        default:
            throw new Error('Entry didn`t match to any entry types. Try again');
    }
}

export default toNewPatientEntry;