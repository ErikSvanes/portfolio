"use client";
import { useState } from "react";

const ExpEduTabs = () => {
  const [tabs, setTabs] = useState<boolean>(false);

  return (
    <div>
      <h1>Experience</h1>
      <button
        onClick={() => {
          setTabs(!tabs);
        }}
      >
        Click
      </button>
      {tabs ? <div>True</div> : <div>False</div>}
    </div>
  );
};

export default ExpEduTabs;
