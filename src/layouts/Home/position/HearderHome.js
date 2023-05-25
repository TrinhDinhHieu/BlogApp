import '../Home.css'
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useHistory } from 'react-router-dom';
import config from '../../../config';
import { useNavigate } from 'react-router-dom';

function Hearderhome() {
  const navigate = useNavigate()
  const handleBlog=()=>{
    //link đến reang blog
    navigate(config.routes.blog);
  }
  const handleCouse = ()=>{
    navigate(config.routes.couses)
  }
  return (
    <div className='home'>
      < div className='home__left'>
        <p className="home__title">
          Helping people make the world a better place through quality software.
        </p>
        <button className='btn-home color' onClick={handleBlog}> Read the blog</button>
        <button className='btn-home' onClick={handleCouse}> Take a couses</button>
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
