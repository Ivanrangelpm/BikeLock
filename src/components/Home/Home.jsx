import background from '../../assets/background.png';
import { Link } from 'react-router-dom';

import './style.css';

export default function Home() {
  return (
    <>
      <div className="index">
        <img src={background} alt="Background Image" className="background" />
        <div className="content-home">
          
          <p className="text">Proteção que acompanha seu ritmo sobre duas rodas!</p>

          <Link to="/cadastro"><button className="button-cadastre-se">Cadastre-se</button></Link>

        </div>
      </div>
    </>
  );
}

