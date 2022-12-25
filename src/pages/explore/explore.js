import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { storage } from "../auth/firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";

const Explore = () => {
  const [imgList, setImgList] = useState([]);
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

  useEffect(() => {
    const fetchData = async () => {
      const stogrageRef = ref(storage);

      listAll(stogrageRef).then((res) => {
        res.items.forEach((image) => {
          console.log(image.name);
          getDownloadURL(image).then((url) =>
            setImgList((old) => {
              const newState = [...old];
              newState.push(url);
              return newState;
            })
          );
        });
      });
    };

    fetchData();
  }, []);
  console.log(imgList);
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
          {imgList &&
            imgList.length &&
            imgList.map((currImg) => {
              return (
                <div className="container container--center gap--sm">
                  <img src={currImg} alt="" />
                  <button
                    aria-expanded="false"
                    value={currImg}
                    onClick={(e) => {
                      setMenu(true);
                      setComponentURL(e.target.value);
                    }}
                  >
                    Get
                  </button>
                </div>
              );
            })}
        </div>
      </section>
    </main>
  );
};

export default Explore;
