import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import what from "../../images/what.jpg";
import {
  SetExtraComponent,
  SetFooter,
  SetLanding,
  SetNavbar,
} from "../../store/componentSlice";

import navbar from "../../images/navbar.png";
import footer from "../../images/footer.png";
import land from "../../images/land1.png";
import misc from "../../images/mics.png";
import card from "../../images/cards.png";
import features from "../../images/features.png";

const Explore = () => {
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
  const [componentName, setComponentName] = useState(null);
  const [componentURL, setComponentURL] = useState(null);

  const { extra } = useSelector((state) => state.component);

  if (componentName) {
    console.log(componentName, componentURL);

    if (componentName === "navbar") dispatch(SetNavbar(componentURL));
    if (componentName === "footer") dispatch(SetFooter(componentURL));
    if (componentName === "landing") dispatch(SetLanding(componentURL));

    extra.forEach((ex) => {
      console.log(ex.name);

      if (componentName === ex.name)
        dispatch(
          SetExtraComponent({ name: componentName, path: componentURL })
        );
    });
    setComponentName(null);
    setMenu(false);
  }

  return (
    <main>
      <section className="explore container container--center gap--md">
        <h1>Explore</h1>
        <p>Browse through a collection of components and use as you like</p>
        <div className="components container gap--md">
          <div className="component container container--center gap--sm">
            <img src={navbar} alt="" />
            <p>navbar</p>
          </div>
          <div className="component container container--center gap--sm">
            <img src={land} alt="" />
            <p>landing page</p>
          </div>
          <div className="component container container--center gap--sm">
            <img src={card} alt="" />
            <p>cards</p>
          </div>
          <div className="component container container--center gap--sm">
            <img src={features} alt="" />
            <p>features</p>
          </div>
          <div className="component container container--center gap--sm">
            <img src={misc} alt="" />
            <p>miscellaneous</p>
          </div>
          <div className="component container container--center gap--sm">
            <img src={footer} alt="" />
            <p>footer</p>
          </div>
        </div>
      </section>

      <section className="container container--center gap--lg">
        {menu && (
          <select onChange={(e) => setComponentName(e.target.value)}>
            <option value="">Select</option>
            <option value="navbar">navbar</option>
            <option value="landing">landing</option>
            {extra.map((extraSection) => (
              <option value={extraSection.name}>{extraSection.name}</option>
            ))}
            <option value="footer">footer</option>
          </select>
        )}
        <div className="component__container container gap--md container--center-row">
          <div className="container container--center gap--sm">
            <img src={what} alt="" />
            <button
              aria-expanded="false"
              value="https://i.picsum.photos/id/162/536/354.jpg?hmac=O9LyWssbp2-8dlACsHdgF2OiKw5IrePVo8GUg6t7d5Y"
              onClick={(e) => {
                setMenu(true);
                setComponentURL(e.target.value);
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
