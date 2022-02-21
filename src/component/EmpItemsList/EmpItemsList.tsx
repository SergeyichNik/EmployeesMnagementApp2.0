import classes from "./EmpItemsList.module.css";
import {EmpItem} from "../EmpItem/EmpItem";
import {IncomingDataType} from "../../App";

type PropsType = {
    data: IncomingDataType[],
    isIncrease: (id: string, dataValue?: string) => void
    removeEmp: (id: string) => void
}
export const EmpItemsList = (props: PropsType) => {

    return (
        <div className={classes.empListArea}>
            {props.data.map((item) => {
                return (
                    <EmpItem key={item.id} {...item}
                             removeEmp={props.removeEmp}
                             isIncrease={props.isIncrease}/>
                )
            })}
        </div>
    )
}