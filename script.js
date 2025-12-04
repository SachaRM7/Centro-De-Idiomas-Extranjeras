const translations = {
    fr: {
        title: "Centre de Langues Étrangères",
        heroTitle: "FRANÇAIS ET ANGLAIS, COMME À LA MAISON !",
        heroSubtitle: "Cours pour adultes ou jeunes avec des professeurs natifs, certifiés et professionnels.",
        cta: "Contactez-nous",
        card1Title: "Enseignants natifs et qualifiés",
        card1Text: "Possédant une vaste expérience dans l'enseignement des langues. Profitez de cours dynamiques et personnalisés axés sur vos objectifs, ou rejoignez un groupe pour suivre le rythme de nos étudiants.",
        card2Title: "Cours sur mesure : débutant → avancé",
        card2Text: "Progressez rapidement grâce à une méthodologie pratique et dynamique. Préparez-vous en toute confiance aux examens internationaux et obtenez de vrais résultats.",
        card3Title: "Améliorez votre CV",
        card3Text: "Maîtrisez une nouvelle langue et excellez dans le monde professionnel et personnel. Elle ouvre la voie à de nouvelles opportunités académiques et culturelles.",
        aboutTitle: "Qui sommes-nous :",
        aboutText: "Une institution dédiée à l'enseignement personnalisé au Pérou.",
        examPrep: "PRÉPAREZ AVEC NOUS VOS EXAMENS"
    },
    es: {
        title: "Centro de Idiomas Extranjeras",
        heroTitle: "¡FRANCÉS E INGLÉS COMO EN CASA!",
        heroSubtitle: "Clases por adultos o jóvenes con profesores nativos, diplomados y profesionales.",
        cta: "Llámenos",
        card1Title: "Profesores nativos y altamente calificados",
        card1Text: "Con amplia experiencia en la enseñanza de idiomas. Disfruta de clases dinámicas, personalizadas y enfocadas en tus metas o únete a un grupo para seguir el paso con nuestros alumnos.",
        card2Title: "Cursos adaptados : principiante → avanzado",
        card2Text: "Avanza rápidamente con una metodología práctica y dinámica. Prepárate con confianza para exámenes internacionales y alcanza resultados reales.",
        card3Title: "Mejora tu CV y tus oportunidades",
        card3Text: "Domina un nuevo idioma y destaca en el mundo laboral y personal. Abre las puertas a nuevas oportunidades académicas y culturales.",
        aboutTitle: "Quiénes somos :",
        aboutText: "Una institución dedicada a la enseñanza personalizada en Perú.",
        examPrep: "PREPARA TU"
    },
    en: {
        title: "Foreign Language Center",
        heroTitle: "FRENCH AND ENGLISH, JUST LIKE HOME!",
        heroSubtitle: "Classes for adults or youth with native, certified, and professional teachers.",
        cta: "Contact Us",
        card1Title: "Native & Highly Qualified Teachers",
        card1Text: "Possessing extensive experience in language teaching. Enjoy dynamic and personalized classes focused on your goals, or join a group to keep pace with our students.",
        card2Title: "Tailored Courses: Beginner → Advanced",
        card2Text: "Progress quickly thanks to a practical and dynamic methodology. Prepare with confidence for international exams and achieve real results.",
        card3Title: "Boost your CV & Opportunities",
        card3Text: "Master a new language and excel in the professional and personal world. It opens the way to new academic and cultural opportunities.",
        aboutTitle: "Who are we:",
        aboutText: "An institution dedicated to personalized learning in Peru.",
        examPrep: "PREPARE WITH US FOR"
    },
    ru: {
        title: "Центр Иностранных Языков",
        heroTitle: "ФРАНЦУЗСКИЙ И АНГЛИЙСКИЙ КАК ДОМА!",
        heroSubtitle: "Курсы для взрослых и детей с носителями языка.",
        cta: "Свяжитесь с нами",
        card1Title: "Квалифицированные носители",
        card1Text: "Большой опыт преподавания. Динамичные и персонализированные уроки, ориентированными на ваши цели, или присоединяйтесь к группе.",
        card2Title: "Индивидуальные курсы",
        card2Text: "Быстрый прогресс благодаря практической и динамичной методике. С уверенностью готовьтесь к международным экзаменам.",
        card3Title: "Улучшите свое резюме",
        card3Text: "Освойте новый язык и добейтесь успеха в профессиональном и личном мире. Это открывает путь к новым академическим и культурным возможностям.",
        aboutTitle: "Кто мы:",
        aboutText: "Учебное заведение в Перу с индивидуальным подходом.",
        examPrep: "ПОДГОТОВЬТЕСЬ К ЭКЗАМЕНАМ"
    },
    ar: {
        title: "مركز اللغات الأجنبية",
        heroTitle: "الفرنسية والإنجليزية، تماماً كما في المنزل!",
        heroSubtitle: "دروس للكبار والشباب مع مدرسين ناطقين أصليين ومحترفين.",
        cta: "اتصل بنا",
        card1Title: "مدرسون أصليون ومؤهلون",
        card1Text: "خبرة واسعة في التدريس. استمتع بصفوف ديناميكية ومخصصة تركز على أهدافك، أو انضم إلى مجموعة لمواكبة طلابنا.",
        card2Title: "دورات مخصصة: مبتدئ → متقدم",
        card2Text: "تقدم بسرعة بمنهجية عملية وديناميكية. استعد بثقة للامتحانات الدولية وحقق نتائج حقيقية.",
        card3Title: "حسّن سيرتك الذاتية وفرصك",
        card3Text: "أتقن لغة جديدة وتميز في العالم المهني والشخصي. إنها تفتح الطريق أمام فرص أكاديمية وثقافية جديدة.",
        aboutTitle: "من نحن:",
        aboutText: "مؤسسة مكرسة للتعليم الشخصي في بيرو.",
        examPrep: "استعد معنا لامتحانات"
    }
};

// Fonction principale pour changer la langue
function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    const elements = document.querySelectorAll('[data-i18n]');
    
    // Gestion RTL (Right to Left) pour l'arabe
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }

    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

// --- NOUVEAU : DÉTECTION AUTOMATIQUE ---
function autoDetectLanguage() {
    // 1. Récupère la langue du navigateur (ex: "fr-FR", "en-US", "es-PE")
    const userLang = navigator.language || navigator.userLanguage;
    
    // 2. On ne garde que les 2 premières lettres (ex: "es-PE" devient "es")
    let langCode = userLang.substring(0, 2).toLowerCase();

    // 3. Liste des langues que votre site supporte
    const supportedLangs = Object.keys(translations); // ['fr', 'es', 'en', 'ru', 'ar']

    // 4. Si la langue détectée n'est pas dans la liste, on met le français par défaut
    if (!supportedLangs.includes(langCode)) {
        langCode = 'fr'; 
    }

    // 5. On met à jour le sélecteur et on applique la langue
    const selectElement = document.getElementById('languageSelect');
    if (selectElement) {
        selectElement.value = langCode;
        changeLanguage(); // Lance la traduction
    }
}

// Lance la détection une fois que la page est chargée
document.addEventListener('DOMContentLoaded', autoDetectLanguage);
