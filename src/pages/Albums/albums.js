import Header from '../../components/Header/Header';
import SideBar from '../../components/Sidebar/sidebar';
import ListAlbums from '../../components/ListAlbums/ListAlbums';

export function Albums() {
  return (
    <div>
      <Header />
      <div className="sideAndNext">
        <SideBar />
        <ListAlbums />
      </div>
    </div>
  );
}
