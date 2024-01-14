import React, {useState} from "react";

export const DebtorsList = ({debtors, setDebtors}) => {
    return (
        <ul className="debtorList">
            {debtors.map((debtor, i) => (
                <li key={i}>
                    {`${debtor.name} - ${debtor.debt}`}
                    <button
                        className="delDebtor"
                        onClick={() =>
                            setDebtors((prevDeptors) => prevDeptors.filter((_, iDebtor) => iDebtor !== i))
                        }
                    >
                        Вернул 💖
                    </button>
                </li>
            ))}
        </ul>
    )
}

