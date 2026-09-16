import NavLogo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <div className="py-4">
      <div className=" container mx-auto  items-center ">
      <nav className="flex justify-between items-center ">
        <div>
          <img src={NavLogo} alt="" />
        </div>
        <div className="flex gap-6">
          <a href="" className="text-pink-600">Home</a>
          <a href="">Technologies</a>
          <a href="">Projects</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
        <div className="flex gap-1">
          <button className="btn bg-white text-black rounded-2xl">Sign in</button>
          <button className="btn  bg-pink-700 border-none font-semibold rounded-2xl">Sign Up</button>
        </div>
        
      </nav>
      
    </div>
    <div className="divider"></div>
    </div>
    
  );
};

export default Nav;
