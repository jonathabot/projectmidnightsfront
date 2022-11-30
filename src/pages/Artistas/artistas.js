import Header from '../../components/Header/Header';
import SideBar from '../../components/Sidebar/sidebar';
import FormArtistas from '../../components/FormArtistas/FormArtistas';

export function Artistas() {
  return (
    <div>
      <Header />
      <div className="sideAndNext">
        <SideBar />
        <FormArtistas />
      </div>
    </div>
  );
}
