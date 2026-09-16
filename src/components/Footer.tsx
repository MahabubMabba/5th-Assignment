import FooterIMG from '../assets/logo-text.png'

const Footer = () => {
  return (
    <footer className="container mx-auto mt-8">
      <div className="flex justify-between gap-6 ">
        <div className='space-y-3.5'>
          <div>
            <img src={FooterIMG} alt="" />
          </div>

          <p className='text-gray-500'>
            Curated tools, technologies, and resources for developers
            building <br /> modern software.
          </p>

          <div className='flex items-center gap-4 font-bold'>
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>


        <div className='space-y-3.5 flex flex-col'>
          <h3 className='font-bold'>PRODUCT</h3>
          <a className='text-gray-500' href="#">Home</a>
          <a className='text-gray-500' href="#">Technologies</a>
          <a className='text-gray-500' href="#">Projects</a>
        </div>

        <div className='flex flex-col space-y-3.5'>
          <h3 className='font-bold'>COMPANY</h3>
          <a className='text-gray-500' href="#">About</a>
          <a className='text-gray-500' href="#">Contact</a>
          <a className='text-gray-500' href="#">Careers</a>
        </div>


        <div className='flex flex-col space-y-3.5'>
          <h3 className='font-bold'>LEGAL</h3>
          <a className='text-gray-500' href="#">Privacy Policy</a>
          <a className='text-gray-500' href="#">Terms of Service</a>
        </div>
      </div>

      <div className='flex justify-between mt-15'>
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className=' flex gap-3'>
            <a className='text-gray-500 ' href="">Privacy</a>
            <a className='text-gray-500' href="">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;