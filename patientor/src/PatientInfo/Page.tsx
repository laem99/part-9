import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { apiBaseUrl } from "../constants";
import { addEntry, setDiagnoses, setPatient, useStateValue } from "../state";
import { Diagnosis, Entry, Patient } from "../types";
import { Button, Icon } from 'semantic-ui-react';
import EntryDetails from "./EntryDetails";
import { EntryFormValues } from "../AddEntryModal/AddEntryForm";
import AddEntryModal from "../AddEntryModal";

const Page = () => {

  const [{ patient }, dispatch] = useStateValue();
  const [{ diagnoses }] = useStateValue();
  const { id } = useParams<{ id: string }>();
  const [test, setTest] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | undefined>();

  useEffect(() => {
    void axios.get<void>(`${apiBaseUrl}/ping`);
    const fetchPatient = async () => {
      try {
        const { data: patient } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${id}`
        );
        dispatch({ type: "SET_PATIENT", payload: [patient] });
        dispatch(setPatient([patient]));
      } catch (e) {
        console.error(e);
      }
    };
    void fetchPatient();
  }, [dispatch]);

  useEffect(() => {
    void axios.get<void>(`${apiBaseUrl}/ping`);
    const fetchDiagnoses = async () => {
      try {
        const { data: diagnoses } = await axios.get<Diagnosis[]>(
          `${apiBaseUrl}/diagnoses`
        );
        dispatch({ type: "SET_DIAGNOSES", payload: diagnoses });
        dispatch(setDiagnoses(diagnoses));
      } catch (e) {
        console.error(e);
      }
    };
    void fetchDiagnoses();
  }, [dispatch]);

  const openM = (): void => setTest(true);
  const modalClose = (): void => {
    setTest(false);
    setError(undefined);
  };

  interface RouteParams {
    id: string
  }

  const params = useParams<RouteParams>();

  const submitNewEntry = async (values: EntryFormValues) => {
    try {
      const { data: newEntry } = await axios.post<Entry>(
        `${apiBaseUrl}/patients/${params.id}/entries`,
        values
      );
      dispatch(addEntry(newEntry));
      modalClose();
    } catch (e) {
      console.error(e.response?.data || 'Unknown Error');
      setError(e.response?.data?.error || 'Unknown error');
    }
  };

  return (
    <div>
      {Object.values(patient).map((pa: Patient) => (
        <>
          <div key={pa.id}>
            <h1>{pa.name} {(pa.gender === 'female') ? <Icon name='venus' /> : (pa.gender === 'male') ? <Icon name='mars' /> : <Icon name='neuter' />}</h1>

          </div>
          <p>Birthday: {pa.dateOfBirth}</p>
          <p>ssn: {pa.ssn}</p>
          <p>occupation: {pa.occupation}</p>
          <AddEntryModal
            modalOpen={test}
            onSubmit={submitNewEntry}
            error={error}
            onClose={modalClose}
          />
          <Button onClick={() => openM()}>Add New Entry</Button>
          <p>Entries</p>
          {pa.entries.map(ent => {
            return (
              <div key={ent.id}>
                <ul>
                  {ent.diagnosisCodes?.map((code) => {
                    return (
                      Object.values(diagnoses).map(dia => (code === dia.code) ? <EntryDetails entry={ent} dia={dia} /> : null)
                    );
                  })}
                </ul>
              </div>
            );
          }
          )}
        </>
      ))}
    </div >
  );
};

export default Page;