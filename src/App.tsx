import React, {useState} from 'react';

import './App.css';
import AppInfo from "./component/AppInfo";
import {SearchInput} from "./component/SearchInput/SearchInput";
import {EmpItemsList} from "./component/EmpItemsList/EmpItemsList";
import {EmpAddInput} from "./component/EmpAddInput/EmpAddInput";
import { v1 } from 'uuid';

export type IncomingDataType = {
    id: string,
    name: string,
    salary: number,
    promo: boolean,
    increase: boolean
}

 export type UserPropType = {
    name: string,
    salary: string
}

function App() {
    const incomingData = [
        {id: v1(), name: 'Alex V.', salary: 2000, promo: false, increase: false},
        {id: v1(), name: 'Alex V.', salary: 2000, promo: false, increase: false},
        {id: v1(), name: 'Alex V.', salary: 2000, promo: false, increase: false},
    ]
    const [data, setData] = useState(incomingData)
    const [userProp, setUserProp] = useState<UserPropType>({name: '', salary: ''})

    const onAddNewEmp = () => {
        if (userProp.name === '' || userProp.salary === '') {
            return
        } else {
            let newEmp = {
                id: v1(),
                name: userProp.name,
                salary: +userProp.salary,
                promo: false,
                increase: false
            }
            setData([...data, newEmp]);
            setUserProp({...userProp, name: '', salary: ''})
        }

    }

    const onChangeUserProp = (e: React.ChangeEvent<HTMLInputElement>) => {
        let {name, value} = e.currentTarget
        setUserProp({...userProp, [name]: value});
    }


    return (
        <div className="App">
            <AppInfo/>
            <SearchInput/>
            <EmpItemsList data={data}/>
            <EmpAddInput onAddNewEmp={onAddNewEmp} userProp={userProp} setUserProp={onChangeUserProp}/>
        </div>
    );
}

export default App;
