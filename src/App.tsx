import NavBar from "./components/Navbar";
import SocialMediaBar from "./components/SocialMediaBar";
import LandingLayout from "./layouts/LandingLayout";

function App() {
  return (
    <LandingLayout
      navbar={<NavBar />}
      main={{
        name: "Owen Lee",
        titles: ["Software Developer", "Full-Stack Developer"],
      }}
      socialMedia={<SocialMediaBar />}
    />
  );
}

export default App;
