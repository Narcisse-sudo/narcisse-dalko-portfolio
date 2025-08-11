import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - Present</p>
          <h2 className="text-4xl font-bold">Engagement associatif</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Les Petits Débrouillards"
            subTitle="(05/2025 - Actuel) "
            
            des="Membre – Les Petits Débrouillards, j’anime et participe à des ateliers ludiques et pédagogiques pour initier les jeunes aux sciences et à la technologie, en favorisant la curiosité, l’expérimentation et l’apprentissage par la pratique."
          />
          <ResumeCard
            title="Association des Élèves et Étudiants de la Commune de Natitingou (Bénin)"
            subTitle="(2021 - 2023) "
            
            des="Membre adhérent, nous accompagnons des bacheliers dans leur intégration universitaire."
          />
      
        </div>
      </div>
     
      
    </motion.div>
  );
};

export default Achievement;
