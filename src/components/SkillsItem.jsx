import React from "react";
import Skills from "./Skills";
import skills from "../Data/skillsData.js"
import SectionTitle from "../SectionTitle";

const SkillsItem = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="">
      <SectionTitle>My Web Development Skills</SectionTitle>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
        {skills.map((sets, index) => (
          <Skills key={index} sets={sets} />
        ))}
      </div>
    </div>
  );
};

export default SkillsItem;
