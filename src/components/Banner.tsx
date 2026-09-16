import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto mt-8 flex items-center justify-between">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-extrabold">
            Build Your Ideal <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h2>

          <p className="text-gray-500">
            Explore frontend, backend, database, and tooling options, <br />
            compare them side by side, and put together the stack that fits
            your <br />
            next project.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="rounded-2xl bg-linear-to-r from-orange-500 via-pink-500 to-purple-500 px-5 py-3 text-white">
            Explore Technologies
          </button>

          <button className="rounded-2xl border border-gray-500 bg-white px-5 py-3 text-black">
            Learn More
          </button>
        </div>
      </div>

      <div>
        <img src={BannerImg} alt="Development stack" />
      </div>
    </div>
  );
};

export default Banner;