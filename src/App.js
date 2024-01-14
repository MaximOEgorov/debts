import './App.css';
import {useState} from 'react';
import {DebtorsForm} from "./ui/components/DebtorsForm.js";
import {DebtorsList} from "./ui/components/DebtorsList.js";

function App() {
    const [debtors, setDebtors] = useState([])
    return (
        <div className="app">
            <h1 className="title">Должники</h1>
            <DebtorsForm setDebtors={ setDebtors } />
            <DebtorsList debtors={ debtors } setDebtors={ setDebtors } />
        </div>
    );
}

export default App;