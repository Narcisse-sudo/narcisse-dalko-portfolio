import React,{useState, useEffect} from 'react'
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import { useLanguage } from '../../contexts/LanguageContext';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const { t } = useLanguage();

  // Charger EmailJS depuis CDN
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      console.log('📧 EmailJS script chargé');
      if (window.emailjs) {
        console.log('📧 EmailJS disponible, initialisation...');
        window.emailjs.init('XocQedMZstS-nHuGV');
        console.log('📧 EmailJS initialisé avec la clé:', 'XocQedMZstS-nHuGV');
      } else {
        console.error('❌ EmailJS non disponible après chargement');
      }
    };
    script.onerror = () => {
      console.error('❌ Erreur lors du chargement d\'EmailJS');
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  };
  // ========== Email Validation end here ================

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg(t('username_required'));
    } else if (email === "") {
      setErrMsg(t('email_required'));
    } else if (!emailValidation(email)) {
      setErrMsg(t('valid_email'));
    } else if (subject === "") {
      setErrMsg(t('subject_required'));
    } else if (message === "") {
      setErrMsg(t('message_required'));
    } else {
      // Configuration EmailJS avec vos vraies clés
      const templateParams = {
        name: username,
        email: email,
        phone: phoneNumber || "Non renseigné", // Valeur par défaut si vide
        subject: subject,
        message: message,
        // Variables alternatives au cas où le template utilise des noms différents
        from_name: username,
        from_email: email,
        phone_number: phoneNumber || "Non renseigné", // Valeur par défaut si vide
        message_subject: subject,
        user_message: message
      };

      // Envoyer l'email via EmailJS
      console.log('📧 Tentative d\'envoi d\'email...');
      console.log('📧 EmailJS disponible:', !!window.emailjs);
      console.log('📧 Paramètres:', templateParams);
      
      if (window.emailjs) {
        console.log('📧 Envoi via EmailJS...');
        window.emailjs.send(
          'service_rvqcgcg', // Votre Service ID
          'template_677dmbm', // Votre Template ID (corrigé)
          templateParams
        )
        .then((response) => {
          console.log('✅ SUCCESS!', response.status, response.text);
          setSuccessMsg(t('success_message').replace('{name}', username));
          setErrMsg("");
          setUsername("");
          setPhoneNumber("");
          setEmail("");
          setSubject("");
          setMessage("");
        })
        .catch((err) => {
          console.error('❌ FAILED...', err);
          console.error('❌ Erreur détaillée:', err.text || err.message || err);
          setErrMsg(t('send_error'));
          setSuccessMsg("");
        });
      } else {
        console.error('❌ EmailJS non disponible');
        setErrMsg(t('service_unavailable'));
      }
    }
  };
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="" des={t('contact_title')} />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    {t('your_name')}
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${
                      errMsg === "Username is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    {t('your_phone')}
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className="contactInput"
                    type="text"
                    placeholder={t('placeholder')}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  {t('email')}
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === "Please give your Email!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  {t('subject')}
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  {t('your_message')}
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactTextArea`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  {t('send')}
                </button>
              </div>
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact