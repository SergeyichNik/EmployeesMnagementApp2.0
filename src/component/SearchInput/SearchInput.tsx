import classes from "./SearchInput.module.css";
import {FilterBtn} from "../FilterBtn/FilterBtn";


export const SearchInput = () => {
    return (
        <div className={classes.searchInput}>
            <input type={"text"}/>
            <FilterBtn/>
        </div>
    )
}