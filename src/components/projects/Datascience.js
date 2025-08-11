import React from "react";
import { motion } from "framer-motion";
import ProjectsCard from './ProjectsCard';
import { projectThree, projectOne, projectTwo, projectFive} from "../../assets/index";

const DataScience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Data Science</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
            title=" Système de pointage par reconnaissance faciale (Computer Vision)"
            des={`Détecter des visages via webcam et reconnaître la personne à l’aide d’un modèle CNN entraîné, avec une interface web de visualisation et un journal des personnes reconnues.

              🔹 Technologies : 
                     • Vision par ordinateur: OpenCV (détection de visages, capture vidéo, encodage JPEG).
                     • Deep Learning: TensorFlow/Keras (CNN de classification multi-classes, sauvegarde .h5).
                     • Serveur web: Flask (routes, templates, streaming MJPEG).
                     • Évaluation: scikit-learn (accuracy, classification_report, confusion_matrix), matplotlib (visualisation).
                     • Outils Python: NumPy (tableaux), h5py (lecture .h5).    
              `}
            src={projectThree}
            githubLink="https://github.com/Narcisse-sudo/Reconnaissance-faciale"
            websiteLink="https://github.com/Narcisse-sudo/Reconnaissance-faciale"
          />
        <ProjectsCard
            title="Banque de désabonnement (Classification)"
            des={`Ce projet a pour mais d' analyser les comportements clients dans le secteur bancaire afin de prédire si un client est susceptible de quitter la banque
            
              🔹 Technologies :
                     Python, Pandas, Scikit-learn, Matplotlib, Seaborn, Jupyter Notebook, Xgboost, Git 
              `}
            src={projectFive}
            githubLink="https://github.com/Narcisse-sudo/Churn-bank"
            websiteLink="https://github.com/Narcisse-sudo/Churn-bank"
          />
        <ProjectsCard
            title="Prévision des prix de l'immobilier (Regression)"
            des={`Dans ce projet d'immobilier, l'objectif est de prédire le prix de vente d'une maison  à partir de plusieurs caractéristiques liées à la propriété. Cela permet d'aider les acheteurs, vendeurs et agents immobiliers à mieux évaluer la valeur d'une maison en fonction de ses attributs
              
              🔹 Technologies : 
                    Python 3.13, Sckit-learn, Poetry, Numpy, Pandas, Matplotlib,  Searborn
              `}
            src={projectTwo}
            githubLink="https://github.com/Narcisse-sudo/Real-Estate-Price"
            websiteLink="https://github.com/Narcisse-sudo/Real-Estate-Price"
          />
        <ProjectsCard
            title="Arbres de décision et prédiction par bagging d’arbres en C++"
            des={`Ce projet a pour objectif de concevoir et d’implémenter en C++ un modèle d’arbre binaire de décision capable de traiter des données quantitatives et qualitatives, tant en classification qu’en régression.
              
              🔹 Technologies : C++, Graphviz
              `}
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