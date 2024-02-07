import './header.scss'
import { FaGithub, FaTelegram, FaInstagram } from "react-icons/fa";

export default function Header() {
      
    return (
          <div className='container'>
            <div className="header__inner">
              <p className='logo__inner'>Mississauga</p>
            
              <div className='items'>
                <ul><a href="https://github.com/Primis1" target='_blank' rel="noreferrer"><FaGithub/></a></ul>
                <ul><a href="https://www.instagram.com/o_olb_/" target='_blank' rel="noreferrer"><FaInstagram /></a></ul>
                <ul><a href="https://t.me/o_odone" target='_blank' rel="noreferrer"><FaTelegram /></a></ul>

                <div className='btn__inner'><button className='btn'>Blog</button></div>
              </div>
            </div>
          </div>
    )
  }
