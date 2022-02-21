import classes from "./EmpItem.module.css";
import React from "react";

type PropsType = {
    name: string,
    salary: number,
    increase: boolean,
    id: string,
    promo: boolean
    isIncrease: (id: string, dataValue?: string) => void
    removeEmp: (id: string) => void
}


export const EmpItem: React.FC<PropsType> = (props) => {
    const {name, salary, increase, id, isIncrease, removeEmp, promo} = props

    let starClass = promo ? classes.starIcon : classes.starIconHide
    const increaseActiveClass = {
        color: increase ? 'gold' : 'black',
    }

    const onChange = (e: React.MouseEvent<HTMLDataElement>) => {
        let {name} = e.currentTarget.dataset
        isIncrease(id, name)
    }

    const removeItem = () => {
        removeEmp(id)
    }

    return (
        <div className={classes.wrapper}>
            <button
                style={increaseActiveClass}
                className={classes.name}
                onClick={onChange}
                data-name={'promo'}>{name}</button>
            <div>{salary + ' $'}</div>
            <div className={classes.iconWrapper}>
                <i onClick={onChange} data-name={'increase'}>
                    <img className={classes.cookiesIcon}
                         src={"https://cdn-icons-png.flaticon.com/512/1047/1047711.png"}/>
                </i>
                <i onClick={removeItem}>
                    <img className={classes.trashIcon}
                         src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/768px-Flat_cross_icon.svg.png"}/>
                </i>
                <i>
                    <img className={starClass}
                         src={"https://icons-for-free.com/iconfiles/png/512/christmas+holiday+shain+sky+star+tree+icon-1320185851991915307.png"}/>
                </i>

            </div>
        </div>
    )
}