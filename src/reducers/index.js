import { combineReducers } from "redux";
import apiData from "./apidata";

export default combineReducers({
    transactions: apiData
});