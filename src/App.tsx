import React from 'react';

import './App.css';
import AppInfo from "./component/AppInfo";
import {SearchInput} from "./component/SearchInput/SearchInput";
import {EmpItemsList} from "./component/EmpItemsList/EmpItemsList";
import {EmpAddInput} from "./component/EmpAddInput/EmpAddInput";

export type IncomingDataType = {
    id: string,
    name: string,
    salary: number,
    promo: boolean,
    increase: boolean
}

function App() {
    const incomingData = [
        {id: "1", name: 'Alex V.', salary: 2000, promo: false, increase: false},
        {id: "2", name: 'Alex V.', salary: 2000, promo: false, increase: false},
        {id: "3", name: 'Alex V.', salary: 2000, promo: false, increase: false},
    ]

    return (
        <div className="App">
            <AppInfo/>
            <SearchInput/>
            <EmpItemsList data={incomingData}/>
            <EmpAddInput/>
        </div>
    );
}

export default App;
