import "./index.scss";
function Header() {
  return (
    <header className="App-header">
      <div className="search-box">
        <img src="./icons/search.svg" alt="search" />
        <input type="text" placeholder="Find your City" />
      </div>
    </header>
  );
}
export default Header;
