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
               
                loading: action.payload
    
    
                } 
                
            case 'ON_CLEAR':
                  return{
                        ...state,
                        users:action.payload
                  }   
                  
            case 'GET_USER':
                  return{
                        ...state,
                        user:action.payload,
                        loading:false
                  }      
        default:
              return state;
      }
}
export default GithubReducers;