import React from "react";
import TaskSvg from "../components/TaskSvg";

const Home: React.FC = () => {
  return (
    <section className="home grid">
      <header className="home__header flex flex-ai-c flex-jc-sb">
        <div className="home__header__logo">
          <span>Task</span> Manager
        </div>
        <div className="home__header__buttons">
          <a href="/login" className="button">
            Login
          </a>
          <a href="/register" className="button">
            Register
          </a>
        </div>
      </header>
      <article className="home__hero grid grid-ai-c">
        <div className="home__hero__text">
          <h1>Get your tasks done with us</h1>
          <p>
            Become focused, organized, and calm with Task Manager. Add your
            tasks. Organize your life. Achieve more every day.
          </p>
          <a href="/login" className="button">
            Get Started
          </a>
        </div>
        <div className="home__hero__image">
          <TaskSvg />
        </div>
      </article>
    </section>
  );
};

export default Home;
