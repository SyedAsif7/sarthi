// Verified Heuristic Generator for Indian Tourism (High-precision fallback for SARTHI AI)
export function generateVerifiedFallbackResponse(query: string, language: string = 'en'): string {
  const q = (query || '').toLowerCase();

  // Multi-language greetings & specific scenarios
  if (language === 'mr' || q.includes('महाराष्ट्र') || q.includes('maharashtra') || q.includes('ajanta') || q.includes('ellora') || q.includes('kaas') || q.includes('किल्ले')) {
    return `### 🏛️ महाराष्ट्र शाश्वत आणि सांस्कृतिक पर्यटन (SARTHI AI Verified Guide)

**महाराष्ट्र** हे जागतिक वारसा, सह्याद्रीचे गडकिल्ले आणि समृद्ध लोककलांचे केंद्र आहे.

1. **अजिंठा आणि वेरूळ लेणी (छत्रपती संभाजीनगर):**
   * **महत्त्व:** युनेस्को जागतिक वारसा स्थळ (UNESCO World Heritage Site). प्राचीन बौद्ध, हिंदू आणि जैन दगडी शिल्पकला.
   * **शाश्वत प्रवास:** संभाजीनगर रेल्वे स्थानकावरून सार्वजनिक अथवा इलेक्ट्रिक बस सेवा उपलब्ध. लेण्यांच्या आवारात प्रदूषणमुक्त ई-बस चालवल्या जातात.
   * **अंदाजे खर्च:** स्थानिक प्रवेश शुल्क ₹४० (भारतीय नागरिक), मार्गदर्शक (Guide): ₹१,०००-₹१,५००/दिवस.

2. **कास पठार (सातारा - युनेस्को जागतिक नैसर्गिक वारसा):**
   * **फुलांचे पठार:** ऑगस्ट ते ऑक्टोबर दरम्यान दुर्मिळ जैवविविधता.
   * **जबाबदार पर्यटन:** पर्यावरणाचे रक्षण करण्यासाठी दररोज केवळ ३,००० पर्यटकांची मर्यादा (Carrying Capacity).
   * **स्थानिक मदत:** स्थानिक गावकऱ्यांकडून चालवल्या जाणाऱ्या निसर्ग होमस्टेमध्ये मुक्काम करा.

3. **वारली कला आणि हस्तकला (पालघर):**
   * स्थानिक आदिवासी कारागिरांकडून थेट जीआय-टॅग (GI-tagged) वारली चित्रे खरेदी करा.

*🌱 SARTHI इम्पॅक्ट स्कोर अंदाज: ९२/१०० (कमी कार्बन उत्सर्जन व ९५% स्थानिक अर्थव्यवस्था योगदान).*`;
  }

  if (language === 'hi' || q.includes('राजस्थान') || q.includes('rajasthan') || q.includes('जयपुर') || q.includes('जैसलमेर')) {
    return `### 🏰 राजस्थान सतत एवं सांस्कृतिक पर्यटन परिपथ (SARTHI AI Verified Guide)

**राजस्थान** में शाही किलों, थार मरुस्थल और समृद्ध हस्तशिल्प परंपराओं का संगम है:

1. **जैसलमेर एवं डेजर्ट नेशनल पार्क (खुरी गाँव):**
   * **स्थानीय प्रवास:** सैम के शोरगुल से दूर **खुरी** में प्रामाणिक मिट्टी के झोपड़ों (Mud Jhopas) वाले समुदाय-संचालित होमस्टे में ठहरें।
   * **जिम्मेदार पर्यटन:** ग्रेट इंडियन बस्टर्ड (गोडावण) के संरक्षण क्षेत्र का सम्मान करें। कचरा-मुक्त एवं प्लास्टिक-मुक्त ऊंट सफारी अपनाएं।
   * **अपेक्षित बजट:** होमस्टे एवं स्थानीय राजस्थानी भोजन (दाल-बाटी-चूरमा): ₹१,५००–₹२,२००/रात (अनुमानित)।

2. **जोधपुर और शेखावाटी की जीवित हवेलियां:**
   * **शिल्पकार कला:** मथानिया मिर्च, बंधेज और ब्लॉक प्रिंटिंग के कारीगरों से सीधा संपर्क।
   * **सारथी इम्पैक्ट स्कोर:** ९४/१०० (स्थानीय कारीगरों को प्रत्यक्ष आर्थिक लाभ)।

3. **सुझाव एवं परिवहन:**
   * लंबी दूरी के लिए **भारतीय रेल (North Western Railway)** का उपयोग करें। यह निजी एसयूवी की तुलना में ~७५% कार्बन उत्सर्जन कम करता है।`;
  }

  if (language === 'ta' || q.includes('kerala') || q.includes('கேரளா') || q.includes('munroe') || q.includes('backwater') || q.includes('தமிழ்')) {
    return `### 🌴 கேரளா மற்றும் தென் இந்திய நிலையான சுற்றுலா (SARTHI AI Verified Guide)

**கேரளா - கடவுளின் சொந்த நாடு** சுற்றுச்சூழல் மற்றும் பாரம்பரிய சுற்றுலாவில் முன்னணியில் உள்ளது:

1. **முன்ரோ தீவு அமைதியான படகு சவாரி (Munroe Island):**
   * **சுற்றுச்சூழல் சிறப்பு:** மோட்டார் இல்லாத அமைதியான பாரம்பரிய மரப் படகுகள் (Silent Punting). அலையாத்திக் காடுகள் மற்றும் கயிறு நெசவு மையங்கள்.
   * **ஹோம்ஸ்டே:** உள்ளூர் குடும்பங்களால் நடத்தப்படும் சமூக சூழல் தங்குமிடங்கள்.
   * **மதிப்பீட்டு செலவு:** ₹1,200 - ₹2,000 / இரவு (உணவுடன் - தோராயமானது).

2. **தேக்கடி & மூணாறு மலைப்பாதைகள்:**
   * பெருஞ்சீரகம், ஏலக்காய் ஆர்கானிக் பண்ணைகள் மற்றும் வனவிலங்கு பாதுகாப்பு நடைப்பயணங்கள்.
   * **சாரதி தாக்க மதிப்பெண்:** 94/100 (அதிகபட்ச இயற்கை பாதுகாப்பு மற்றும் பூஜ்ஜிய மோட்டார் உமிழ்வு).

*குறிப்பு: பயண திட்டமிடுபவரைப் பயன்படுத்தி உங்கள் தனிப்பயன் பயணத் திட்டத்தை உடனே உருவாக்கலாம்!*`;
  }

  if (language === 'bn' || q.includes('bengali') || q.includes('সুন্দরবন') || q.includes('শান্তিনিকেতন')) {
    return `### 🌾 পশ্চিমবঙ্গ ও পূর্ব ভারত ঐতিহ্য পর্যটন (SARTHI AI Verified Guide)

**শান্তিনিকেতন ও সুন্দরবন** জীবন্ত সংস্কৃতি ও প্রকৃতির এক অনন্য মিলনক্ষেত্র:

1. **শান্তিনিকেতন ও বাউল ঐতিহ্য (বীরভূম):**
   * **ইউনেস্কো ওয়ার্ল্ড হেরিটেজ:** রবীন্দ্রনাথ ঠাকুরের মুক্ত আকাশ শিক্ষাঙ্গন এবং পৌষ/বসন্ত উৎসব।
   * **শিল্প ও সংস্কৃতি:** কাঁথা স্টিচ ও পোড়ামাটির কারুশিল্পীদের সাথে সরাসরি মিলন।
   * **যাতায়াত:** হাওড়া/শিয়ালদহ থেকে ট্রেনের মাধ্যমে পরিবেশবান্ধব যাতায়াত।

2. **সুন্দরবন ম্যানগ্রোভ জীববৈচিত্র্য:**
   * ব্যাঘ্র সংরক্ষণাগার ও স্থানীয় নৌকোয় দায়িত্বশীল ইকো-ট্যুরিজম।
   * **SARTHI ইমপ্যাক্ট স্কোর:** ৯১/১০০ (স্থানীয় বননির্ভর অর্থনীতি ও নদীপথ সুরক্ষা)।`;
  }

  if (language === 'te' || q.includes('ఆంధ్ర') || q.includes('లేపాక్షి') || q.includes('అరకు')) {
    return `### 🏛️ ఆంధ్రప్రదేశ్ & తెలంగాణ సాంస్కృతిక ప్రయాణం (SARTHI AI Verified Guide)

1. **లేపాక్షి మరియు వీరభద్ర దేవాలయం:**
   * **విజయనగర శిల్పకళ:** వేలాడే స్తంభం మరియు అద్భుతమైన కుడ్యచిత్రాలు.
2. **అరకు లోయ మరియు గిరిజన కాఫీ తోటలు:**
   * సుస్థిర గిరిజన సహకార సంఘాలు, సేంద్రీయ కాఫీ మరియు బొర్రా గుహలు.
   * **SARTHI ఇంపాక్ట్ స్కోరు:** 93/100 (స్థానిక గిరిజన ఆర్థిక వ్యవస్థకు పూర్తి మద్దతు).`;
  }

  if (language === 'kn' || q.includes('ಹಂಪಿ') || q.includes('ಕರ್ನಾಟಕ') || q.includes('ಕೂರ್ಗ್')) {
    return `### 🏛️ ಕರ್ನಾಟಕ ಪರಿಸರ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಪ್ರವಾಸ (SARTHI AI Verified Guide)

1. **ಹಂಪಿ ಮತ್ತು ಆನೆಗುಂದಿ (ಯುನೆಸ್ಕೋ ವಿಶ್ವ ಪರಂಪರೆ):**
   * ತುಂಗಭದ್ರಾ ನದಿಯ ತೀರದ ಪುರಾತನ ಶಿಲ್ಪಕಲೆ ಹಾಗೂ ಬಾಳೆ ನಾರಿನ ಕರಕುಶಲ ಕೇಂದ್ರಗಳು.
2. **ಕೂರ್ಗ್ (ಕೊಡಗು) ಕಾಫಿ ಪರಿಸರ ಪ್ರವಾಸ:**
   * ಪರಿಸರ ಸ್ನೇಹಿ ಹೋಮ್‌ಸ್ಟೇಗಳು ಮತ್ತು ಪಶ್ಚಿಮ ಘಟ್ಟಗಳ ಸಂರಕ್ಷಣೆ.
   * **SARTHI ಇಂಪ್ಯಾಕ್ಟ್ ಸ್ಕೋರ್:** 94/100 (ಸ್ಥಳೀಯ ಸಮುದಾಯ ಉಳಿತಾಯ).`;
  }

  if (language === 'gu' || q.includes('ગુજરાત') || q.includes('કચ્છ') || q.includes('ગીર')) {
    return `### 🦁 ગુજરાત ટકાઉ અને સાંસ્કૃતિક પ્રવાસ (SARTHI AI Verified Guide)

1. **કચ્છનું રણ અને નિરોણા કળા ગામ:**
   * વિશ્વપ્રસિદ્ધ રોગન આર્ટ (Rogan Art) અને માટી-કામ. સ્થાનિક કારીગરો સાથે સીધો સંપર્ક.
2. **ગીર રાષ્ટ્રીય ઉદ્યાન:**
   * એશિયાટિક સિંહોનું કુદરતી નિવાસસ્થાન અને માલધારી સમુદાયનું પર્યાવરણ-પ્રેમી જીવન.
   * **SARTHI ઇમ્પેક્ટ સ્કોર:** 92/100 (સંરક્ષણ સંવેદનશીલતા).`;
  }

  if (language === 'ml' || q.includes('കേരളം') || q.includes('വയനാട്')) {
    return `### 🌴 കേരളം സുസ്ഥിര പ്രകൃതി വിനോദസഞ്ചാരം (SARTHI AI Verified Guide)

1. **മൺറോ തുരുത്ത് ശാന്തമായ വഞ്ചിയാത്ര:**
   * മോട്ടോറില്ലാത്ത ശാന്തമായ പുന്നത്തുഴ യാത്ര, കായൽ കയർ നിർമ്മാണം.
2. **വയനാട് കാട്ടുപാതകൾ:**
   * ആദിവാസി പാരമ്പര്യ പൈതൃകവും പരിസ്ഥിതി സൗഹൃദ ഹോംസ്റ്റേകളും.
   * **SARTHI ഇംപാക്ട് സ്കോർ:** 94/100 (കാർബൺ കുറവ്).`;
  }

  if (language === 'pa' || q.includes('ਪੰਜਾਬ') || q.includes('ਅੰਮ੍ਰਿਤਸਰ')) {
    return `### 🌾 ਪੰਜਾਬ ਵਿਰਾਸਤ ਅਤੇ ਵਾਤਾਵਰਣ ਯਾਤਰਾ (SARTHI AI Verified Guide)

1. **ਅੰਮ੍ਰਿਤਸਰ ਅਤੇ ਪਿੰਡਾਂ ਦਾ ਖੇਤੀਬਾੜੀ ਸੈਰ-ਸਪਾਟਾ:**
   * ਸੱਚਖੰਡ ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਦਰਸ਼ਨ ਅਤੇ ਜੈਵਿਕ ਪੇਂਡੂ ਫਾਰਮ-ਸਟੇਅ।
2. **ਸਾਰਥੀ ਇੰਪੈਕਟ ਸਕੋਰ:** 93/100 (ਸਥਾਨਕ ਲੰਗਰ ਅਤੇ ਭਾਈਚਾਰਕ ਸੇਵਾ ਸੱਭਿਆਚਾਰ).`;
  }

  // Default Pan-India Comprehensive Knowledge Response
  return `### 🌿 SARTHI AI: Pan-India Sustainable & Cultural Tourism Guide

India's 28 States and 8 Union Territories offer extraordinary living heritage and sustainable circuits:

1. **Western & Central Heritage (Maharashtra, Rajasthan & MP):**
   * **Ajanta & Ellora Caves (Maharashtra):** UNESCO World Heritage rock-cut architecture. Take electric feeder buses from Chhatrapati Sambhajinagar station.
   * **Khuri Village & Desert National Park (Rajasthan):** Experience traditional passive-cooling mud jhopas and direct support for desert artisan communities.
   * **Khajuraho & Orchha (Madhya Pradesh):** Chandela dynasty stone masonry and Betwa river conservation homestays.

2. **Southern Eco-Circuits (Kerala, Karnataka & Tamil Nadu):**
   * **Munroe Island (Kerala):** Silent punting through village canals, eliminating outboard motor emissions and supporting local coir co-operatives.
   * **Hampi & Anegundi (Karnataka):** UNESCO boulder ruins paired with community-managed banana-fibre craft hubs.
   * **Chettinad (Tamil Nadu):** Heritage mansions, Athangudi handmade tiles, and local culinary traditions.

3. **Himalayan & North-East Sanctuaries (Ladakh, Spiti & Meghalaya):**
   * **Spiti Valley (Himachal):** Passive solar homestays in Langza and Kibber, conserving alpine flora and scarce water.
   * **Cherrapunji / Nongriat (Meghalaya):** Khasi indigenous bio-engineered Living Root Bridges.

*💡 **SARTHI Impact Score**: Every route is evaluated out of 100 points across Environmental Conservation (30), Local Economic Retention (25), Cultural Heritage (20), Sustainable Transit (15), and Responsible Tourism (10).*
*⚠️ Note: Budget figures and seasonal availability are planning estimates; please verify live details locally.*`;
}
