import React from "react";
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LoopIcon from '@mui/icons-material/Loop';
const Tabs = ({ type, setType }) => {
  return (
    <>
      <button
        className={`${type === "repos" && "text-teal-100 dark:text-black border text-2xl"}`}
        onClick={() => setType("repos")}
      >
        Repositories  <CorporateFareIcon/>
      </button>
      <button
        className={`${type === "received_events" && "text-teal-100 dark:text-black border text-2xl"}`}
        onClick={() => setType("received_events")}
      >
        Activity <LoopIcon/>
      </button>
      <button
        className={`${type === "followers" && "text-teal-100 dark:text-black border text-2xl"}`}
        onClick={() => setType("followers")}
      >
        followers <Diversity3Icon/>
      </button>
    </>
  );
};

export default Tabs;
