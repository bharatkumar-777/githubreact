import {createContext,useReducer} from 'react'
import AlertReducers from './AlertReducers';

const AlertContext = createContext();

export const AlertProvider=({children})=>
{
  const initialState =null;

  const [state,dispatch]=useReducer(AlertReducers,initialState);
  
  const setAlert=(msg,type)=>{
      dispatch({
      type:"SET_ALERT",
      payload:{msg,type}

  })
  setTimeout(()=>dispatch({type:"REMOVE_ALERT",payload:null}),3000)
  }
  
  return <AlertContext.Provider value={{
            alert:state,
            setAlert
  }}>
    {children} 
  </AlertContext.Provider>

}

export default AlertContext;