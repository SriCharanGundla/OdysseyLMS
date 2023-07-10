import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleItemClick = (index) => {
    setOpenIndexes((prevState) => {
      if (prevState.includes(index)) {
        return prevState.filter((i) => i !== index);
      } else {
        return [...prevState, index];
      }
    });
  };

  return (
    <div className="w-full mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            type="button"
            onClick={() => handleItemClick(index)}
            className="flex items-center justify-between w-full px-4 py-4 my-1 text-sm font-medium text-left rounded-md text-black bg-teal-300 focus:outline-none focus:shadow-outline-blue"
          >
            <span>{item.section_name}</span>
            <span className="ml-6 flex-shrink-0">
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d={
                    openIndexes.includes(index)
                      ? "M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      : "M6.293 11.293a1 1 0 011.414 0L10 13.586l2.293-2.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  }
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          {openIndexes.includes(index) && (
            <div className="flex-col items-center justify-between w-full px-4 py-4 font-medium text-left relative bg-indigo-200">
              <p className="text-blue-500 py-2 text-lg">{item.section_text}</p>
              <p className="text-orange-500 py-2 text-md">{item.video_title}</p>

              <iframe
                width="450"
                height="250"
                src={item.video_url}
                title="YouTube video player"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
