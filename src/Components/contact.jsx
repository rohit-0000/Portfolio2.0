import React from "react";
import { useForm } from "react-hook-form";
import gmail from "../assets/gmail.svg";
import linkedin from "../assets/Linkedin.svg";
import github from "../assets/github.svg";
import resume from "../assets/Rohit-Resume.pdf";
import AnimateLeftToRight from "./Animation/AnimateLeftToright";
import axios from "axios";
import toast from "react-hot-toast";

const contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await axios.post(import.meta.env.VITE_BACKEND_URL, data);
      toast.success("message send succesfully");
    } catch (error) {
      toast.error("Message not sent");
    }
  };
  return (
    <AnimateLeftToRight>
      <div
        className=" max-w-screen  text-white  flex flex-col px-10 md:px-20   items-center pb-10 pt-15  bg-neutral-950 "
        id="Contact"
      >
        <h1 className="text-4xl md:text-5xl mb-15 font-bold text-yellow-300 relative after:absolute after:content-[''] after:h-1.5 after:w-full after:left-0 after:bg-amber-300 md:after:-bottom-5 after:-bottom-3 after:rounded ">
          Contact Me
        </h1>
        <div className="w-full h-full flex flex-col md:flex-row gap-5">
          <div className="flex w-full flex-col gap-5 ">
            <div>
              <a
                href="mailto:rohit20040121@gmail.com"
                className="flex gap-2 items-center text-xl w-fit"
              >
                <img src={gmail} className="w-8" />
                <p>rohit20040121@gmail.com</p>
              </a>
            </div>
            <div>
            <a
              href="https://www.linkedin.com/in/rohit-43107a253/"
              className="flex gap-2 items-center text-xl w-fit"
            >
              <img src={linkedin} className="w-8" />
              <p>rohit-43107a253</p>
            </a></div>
            
            <div><a
              href="https://github.com/rohit-0000"
              className="flex gap-2 items-center text-xl w-fit"
            >
              <img src={github} className="w-8" />
              <p>rohit-0000</p>
            </a>
            </div>

            <a
              href={resume}
              download="Rohit-resume.pdf"
              className="bg-green-500 px-2 py-2 w-fit rounded-md active:scale-90 text-xl"
            >
              Download CV
            </a>
          </div>
          <div className="w-full h-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full h-full flex flex-col gap-5 text-xl justify-center "
            >
              <div>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="bg-[#ffffff33] p-2 rounded outline-0 w-full "
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-sm text-red-500 italic">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="bg-[#ffffff33] p-2 rounded outline-0 w-full"
                  placeholder="Your email"
                />
                {errors.email && (
                  <p className="text-sm text-red-500 italic">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <textarea
                  {...register("message", {
                    required: "Message is required",
                  })}
                  className="bg-[#ffffff33] p-2 rounded outline-0 w-full overflow-auto scrollbar"
                  placeholder="Your message"
                  rows={5}
                />
                {errors.message && (
                  <p className="text-sm text-red-500 italic">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <input
                type="submit"
                className={`px-2 py-2 w-fit rounded-md active:scale-90 ${
                  isSubmitting ? "bg-green-700" : "bg-green-500"
                }`}
                value={isSubmitting ? "Submitting" : "Submit"}
                disabled={isSubmitting}
              />
            </form>
          </div>
        </div>
      </div>
    </AnimateLeftToRight>
  );
};

export default contact;
