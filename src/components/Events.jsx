import React from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
const Events = ({ data }) => {
  return (
    <>
      {data?.map((ev, i) => (
        <div key={i} className="flex gap-x-4 items-center">
          <Link to={`/${ev.actor?.login}`}>
            <img src={ev.actor?.avatar_url} className="w-16 rounded-full" />
          </Link>
          <h1 className="break-words">
            {ev?.actor?.login} {ev?.type}
            <br />
            {ev?.repo?.name}
            <br />
            <span className="text-sm">{format(ev?.created_at)}</span>
          </h1>
        </div>
      ))}
    </>
  );
};

export default Events;
