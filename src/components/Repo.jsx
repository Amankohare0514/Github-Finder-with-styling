import React from "react";

const Repo = ({ users }) => {
  return (
    <>
      {users.map((s, idx) => (
        <div key={idx} className="bg-gray-900 dark:bg-gray-50 p-3 leading-8 border-b">
          <a
            href={s.html_url}
            target="_blank"
            className=" text-blue-500 break-words font-semibold hover:underline"
          >
            {s.full_name}
          </a>
          <h1 className="text-sm font-semibold text-gray-500"> {s.description}</h1>
          <div className="flex gap-x-5">
            <h1 className="text-sm font-semibold text-white dark:text-black"> {"🟢" + s.language}</h1>
          </div>
        </div>
      ))}
    </>
  );
};
export default Repo;
