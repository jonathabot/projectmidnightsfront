import './sidebar.css';
import { useNavigate } from 'react-router-dom';

function SideBar() {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate('/');
  };

  const handleClickGravadoras = () => {
    navigate('/gravadoras');
  };

  const handleClickArtistas = () => {
    navigate('/artistas');
  };

  const handleClickAlbuns = () => {
    navigate('/albuns');
  };

  return (
    <div className="sidebar">
      <div className="sidebarSides">
        <div class="sideA">
          <section className="sidebarSideA">Side A</section>
          <hr></hr>
          <a
            type="button"
            id="viewGravadoras"
            href=""
            onClick={handleClickGravadoras}
          >
            Gravadoras
          </a>
          <a
            type="button"
            id="viewArtistas"
            href=""
            onClick={handleClickArtistas}
          >
            Artistas
          </a>
          <a
            type="button"
            id="viewArtistas"
            href=""
            onClick={handleClickAlbuns}
          >
            Albuns
          </a>
        </div>

        <div class="sideB">
          <section className="sidebarSideB">Side B</section>
          <hr></hr>
          <a
            type="button"
            id="viewGravadoras"
            href=""
            onClick={handleClickHome}
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
