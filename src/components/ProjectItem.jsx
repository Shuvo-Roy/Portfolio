import React, { useEffect, useState } from "react";

const ProjectItem = ({ id, imgUrl, desc, title, tech, link }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = () => {
    setModalOpen(true);
    setModalData({
      id,
      title,
      desc,
      tech,
      link,
    });
  };

  const closeModal = (e) => {
    e.stopPropagation(); //used to prevent an event from propagating through the DOM tree. This means that when an event occurs on a particular element, such as a click event, it can "bubble up" to parent elements in the DOM hierarchy. By calling e.stopPropagation() within an event handler, you can stop this propagation, preventing parent elements from receiving the same event
    setModalOpen(false);
  };

  //scrolling off
  useEffect(() => {
    // Toggle the body's overflow property based on modalOpen state
    document.body.style.overflow = modalOpen ? "hidden" : "auto";

    // Clean up: Reset the overflow property when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  return (
    <div
      className="bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden"
      onClick={openModal}
    >
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-36 md:h-48 object-cover"
      />
      <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-slate-300 dark:bg-slate-900 bg-opacity-50 backdrop-blur flex justify-center items-center lg:w-6/12 w-3/4 m-auto max-h-max rounded-md">
          <div className="dark:bg-slate-700 p-2 rounded">
            <span
              className="absolute top-0 right-0 m-2 text-red-600 text-3xl cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </span>
            <h2 className="text--3xl md:text-3xl mb-2 md:mb-3 md:mt-3 font-semibold text-cyan-500">
              {modalData.title}
            </h2>
            <p className="text-lg md:text-lg mb-2 dark:text-gray-300 text-gray-700">
              {modalData.desc}
            </p>
            <p className="text-base uppercase md:text-base mb-2 md:mb-1 md:mt-1 dark:text-cyan-400 flex items-center justify-start gap-2">
              Technologies used:{" "}
              {modalData.tech.map((item) => (
                <li
                  key={item}
                  className="flex px-2 py-1 bg-slate-100 dark:bg-slate-900 rounded gap-2 text-cyan-600"
                >
                  {item}
                </li>
              ))}{" "}
            </p>
            <p className="inline-block  px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-600 md:text-md">
              <a
                href={modalData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase"
              >
                Project Link
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
