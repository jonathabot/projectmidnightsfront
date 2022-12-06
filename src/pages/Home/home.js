import Header from '../../components/Header/Header';
import SideBar from '../../components/Sidebar/sidebar';

export function Home() {
  return (
    <div>
      <Header />
      <div className="sideAndNext">
        <SideBar />
      </div>
    </div>
  );
}
