import React, { useState } from "react";
import land1 from "../../images/land1.png";
import land2 from "../../images/land2.png";
import { useDispatch, useSelector } from "react-redux";
import { SetExtraComponent } from "../../store/componentSlice";

const Combine = () => {
  const [extraSectionName, setExtraSectionName] = useState("");
  const addSection = (e) => {
    e.preventDefault();
    const newSeg = {
      name: extraSectionName,
      path: null,
    };
    dispatch(SetExtraComponent(newSeg));
  };

  const dispatch = useDispatch();
  const { navbar, landing, extra, footer } = useSelector(
    (state) => state.component
  );

  console.log(extra);

  return (
    <main className="combine container gap--lg">
      <div className="sidebar">sidebar</div>
      <div className="build__container container container--col">
        <form action="" onSubmit={(e) => addSection(e)}>
          <input
            type="text"
            onChange={(e) => setExtraSectionName(e.target.value)}
          />
          <button type="submit">Add A section</button>
        </form>

        {!navbar ? (
          <div className="dummy-nav">Navbar</div>
        ) : (
          <img src={navbar} alt="" />
        )}
        {/* <div className="dummy-land">landing page</div> */}
        <img src={land1} alt="" />
        {extra.map((sectionName, index) => {
          return (
            <div key={index} className="dummy-sec">
              {sectionName.name}
            </div>
          );
        })}

        <div className="dummy-foot">footer</div>
      </div>
    </main>
  );
};

export default Combine;
