import {createContext, useEffect, useState} from '@lynx-js/react'

interface ContextProps {
    value: number;
    actualizarValue: (nuevoValue: number) => void;
    inputValue: number;
    actualizarInputValue: (nuevoInputValue: number) => void;
}

const valorPorDefecto: ContextProps = {
    value: 1,
    actualizarValue: () => console.warn(0),
    inputValue: 0,
    actualizarInputValue: () => console.warn(0),
};

const contextProps = createContext<ContextProps>(valorPorDefecto);

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [value, setValue] = useState(1);
    const [inputValue, setInputValue] = useState(0);

    const actualizarValue = (nuevoValue: number) => {
        setValue(nuevoValue);
    };

    const actualizarInputValue = (nuevoInputValue: number) => {
        setInputValue(nuevoInputValue);
    };

    return (
        <contextProps.Provider value={{ value, actualizarValue, inputValue, actualizarInputValue }}>
            {children}
        </contextProps.Provider>
    );
};

export default contextProps;