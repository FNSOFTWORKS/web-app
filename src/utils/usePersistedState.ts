import {useState, useEffect, Dispatch, SetStateAction } from 'react';

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>,
]

function usePersistedState<T>(key:string, initialState: T): Response<T> {
    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem(key);
        console.log("Set State");
        console.log(storageValue);
        if (storageValue)
            return JSON.parse(storageValue);
        else
            return initialState
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
        console.log("Set State");
        console.log(state);
    }, [state, setState]);

    return [state, setState];
}

export default usePersistedState;