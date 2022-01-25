import {createContext,useReducer} from 'react';
import GithubReducer from './GithubReducers';



    const GithubContext = createContext()
    const GITHUB_URL= process.env.REACT_APP_GITHUB_URL;
    const GITHUB_TOKEN=process.env.REACT_APP_GITHUB_TOKEN;

    

    export const GithubProvider=({children})=>
    {
       
        // const [users,setUsers]=useState([]);
        // const [loading,setLoading]=useState(true);
        // replace above with useReducer
        const initialState={
            users:[],
            user:{},
            loading:false 
        }
        
        

        const [state,dispatch]= useReducer(GithubReducer,initialState)
        const searchUsers = async (text) => {
            onLoading();
            const params = new URLSearchParams({
                q:text
            })
            const response  = await fetch(`${GITHUB_URL}/search/users?${params}`,{
                headers:{
                    Authorization: `token ${GITHUB_TOKEN}`
                }
            })
            const {items}= await response.json();
            // setUsers(data);
           
            // setLoading(false)
            // replace it with the dispatch
            dispatch({
                type:'GET_USERS',
                payload: items
            })
    
      }
      const getUser = async (login) => {
        onLoading();
        
        const response  = await fetch(`${GITHUB_URL}/users/${login}`,{
            headers:{
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        if(response.status===404){
            window.location='/notfound'
        }else{
            const data= await response.json();
            dispatch({
                type:'GET_USER',
                payload: data
            })
        }
        // setUsers(data);
       
        // setLoading(false)
        // replace it with the dispatch
       


  }
      const onLoading=() => {
          dispatch({
              type:"ON_LOADING",
              payload:true,
          })
      }
      const onSearch=()=>
      {
          dispatch({
              type:'ON_CLEAR',
              payload:[]
          })
      }
      return <GithubContext.Provider value={
         { loading:state.loading
          ,users:state.users,
          user:state.user
          ,searchUsers,
          getUser,
          onSearch
         }
      }>
      {children}
      </GithubContext.Provider>

    }


    


export default GithubContext;
