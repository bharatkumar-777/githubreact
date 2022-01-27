const GithubReducers = (state,action)=>
{
      switch(action.type){
        case 'GET_USERS':
            return {...state,
            users: action.payload,
            loading: false


            }  
            case 'ON_LOADING':
                return {...state,
               
                loading: true
    
    
                } 
                
            case 'ON_CLEAR':
                  return{
                        ...state,
                        users:[]
                  }   
                  
            case 'GET_USER_REPOS':
                  return{
                        ...state,
                        user:action.payload.user,
                        repos:action.payload.repos,
                        loading:false
                  }   
                      
        default:
              return state;
      }
}
export default GithubReducers;