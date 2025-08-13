import React from "react";
import { motion } from "framer-motion";
import ProjectsCard from './ProjectsCard';
import { projectThree, projectOne, projectTwo, projectFive} from "../../assets/index";
import { useLanguage } from '../../contexts/LanguageContext';

const DataScience = () => {
  const { t } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">{t('data_science')}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
            title={t('projects.face_recognition.title')}
            des={t('projects.face_recognition.description')}
            src={projectThree}
            githubLink="https://github.com/Narcisse-sudo/Reconnaissance-faciale"
            websiteLink="https://github.com/Narcisse-sudo/Reconnaissance-faciale"
          />
        <ProjectsCard
            title={t('projects.bank_churn.title')}
            des={t('projects.bank_churn.description')}
            src={projectFive}
            githubLink="https://github.com/Narcisse-sudo/Churn-bank"
            websiteLink="https://github.com/Narcisse-sudo/Churn-bank"
          />
        <ProjectsCard
            title={t('projects.house_pricing.title')}
            des={t('projects.house_pricing.description')}
            src={projectTwo}
            githubLink="https://github.com/Narcisse-sudo/Real-Estate-Price"
            websiteLink="https://github.com/Narcisse-sudo/Real-Estate-Price"
          />
        <ProjectsCard
            title={t('projects.binary_tree.title')}
            des={t('projects.binary_tree.description')}
            src={projectOne}
            githubLink="https://github.com/Narcisse-sudo/Binary-Tree-C-.git"
            websiteLink="https://github.com/Narcisse-sudo/Binary-Tree-C-.git"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default DataScience;