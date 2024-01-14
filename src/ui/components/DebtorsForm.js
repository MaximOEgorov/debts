import React, {useContext, useState} from "react";
import {DebtorsContext} from "./DebtorsContext.js";

export const DebtorsForm = () => {
    const [name, setName] = useState('');
    const [debt, setDebt] = useState('');
    const {debtors, setDebtors} = useContext(DebtorsContext);
    return (
        <div className="form">
            <input
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                }}/>
            <input
                type="text"
                placeholder="Долг"
                value={debt}
                onChange={(e) => {
                    setDebt(e.target.value)
                }}/>
            <button
                className="addDebtor"
                onClick={() => {
                    setDebtors((prevDeptors) => [...prevDeptors, {name, debt}])
                    setName('');
                    setDebt('');
                }}
            >
                Добавить 😈
            </button>
        </div>
    )
}

