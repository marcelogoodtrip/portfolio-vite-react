import AboutContainer from './AboutContainer';
import TecnologiasContainer from './TecnologiasContainer';
import ProjetosContainer from './ProjetosContainer';
import '../styles/components/maincontent.sass';

const MainContent = () => {
  return (
    <main id="maincontent">
        <AboutContainer />
        <TecnologiasContainer />
        <ProjetosContainer />
    </main>
  );
};

export default MainContent;