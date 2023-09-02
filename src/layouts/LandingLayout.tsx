interface ILandingLayout {
  navbar: React.ReactElement;
  main: React.ReactElement;
}

const LandingLayout: React.FC<ILandingLayout> = ({ navbar, main }) => {
  return (
    <>
      <header>{navbar}</header>
      <section>{main}</section>
    </>
  );
};
export default LandingLayout;
