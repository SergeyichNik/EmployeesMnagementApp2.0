import classes from "./EmpAddInput.module.css";
import React from "react";
import { UserPropType } from "../../App";

type PropsType = {
    userProp: UserPropType,
    setUserProp : (e: React.ChangeEvent<HTMLInputElement>) => void
    onAddNewEmp: () => void
}

export const EmpAddInput: React.FC<PropsType> = ({userProp, setUserProp, onAddNewEmp}) => {


    return (
        <div className={classes.footer}>
            <input placeholder={'Enter name . . .'}
                   value={userProp.name}
                   onChange={setUserProp}
                   name={'name'}
            />
            <input placeholder={'Enter salary . . .'}
                   value={userProp.salary}
                   onChange={setUserProp}
                   name={'salary'}
            />
            <button onClick={onAddNewEmp} >Add</button>
        </div>
    )
}