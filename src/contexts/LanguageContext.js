import React, { createContext, useContext, useState } from 'react';

// Traductions
const translations = {
  fr: {
    // Navigation
    home: "Accueil",
    projects: "Projets",
    resume: "Résumé",
    contact: "Contact",
    
    // Banner
    greeting: "Salut, Je suis",
    typewriter: {
      phrase1: "Le data scientist qui allie rigueur d'ingénieur et curiosité de chercheur.",
      phrase2: "Data Scientist.",
      phrase3: "Votre futur collaborateur 😉"
    },
    about: {
      title: "Qui suis je ?",
      description: "Étudiant en master 2 de mathématiques pour l'ingénierie algorithmique et statistique, spécialisé en data scientist et en intelligence artificielle, avec de solide compétences en machine learning, mathématiques et statistiques. Je suis à la recherche d'un contrat d'apprentissage en data scientist de 12 mois dès septembre 2025"
    },
    buttons: {
      cv_fr: "📄 Télécharger mon CV (FR)",
      cv_en: "📄 Télécharger mon CV (EN)",
      github: "💻 Mon GitHub"
    },
    
         // Projects
     projects_title: "Mes Projets",
     data_science: "Data Science",
     python_programming: "Programmation Python",
     // Project descriptions
     projects: {
       face_recognition: {
         title: "Système de pointage par reconnaissance faciale (Computer Vision)",
         description: "Détecter des visages via webcam et reconnaître la personne à l'aide d'un modèle CNN entraîné, avec une interface web de visualisation et un journal des personnes reconnues.\n🔹 Technologies :\n• Vision par ordinateur: OpenCV (détection de visages, capture vidéo, encodage JPEG).\n• Deep Learning: TensorFlow/Keras (CNN de classification multi-classes, sauvegarde .h5).\n• Serveur web: Flask (routes, templates, streaming MJPEG).\n• Évaluation: scikit-learn (accuracy, classification_report, confusion_matrix), matplotlib (visualisation).\n• Outils Python: NumPy (tableaux), h5py (lecture .h5)."
       },
       bank_churn: {
         title: "Banque de désabonnement (Classification)",
         description: "Ce projet a pour but d'analyser les comportements clients dans le secteur bancaire afin de prédire si un client est susceptible de quitter la banque.\n🔹 Technologies : Python, Pandas, Scikit-learn, Matplotlib, Seaborn, Jupyter Notebook, Xgboost, Git"
       },
       house_pricing: {
         title: "Prévision des prix de l'immobilier (Regression)",
         description: "Dans ce projet d'immobilier, l'objectif est de prédire le prix de vente d'une maison à partir de plusieurs caractéristiques liées à la propriété. Cela permet d'aider les acheteurs, vendeurs et agents immobiliers à mieux évaluer la valeur d'une maison en fonction de ses attributs.\n🔹 Technologies : Python 3.13, Scikit-learn, Poetry, Numpy, Pandas, Matplotlib, Seaborn"
       },
       binary_tree: {
         title: "Arbre binaire de recherche",
         description: "Implémentation d'un arbre binaire de recherche en Python avec les opérations de base : insertion, suppression, recherche et parcours.\n🔹 Technologies : Python"
       },
       lost_cities: {
         title: "Epopée des sites perdues",
         description: "Jeu d'aventure textuel en Python où vous incarnez un explorateur chargé de redonner vie à des cités perdues. Gérez vos ressources, explorez des lieux mystérieux, échangez avec des alliés (ou affrontez des ennemis), et sauvegardez votre progression dans un fichier JSON.\n🔹 Technologies : Python, colorama"
       },
       toy_factory: {
         title: "Usine de fabrication de jouets",
         description: "Développer un projet simulant une usine de fabrication de jouets. L'objectif est de créer un programme qui modélise une chaîne de production où les jouets passent par différentes étapes avant d'être finalisés.\n🔹 Technologies : Python"
       }
     },
    
         // Resume
     resume_title: "Mon Résumé",
     education: "Education",
     skills: "Compétences",
     experience: "Expérience",
     achievements: "Réalisations",
     // Resume sections
     resume_sections: {
       education: {
         title: "Education",
         master: "Master 2 en Mathématiques pour l'Ingénierie Algorithmique et Statistique",
         university: "Université de Paris-Saclay",
         period: "2023 - 2025",
         location: "Paris, France",
         description: "Spécialisation en Data Science et Intelligence Artificielle"
       },
       skills: {
         title: "Compétences",
         programming: "LANGAGES DE PROGRAMMATION : Python, SQL, R, C++",
         ml: "MACHINE LEARNING : Scikit-learn, TensorFlow, Keras, XGBoost",
         data: "TRAITEMENT DE DONNÉES : Pandas, NumPy, Matplotlib, Seaborn",
         tools: "OUTILS : Git, Docker, Jupyter Notebook, VS Code"
       },
       experience: {
         title: "Expérience",
         internship: "Stage en Data Science",
         company: "Entreprise Tech",
         period: "2024 - 2024",
         description: "Développement de modèles de prédiction et analyse de données"
       },
       achievements: {
         title: "Réalisations",
         projects: "Projets académiques et personnels en Data Science",
         certifications: "Certifications en Machine Learning"
       }
     },
    
    // Contact
    contact_title: "Contacts",
    contact_subtitle: "Votre prochain atout en data et IA",
    phone: "Téléphone",
    email: "Email",
    github: "Github",
    find_us: "Retrouvons nous",
    
    // Form
    your_name: "Votre Nom",
    your_phone: "Votre Numéro de téléphone (optionnel)",
    subject: "Objet",
    your_message: "Votre Message",
    send: "Envoyer",
    placeholder: "Facultatif",
    
    // Errors
    username_required: "Le nom est requis !",
    email_required: "Veuillez donner votre Email !",
    valid_email: "Donnez un Email valide !",
    subject_required: "Veuillez donner votre Objet !",
    message_required: "Le message est requis !",
    send_error: "Erreur lors de l'envoi du message. Veuillez réessayer.",
    service_unavailable: "Service d'email non disponible. Veuillez réessayer dans quelques secondes.",
    success_message: "Merci {name}, votre message a été envoyé avec succès !"
  },
  en: {
    // Navigation
    home: "Home",
    projects: "Projects",
    resume: "Resume",
    contact: "Contact",
    
    // Banner
    greeting: "Hi, I'm",
    typewriter: {
      phrase1: "The data scientist who combines engineer rigor and researcher curiosity.",
      phrase2: "Data Scientist.",
      phrase3: "Your future collaborator 😉"
    },
    about: {
      title: "Who am I?",
      description: "Master 2 student in mathematics for algorithmic and statistical engineering, specialized in data science and artificial intelligence, with solid skills in machine learning, mathematics and statistics. I am looking for a 12-month apprenticeship contract in data science starting September 2025"
    },
    buttons: {
      cv_fr: "📄 Download my CV (FR)",
      cv_en: "📄 Download my CV (EN)",
      github: "💻 My GitHub"
    },
    
         // Projects
     projects_title: "My Projects",
     data_science: "Data Science",
     python_programming: "Python Programming",
     // Project descriptions
     projects: {
       face_recognition: {
         title: "Facial Recognition Attendance System (Computer Vision)",
         description: "Detect faces via webcam and recognize people using a trained CNN model, with a web visualization interface and a log of recognized people.\n🔹 Technologies:\n• Computer Vision: OpenCV (face detection, video capture, JPEG encoding).\n• Deep Learning: TensorFlow/Keras (multi-class classification CNN, .h5 saving).\n• Web Server: Flask (routes, templates, MJPEG streaming).\n• Evaluation: scikit-learn (accuracy, classification_report, confusion_matrix), matplotlib (visualization).\n• Python Tools: NumPy (arrays), h5py (.h5 reading)."
       },
       bank_churn: {
         title: "Bank Customer Churn (Classification)",
         description: "This project aims to analyze customer behaviors in the banking sector to predict whether a customer is likely to leave the bank.\n🔹 Technologies: Python, Pandas, Scikit-learn, Matplotlib, Seaborn, Jupyter Notebook, Xgboost, Git"
       },
       house_pricing: {
         title: "House Price Prediction (Regression)",
         description: "In this real estate project, the goal is to predict the selling price of a house based on several property-related characteristics. This helps buyers, sellers, and real estate agents better assess the value of a house based on its attributes.\n🔹 Technologies: Python 3.13, Scikit-learn, Poetry, Numpy, Pandas, Matplotlib, Seaborn"
       },
       binary_tree: {
         title: "Binary Search Tree",
         description: "Implementation of a binary search tree in Python with basic operations: insertion, deletion, search and traversal.\n🔹 Technologies: Python"
       },
       lost_cities: {
         title: "Epic of Lost Cities",
         description: "Text adventure game in Python where you play as an explorer tasked with bringing lost cities back to life. Manage your resources, explore mysterious places, trade with allies (or fight enemies), and save your progress in a JSON file.\n🔹 Technologies: Python, colorama"
       },
       toy_factory: {
         title: "Toy Manufacturing Factory",
         description: "Develop a project simulating a toy manufacturing factory. The goal is to create a program that models a production line where toys go through different stages before being finalized.\n🔹 Technologies: Python"
       }
     },
    
         // Resume
     resume_title: "My Resume",
     education: "Education",
     skills: "Skills",
     experience: "Experience",
     achievements: "Achievements",
     // Resume sections
     resume_sections: {
       education: {
         title: "Education",
         master: "Master 2 in Mathematics for Algorithmic and Statistical Engineering",
         university: "University of Paris-Saclay",
         period: "2023 - 2025",
         location: "Paris, France",
         description: "Specialization in Data Science and Artificial Intelligence"
       },
       skills: {
         title: "Skills",
         programming: "PROGRAMMING LANGUAGES: Python, SQL, R, C++",
         ml: "MACHINE LEARNING: Scikit-learn, TensorFlow, Keras, XGBoost",
         data: "DATA PROCESSING: Pandas, NumPy, Matplotlib, Seaborn",
         tools: "TOOLS: Git, Docker, Jupyter Notebook, VS Code"
       },
       experience: {
         title: "Experience",
         internship: "Data Science Internship",
         company: "Tech Company",
         period: "2024 - 2024",
         description: "Development of prediction models and data analysis"
       },
       achievements: {
         title: "Achievements",
         projects: "Academic and personal projects in Data Science",
         certifications: "Machine Learning certifications"
       }
     },
    
    // Contact
    contact_title: "Contacts",
    contact_subtitle: "Your next asset in data and AI",
    phone: "Phone",
    email: "Email",
    github: "Github",
    find_us: "Let's connect",
    
    // Form
    your_name: "Your Name",
    your_phone: "Your Phone Number (optional)",
    subject: "Subject",
    your_message: "Your Message",
    send: "Send",
    placeholder: "Optional",
    
    // Errors
    username_required: "Username is required!",
    email_required: "Please give your Email!",
    valid_email: "Give a valid Email!",
    subject_required: "Please give your Subject!",
    message_required: "Message is required!",
    send_error: "Error sending the message. Please try again.",
    service_unavailable: "Email service unavailable. Please try again in a few seconds.",
    success_message: "Thank you {name}, your message has been sent successfully!"
  }
};

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
