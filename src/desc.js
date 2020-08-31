import React from "react";

const Desc = () => {
  return (
    <div className="desc">
      <h3 className="card-title">
       Business / Developer{" "}
        <span role="img" aria-label="emoji">
          🤓
        </span>
      </h3>
      <p>
        My name is Michio am just a regular web developer at{" "}
        <a
          data-tooltip="To powered people' website"
          href="https://powered-people.org/"
        >
          #powered-people
        </a>{" "}
        but I have super powers, yeah! I got super power{" "}
        <span role="img" aria-label="emoji">
          😃
        </span>
        , A tech evangelist, Javascript Friendly and write code in PHP too. I in
        Live{" "}
        <a
          data-tooltip="Click to view on map"
          href="https://goo.gl/maps/f1feEgCatvm"
        >
          Warri, Nigeria
        </a>
      </p>
      <p>
        <a
          data-tooltip="Twitter handle"
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/webbravo"
        >
          @teamwebbravo
        </a>
      </p>
    </div>
  );
};

export default Desc;
