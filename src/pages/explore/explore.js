import React, { useState } from "react";
import what from "../../images/what.jpg";

const Explore = () => {
  const [copyPath, setCopyPath] = useState(false);

  function copyHandler(e) {
    navigator.clipboard.writeText(e.target.value);
    console.log("copied");
    setCopyPath(true);
    setTimeout(() => {
      setCopyPath(false);
    }, 30000);
  }

  return (
    <main>
      <section className="explore container container--center gap--md">
        <h1>Explore</h1>
        <p>Browse through a collection of components and use as you like</p>
        <div className="components container gap--md">
          <div className="component container container--center gap--sm">
            <img src={what} alt="" />
            <p>navbar</p>
          </div>
          <div className="component container container--center gap--sm">
            <img src={what} alt="" />
            <p>navbar</p>
          </div>
          <div className="component container container--center gap--sm">
            <img src={what} alt="" />
            <p>navbar</p>
          </div>
          <div className="component container container--center gap--sm">
            <img src={what} alt="" />
            <p>navbar</p>
          </div>
          <div className="component container container--center gap--sm">
            <img src={what} alt="" />
            <p>navbar</p>
          </div>
          <div className="component container container--center gap--sm">
            <img src={what} alt="" />
            <p>navbar</p>
          </div>
          <div className="component container container--center gap--sm">
            <img src={what} alt="" />
            <p>navbar</p>
          </div>
        </div>
      </section>

      <section className="container container--center gap--lg">
        <p>List of Navbars</p>
        <div className="component__container container gap--md container--center-row">
          <div className="container container--center gap--sm">
            <img src={what} alt="" />
            <button
              className={copyPath ? "decorated-btn" : "decorated-btn"}
              aria-expanded="false"
              value="path of navbar"
              onClick={(e) => {
                copyHandler(e);
              }}
            >
              Get
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Explore;
