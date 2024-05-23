import React from "react";

const ResumePage = () => {
  const handleView = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center mt-24">
      <h1 className="bungee text-4xl text-cyan-700">
        View or Download My Resume
      </h1>
      <div className="gruppo my-6">
        <button
          onClick={handleView}
          className="bg-cyan-800 text-white text-3xl p-4 mx-6 rounded-md hover:bg-cyan-700"
        >
          View Resume
        </button>
        <a href="/resume.pdf" download>
          <button className="bg-cyan-800 text-white text-3xl p-4 rounded-md hover:bg-cyan-700">Download Resume</button>
        </a>
      </div>
    </div>
  );
};

export default ResumePage;
