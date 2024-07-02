import { combineReducers } from "redux";
import { fetchReducer } from "./fetchReducer";

export let rootReducer=combineReducers(
    {fetch:fetchReducer})