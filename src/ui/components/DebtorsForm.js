import React, {useState} from "react";

export const DebtorsForm = ({setDebtors}) => {
    const [name, setName] = useState('');
    const [debt, setDebt] = useState('');
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

