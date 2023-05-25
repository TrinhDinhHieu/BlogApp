import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Section() {
    return ( 
        <>
         <div className="space"></div>
      <div className="section_top">
        <div className="section_top-top">
          <div className="logo_discord">
            <img
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6cc3c481a15a141738_icon_clyde_white_RGB.png"
              className="icon_discord"
            />
            <h1 className="title_discord">Discord</h1>
          </div>
          <h2 className="main_title-top">
            Meet like minded people who face similar challenges.
          </h2>
          <p className="main_title-bottom">
            Join the discord and get better at building software together.
          </p>
          <div className="btn_down">
            <p className="title_down p_couse">
              Learn more about the KCD Community on Discord
            </p>
            <p className="icon-down icon_dowm">
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#ffffff" }}
                className="icon"
              />
            </p>
          </div>
        </div>
        <div className="section_top-bottom">
          <div className="section_btnright-top">
            <div className="btn_right top1">
              <p className="title_right">Want to learn react together?</p>
            </div>
            <div className="btn_right top2">
              <p className="title_right">Let me know ✌️</p>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/kentcdodds-com/image/upload/c_fill,w_650,ar_3:4,q_auto,f_auto/kent/coding-with-kody"
            className="img_bottom"
          />
          <div className="section_btnright-bottom">
            <div className="btn_right bottom1">
              <p className="title_right">For sure! Let's do it!</p>
            </div>
            <div className="btn_right bottom2">
              <p className="title_right">
                Let me show you what I'm working on...🧑‍💻
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space"></div>
      <div className="section_bottom">
        <img
          src="https://res.cloudinary.com/kentcdodds-com/image/upload/c_fill,w_650,ar_3:4,q_auto,f_auto/kent/snow-sports"
          className="img_bottom section_img"
        />
        <div className="section_bottom-right">
          <img
            src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_600,q_auto,f_auto/kentcdodds.com/illustrations/snowboard_nqqlyr"
            className="icon_section"
          />
          <h2 className="main_title-top width_section">
            Big extreme sports enthusiast.
          </h2>
          <p className="main_title-bottom width_section">
            With a big heart for helping people.
          </p>
          <p className="section_bottom-title">
            I'm a JavaScript engineer and teacher and I'm active in the open
            source community. And I'm also a husband, father, and an extreme
            sports and sustainability enthusiast.
          </p>
          <div className="btn_down">
            <p className="title_down p_couse">
            Learn more about me
            </p>
            <p className="icon-down icon_dowm">
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#ffffff" }}
                className="icon"
              />
            </p>
          </div>
        </div>
      </div>
        </>
     );
}

export default Section;