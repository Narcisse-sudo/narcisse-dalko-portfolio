import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2025</p>
          <h2 className="text-4xl font-bold">Experiences professionelles</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Stage Data Scientist (2 mois)"
            subTitle="RightCom BENIN, Bénin"
            des={`objectif: Développer des modèles prédictifs robustes pour l’analyse de données clients
              
              Missions: 
                • Traitement d’un jeu de données clients: gestion des valeurs manquantes, normalisation des variables, et création de features temporelles
                • Optimisation des performances
                • Implémentation d’un algorithme de recommandation (Random Forest et XGBoost) pour segmenter les clients
                • Automatisation du pipeline pour un déploiement hebdomadaire
          
              Outil: Python, Pandas, Scikit-learn, Jupyter, Git
`}

          />
           <ResumeCard
            title="Enseignant en Mathématiques (7 Mois)"
            subTitle="Collège Franco-Arabe de Zongo, Bénin"
            des={`Objectif : Conception d’un programme adapté en pédagogie innovante

              Mission:
                •Collaboration avec une équipe pluridisciplinaire
                •Encadrement des élèves
                
                
              Resultats: Taux de réussite de 93% aux examens nationaux
              `}
          />
        
        </div>
      </div>
      
    </motion.div>
  );
};
 /**
  *          <ResumeCard
            title="Stage Developpeur Commercial (2 Mois)"
            subTitle="IKADRAN [Jun-Aout 2023]"
          
            des="Apprendre les techniques de prospection commerciale et les mettre en œuvre pour atteindre les objectifs de vente."
          />
  * <ResumeCard
            title="Stage Analyste de crédit (3 Mois)"
            subTitle="Commercial Bank Cameroon [Jun-Aout 2021]"
            
            des="T

            Acquérir des compétences analytiques pointues, notamment dans l'analyse des dossiers de crédit bancaire, ainsi que des compétences en communication.
                      Taches :
          •Réalisation supervisée des rapports de
          contre analyse
          •Rédaction des procès verbaux
          •Présentation des rapports réalisés"
          />*/
export default Experience;
