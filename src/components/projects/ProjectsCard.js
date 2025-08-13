import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, githubLink, websiteLink }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="project"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="w-full mt-3 flex flex-col gap-3">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              {githubLink && (
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                  <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <BsGithub />
                  </a>
                </span>
              )}
              {websiteLink && (
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                  <a href={websiteLink} target="_blank" rel="noopener noreferrer">
                    <FaGlobe />
                  </a>
                </span>
              )}
            </div>
          </div>
          <p style={{ whiteSpace: "pre-line" }} className="text-sm tracking-wide mt-2 hover:text-gray-100 duration-300">
            {des}
          </p>
      
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard