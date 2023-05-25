import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import Hearderhome from "./position/HearderHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function HomeComponent() {
  return (
    <div className="wrapper">
      <Hearderhome />
      <div className="space"></div>
      <nav className="nav__home">
        <div className="nav_item-left">
          <div className="video_item"></div>
          <p className="item_right-name">Introduction video (2:13)</p>
          <a
            href="https://kentcdodds.com/about?autoplay"
            className="item_right-video"
          >
            or, watch the full video here (8:05)
          </a>
        </div>
        <div className="nav_item-right">
          <h2 className="nav_title-top">
            Hi, I'm Kent C. Dodds. I help people make the world better through
            quality software.
          </h2>
          <p className="nav_title-bottom">
            I'm also a big extreme sports enthusiast. When I'm not hanging out
            with my family or at the computer you can find me cruising around on
            my onewheel or hitting the slopes on my snowboard when it's cold.
          </p>
          <div className="btn_down">
            <p className="title_down">Learn more about Kent</p>
            <p className="icon-down padding_right">
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#ffffff" }}
                className="icon"
              />
            </p>
          </div>
        </div>
      </nav>
      <div className="space"></div>
      <nav className="nav_contact">
        <div className="contact_title">
          <p className="contact_title-top contact_color">
            Having a hard time keeping up with JavaScript?
          </p>
          <p className="contact_title-top">
            Well, you're in the right place. My website is your one stop shop
            for everything you need to build JavaScript apps.
          </p>
        </div>
        <div className="contact_bottom">
          <ul className="contact_list">
            <li className="contact_item">
              <a className="item_name" href="#">
                blog
              </a>
            </li>
            <li className="contact_item">
              <a className="item_name" href="#">
                couses
              </a>
            </li>
            <li className="contact_item">
              <a className="item_name" href="#">
                podcasts
              </a>
            </li>
          </ul>
          <div className="contact-img">
            <img
              className="icon_contact"
              src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_180,q_auto,f_auto/kentcdodds.com/illustrations/skis_z5lkc3"
              alt="ảnh 2"
            />
            <h3>Educational blog</h3>
            <div className="title_contact-list">
              <div className="title_contact_bottom">
                <p className="img-title">
                  My <a className="white_a">197 </a> blog posts (and counting)
                  have been read 594,197 times by 407,630 people. There you'll
                  find blogs about JavaScript, TypeScript, React, Testing, your
                  career, and and more.
                </p>

                <p className="contact_link">
                  The <a className="blue_a">blue</a> team is winning.
                </p>
              </div>
              <div className="btn_down">
            <p className="title_down">Start reading the blog</p>
            <p className="icon-down padding_right">
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#ffffff" }}
                className="icon"
              />
            </p>
          </div>
            </div>
          </div>
        </div>
      </nav>
        <div>
          main
        </div>
    </div>
  );
}

export default HomeComponent;
