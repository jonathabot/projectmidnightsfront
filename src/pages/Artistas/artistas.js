import Header from '../../components/Header/Header';
import SideBar from '../../components/Sidebar/sidebar';
import FormArtistas from '../../components/FormArtistas/FormArtistas';
import ListArtistas from '../../components/ListArtistas/ListArtistas';

export function Artistas() {
  return (
    <div>
      <Header />
      <div className="sideAndNext">
        <SideBar />
        <ListArtistas />
        <FormArtistas />
      </div>
    </div>
  );
}
