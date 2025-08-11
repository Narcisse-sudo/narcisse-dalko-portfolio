/*import React from "react";
import { motion } from "framer-motion";
import ProjectsCard from './ProjectsCard';
import {projectTen, ProjectWebScraping} from "../../assets/index";
//import spanishCerfificate from '../../assets/reports/spanishCerfificate.pdf';

const DataEngineering = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Data Engineering</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Pipeline de prédiction des prix des cryptomonnaies. (déploiement sur Azure Kubernetes)."
            des={`Ce projet vise à développer un système complet de prédiction à court terme des prix des cryptomonnaies, en utilisant des données en temps réel et des techniques de machine learning.
              
              🔹 Technologies : Python, XGBoost, Sckit-learn, Docker, Kubernetes, Azure, Github Actions, REST APIs, Streamlit
              `}
            src={projectTen}
            githubLink="https://github.com/ChrisEssomba/App1CloudComputing"
            websiteLink="https://github.com/ChrisEssomba/App1CloudComputing"
          />
          <ProjectsCard
            title="Outil d’extraction automatisée des données de la Premier League. (Web Scraping)"
            des={`Un outil de web scraping qui extrait des statistiques de la Premier League (classements, données des joueurs, résultats des matchs) en utilisant Scrapy et Selenium pour le contenu dynamique. Les données collectées sont stockées aux formats CSV et JSON pour l’analyse.

              🔹 Technologies : Python, Scrapy, Selenium, ChromeDriver, Pandas, Numpy, API, Git
              `}
            src={ProjectWebScraping}
            githubLink="https://github.com/ChrisEssomba/Premier-League-Data-Scraper"
            websiteLink="https://github.com/ChrisEssomba/Premier-League-Data-Scraper"
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default DataEngineering;*/