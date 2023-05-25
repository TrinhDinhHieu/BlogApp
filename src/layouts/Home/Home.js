import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import Hearderhome from "./position/HearderHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "./position/Section";
function HomeComponent() {
  const data = [
    {
      url: "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1554672723-b208dc85134f",
      time: "June 4th, 2019 — 14 min read",
      content: "When to useMemo and useCallback"
    },
    {
      url: "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/kentcdodds.com/content/blog/how-to-write-a-javascript-library/banner",
      time: "September 8th, 2015 — 2 min read",
      content: "How to Write a JavaScript Library"
    },
    {
      url: "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1523962389844-25940ebd2226",
      time: "September 30th, 2019 — 13 min read",
      content: "Don't Sync State. Derive It!"
    }
  ];
  const dataBottom = [
    {
      url: "https://res.cloudinary.com/kentcdodds-com/image/upload/w_128,q_auto,f_auto/kentcdodds.com/pages/courses/rocket",
      title: "Epic React",
      text: " The most comprehensive guide for pros."
    },
    {
      url: "https://res.cloudinary.com/kentcdodds-com/image/upload/w_128,q_auto,f_auto/kentcdodds.com/pages/courses/testing-trophy",
      title: "Testing JavaScript",
      text: "Learn smart, efficient testing methods."
    }
  ];
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
      <div className="space_main"></div>
      <div className="main_top">
        <div className="main_top-title">
          <h2 className="main_title-top">Blog recommendations</h2>
          <p className="main_title-bottom">Prepared especially for you.</p>
        </div>
        <div className="btn_down">
          <p className="title_down">See the full blog</p>
          <p className="icon-down padding_right">
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ color: "#ffffff" }}
              className="icon"
            />
          </p>
        </div>
      </div>
      <div className="main_center">
        <ul className="main_center-list">
          {data.map((item, index) => (
            <li key={index} className="main_list-item">
              <img src={item.url} className="main_item-img" />
              {/* ////// CHECK BUTTOn//// */}
              <button>Click to copy url</button>
              <p className="main_item-time">{item.time}</p>
              <h3 className="main_item-text">{item.content}</h3>
            </li>
          ))}
        </ul>
      </div>
      <div className="space"></div>
      <div className="main_top">
        <div className="main_top-title">
          <h2 className="main_title-top">Are you ready to level up?</h2>
          <p className="main_title-bottom">Checkout some of my courses</p>
        </div>
        <div className="btn_down">
          <p className="title_down p_couse">See all courses</p>
          <p className="icon-down padding_right">
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ color: "#ffffff" }}
              className="icon"
            />
          </p>
        </div>
      </div>
      <div className="main_bottom">
        {dataBottom.map((item, index) => (
          <div className="main_dottom-item" key={index}>
            <img className="icon_bottom" src={item.url} />
            <div className="content_bottom">
              <p className="main_title-top title_bottom">{item.title}</p>
              <p className="text_bottom">{item.text}</p>
              <buttom className="btn_bottom">
                visit couse{" "}
                <FontAwesomeIcon
                  className="icon_down"
                  icon={faArrowDown}
                  style={{ color: "#000000" }}
                />
              </buttom>
            </div>
          </div>
        ))}
      </div>
     <Section/>
      
    </div>
  );
}

export default HomeComponent;
