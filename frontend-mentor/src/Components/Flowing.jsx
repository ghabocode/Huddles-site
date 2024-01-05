import React from "react";

function Flowing() {
  return (
    <div className="items-center justify-center flex flex-col-reverse lg:flex-row py-12 px-16 p-2 gap-10">
      <img
        src="/images/illustration-flowing-conversation.svg"
        alt=""
        width={500}
      />
      <div className="">
        <h1 className="mb-3 text-3xl ">Flowing Conversations</h1>
        <p className="max-w-md">
          {" "}
          You wouldn't paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </p>
      </div>
    </div>
  );
}

export default Flowing;
