import React from "react";

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between py-12 px-16 p-4">
      <div>
        <h1 className="mb-5 text-4xl font-bold">
          {" "}
          Build The Community <br /> Your Fans Will Love
        </h1>
        <p className="max-w-lg mb-5">
          {" "}
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button className="bg-pink-600 hover:bg-pink-400 duration-700 p-5 rounded-full mb-8 px-10 py-3 text-white cursor-pointer">
          Get Stated For Free
        </button>
      </div>
      {/*  */}
      <img src="/images/illustration-mockups.svg" alt="" width={550} />
    </div>
  );
}

export default Hero;
