import Header from '../../components/Header/Header';
import SideBar from '../../components/Sidebar/sidebar';
import FormAlbums from '../../components/FormAlbums/FormAlbums';

export function CadastroAlbums() {
  return (
    <div>
      <Header />
      <div className="sideAndNext">
        <SideBar />
        <FormAlbums />
      </div>
    </div>
  );
}
