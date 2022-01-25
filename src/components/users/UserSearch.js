import {useState,useContext} from "react";
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'
const UserSearch = () => {
   const {users,searchUsers,onSearch}=useContext(GithubContext) 
   const {setAlert} = useContext(AlertContext)
   const [text,setText]=useState('');
   const handleInput = (e)=>setText(e.target.value);

 

   const handleSubmit=(e)=>
   {
       e.preventDefault();
       if(text===''){
           setAlert('add a input broo !','error');
       }else{
        //    @input will goes here
        searchUsers(text)
        setText('');
       }
   } 

   const handleClear = (e)=>onSearch();
    
   
 
    return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form className="form-control" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              className="w-full pr-40 bg-gray-200 input input-lg text-black"
              placeholder="search"
              value={text}
              onChange={handleInput}

            />
            <button className="absolute top-0 right-0 rounded-l-none btn btn-lg w-30" type="submit">search</button>
          </div>
        </form>
      </div>
      {users.length>0&&(<div>
        <button className="btn btn-ghost btn-lg" type="button" onClick={handleClear}>clear</button>
      </div>)}
      
    </div>
  );
};

export default UserSearch;
