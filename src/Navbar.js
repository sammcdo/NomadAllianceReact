import "./Navbar.css.css";

function Navbar() {
  return (
    <div class="topnav">
      <a href="index.html" class="w3-bar-item w3-button w3-padding-large">
        <img
          src="https://github.com/sammcdo/sammcdo.github.io/blob/master/Scorpion.png?raw=true"
          alt="The NOMAD Alliance Home"
          style="width:26px;border:0;"
        />{" "}
        The NOMAD Alliance
      </a>
      <a href="teamStats.html" class="w3-bar-item w3-button w3-padding-large">
        Random Team Info
      </a>
      <a
        href="resourcelibrary.html"
        class="w3-bar-item w3-button w3-padding-large w3-hide-small"
      >
        Resource Library
      </a>
      <a
        href="about.html"
        class="w3-bar-item w3-button w3-padding-large w3-hide-small"
      >
        About
      </a>
      <a
        href="emailUs.html"
        class="w3-bar-item w3-button w3-padding-large w3-hide-small"
      >
        CONTACT
      </a>

      <form action="search.html" id="search">
        <input
          type="text"
          id="autocomplete"
          name="search"
          placeholder="Enter team or event code (ex. 2020casd)..."
        />
        <input type="submit" value="Go!" />
      </form>
    </div>
  );
}

export default Navbar;
