import React from 'react';
import {Link} from 'react-router-dom'

const UserItem = ({user:{login,avatar_url}}) => {
  return <div className="shadow-md card compact side bg-bg-base-100">
     <div className="flex-row items-center space-x-4 card-body ">
            <div >
              <div className="avatar">
                  <div className="rounded-full shadow-lg w-14 h-14">
                    <img src={avatar_url} alt="avatar" />
                  </div>
              </div>
            </div>
            <div>
             <h2 className="card-title">{login}</h2>
             <Link className="text-base-content text-opacity-40 " to = {`user/${login}`}>
                visit the profile
             </Link>
            </div>
     </div>
  </div>;
};

export default UserItem;
