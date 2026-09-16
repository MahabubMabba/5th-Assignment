import NavLogo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div>
            <img src={NavLogo} alt="Dev Stack" />
          </div>

          <div className="flex items-center gap-6">
            <a href="" className="text-pink-600">
              Home
            </a>
            <a href="">Technologies</a>
            <a href="">Projects</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </div>

          <div className="flex items-center gap-2">
            <button className="btn rounded-2xl bg-white text-black">
              Sign in
            </button>
            <button className="btn rounded-2xl border-none bg-pink-700 font-semibold">
              Sign Up
            </button>
          </div>
        </nav>

        <div className="divider m-0"></div>
      </div>
    </div>
  );
};

export default Nav;