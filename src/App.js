import './App.css';
import {DebtorsForm} from "./ui/components/DebtorsForm.js";
import {DebtorsList} from "./ui/components/DebtorsList.js";
import {DebtorsProvider} from "./ui/components/DebtorsContext.js";

function App() {
    return (
        <DebtorsProvider>
            <div className="app">
                <h1 className="title">Должники</h1>
                <DebtorsForm />
                <DebtorsList />
            </div>
        </DebtorsProvider>
    );
}

export default App;