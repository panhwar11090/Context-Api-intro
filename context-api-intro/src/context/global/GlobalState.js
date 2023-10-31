import React, {useReducer} from "react";
import globalContext from'./globalContext';
import globalReducer from './globalReducer';
import{ADD_STUDENT} from '../types';

const GlobalState = props =>{
    const initialState ={
        students:[]
    }
    const[state, dispatch] = useReducer(globalReducer,initialState);
    //Function to add Students
    const addStudents = newStudent=> dispatch({
        type: ADD_STUDENT,
        payload: newStudent
    })

    return <globalContext.Provider
        
        value={{
            students:state.students,
            addStudents: addStudents
        }}
    >
        {props.children}
    </globalContext.Provider>
}

export default GlobalState;