import React from "react";

function Form() {
  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="flex justify-center gap-14 flex-wrap">
        <input
          type="text"
          placeholder="First name"
          className="input input-bordered input-lg w-full max-w-xs"
        />

        <input
          type="text"
          placeholder="Middle Name"
          className="input input-bordered input-lg w-full max-w-xs"
        />

        <input
          type="text"
          placeholder="Last Name"
          className="input input-bordered input-lg w-full max-w-xs"
        />

        <input
          type="text"
          placeholder="Email"
          className="input input-bordered input-lg w-full max-w-xs"
        />

        <input
          type="text"
          placeholder="Phone"
          className="input input-bordered input-lg w-full max-w-xs"
        />

        <input
          type="text"
          placeholder="CNIC Number"
          className="input input-bordered input-lg w-full max-w-xs"
        />

        <input
          type="text"
          placeholder="Address"
          className="input input-bordered input-lg w-full max-w-xs"
        />

        <input
          type="text"
          placeholder="Education"
          className="input input-bordered input-lg w-full max-w-xs"
        />

        <input
          type="text"
          placeholder="Age"
          className="input input-bordered input-lg w-full max-w-xs"
        />

        <button className="btn btn-wide bg-blue-400 text-white hover:bg-blue-500">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Form;
