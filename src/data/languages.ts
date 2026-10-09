export interface LanguageConfig {
  code: string;
  name: string;
  nativeName: string;
  script: string;
  speechCode: string;
  flag: string;
  greeting: string;
  region: string;
}

export interface UILabels {
  appTitle: string;
  subtitle: string;
  inputPlaceholder: string;
  send: string;
  stop: string;
  retry: string;
  copy: string;
  copied: string;
  clearChat: string;
  newChat: string;
  online: string;
  curatedTopics: string;
  tapToAsk: string;
  voiceInput: string;
  listening: string;
  readAloud: string;
  speaking: string;
  speechUnavailable: string;
  ttsUnavailable: string;
  planTrip: string;
  exploreDestinations: string;
  viewMap: string;
  searchLanguage: string;
  selectLanguage: string;
  active: string;
  disclaimer: string;
}

// All 22 Scheduled Languages of India (Eighth Schedule) + English + Auto Detect
export const INDIAN_LANGUAGES: LanguageConfig[] = [
  {
    code: 'auto',
    name: 'Auto Detect',
    nativeName: 'स्वचालित पहचान / स्वतः',
    script: 'Multi-Script',
    speechCode: 'en-IN',
    flag: '🇮🇳',
    greeting: 'Namaste! Ask in any of India’s 22 languages.',
    region: 'Pan-India Auto Detection'
  },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    script: 'Latin',
    speechCode: 'en-IN',
    flag: '🌐',
    greeting: 'Namaste! How can I help you explore sustainable India today?',
    region: 'Pan-India & International'
  },
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    script: 'Devanagari',
    speechCode: 'hi-IN',
    flag: '🇮🇳',
    greeting: 'नमस्ते! 🙏 भारत भर में सतत और सांस्कृतिक यात्रा में मैं आपकी क्या मदद कर सकता हूँ?',
    region: 'North & Central India'
  },
  {
    code: 'mr',
    name: 'Marathi',
    nativeName: 'मराठी',
    script: 'Devanagari',
    speechCode: 'mr-IN',
    flag: '🇮🇳',
    greeting: 'नमस्कार! 🙏 भारतभरातील शाश्वत आणि सांस्कृतिक पर्यटनासाठी मी कशी मदत करू शकेन?',
    region: 'Maharashtra & Western India'
  },
  {
    code: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    script: 'Tamil',
    speechCode: 'ta-IN',
    flag: '🇮🇳',
    greeting: 'வணக்கம்! 🙏 இந்தியா முழுவதும் உங்கள் நிலையான பயணத்திற்கு நான் எவ்வாறு உதவ முடியும்?',
    region: 'Tamil Nadu & Puducherry'
  },
  {
    code: 'bn',
    name: 'Bengali',
    nativeName: 'বাংলা',
    script: 'Bengali',
    speechCode: 'bn-IN',
    flag: '🇮🇳',
    greeting: 'নমস্কার! 🙏 ভারতজুড়ে পরিবেশবান্ধব এবং সাংস্কৃতিক ভ্রমণের জন্য আমি কীভাবে সাহায্য করতে পারি?',
    region: 'West Bengal & Tripura'
  },
  {
    code: 'te',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    script: 'Telugu',
    speechCode: 'te-IN',
    flag: '🇮🇳',
    greeting: 'నమస్కారం! 🙏 భారతదేశం అంతటా స్థిరమైన మరియు సాంస్కృతిక పర్యటన కోసం నేను ఎలా సహాయపడగలను?',
    region: 'Andhra Pradesh & Telangana'
  },
  {
    code: 'kn',
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    script: 'Kannada',
    speechCode: 'kn-IN',
    flag: '🇮🇳',
    greeting: 'ನಮಸ್ಕಾರ! 🙏 ಭಾರತದಾದ್ಯಂತ ಸುಸ್ಥಿರ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಪ್ರವಾಸಕ್ಕಾಗಿ ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ?',
    region: 'Karnataka'
  },
  {
    code: 'gu',
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    script: 'Gujarati',
    speechCode: 'gu-IN',
    flag: '🇮🇳',
    greeting: 'નમસ્તે! 🙏 સમગ્ર ભારતમાં પર્યાવરણ-અનુકૂળ અને સાંસ્કૃતિક પ્રવાસ માટે હું કેવી રીતે મદદ કરી શકું?',
    region: 'Gujarat'
  },
  {
    code: 'ml',
    name: 'Malayalam',
    nativeName: 'മലയാളം',
    script: 'Malayalam',
    speechCode: 'ml-IN',
    flag: '🇮🇳',
    greeting: 'നമസ്കാരം! 🙏 ഇന്ത്യയിലുടനീളമുള്ള പരിസ്ഥിതി സൗഹൃദവും സാംസ്കാരികവുമായ യാത്രകൾക്കായി ഞാൻ എങ്ങനെ സഹായിക്കണം?',
    region: 'Kerala & Lakshadweep'
  },
  {
    code: 'pa',
    name: 'Punjabi',
    nativeName: 'ਪੰਜਾਬੀ',
    script: 'Gurmukhi',
    speechCode: 'pa-IN',
    flag: '🇮🇳',
    greeting: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! 🙏 ਭਾਰਤ ਭਰ ਵਿੱਚ ਵਾਤਾਵਰਣ-ਅਨੁਕੂਲ ਅਤੇ ਸੱਭਿਆਚਾਰਕ ਯਾਤਰਾ ਲਈ ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?',
    region: 'Punjab & Chandigarh'
  },
  {
    code: 'or',
    name: 'Odia',
    nativeName: 'ଓଡ଼ିଆ',
    script: 'Odia',
    speechCode: 'or-IN',
    flag: '🇮🇳',
    greeting: 'ନମସ୍କାର! 🙏 ଭାରତବ୍ୟାପୀ ପରିବେଶ-ଅନୁକୂଳ ଏବଂ ସାଂସ୍କୃତିକ ଭ୍ରମଣ ପାଇଁ ମୁଁ ଆପଣଙ୍କୁ କିପରି ସାହାଯ୍ୟ କରିପାରିବି?',
    region: 'Odisha'
  },
  {
    code: 'as',
    name: 'Assamese',
    nativeName: 'অসমীয়া',
    script: 'Eastern Nagari',
    speechCode: 'as-IN',
    flag: '🇮🇳',
    greeting: 'নমস্কাৰ! 🙏 সমগ্ৰ ভাৰতবৰ্ষত পৰিৱেশ-অনুকূল আৰু সাংস্কৃতিক ভ্ৰমণৰ বাবে মই কেনেদৰে সহায় কৰিব পাৰোঁ?',
    region: 'Assam'
  },
  {
    code: 'ur',
    name: 'Urdu',
    nativeName: 'اردو',
    script: 'Perso-Arabic',
    speechCode: 'ur-IN',
    flag: '🇮🇳',
    greeting: 'آداب! 🙏 بھارت بھر میں پائیدار اور ثقافتی سیاحت کے لیے میں آپ کی کیا مدد کر سکتا ہوں؟',
    region: 'Pan-India, J&K, Telangana, UP'
  },
  {
    code: 'sa',
    name: 'Sanskrit',
    nativeName: 'संस्कृतम्',
    script: 'Devanagari',
    speechCode: 'sa-IN',
    flag: '🇮🇳',
    greeting: 'नमस्ते! 🙏 भारतस्य सांस्कृतिक-शाश्वत-पर्यटनाय अहं भवतां कथं साहाय्यं कर्तुं शक्नोमि?',
    region: 'Classical Heritage'
  },
  {
    code: 'ks',
    name: 'Kashmiri',
    nativeName: 'कॉशुर / کٲشُر',
    script: 'Perso-Arabic / Devanagari',
    speechCode: 'ks-IN',
    flag: '🇮🇳',
    greeting: 'سلام / नमस्कार! जम्मु व कश्मीर ते भारत भरस मंज़ सफरुक रहनुमाई कर्यिव हासिल।',
    region: 'Jammu & Kashmir'
  },
  {
    code: 'ne',
    name: 'Nepali',
    nativeName: 'नेपाली',
    script: 'Devanagari',
    speechCode: 'ne-NP',
    flag: '🇮🇳',
    greeting: 'नमस्ते! 🙏 भारतभरि दिगो र सांस्कृतिक यात्राको लागि म कसरी मद्दत गर्न सक्छु?',
    region: 'Sikkim, North Bengal & Hills'
  },
  {
    code: 'kok',
    name: 'Konkani',
    nativeName: 'कोंकणी',
    script: 'Devanagari',
    speechCode: 'kok-IN',
    flag: '🇮🇳',
    greeting: 'नमस्कार! 🙏 भारतांतल्या शाश्वत आणि संस्कृतीक पर्यटना खातीर हांव कशी मजत करूं?',
    region: 'Goa & Konkan Coast'
  },
  {
    code: 'mai',
    name: 'Maithili',
    nativeName: 'मैथिली',
    script: 'Devanagari',
    speechCode: 'mai-IN',
    flag: '🇮🇳',
    greeting: 'प्रणाम! 🙏 भारत भरमे पर्यावरण-अनुकूल आ सांस्कृतिक यात्राक लेल हम कोना मदद कऽ सकैत छी?',
    region: 'Bihar & Mithila Region'
  },
  {
    code: 'sd',
    name: 'Sindhi',
    nativeName: 'सिंधी / سنڌي',
    script: 'Devanagari / Perso-Arabic',
    speechCode: 'sd-IN',
    flag: '🇮🇳',
    greeting: 'जय झूलेलाल! 🙏 भारत भर में पहिंजी सुहणी यात्रा जे लाए मां कियां मदद कयां?',
    region: 'Western India Diaspora'
  },
  {
    code: 'doi',
    name: 'Dogri',
    nativeName: 'डोगरी',
    script: 'Devanagari',
    speechCode: 'doi-IN',
    flag: '🇮🇳',
    greeting: 'नमस्ते! 🙏 भारत भरै च पर्यावरण-अनुकूल ते सांस्कृतिक सैर-सपाटे लेई मैं केह् मदद करी सकना?',
    region: 'Jammu Region'
  },
  {
    code: 'mni',
    name: 'Manipuri (Meitei)',
    nativeName: 'মৈতৈলোন্',
    script: 'Bengali / Meetei Mayek',
    speechCode: 'mni-IN',
    flag: '🇮🇳',
    greeting: 'খুরুমজরি! 🙏 ভারত শিনবা থুংনা চৎন-লোনচৎ অমসুং মহৌশাগী খোঙচৎকীদমক ঐনা করম্না মতেং পাংগদগে?',
    region: 'Manipur'
  },
  {
    code: 'brx',
    name: 'Bodo',
    nativeName: 'बर\'',
    script: 'Devanagari',
    speechCode: 'brx-IN',
    flag: '🇮🇳',
    greeting: 'खुलुमबाय! 🙏 भारताव थासारि-मोजां आरो हारिमुखि दावबायनायाव आं बोरै हेफाजाब होनो हागोन?',
    region: 'Bodoland / Assam'
  },
  {
    code: 'sat',
    name: 'Santali',
    nativeName: 'ᱥᱟᱱᱛᱟᱲᱤ',
    script: 'Ol Chiki',
    speechCode: 'sat-IN',
    flag: '🇮🇳',
    greeting: 'ᱡᱚᱦᱟᱨ! 🙏 ᱵᱷᱟᱨᱚᱛ ᱡᱟᱠᱟᱛ ᱨᱮ ᱥᱟᱥᱛᱷᱤᱠ ᱟᱨ ᱥᱟᱸᱜᱷᱟᱨ ᱫᱟᱬᱟᱸᱱ ᱞᱟᱹᱜᱤᱫ ᱤᱧ ᱪᱮᱫ ᱞᱮᱠᱟᱧ ᱜᱚᱲᱚ ᱫᱟᱲᱮᱭᱟᱜ-ᱟ?',
    region: 'Jharkhand, Odisha & West Bengal'
  }
];

