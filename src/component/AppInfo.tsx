import classes from "./AppInfo.module.css";

const AppInfo = () => {
    return (
        <div className={classes.appInfo}>
            <div>
                <div>Number of employees:</div>
                <div>Employees for promotion:</div>
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