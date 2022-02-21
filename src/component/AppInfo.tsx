import classes from "./AppInfo.module.css";
import React from "react";

type PropsType = {
    empNum: number,
    empPromoNum: number
}

const AppInfo: React.FC<PropsType> = ({empNum, empPromoNum}) => {
    return (
        <div className={classes.appInfo}>
            <div>
                <div>Number of employees: {empNum}</div>
                <div>Employees for promotion: {empPromoNum}</div>
            </div>
            <div className={classes.logo}>
                <img src={'https://www.freeiconspng.com/thumbs/team-icon/team-icon-6.png'} alt={'logo'}/>
                <h1>Employees <br/>
                    Management</h1>
            </div>
        </div>

    )
}

export default AppInfo;