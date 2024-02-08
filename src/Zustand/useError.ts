import { create } from 'zustand';

interface ErrorRecord {
    errorRecord: {name : string, error: string, time : string}[];
    setErrorRecord: (input:{name : string, error: string, time : string}[]) => void;
}

const useErrorRecord = create<ErrorRecord>(set => ({
    errorRecord : [],
    setErrorRecord: (input) => set({ errorRecord: input }),

}));

export default useErrorRecord;