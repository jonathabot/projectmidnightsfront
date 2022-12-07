import Header from '../../components/Header/Header';
import SideBar from '../../components/Sidebar/sidebar';
import ListArtistas from '../../components/ListArtistas/ListArtistas';

export function Artistas() {
  return (
    <div>
      <Header />
      <div className="sideAndNext">
        <SideBar />
        <ListArtistas />
      </div>
    </div>
  );
}
