import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
  return(
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(88) 9 9999-9999</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>marcelo@email.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Aracati-CE</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;