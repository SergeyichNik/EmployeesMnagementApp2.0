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
        {id: v1(), name: 'Alex V.', salary: 1000, promo: false, increase: false},
        {id: v1(), name: 'Bob V.', salary: 600, promo: false, increase: false},
        {id: v1(), name: 'John V.', salary: 2000, promo: false, increase: false},
    ]

    const buttonsKit = [
        {name: 'all employees'},
        {name: 'increased'},
        {name: 'promoted'},
        {name: 'salary more than 1000$'}
    ]

    const [data, setData] = useState(incomingData)
    const [userProp, setUserProp] = useState<UserPropType>({name: '', salary: ''})
    const [filterBtn, setFilterBtn] = useState('all employees')
    const [searchInput, setSearchInput] = useState('')

    let filteredData = data

    if (filterBtn === 'increased') {
        filteredData = data.filter((item) => item.increase)
    } else if (filterBtn === 'promoted') {
        filteredData = data.filter((item) => item.promo)
    } else if (filterBtn === 'salary more than 1000$') {
        filteredData = data.filter((item) => item.salary > 1000)
    }

    if (searchInput) {
       filteredData = data.filter((item) => item.name.indexOf(searchInput) > -1)
    }

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

    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.currentTarget.value);
    }

    const isIncrease = (id: string, dataValue?: string) => {
        setData(data.map<any>(item => {
            if (item.id === id) {
                switch (dataValue) {
                    case 'promo':
                        return {...item, [dataValue]: !item[dataValue]};
                    case 'increase':
                        return {...item, [dataValue]: !item[dataValue]}
                }
            }
            return item
        }))
    }

    const removeEmp = (id: string) => {
        setData(data.filter((item) => item.id !== id))
    }

    let empPromoNum = data.filter((item) => item.promo).length
    let empNum = data.length

    return (
        <div className="App">
            <AppInfo  empNum={empNum} empPromoNum={empPromoNum}/>
            <SearchInput onChangeSearchInput={onChangeSearchInput}
                         searchInput={searchInput}
                         setFilterBtn={setFilterBtn}
                         buttonsKit={buttonsKit}/>
            <EmpItemsList isIncrease={isIncrease}
                          data={filteredData}
                          removeEmp={removeEmp}
            />
            <EmpAddInput  onAddNewEmp={onAddNewEmp}

                          userProp={userProp}
                          setUserProp={onChangeUserProp}/>
        </div>
    );
}

export default App;
