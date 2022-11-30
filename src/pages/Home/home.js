import Header from '../../components/Header/Header';
import SideBar from '../../components/Sidebar/sidebar';
import FormGravadoras from '../../components/FormGravadoras/FormGravadoras';

export function Home() {
  return (
    <div>
      <Header />
      <div className="sideAndNext">
        <SideBar />
        <FormGravadoras />
      </div>
    </div>
  );
}
