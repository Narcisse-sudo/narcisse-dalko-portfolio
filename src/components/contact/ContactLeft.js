import React from 'react';
import { FaLinkedinIn, FaFilePdf, FaGraduationCap,FaLanguage } from 'react-icons/fa';
import { SiGithub, SiGmail } from 'react-icons/si';
import { contactImg } from '../../assets/index';
import cv from '../../assets/reports/Narcisse_DALKO_cv.pdf';
//import certificat_espagnol from '../../assets/reports/certificat_espagnol.pdf'
//import TOEIC_Essomba_Chris from '../../assets/reports/TOEIC_Essomba_Chris.pdf' 

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-5 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contact"
        loading="lazy"
        decoding="async"
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-3xl font-bold text-white">Narcisse DALKO</h3>
        <p className="text-lg font-normal text-gray-400">Data Scientist</p>
        <p className="text-base text-gray-400 tracking-wide">Votre prochain atout en data et IA</p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+33 secret 🤫</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">dalkonarcisse19@gmail.com</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Github: <span className="text-lightText">https://github.com/Narcisse-sudo</span>
        </p>
      </div>
      <div className="flex flex-col gap-0">
        <h2 className="text-base uppercase font-titleFont mb-4">Retrouvons nous</h2>
        <div className="flex gap-4">
          <span className="bannerIcon" style={{ cursor: 'pointer' }}>
            <a href="https://github.com/Narcisse-sudo" target="_blank" rel="noopener noreferrer">
              <SiGithub />
            </a>
          </span>
          <span className="bannerIcon" style={{ cursor: 'pointer' }}>
            <a href="mailto:dalkonarcisse19@gmail.com">
              <SiGmail />
            </a>
          </span>
          <span className="bannerIcon" style={{ cursor: 'pointer' }}>
            <a href="https://www.linkedin.com/in/narcisse-dalko-ab070b2a4" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon" style={{ cursor: 'pointer' }}>
            <a href={cv} target="_blank" rel="noopener noreferrer">
              <FaFilePdf />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
