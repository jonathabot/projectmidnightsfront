import Header from '../../components/Header/Header';
import SideBar from '../../components/Sidebar/sidebar';
import ListGravadoras from '../../components/ListGravadoras/ListGravadoras';

export function Gravadoras() {
  return (
    <div>
      <Header />
      <div className="sideAndNext">
        <SideBar />
        <ListGravadoras />
      </div>
    </div>
  );
}
