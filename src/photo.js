import React from "react";

import DisplayPhoto from "./displayPhoto";

const Photo = () => {
  return (
    <div className="photo">
      <div className="name-photo-card">
        <h1 className="caption">Proof of work is the best CV</h1>
        <DisplayPhoto />
      </div>
    </div>
  );
};

export default Photo;
