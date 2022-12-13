import Header from '../../components/Header/Header';
import SideBar from '../../components/Sidebar/sidebar';
import HomeList from '../../components/HomeList/HomeList';

export function Home() {
  return (
    <div>
      <Header />
      <div className="sideAndNext">
        <SideBar />
        <HomeList />
      </div>
    </div>
  );
}
