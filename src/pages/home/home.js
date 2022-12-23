import React from "react";

const Home = () => {
  return (
    <main>
      <section className="landing container container--center gap--md">
        <h1>Designers 🤝 Developers</h1>
        <p>A place to desginers and developer to collaborate</p>
        <button className="button--primary">Explore</button>
      </section>

      <section className="container what">
        <img src="" alt="what it is" />
        <div>
          <h2>what it is</h2>
          <p>
            We provide you a large collection on compoents for you to mix and
            match to make a desgifn for you upcoming project
          </p>
          <button className="button--primary">See some example</button>
        </div>
      </section>
      <section className="example">
        <h3>here are some of design made my users</h3>
        <div className="">
          <img src="" alt="imgages here" />
          <img src="" alt="imgages here" />
          <img src="" alt="imgages here" />
        </div>
      </section>
    </main>
  );
};

export default Home;
