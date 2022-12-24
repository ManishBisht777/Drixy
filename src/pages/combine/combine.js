import React, { useState } from "react";
import land1 from "../../images/land1.png";
import { useDispatch, useSelector } from "react-redux";
import { AddExtraComponent } from "../../store/componentSlice";

const Combine = () => {
  const [extraSectionName, setExtraSectionName] = useState("");
  const addSection = (e) => {
    e.preventDefault();
    const newSeg = {
      name: extraSectionName,
      path: null,
    };
    dispatch(AddExtraComponent(newSeg));
  };

  const dispatch = useDispatch();
  const { navbar, landing, footer, extra } = useSelector(
    (state) => state.component
  );

  console.log(extra);

  return (
    <main className="combine container gap--lg container--col">
      <form
        className="container gap--lg add"
        action=""
        onSubmit={(e) => addSection(e)}
      >
        <input
          type="text"
          placeholder="Enter Section Name"
          onChange={(e) => setExtraSectionName(e.target.value)}
        />
        <button type="submit">Add A section</button>
      </form>

      <h3>Your Design</h3>

      <div className="build__container container container--col">
        {!navbar ? (
          <div className="dummy-nav">Navbar</div>
        ) : (
          <img src={navbar} alt="" />
        )}

        {!landing ? (
          <div className="dummy-land">landing page</div>
        ) : (
          <img src={landing} alt="" />
        )}

        {extra.map((sectionName, index) => {
          return !sectionName.path ? (
            <>
              <div key={index} className="dummy-sec">
                {sectionName.name}
              </div>
            </>
          ) : (
            <>
              <img key={index} src={sectionName.path} alt="" />
            </>
          );
        })}

        <div className="dummy-foot">footer</div>
      </div>
    </main>
  );
};

export default Combine;
