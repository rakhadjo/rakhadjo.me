import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const blog = this.props.data.blog;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <li>
                  <a href={github} className="button btn github-btn">
                    <i className="fab fa-github"></i>Github
                  </a>
                </li>
                <li>
                  <a
                    href={project}
                    className={`button btn project-btn scrolldown smoothscroll`}
                  >
                    <i className="fa fa-book"></i>Projects
                  </a>
                </li>
                <li>
                  <a href={blog} className="button btn blog-btn">
                    <i className="fa fa-blog"></i>Blog
                  </a>
                </li>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
