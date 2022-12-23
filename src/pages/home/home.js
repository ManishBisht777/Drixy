import React from "react";
import what from "../../images/what.jpg";

const Home = () => {
  return (
    <main>
      <section className="landing container container--center gap--md">
        <h1>Designers 🤝 Developers</h1>
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
              amet!
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
              amet!
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
              amet!
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
              amet!
            </li>
          </ul>
          <p>
            We provide you a large collection on compoents for you to mix and
            match to make a desgifn for you upcoming project
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
