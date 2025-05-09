import {createContext, useEffect, useState} from '@lynx-js/react'

interface ContextProps {
    value: number;
    actualizarValue: (nuevoValue: number) => void;
}

const valorPorDefecto: ContextProps = {
    value: 1,
    actualizarValue: () => console.warn(0),
};

const contextProps = createContext<ContextProps>(valorPorDefecto);

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [value, setValue] = useState(1);

    const actualizarValue = (nuevoValue: number) => {
        setValue(nuevoValue);
    };

    return (
        <contextProps.Provider value={{ value, actualizarValue }}>
            {children}
        </contextProps.Provider>
    );
};

export default contextProps;