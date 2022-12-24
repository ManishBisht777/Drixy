import React from "react";
import what from "../../images/what.jpg";
import hand from "../../images/hand.png";

const Home = () => {
  return (
    <main>
      <section className="landing container container--center gap--md">
        <h1>
          Designers
          <img src={hand} alt="" />
          Developers
        </h1>
        <p>A place to desginers and developer to collaborate</p>
        <button className="button--primary">Explore</button>
      </section>

      <section className="container what gap--lg">
        <div className="image-container">
          <img src={what} alt="" />
        </div>
        <div className="container container--col gap--md">
          <h2>what it is</h2>
          <ul className="container container--col gap--sm">
            <li>
              <span>🥲</span>
              Done with Scrolling through Dribble and behance?
            </li>
            <li>
              <span>🥹</span> Can't Find a proper desgin for your upcoming
              Project?
            </li>
            <li>
              <span>😢</span> Don't know how to use figma?
            </li>
            <li>
              <span>😭</span> Have individual section but don't know how they
              will look with each other?
            </li>
          </ul>
          <p className="use">
            We provide you a large collection on compoents for you to mix and
            match to make a desgifn for you upcoming projects
          </p>
          <button className="button--primary">examples</button>
        </div>
      </section>
      <section className="example container container--center gap--lg">
        <h3>here are some of design made my users</h3>
        <div className="example__images container gap--md container--center-row">
          <img src={what} alt="imgages here" />
          <img src={what} alt="imgages here" />
          <img src={what} alt="imgages here" />
          <img src={what} alt="imgages here" />
          <img src={what} alt="imgages here" />
        </div>
      </section>
    </main>
  );
};

export default Home;
