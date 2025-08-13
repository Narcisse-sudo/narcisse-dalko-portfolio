import React from "react";
import ProjectsCard from './ProjectsCard';
import {projectFour, projectSix} from "../../assets/index";
import { useLanguage } from '../../contexts/LanguageContext';

const ProgrammationPython = () => {
  const { t } = useLanguage();
  
  return (
    <div className="py-6 font-titleFont">
      <div className="py-6 font-titleFont flex flex-col gap-4">
        <h2 className="text-4xl font-bold">{t('python_programming')}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title={t('projects.lost_cities.title')}
          des={t('projects.lost_cities.description')}
          src={projectFour}
          githubLink="https://github.com/Narcisse-sudo/Epopee_des_cites_perdues"
          websiteLink="https://github.com/Narcisse-sudo/Epopee_des_cites_perdues"
        />
        <ProjectsCard
          title={t('projects.toy_factory.title')}
          des={t('projects.toy_factory.description')}
          src={projectSix}
          githubLink="https://github.com/Narcisse-sudo/Usine_de_fabrication"
          websiteLink="https://github.com/Narcisse-sudo/Usine_de_fabrication"
        />
      </div>
    </div>
  );
};

export default ProgrammationPython;