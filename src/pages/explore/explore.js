import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import what from "../../images/what.jpg";
import { SetNavbar } from "../../store/componentSlice";

const Explore = () => {
  const [copyPath, setCopyPath] = useState(false);
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();

  const { extra } = useSelector((state) => state.component);

  function copyHandler(type) {
    setMenu(true);
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
              value="https://i.picsum.photos/id/162/536/354.jpg?hmac=O9LyWssbp2-8dlACsHdgF2OiKw5IrePVo8GUg6t7d5Y"
              onClick={() => {
                copyHandler();
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
