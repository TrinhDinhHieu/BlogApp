import '../Home.css'
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Hearderhome() {
  return (
    <div className='home'>
      < div className='home__left'>
        <p className="home__title">
          Helping people make the world a better place through quality software.
        </p>
        <button className='btn-home color'> Read the blog</button>
        <button className='btn-home'> Take a couses</button>
        <div className='btn_down'>
          <p className='icon-down'>
          <FontAwesomeIcon icon={faArrowDown} style={{color: "#ffffff",}} className='icon' />
          </p>
          <p className='title_down'>Learn more about Kent</p>
        </div>
      </div>
      <div className='home__right' >
        <img className='home_img1' src='https://res.cloudinary.com/kentcdodds-com/image/upload/w_1300,q_auto,f_auto/kentcdodds.com/illustrations/kody/kody_onewheeling_flying_red' alt='ảnh 1'/>
      </div>
    </div>
  );
}

export default Hearderhome;
