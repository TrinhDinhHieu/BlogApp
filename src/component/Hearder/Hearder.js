import "./Hearder.css";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {NavLink} from 'react-router-dom'
import config from "../../config";
function Hearder() {
  const data = [
    { name: "Blog", link: config.routes.blog },
    { name: "Courses", link: config.routes.couses },
    { name: "Discord", link: config.routes.discord },
    { name: "Chats", link: config.routes.chat },
    { name: "Calls", link: config.routes.call },
    { name: "WordShops", link: config.routes.workshop},
    { name: "About", link: config.routes.about },
  ];
  return (
    <header className="hearder">
      <NavLink to={config.routes.home}>
      <h1 className="hearder__title">Kent C. Dodds</h1>
      </NavLink>
      <ul className="hearder__list">
        {data.map((item, index) => (
          <li className="header__item" key={index}>
            <NavLink   to={item.link}>
              <p className="header__item-title">{item.name}</p>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="hearder__Right">
        <div className="icon__moon">
        <FontAwesomeIcon icon={faMoon} size="2xl" style={{color: "#ffffff",}} />
        </div>
        <div className="icon__login">
            <h1>ảnh</h1>
            
        </div>
      </div>
    </header>
  );
}

export default Hearder;
