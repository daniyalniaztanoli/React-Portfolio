import React from "react";
import project1 from "../../public/apple.png";
import project2 from "../../public/react.png";

export const Project = () => {
  return (
    <section id="projects" className="py-10 bg-gray-800 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Awesome Works</p>
        <br />
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          <div className="grid md:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1 mx-10">
            <div className="border-2 border-cyan-600 cursor-pointer hover:border-cyan-400 hover:scale-110 relative bg-gray-900 p-5 rounded-xl">
              <a href="https://applereplicadani.web.app/">
                <img src={project1} className="rounded" alt="" />
              </a>
            </div>
            <div className="border-2 border-cyan-600 cursor-pointer hover:border-cyan-400 hover:scale-110 relative bg-gray-900 p-5 rounded-xl">
              <a href="https://react-app-984e3.web.app/"><img src={project2} className="rounded" alt="" /></a>
            </div>
            <div className="border-2 border-cyan-600 cursor-pointer hover:border-cyan-400 hover:scale-110 relative bg-gray-900 p-5 rounded-xl">
              <a href="https://react-app-984e3.web.app/"><img src={project2} className="rounded" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
