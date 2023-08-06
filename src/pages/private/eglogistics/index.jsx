import MainDash from "../../../components/PrivateComponents/eglogistics/MainDash/MainDash";
import RightSide from "../../../components/PrivateComponents/eglogistics/RightSide/RightSide";
import Sidebar from "../../../components/PrivateComponents/eglogistics/Sidebar";
import "./eglogistics.css";

export default function EGLogistics() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}