// Rich UI Localization Dictionaries
export const UI_LOCALIZATION: Record<string, UILabels> = {
  en: {
    appTitle: 'SARTHI AI Assistant',
    subtitle: 'Pan-India Sustainable & Cultural Tourism Companion',
    inputPlaceholder: 'Ask in any Indian language about eco-tours, homestays, impact score...',
    send: 'Send',
    stop: 'Stop Generating',
    retry: 'Retry',
    copy: 'Copy',
    copied: 'Copied!',
    clearChat: 'Clear Chat',
    newChat: 'New Chat',
    online: 'Online & Available',
    curatedTopics: 'Curated Travel Topics',
    tapToAsk: 'Tap any prompt to ask',
    voiceInput: 'Voice Input',
    listening: 'Listening to your voice...',
    readAloud: 'Read Aloud',
    speaking: 'Speaking...',
    speechUnavailable: 'Speech recognition is not supported in this browser.',
    ttsUnavailable: 'Audio voice synthesis is not supported in this browser.',
    planTrip: 'Open AI Trip Planner',
    exploreDestinations: 'Explore Destinations',
    viewMap: 'View on Map',
    searchLanguage: 'Search language or script...',
    selectLanguage: 'Select Language (22 Official + English)',
    active: 'Active',
    disclaimer: 'SARTHI AI estimates are based on verified models. Live tariffs & permits are subject to seasonal changes.'
  },
  hi: {
    appTitle: 'सारथी एआई सहायक',
    subtitle: 'अखिल भारतीय सतत एवं सांस्कृतिक पर्यटन साथी',
    inputPlaceholder: 'पारिस्थितिक यात्रा, होमस्टे, इम्पैक्ट स्कोर या धरोहर के बारे में पूछें...',
    send: 'भेजें',
    stop: 'रोकें',
    retry: 'पुनः प्रयास',
    copy: 'कॉपी करें',
    copied: 'कॉपी हो गया!',
    clearChat: 'बातचीत साफ़ करें',
    newChat: 'नई बातचीत',
    online: 'सक्रिय एवं उपलब्ध',
    curatedTopics: 'चयनित यात्रा विषय',
    tapToAsk: 'पूछने के लिए टैप करें',
    voiceInput: 'आवाज से बोलें',
    listening: 'आपकी आवाज सुनी जा रही है...',
    readAloud: 'बोलकर सुनाएँ',
    speaking: 'बोला जा रहा है...',
    speechUnavailable: 'इस ब्राउज़र में ध्वनि पहचान समर्थित नहीं है।',
    ttsUnavailable: 'इस भाषा के लिए ऑडियो आवाज़ उपलब्ध नहीं है।',
    planTrip: 'एआई ट्रिप प्लानर खोलें',
    exploreDestinations: 'गंतव्य देखें',
    viewMap: 'मानचित्र पर देखें',
    searchLanguage: 'भाषा या लिपि खोजें...',
    selectLanguage: 'भाषा चुनें (22 अनुसूचित + अंग्रेज़ी)',
    active: 'सक्रिय',
    disclaimer: 'सारथी एआई अनुमान सत्यापित डेटा पर आधारित हैं। दरों व परमिट की पुष्टि स्थानीय स्तर पर करें।'
  },
  mr: {
    appTitle: 'सारथी एआय सहाय्यक',
    subtitle: 'अखिल भारतीय शाश्वत आणि सांस्कृतिक पर्यटन साथीदार',
    inputPlaceholder: 'पर्यावरण-पूरक प्रवास, होमस्टे, इम्पॅक्ट स्कोर किंवा वारशाबद्दल विचारा...',
    send: 'पाठवा',
    stop: 'थांबवा',
    retry: 'पुन्हा प्रयत्न करा',
    copy: 'कॉपी करा',
    copied: 'कॉपी झाले!',
    clearChat: 'संभाषण साफ करा',
    newChat: 'नवीन संभाषण',
    online: 'सक्रिय आणि उपलब्ध',
    curatedTopics: 'निवडक पर्यटन विषय',
    tapToAsk: 'विचारण्यासाठी टॅप करा',
    voiceInput: 'आवाज इनपुट',
    listening: 'ऐकत आहे...',
    readAloud: 'मोठ्याने वाचा',
    speaking: 'वाचत आहे...',
    speechUnavailable: 'या ब्राऊझरमध्ये व्हॉइस ओळख उपलब्ध नाही.',
    ttsUnavailable: 'या आवाजासाठी ऑडिओ उपलब्ध नाही.',
    planTrip: 'एआय सहल नियोजन उघडा',
    exploreDestinations: 'ठिकाणे शोधा',
    viewMap: 'नकाशावर पहा',
    searchLanguage: 'भाषा किंवा लिपी शोधा...',
    selectLanguage: 'भाषा निवडा (२२ अधिकृत + इंग्रजी)',
    active: 'सक्रिय',
    disclaimer: 'सारथी एआय अंदाज प्रमाणित मॉडेल्सवर आधारित आहेत. दर आणि परवानग्या ऋतुमानानुसार बदलू शकतात.'
  },
  ta: {
    appTitle: 'சாரதி AI உதவியாளர்',
    subtitle: 'அனைத்து இந்திய நிலையான மற்றும் கலாச்சார பயண துணை',
    inputPlaceholder: 'சுற்றுச்சூழல் சுற்றுலா, ஹோம்ஸ்டே, தாக்க மதிப்பெண் பற்றி கேளுங்கள்...',
    send: 'அனுப்பு',
    stop: 'நிறுத்து',
    retry: 'மீண்டும் முயற்சி',
    copy: 'நகலெடு',
    copied: 'நகலெடுக்கப்பட்டது!',
    clearChat: 'அரட்டையை அழிக்கவும்',
    newChat: 'புதிய அரட்டை',
    online: 'ஆன்லைனில் உள்ளது',
    curatedTopics: 'தேர்ந்தெடுக்கப்பட்ட பயணத் தலைப்புகள்',
    tapToAsk: 'கேட்க தட்டவும்',
    voiceInput: 'குரல் உள்ளீடு',
    listening: 'கேட்கிறது...',
    readAloud: 'சத்தமாகப் படிக்கவும்',
    speaking: 'பேசுகிறது...',
    speechUnavailable: 'இந்த உலாவியில் குரல் உள்ளீடு ஆதரிக்கப்படவில்லை.',
    ttsUnavailable: 'ஆடியோ குரல் கிடைக்கவில்லை.',
    planTrip: 'பயண திட்டமிடுபவரைத் திறக்கவும்',
    exploreDestinations: 'இடங்களை ஆராய்க',
    viewMap: 'வரைபடத்தில் காண்க',
    searchLanguage: 'மொழியைத் தேடுங்கள்...',
    selectLanguage: 'மொழியைத் தேர்ந்தெடுக்கவும்',
    active: 'செயலில்',
    disclaimer: 'சாரதி AI மதிப்பீடுகள் சரிபார்க்கப்பட்ட மாதிரிகளை அடிப்படையாகக் கொண்டவை.'
  },
  bn: {
    appTitle: 'সারথি এআই সহায়ক',
    subtitle: 'সর্বভারতীয় টেকসই ও সাংস্কৃতিক ভ্রমণ সহযোগী',
    inputPlaceholder: 'ইকো-ট্যুর, হোমস্টে, ইমপ্যাক্ট স্কোর বা ঐতিহ্য সম্পর্কে জিজ্ঞাসা করুন...',
    send: 'পাঠান',
    stop: 'থামুন',
    retry: 'পুনরায় চেষ্টা',
    copy: 'কপি করুন',
    copied: 'কপি হয়েছে!',
    clearChat: 'চ্যাট মুছুন',
    newChat: 'নতুন চ্যাট',
    online: 'অনলাইনে সক্রিয়',
    curatedTopics: 'নির্বাচিত ভ্রমণের বিষয়',
    tapToAsk: 'জিজ্ঞাসা করতে ট্যাপ করুন',
    voiceInput: 'ভয়েস ইনপুট',
    listening: 'শুনছি...',
    readAloud: 'পড়ে শোনান',
    speaking: 'বলছি...',
    speechUnavailable: 'এই ব্রাউজারে ভয়েস শনাক্তকরণ সমর্থিত নয়।',
    ttsUnavailable: 'অডিও উপলব্ধ নয়।',
    planTrip: 'ট্যুর প্ল্যানার খুলুন',
    exploreDestinations: 'গন্তব্য অন্বেষণ করুন',
    viewMap: 'মানচিত্রে দেখুন',
    searchLanguage: 'ভাষা অনুসন্ধান করুন...',
    selectLanguage: 'ভাষা নির্বাচন করুন',
    active: 'সক্রিয়',
    disclaimer: 'সারথি এআই অনুমানগুলি যাচাইকৃত ডেটার ওপর ভিত্তি করে।'
  },
  te: {
    appTitle: 'సారథి AI సహాయకుడు',
    subtitle: 'భారతదేశ స్థిరమైన మరియు సాంస్కృతిక పర్యాటక సహచరుడు',
    inputPlaceholder: 'పర్యావరణ పర్యటనలు, హోమ్‌స్టేలు, ప్రభావ స్కోర్ గురించి అడగండి...',
    send: 'పంపండి',
    stop: 'ఆపండి',
    retry: 'మళ్లీ ప్రయత్నించండి',
    copy: 'కాపీ చేయండి',
    copied: 'కాపీ చేయబడింది!',
    clearChat: 'చాట్‌ను క్లియర్ చేయండి',
    newChat: 'కొత్త చాట్',
    online: 'ఆన్‌లైన్‌లో ఉంది',
    curatedTopics: 'ఎంచుకున్న ప్రయాణ అంశాలు',
    tapToAsk: 'అడగడానికి నొక్కండి',
    voiceInput: 'వాయిస్ ఇన్‌పుట్',
    listening: 'వింటున్నాము...',
    readAloud: 'చదివి వినిపించండి',
    speaking: 'మాట్లాడుతున్నాము...',
    speechUnavailable: 'ఈ బ్రౌజర్‌లో వాయిస్ గుర్తింపు మద్దతు లేదు.',
    ttsUnavailable: 'ఆడియో అందుబాటులో లేదు.',
    planTrip: 'ట్రిప్ ప్లానర్‌ను తెరవండి',
    exploreDestinations: 'గమ్యస్థానాలను అన్వేషించండి',
    viewMap: 'మ్యాప్‌లో చూడండి',
    searchLanguage: 'భాషను శోధించండి...',
    selectLanguage: 'భాషను ఎంచుకోండి',
    active: 'క్రియాశీలకంగా ఉంది',
    disclaimer: 'సారథి AI అంచనాలు ధృవీకరించబడిన డేటా ఆధారంగా రూపొందించబడ్డాయి.'
  },
  kn: {
    appTitle: 'ಸಾರಥಿ AI ಸಹಾಯಕ',
    subtitle: 'ಅಖಿಲ ಭಾರತ ಸುಸ್ಥಿರ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಪ್ರವಾಸ ಸಂಗಾತಿ',
    inputPlaceholder: 'ಪರಿಸರ ಪ್ರವಾಸಗಳು, ಹೋಂಸ್ಟೇಗಳು, ಇಂಪ್ಯಾಕ್ಟ್ ಸ್ಕೋರ್ ಬಗ್ಗೆ ಕೇಳಿ...',
    send: 'ಕಳುಹಿಸಿ',
    stop: 'ನಿಲ್ಲಿಸಿ',
    retry: 'ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ',
    copy: 'ನಕಲಿಸಿ',
    copied: 'ನಕಲಿಸಲಾಗಿದೆ!',
    clearChat: 'ಚಾಟ್ ತೆರವುಗೊಳಿಸಿ',
    newChat: 'ಹೊಸ ಚಾಟ್',
    online: 'ಆನ್‌ಲೈನ್‌ನಲ್ಲಿದೆ',
    curatedTopics: 'ಆಯ್ದ ಪ್ರವಾಸ ವಿಷಯಗಳು',
    tapToAsk: 'ಕೇಳಲು ಟ್ಯಾಪ್ ಮಾಡಿ',
    voiceInput: 'ಧ್ವನಿ ಇನ್‌ಪುಟ್',
    listening: 'ಕೇಳಿಸಿಕೊಳ್ಳುತ್ತಿದ್ದೇವೆ...',
    readAloud: 'ಓದಿ ಹೇಳಿ',
    speaking: 'ಹೇಳುತ್ತಿದ್ದೇವೆ...',
    speechUnavailable: 'ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಧ್ವನಿ ಗುರುತಿಸುವಿಕೆ ಬೆಂಬಲಿತವಾಗಿಲ್ಲ.',
    ttsUnavailable: 'ಆಡಿಯೋ ಲಭ್ಯವಿಲ್ಲ.',
    planTrip: 'ಟ್ರಿಪ್ ಪ್ಲಾನರ್ ತೆರೆಯಿರಿ',
    exploreDestinations: 'ತಾಣಗಳನ್ನು ಅನ್ವೇಷಿಸಿ',
    viewMap: 'ನಕ್ಷೆಯಲ್ಲಿ ವೀಕ್ಷಿಸಿ',
    searchLanguage: 'ಭಾಷೆಯನ್ನು ಹುಡುಕಿ...',
    selectLanguage: 'ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    active: 'ಸಕ್ರಿಯವಾಗಿದೆ',
    disclaimer: 'ಸಾರಥಿ AI ಅಂದಾಜುಗಳು ಪರಿಶೀಲಿಸಿದ ಮಾದರಿಗಳ ಮೇಲೆ ಆಧಾರಿತವಾಗಿವೆ.'
  },
  gu: {
    appTitle: 'સારથિ AI સહાયક',
    subtitle: 'અખિલ ભારતીય ટકાઉ અને સાંસ્કૃતિક પ્રવાસ સાથી',
    inputPlaceholder: 'પર્યાવરણ-અનુકૂળ પ્રવાસ, હોમસ્ટે, ઇમ્પેક્ટ સ્કોર વિશે પૂછો...',
    send: 'મોકલો',
    stop: 'રોકો',
    retry: 'ફરી પ્રયાસ કરો',
    copy: 'કૉપિ કરો',
    copied: 'કૉપિ થયું!',
    clearChat: 'ચેટ સાફ કરો',
    newChat: 'નવી ચેટ',
    online: 'ઑનલાઇન અને સક્રિય',
    curatedTopics: 'પસંદ કરેલા પ્રવાસ વિષયો',
    tapToAsk: 'પૂછવા માટે ટૅપ કરો',
    voiceInput: 'અવાજ ઇનપુટ',
    listening: 'સાંભળી રહ્યા છીએ...',
    readAloud: 'મોટેથી વાંચો',
    speaking: 'બોલી રહ્યા છીએ...',
    speechUnavailable: 'આ બ્રાઉઝરમાં અવાજ ઓળખ ઉપલબ્ધ નથી.',
    ttsUnavailable: 'ઑડિયો અવાજ ઉપલબ્ધ નથી.',
    planTrip: 'ટ્રિપ પ્લાનર ખોલો',
    exploreDestinations: 'સ્થળો શોધો',
    viewMap: 'નકશા પર જુઓ',
    searchLanguage: 'ભાષા શોધો...',
    selectLanguage: 'ભાષા પસંદ કરો',
    active: 'સક્રિય',
    disclaimer: 'સારથિ AI અંદાજો ચકાસાયેલ મોડેલો પર આધારિત છે.'
  },
  ml: {
    appTitle: 'സാരഥി AI അസിസ്റ്റന്റ്',
    subtitle: 'അഖിലേന്ത്യാ സുസ്ഥിര-സാംസ്കാരിക യാത്രാ സഹായി',
    inputPlaceholder: 'ഇക്കോ-ടൂറുകൾ, ഹോംസ്റ്റേകൾ, ഇംപാക്ട് സ്കോർ എന്നിവയെക്കുറിച്ച് ചോദിക്കുക...',
    send: 'അയക്കുക',
    stop: 'നിർത്തുക',
    retry: 'വീണ്ടും ശ്രമിക്കുക',
    copy: 'പകർത്തുക',
    copied: 'പകർത്തി!',
    clearChat: 'ചാറ്റ് മായ്‌ക്കുക',
    newChat: 'പുതിയ ചാറ്റ്',
    online: 'ഓൺലൈൻ',
    curatedTopics: 'യാത്രാ വിഷയങ്ങൾ',
    tapToAsk: 'ചോദിക്കാൻ ടാപ്പ് ചെയ്യുക',
    voiceInput: 'വോയ്‌സ് ഇൻപുട്ട്',
    listening: 'കേൾക്കുന്നു...',
    readAloud: 'വായിക്കുക',
    speaking: 'സംസാരിക്കുന്നു...',
    speechUnavailable: 'വോയ്‌സ് തിരിച്ചറിയൽ പിന്തുണയ്ക്കുന്നില്ല.',
    ttsUnavailable: 'ഓഡിയോ ലഭ്യമല്ല.',
    planTrip: 'ട്രിപ്പ് പ്ലാനർ തുറക്കുക',
    exploreDestinations: 'സ്ഥലങ്ങൾ കണ്ടെത്തുക',
    viewMap: 'മാപ്പിൽ കാണുക',
    searchLanguage: 'ഭാഷ തിരയുക...',
    selectLanguage: 'ഭാഷ തിരഞ്ഞെടുക്കുക',
    active: 'സജീവം',
    disclaimer: 'സാരഥി AI എസ്റ്റിമേറ്റുകൾ പരിശോധിച്ച മോഡലുകളെ അടിസ്ഥാനമാക്കിയുള്ളതാണ്.'
  },
  pa: {
    appTitle: 'ਸਾਰਥੀ AI ਸਹਾਇਕ',
    subtitle: 'ਸਰਬ ਭਾਰਤੀ ਟਿਕਾਊ ਅਤੇ ਸੱਭਿਆਚਾਰਕ ਯਾਤਰਾ ਸਾਥੀ',
    inputPlaceholder: 'ਈਕੋ-ਟੂਰ, ਹੋਮਸਟੇਅ, ਇੰਪੈਕਟ ਸਕੋਰ ਜਾਂ ਵਿਰਾਸਤ ਬਾਰੇ ਪੁੱਛੋ...',
    send: 'ਭੇਜੋ',
    stop: 'ਰੋਕੋ',
    retry: 'ਮੁੜ ਕੋਸ਼ਿਸ਼',
    copy: 'ਕਾਪੀ ਕਰੋ',
    copied: 'ਕਾਪੀ ਹੋ ਗਿਆ!',
    clearChat: 'ਗੱਲਬਾਤ ਸਾਫ਼ ਕਰੋ',
    newChat: 'ਨਵੀਂ ਗੱਲਬਾਤ',
    online: 'ਔਨਲਾਈਨ ਸਰਗਰਮ',
    curatedTopics: 'ਯਾਤਰਾ ਵਿਸ਼ੇ',
    tapToAsk: 'ਪੁੱਛਣ ਲਈ ਟੈਪ ਕਰੋ',
    voiceInput: 'ਆਵਾਜ਼ ਇਨਪੁਟ',
    listening: 'ਸੁਣ ਰਿਹਾ ਹੈ...',
    readAloud: 'ਬੋਲ ਕੇ ਸੁਣਾਓ',
    speaking: 'ਬੋਲ ਰਿਹਾ ਹੈ...',
    speechUnavailable: 'ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਆਵਾਜ਼ ਪਛਾਣ ਸਮਰਥਿਤ ਨਹੀਂ ਹੈ।',
    ttsUnavailable: 'ਆਡੀਓ ਆਵਾਜ਼ ਉਪਲਬਧ ਨਹੀਂ ਹੈ।',
    planTrip: 'ਟ੍ਰਿਪ ਪਲਾਨਰ ਖੋਲ੍ਹੋ',
    exploreDestinations: 'ਸਥਾਨ ਦੇਖੋ',
    viewMap: 'ਨਕਸ਼ੇ ਤੇ ਦੇਖੋ',
    searchLanguage: 'ਭਾਸ਼ਾ ਖੋਜੋ...',
    selectLanguage: 'ਭਾਸ਼ਾ ਚੁਣੋ',
    active: 'ਸਰਗਰਮ',
    disclaimer: 'ਸਾਰਥੀ AI ਅੰਦਾਜ਼ੇ ਪ੍ਰਮਾਣਿਤ ਡੇਟਾ ਤੇ ਆਧਾਰਿਤ ਹਨ।'
  }
};

