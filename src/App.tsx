import NavBar from "./components/Navbar";
import LandingLayout from "./layouts/LandingLayout";

function App() {
  return (
    <LandingLayout
      navbar={<NavBar />}
      main={{
        name: "Owen Lee",
        titles: ["Software Developer", "Full-Stack Developer"],
      }}
    />
  );
}

export default App;
