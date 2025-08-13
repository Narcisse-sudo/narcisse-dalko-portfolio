import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';
import { useLanguage } from '../../contexts/LanguageContext';

const Education = () => {
  const { t } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">{t('resume_sections.education.title')}</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title={t('resume_sections.education.master')}
            subTitle={t('resume_sections.education.university')}
            des={t('resume_sections.education.description')}
          />
           <ResumeCard
            title="Master 1, Mathématiques pour l'Ingénierie, Algorithmique et Statistique"
            subTitle="Université de Bourgogne Europe | Bourse d'excellence EIFFEL (Sept 2024 - Mai 2025 )"
            des={`Concepts développés : Python, R, C++, SQL, mathématiques appliquées, algorithmie, optimisation, base de donnée, analyse des données, statistique.`}
          />
          <ResumeCard
            title="Licence, Mathématiques et Applications"
            subTitle="Université d'Abomey-Calavi (sept 2022 - Juin 2023)"
            des={`Compétences acquises : programmation C++, R, algèbre, topologie, statistique inférentielle, calcul scientifique`}
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Attestations & Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" Formation ML-Pro "
            subTitle="Guillaume Saint-Cirgue - (05/2025 - En cours)"
            result="Online"
            des="Formation complète avec plusieurs modules (machine learning, deep learning, mathématiques et statistiques, cloud, IA générative, gestion de projet, big data)"
          />
          <ResumeCard
            title="Ecole d'été sur l'intellignece artificielle "
            subTitle="ONG Bénin Excellence - (05/2024 - 06/2024) [1 mois]"
            result="En présentielle"
            des="Formation d'introduction à l'IA, machine learning, python, robotique."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education