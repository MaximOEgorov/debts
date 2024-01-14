import React, {useContext} from "react";
import {DebtorsContext} from "./DebtorsContext.js";

export const DebtorsList = () => {
    const {debtors, setDebtors} = useContext(DebtorsContext);

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

