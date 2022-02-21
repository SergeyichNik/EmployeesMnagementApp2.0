import classes from './FilterBtn.module.css'
import React from "react";

type PropsType = {
    name: string,
    setFilterBtn: (filterBtn: string) => void
}

export const FilterBtn: React.FC<PropsType> = ({name, setFilterBtn}) => {
    const callBack = (e: React.MouseEvent<HTMLButtonElement>) => {
        setFilterBtn(e.currentTarget.name)
    }
    return (
        <button

            name={name}
            onClick={callBack}
            className={classes.filterBtn}>{name}</button>
    )
}