import Avatar from '../img/profile-photo.jpg';
import "../styles/components/sidebar.sass";
import SocialNetworks from './SocialNetworks.jsx';
import InformationContainer from './InformationContainer.jsx'

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <h1 className='nome'>Marcelo Moura</h1>
        <img src={Avatar} alt="Marcelo Moura" />
        <p className="title">Desenvolvedor Web</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="" className="btn">Donwload</a>
      </aside>
  );
};

export default Sidebar;