export function getUILabels(langCode: string): UILabels {
  const code = langCode.toLowerCase();
  return UI_LOCALIZATION[code] || UI_LOCALIZATION['en'];
}

// Script-level auto-detection for Indian Languages
export function detectIndianLanguage(input: string): LanguageConfig {
  const text = input.trim();
  if (!text) return INDIAN_LANGUAGES[0]; // Auto

  // Devanagari range: \u0900-\u097F
  if (/[\u0900-\u097F]/.test(text)) {
    // Check Marathi specific patterns
    if (/\b(आहे|नाही|कसे|पर्यटन|तुम्ही|मला|करा|जावे|ठिकाणे|सहली|नकाशा|महाराष्ट्र|किल्ले)\b/i.test(text) || /[ळ]/i.test(text)) {
      return INDIAN_LANGUAGES.find(l => l.code === 'mr')!;
    }
    // Check Sanskrit markers
    if (/\b(भवन्तः|अहम्|कथम्|अस्ति|पर्यटनम्|नमः|शान्तिः)\b/i.test(text)) {
      return INDIAN_LANGUAGES.find(l => l.code === 'sa')!;
    }
    // Check Nepali markers
    if (/\b(छ|छैन|कसरी|गर्नु|नेपाल|सिक्किम)\b/i.test(text)) {
      return INDIAN_LANGUAGES.find(l => l.code === 'ne')!;
    }
    // Default Devanagari to Hindi
    return INDIAN_LANGUAGES.find(l => l.code === 'hi')!;
  }

  // Tamil: \u0B80-\u0BFF
  if (/[\u0B80-\u0BFF]/.test(text)) {
    return INDIAN_LANGUAGES.find(l => l.code === 'ta')!;
  }

  // Telugu: \u0C00-\u0C7F
  if (/[\u0C00-\u0C7F]/.test(text)) {
    return INDIAN_LANGUAGES.find(l => l.code === 'te')!;
  }

  // Kannada: \u0C80-\u0CFF
  if (/[\u0C80-\u0CFF]/.test(text)) {
    return INDIAN_LANGUAGES.find(l => l.code === 'kn')!;
  }

  // Malayalam: \u0D00-\u0D7F
  if (/[\u0D00-\u0D7F]/.test(text)) {
    return INDIAN_LANGUAGES.find(l => l.code === 'ml')!;
  }

  // Gujarati: \u0A80-\u0AFF]
  if (/[\u0A80-\u0AFF]/.test(text)) {
    return INDIAN_LANGUAGES.find(l => l.code === 'gu')!;
  }

  // Gurmukhi (Punjabi): \u0A00-\u0A7F
  if (/[\u0A00-\u0A7F]/.test(text)) {
    return INDIAN_LANGUAGES.find(l => l.code === 'pa')!;
  }

  // Bengali / Assamese: \u0980-\u09FF
  if (/[\u0980-\u09FF]/.test(text)) {
    if (/[ৰৱ]/.test(text)) {
      return INDIAN_LANGUAGES.find(l => l.code === 'as')!;
    }
    return INDIAN_LANGUAGES.find(l => l.code === 'bn')!;
  }

  // Odia: \u0B00-\u0B7F
  if (/[\u0B00-\u0B7F]/.test(text)) {
    return INDIAN_LANGUAGES.find(l => l.code === 'or')!;
  }

  // Perso-Arabic (Urdu / Kashmiri): \u0600-\u06FF
  if (/[\u0600-\u06FF]/.test(text)) {
    return INDIAN_LANGUAGES.find(l => l.code === 'ur')!;
  }

  // Ol Chiki (Santali): \u1C50-\u1C7F
  if (/[\u1C50-\u1C7F]/.test(text)) {
    return INDIAN_LANGUAGES.find(l => l.code === 'sat')!;
  }

  // Romanized Hinglish checks
  if (/\b(kya|kaise|kaha|kahan|jaana|batao|kripya|namaste|shukriya|accha|acha|madad|trip|ghumne)\b/i.test(text)) {
    return INDIAN_LANGUAGES.find(l => l.code === 'hi')!;
  }

  // Romanized Marathi checks
  if (/\b(kasa|kase|ahe|nahi|sang|bhet|maharashtra|kuthe|kay)\b/i.test(text)) {
    return INDIAN_LANGUAGES.find(l => l.code === 'mr')!;
  }

  // Default to English
  return INDIAN_LANGUAGES.find(l => l.code === 'en')!;
}
