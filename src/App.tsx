import NavBar from "./components/Navbar";
import LandingLayout from "./layouts/LandingLayout";

function App() {
  return <LandingLayout navbar={<NavBar />} main={<></>} />;
}

export default App;
