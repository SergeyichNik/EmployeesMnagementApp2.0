import classes from "./SearchInput.module.css";
import {FilterBtn} from "../FilterBtn/FilterBtn";
import React from "react";

type ButtonsKitType = {
    name: string
}

type PropsType = {
    buttonsKit: ButtonsKitType[],
    setFilterBtn: (filterBtn: string) => void,
    searchInput: string,
    onChangeSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const SearchInput = (props: PropsType) => {
    const {buttonsKit, setFilterBtn, searchInput, onChangeSearchInput} = props

    const buttons = buttonsKit.map((item, index) => {
        return <FilterBtn key={index} name={item.name} setFilterBtn={setFilterBtn}/>
    })

    return (
        <div className={classes.searchInput}>
            <input
                placeholder={'Start typing name ...'}
                value={searchInput}
                onChange={onChangeSearchInput}
                type={"text"}/>
            {buttons}
        </div>
    )
}