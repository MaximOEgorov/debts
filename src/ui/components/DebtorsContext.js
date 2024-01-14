import React, { createContext, useState } from 'react';

export const DebtorsContext = createContext();

export const DebtorsProvider = ({ children }) => {
    const [debtors, setDebtors] = useState([]);

    return (
        <DebtorsContext.Provider value={{ debtors, setDebtors }}>
            {children}
        </DebtorsContext.Provider>
    );
};