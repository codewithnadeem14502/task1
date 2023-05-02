import React from "react";
import Sidebar from "../Sidebar";

const Contact = () => {
  return (
  <>
    <Sidebar/>

    <div className="flex flex-col items-center justify-center mt-14  border-solid border-2 border-black shadow-2xl rounded-lg h-[500px] lg:w-[800px] w-[230px] mx-auto">
      <h1 className="text-4xl font-bold mb-8 mt-5 border-y-2 border-black">Contact Us</h1>
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap mb-6">
          <div className="lg:w-full w-[220px] ml-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="John Doe"
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-6 ml-2">
          <div className="w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="johndoe@example.com"
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-6 ml-2">
          <div className="w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="5"
              placeholder="Enter your message here..."
            ></textarea>
          </div>
        <div className="mt-2 ">
          <button
            className="bg-blue-500   hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send
          </button>
        </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default Contact;
