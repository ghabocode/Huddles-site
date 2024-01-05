import React from "react";

function Grow() {
  return (
    <div className="items-center justify-center flex flex-col lg:flex-row py-12 px-16 p-2 gap-6">
      <div className="">
        <h1 className="mb-3 text-3xl ">Grow Together</h1>
        <p className="max-w-lg">
          {" "}
          Generate meaningful discussions with your audience and build a strong,
          loyal community. Think of the insightful conversations you miss out on
          with a feedback form.
        </p>
      </div>
      <img src="/images/illustration-grow-together.svg" alt="" width={500} />
    </div>
  );
}

export default Grow;
