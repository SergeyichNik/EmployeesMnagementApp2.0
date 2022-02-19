
import classes from "./EmpItem.module.css";
import React from "react";

type PropsType = {
    name: string,
    salary: number,
}


export const EmpItem: React.FC<PropsType> = ({name, salary}) => {
    return (
        <div className={classes.wrapper}>
            <div>{name}</div>
            <div>{salary + ' $'}</div>
            <div className={classes.iconWrapper}>
                <i>
                    <img className={classes.cookiesIcon} src={"https://cdn-icons-png.flaticon.com/512/1047/1047711.png"}/>
                </i>
                <i>
                    <img className={classes.trashIcon} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/768px-Flat_cross_icon.svg.png"}/>
                </i>
                <i>
                    <img className={classes.starIcon} src={"https://icons-for-free.com/iconfiles/png/512/christmas+holiday+shain+sky+star+tree+icon-1320185851991915307.png"}/>
                </i>

            </div>
        </div>
    )
}