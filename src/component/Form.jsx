import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <div className="flex justify-center items-center flex-col ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center gap-12 flex-wrap">
          <div className="w-80">
            <input
              type="text"
              placeholder="First name"
              className="input input-bordered input-lg w-full max-w-xs"
              {...register("first_name", { required: true , minLength: 4})}
            />
            <br />
            {errors.first_name  && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="w-80">
            <input
              type="text"
              placeholder="Middle name"
              className="input input-bordered input-lg w-full max-w-xs"
              {...register("middle_name", { minLength:3})}
            />
            <br />
            {errors.last_name  && (
              <span className="text-zinc-300 font-medium">Optional</span>
            )}
            
          </div>


          <div className="w-80">
            <input
              type="text"
              placeholder="Last name"
              className="input input-bordered input-lg w-full max-w-xs"
              {...register("last_name", { required: true })}
            />
            <br />
            {errors.last_name  && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>


          <div className="w-80">
            <input
              type="number"
              placeholder="Age"
              className="input input-bordered input-lg w-full max-w-xs"
              {...register("age", { required: true })}
            />
            <br />
            {errors.age  && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>


          <div className="w-80">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered input-lg w-full max-w-xs"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email  && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>


          <div className="w-80">
            <input
              type="number"
              placeholder="Phone"
              className="input input-bordered input-lg w-full max-w-xs"
              {...register("number", { required: true })}
            />
            <br />
            {errors.number  && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>


          <div className="w-80">
            <input
              type="number"
              placeholder="CNIC"
              className="input input-bordered input-lg w-full max-w-xs"
              {...register("cnic", { required: true })}
            />
            <br />
            {errors.cnic  && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="w-80">
            <input
              type="text"
              placeholder="Address"
              className="input input-bordered input-lg w-full max-w-xs"
              {...register("address", { required: true })}
            />
            <br />
            {errors.address  && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          
        </div>
        <div className="flex justify-center mt-10">

          <button className="btn btn-wide bg-blue-400 text-white hover:bg-blue-500">
            Submit
          </button>
          </div>

      </form>
    </div>
  );
}

export default Form;
