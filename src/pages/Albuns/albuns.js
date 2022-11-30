import Header from '../../components/Header/Header';
import SideBar from '../../components/Sidebar/sidebar';

export function Albuns() {
  return (
    <div>
      <Header />
      <div className="sideAndNext">
        <SideBar />
        <h1>ListAlbuns</h1>
      </div>
    </div>
  );
}
