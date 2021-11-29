import { State } from "./state";
import { Diagnosis, Entry, Patient } from "../types";

export type Action =
  | {
    type: "SET_PATIENT_LIST";
    payload: Patient[];
  }
  | {
    type: "SET_PATIENT";
    payload: Patient[];
  }
  | {
    type: "SET_DIAGNOSES";
    payload: Diagnosis[];
  }
  | {
    type: "ADD_ENTRY";
    payload: Entry;
  }
  | {
    type: "ADD_PATIENT";
    payload: Patient;
  };

export const setPatientList = (content: Patient[]): Action => {
  return {
    type: "SET_PATIENT_LIST",
    payload: content,
  };
};

export const addPatient = (content: Patient): Action => {
  return {
    type: "ADD_PATIENT",
    payload: content,
  };
};

export const addEntry = (content: Entry): Action => {
  return {
    type: "ADD_ENTRY",
    payload: content,
  };
};

export const setPatient = (content: Patient[]): Action => {
  return {
    type: "SET_PATIENT",
    payload: content,
  };
};

export const setDiagnoses = (content: Diagnosis[]): Action => {
  return {
    type: "SET_DIAGNOSES",
    payload: content,
  };
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PATIENT_LIST":
      return {
        ...state,
        patients: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            {}
          ),
          ...state.patients
        }
      };
    case "SET_DIAGNOSES":
      return {
        ...state,
        diagnoses: {
          ...action.payload,
          ...state.diagnoses
        }
      };
    case "SET_PATIENT":
      return {
        ...state,
        patient: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            {}
          )
        }
      };
    case "ADD_PATIENT":
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload
        }
      };
    case "ADD_ENTRY":
      return {
        ...state,
        entries: {
          ...state.entries,
          [action.payload.id]: action.payload
        }
      };
    default:
      return state;
  }
};