function Header() {
  return (
    <header className="main_header">
      <div className="text-container">
        <h1 className="header-title">
          Look for <span>Banger</span> Food
        </h1>
        <p className="header-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
        <div className="header-input-container">
          <input type="text" placeholder="Find a recipe..." />
          <button>Search</button>
        </div>
      </div>
      <div>
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/how-to-make-french-toast-1589827448.jpg"
          alt=""
          className="main_img"
        />
      </div>
    </header>
  );
}

export default Header;
