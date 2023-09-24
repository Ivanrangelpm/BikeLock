import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import portoLg from '../../assets/portoLogo.png'
import './style.css'

export default function Footer() {
  return (
    <div className="footer">
            <img className="portoLogo" alt="Porto Logo" src={portoLg} />
        <p className="text-wrapper">© 2023 Todos os direitos reservados</p>

        <a href="https://www.instagram.com/"><div className="link-footer">Instagram</div></a>
        <a href="https://www.linkedin.com/"><div className="link-footer-2">Linkedin</div></a>
        <a href="https://www.x.com/"><div className="link-footer-3">Twitter</div></a>
    
        <img className="linkedin" alt="Linkedin" src={linkedin} />

        <img className="twitter" alt="Twitter" src={twitter} />

        <img className="instagram" alt="Instagram" src={instagram} />

    </div>
  )
}
