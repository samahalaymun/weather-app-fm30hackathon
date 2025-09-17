import UnitsDropdown from "./Units";

function Header() {
  const url = import.meta.env.BASE_URL;

  return (
    <header className="flex justify-between ">
      <img
        src={url+"/assets/images/logo.svg"}
        alt="logo"
        className="w-36 md:w-auto"
      />
      <UnitsDropdown />
    </header>
  );
}

export default Header;
