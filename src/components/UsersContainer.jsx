import React from "react";
import { Link } from "react-router-dom";
const UsersContainer = ({ users }) => {
  return (
    <div className="flex gap-5 flex-wrap justify-center  py-5">
      {users &&
        users?.map((user, idx) =>
          user?.login ? (
            <div
              key={idx}
              className="flex w-[200px] border dark:border-gray-900 border-gray-500 dark:bg-gray-200 bg-gray-900 p-3 flex-col items-center"
            >
              <img
                src={user?.avatar_url}
                className="w-24 mb-4 border-4 dark:text-black dark:border-gray-900 border-gray-500 rounded-full"
              />
              <h1 className="text-xl text-white dark:text-black">{user?.login}</h1>
              <h1 className="text-xs dark:text-black text-teal-100">{user?.name}</h1>
              <Link to={`/${user?.login}`}>
                <span
                  className="text-gray-100 
                  font-semibold rounded block px-4 py-1 bg-teal-900 my-3 tracking-wide"
                >
                  view
                </span>
              </Link>
            </div>
          ) : (
            <div className="text-lg">No user Found</div>
          )
        )}
    </div>
  );
};

export default UsersContainer;
