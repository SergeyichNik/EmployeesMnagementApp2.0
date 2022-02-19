import classes from "./EmpAddInput.module.css";


export const EmpAddInput = () => {
    return (
        <div className={classes.footer}>
            <input placeholder={'Enter name . . .'}/>
            <input placeholder={'Enter salary . . .'}/>
            <button>Add</button>
        </div>
    )
}