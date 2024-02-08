import './header.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faTelegram, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
      
    return (
          <div className='container'>
            <div className="header__inner">
              <h1 className='logo__inner'>University-List</h1>
            
              <div className='items'>
                <ul><a href="https://github.com/Primis1" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithubAlt} /></a></ul>
                <ul><a href="https://www.instagram.com/o_olb_/" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faTelegram} /></a></ul>
                <ul><a href="https://t.me/o_odone" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></ul>

                <div className='btn__inner'><button className='btn'>Blog</button></div>
              </div>
            </div>
          </div>
    )
  }
