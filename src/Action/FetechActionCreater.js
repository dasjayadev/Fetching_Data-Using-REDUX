import { FETCHED_ERROR, FETCHED_REQUEST, FETCHED_SUCCESS } from "./Constant";

//this is for inital request
export function intialRequest()
{
    return {type:FETCHED_REQUEST}
}
//this is for success
export function dataSuccess(data)
{
    return {type:FETCHED_SUCCESS,payload:data}
} 
//this is for error
export function dataFailer(err)
{
    return {type:FETCHED_ERROR,payload:err}
}

//action creater of fetch
export function AllFetchThingHandler()
{
  return  (dispatch)=>{
    dispatch(intialRequest())  
       fetch('https://jsonplaceholder.typicode.com/users').then((data)=>data.json()).then((item)=>dispatch(dataSuccess(item))).catch((err)=>dispatch(dataFailer(err)))
  }
}