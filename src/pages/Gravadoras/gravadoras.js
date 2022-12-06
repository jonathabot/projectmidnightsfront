import Header from '../../components/Header/Header';
import SideBar from '../../components/Sidebar/sidebar';
import ListGravadoras from '../../components/ListGravadoras/ListGravadoras';
import FormGravadoras from '../../components/FormGravadoras/FormGravadoras';

export function Gravadoras() {
  return (
    <div>
      <Header />
      <div className="sideAndNext">
        <SideBar />
        <ListGravadoras />
        <FormGravadoras />
      </div>
    </div>
  );
}
