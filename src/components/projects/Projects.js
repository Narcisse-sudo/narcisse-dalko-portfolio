import React, { useState } from 'react';
import Title from '../layouts/Title';
import DataScience from './Datascience';
import ProgrammationPython from './ProgrammationPython';
import { useLanguage } from '../../contexts/LanguageContext';

const Projects = () => {
  const [dataScienceData, setDataScienceData] = useState(true);
  const [ProgrammationPythonData, setProgrammationPythonData] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title des={t('projects_title')} />
      </div>
      <div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log("🔴 Data Science clicked");
              setDataScienceData(true);
              setProgrammationPythonData(false);
            }}
            className={`${
              dataScienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
            style={{
              backgroundColor: dataScienceData ? "#1e293b" : "#374151",
              color: "white",
              padding: "20px",
              cursor: "pointer",
              border: "2px solid " + (dataScienceData ? "#3b82f6" : "#6b7280"),
              fontSize: "16px",
              fontWeight: "bold"
            }}
          >
            {t('data_science')}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log("🔵 Programmation Python clicked");
              setDataScienceData(false);
              setProgrammationPythonData(true);
            }}
            className={`${
              ProgrammationPythonData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
            style={{
              backgroundColor: ProgrammationPythonData ? "#1e293b" : "#374151",
              color: "white",
              padding: "20px",
              cursor: "pointer",
              border: "2px solid " + (ProgrammationPythonData ? "#3b82f6" : "#6b7280"),
              fontSize: "16px",
              fontWeight: "bold"
            }}
          >
            {t('python_programming')}
          </button>
        </div>
      </div>
      


      {dataScienceData && <DataScience />}
      {ProgrammationPythonData && <ProgrammationPython />}
    </section>
  );
};

export default Projects;