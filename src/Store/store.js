import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { rootReducer } from "../Reducer";
import {thunk} from 'redux-thunk'
export let store=createStore(rootReducer, composeWithDevTools( applyMiddleware(thunk) ))