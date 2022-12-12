import Header from '../../components/Header/Header';
import SideBar from '../../components/Sidebar/sidebar';
import FormArtistas from '../../components/FormArtistas/FormArtistas';

export function CadastroArtistas() {
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
