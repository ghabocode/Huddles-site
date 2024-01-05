import React from "react";

function Users() {
  return (
    <div className="items-center justify-center flex flex-col lg:flex-row py-12 px-16 p-2 gap-10">
      <div className="">
        <h1 className="mb-3 text-3xl "> Your Users</h1>
        <p className="max-w-md">
          {" "}
          It takes no time at all to integrate Huddle with your app's
          authentication solution. This means, once signed in to your app, your
          users can start chatting immediately.
        </p>
      </div>
      <img src="/images/illustration-your-users.svg" alt="" width={500} />
    </div>
  );
}

export default Users;
