import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducers";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  // const [users,setUsers]=useState([]);
  // const [loading,setLoading]=useState(true);
  // replace above with useReducer
  const initialState = {
    users: [],
    user: {},
    loading: false,
    repos: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);
  
  //  work space me

  // work space end

  
  
  /*    old code
          loading:state.loading
          ,users:state.users,
          user:state.user,
          repos:state.repos,
          searchUsers */
  return (
    <GithubContext.Provider
      value={{ ...state, dispatch }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
