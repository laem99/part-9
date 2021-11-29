import patients from '../data/patients';
import { Patient, NonSensitivePatientEntry, newPatientEntry, newEntryForPatient, Entry } from '../types';
import { v1 as uuid } from 'uuid';
const id = uuid();

const getEntries = (): Array<Patient> => {
    return patients;
};

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
        entries
    }));
};

const addPatient = (entry: newPatientEntry): Patient => {
    const newPatientEntry = {
        id: id,
        ...entry
    };

    patients.push(newPatientEntry);
    return newPatientEntry;
};

const addEntry = (entry: newEntryForPatient, patientId: string): Entry => {
    const newEntry = {
        id: id,
        ...entry
    };

    const patientForEntries = patients.find(p => p.id === patientId);
    if (patientForEntries) {
        patientForEntries.entries.push(newEntry);
        console.log(patientForEntries);
        return newEntry;
    }
    throw new Error('Patient is not on the list!');
}

const findById = (id: string): Patient | undefined => {
    return patients.find(p => p.id === id);
};

export default {
    getEntries,
    addPatient,
    getNonSensitiveEntries,
    findById,
    addEntry
};