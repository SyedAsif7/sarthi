// Verified High-Precision Knowledge Engine for Indian Sustainable Tourism (Pure ES Module for Node server)

export function generateVerifiedFallbackResponse(query, language = 'en') {
  const q = (query || '').toLowerCase().trim();
  const cleanQ = q.replace(/[^\w\s\u0900-\u0D7F]/g, '').trim();

  // 1. CONVERSATIONAL GREETINGS (hi, hello, namaste, नमस्ते, नमस्कार, etc.)
  const isGreeting = /^(hi+|hello+|hey+|namaste+|namaskar+|pranam+|vanakkam+|khammaghani+|hola+|greetings+|नमस्ते+|नमस्कार+|प्रणाम+|வணக்கம்+|নমস্কার+|নমস্কার|जोहार+|सलाम+|good\s*(morning|evening|afternoon))$/i.test(cleanQ);

  if (isGreeting) {
    if (language === 'hi' || cleanQ.includes('नमस्ते') || cleanQ.includes('प्रणाम')) {
      return `नमस्ते! 🙏 मैं **सारथी AI (SARTHI AI)** हूँ—भारत का आपका बुद्धिमान सतत एवं सांस्कृतिक यात्रा साथी।

मैं आपकी इन विषयों में सहायता कर सकता हूँ:
• 🗺️ आपके बजट और पसंद के अनुसार **पर्यावरण-अनुकूल यात्रा कार्यक्रम (Eco Itineraries)** तैयार करना
• 🏡 प्रमाणित **समुदाय-संचालित ग्रामीण होमस्टे** खोजना जो सीधे स्थानीय परिवारों को सशक्त बनाते हैं
• 🌿 पारदर्शी **सारथी इम्पैक्ट स्कोर** के साथ हरित यात्रा विकल्पों का मूल्यांकन करना
• 🎨 सभी २८ राज्यों और ८ केंद्र शासित प्रदेशों में **जीवंत सांस्कृतिक धरोहर, जीआई हस्तशिल्प और स्थानीय व्यंजनों** की खोज करना

आप भारत में कहाँ की यात्रा करना चाहते हैं, या आज मैं आपकी क्या सहायता कर सकता हूँ?`;
    }

    if (language === 'mr' || cleanQ.includes('नमस्कार')) {
      return `नमस्कार! 🙏 मी **सारथी AI (SARTHI AI)** आहे—भारतातील शाश्वत आणि सांस्कृतिक पर्यटनासाठी आपला बुद्धिमान AI प्रवासी मित्र.

मी आपल्याला पुढील गोष्टींमध्ये मदत करू शकतो:
• 🗺️ आपल्या बजेटनुसार **पर्यावरणपूरक सहलींचे वैयक्तिकृत नियोजन (Eco Itineraries)**
• 🏡 स्थानिक ग्रामस्थांना आर्थिक हातभार लावणारे **प्रमाणित होमस्टे**
• 🌿 **सारथी इम्पॅक्ट स्कोर** सह पर्यावरणपूरक प्रवासाची निवड
• 🎨 **ऐतिहासिक किल्ले, लेणी, वारली कला आणि समृद्ध लोकसंस्कृतीची** माहिती

आपण कुठे प्रवास करू इच्छिता, किंवा मी आज आपली काय मदत करू शकतो?`;
    }

    if (language === 'bn' || cleanQ.includes('নমস্কার')) {
      return `নমস্কার! 🙏 আমি **সারথি এআই (SARTHI AI)**—ভারতের টেকসই ও সাংস্কৃতিক পর্যটনের জন্য আপনার নির্ভরযোগ্য এআই সঙ্গী।

আমি আপনাকে কীভাবে সাহায্য করতে পারি:
• 🗺️ আপনার বাজেট ও দিন অনুযায়ী **পরিবেশ-বান্ধব ভ্রমণ পরিকল্পনা (Eco Itinerary)** তৈরি করা
• 🏡 গ্রামীণ সম্প্রদায়ের পরিচালিত **অনুমোদিত ইকো-হোমস্টে** খুঁজে দেওয়া
• 🌿 ১০০ নম্বরের **সারথি ইমপ্যাক্ট স্কোর** দিয়ে পরিবেশ-বান্ধব ট্রাভেল যাচাই করা
• 🎨 ভারতের ২৮টি রাজ্য ও ৮টি কেন্দ্রশাসিত অঞ্চলের **ঐতিহ্য, জিআই কারুশিল্প ও স্থানীয় সংস্কৃতি** অন্বেষণ করা

আপনি ভারতের কোথায় ভ্রমণ করতে চান, বা আজ আমি কীভাবে সাহায্য করতে পারি?`;
    }

    if (language === 'ta' || cleanQ.includes('வணக்கம்')) {
      return `வணக்கம்! 🙏 நான் **சாரதி AI (SARTHI AI)**—இந்தியாவின் நிலையான மற்றும் கலாச்சார சுற்றுலாவுக்கான உங்கள் அறிவார்ந்த AI தோழன்.

நான் உங்களுக்கு உதவக்கூடியவை:
• 🗺️ உங்கள் விருப்பத்திற்கேற்ப **குறைந்த கார்பன் சுற்றுலா திட்டங்களை (Eco Itineraries)** உருவாக்குதல்
• 🏡 உள்ளூர் குடும்பங்களை ஆதரிக்கும் **சான்றளிக்கப்பட்ட சமூக ஹோம்ஸ்டேக்களை** கண்டறிதல்
• 🌿 100-புள்ளி **சாரதி தாக்க மதிப்பீடு (SARTHI Impact Score)** மூலம் சூழல் நட்பான பயணங்களை தேர்ந்தெடுத்தல்
• 🎨 பாரம்பரிய கைவினைப்பொருட்கள் மற்றும் கலைகளை அறிந்துகொள்ளுதல்

இந்தியாவில் நீங்கள் எங்கு பயணிக்க விரும்புகிறீர்கள், அல்லது இன்று நான் உங்களுக்கு எவ்வாறு உதவலாம்?`;
    }

    return `Namaste! 🙏 I am **SARTHI AI**, an intelligent sustainable and cultural tourism companion for India.

I can help you:
• 🗺️ **Plan personalized low-carbon itineraries** tailored to your budget, dates, and interests
• 🏡 **Find certified community homestays** that keep revenue directly with local families
• 🌿 **Evaluate travel choices** with our explainable 100-point SARTHI Impact Score
• 🎨 **Discover living cultural heritage, GI crafts & regional cuisines** across all 28 States and 8 Union Territories

Where would you like to travel in India, or what can I help you plan today?`;
  }

  // 2. 1363 NATIONAL TOURIST HELPLINE & SAFETY / EMERGENCY
  const isSafetyOrHelpline = /(1363|helpline|tourist\s*police|emergency|safety|safe|hospital|police|scam|fraud|complaint|suraksha|help\s*line|112|सुरक्षा|हेल्पलाइन|मदत)/i.test(q);

  if (isSafetyOrHelpline) {
    if (language === 'hi') {
      return `### 🛡️ भारत 24x7 बहुभाषी पर्यटक हेल्पलाइन (1363) एवं सुरक्षा मार्गदर्शिका

**1363 राष्ट्रीय पर्यटक हेल्पलाइन** भारत सरकार के पर्यटन मंत्रालय (Ministry of Tourism) द्वारा संचालित एक 24 घंटे उपलब्ध निःशुल्क (Toll-Free) सेवा है:

1. **24x7 बहुभाषी सहायता:**
   * यह हेल्पलाइन चौबीसों घंटे, वर्ष के 365 दिन कार्य करती है।
   * इसमें **12 अंतर्राष्ट्रीय भाषाएँ** (अंग्रेज़ी, फ्रेंच, जर्मन, स्पेनिश, जापानी, कोरियाई, रूसी, चीनी, अरबी, इतालवी, पुर्तगाली) तथा प्रमुख भारतीय भाषाएँ उपलब्ध हैं।

2. **हेल्पलाइन द्वारा दी जाने वाली मुख्य सेवाएँ:**
   * **आपातकालीन सहायता (Emergency Response):** अचानक बीमारी, दुर्घटना या चिकित्सा सहायता हेतु निकटतम अस्पताल और एम्बुलेंस से संपर्क।
   * **पर्यटक पुलिस समन्वय (Tourist Police):** छेड़छाड़, धोखाधड़ी, अत्यधिक वसूली (overcharging) या असुरक्षित महसूस होने पर स्थानीय कानून प्रवर्तन एजेंसियों से सीधा समन्वय।
   * **शिकायत निवारण (Grievance Redressal):** अनाधिकृत एजेंटों, दलालों या खोए हुए सामान/पासपोर्ट की रिपोर्टिंग में मार्गदर्शन।
   * **सटीक यात्रा सूचना:** अधिकृत स्मारक समय, प्रवेश शुल्क और सरकारी गाइडों की जानकारी।

3. **महत्वपूर्ण आपातकालीन संपर्क सूत्र:**
   * 📞 **राष्ट्रीय पर्यटक हेल्पलाइन:** \`1363\` (अथवा \`1800-11-1363\`)
   * 🚨 **राष्ट्रीय एकीकृत आपातकालीन नंबर:** \`112\` (पुलिस, अग्निशमन, एम्बुलेंस)
   * 👩 **राष्ट्रीय महिला हेल्पलाइन:** \`1091\` / \`181\`
   * 🚆 **भारतीय रेल सुरक्षा हेल्पलाइन:** \`139\``;
    }

    if (language === 'mr') {
      return `### 🛡️ २४x७ बहुभाषिक राष्ट्रीय पर्यटक हेल्पलाइन (१३६३) आणि सुरक्षा माहिती

**१३६३ राष्ट्रीय पर्यटक हेल्पलाइन** ही भारत सरकारच्या पर्यटन मंत्रालयाद्वारे चालवली जाणारी २४ तास उपलब्ध मोफत (Toll-Free) सेवा आहे:

१. **२४x७ बहुभाषिक सुविधा:**
   * ही सेवा वर्षातील ३६५ दिवस अखंड सुरू असते.
   * यामध्ये **१२ आंतरराष्ट्रीय भाषा** (इंग्रजी, फ्रेंच, जर्मन, स्पॅनिश, जपानी, कोरियन, रशियन, चिनी इत्यादी) आणि प्रमुख भारतीय भाषा उपलब्ध आहेत.

२. **हेल्पलाइनद्वारे मिळणारी मदत:**
   * **आपत्कालीन मदत:** वैद्यकीय समस्या किंवा अपघाताच्या वेळी जवळच्या रुग्णालयाशी संपर्क.
   * **पर्यटक पोलीस समन्वय:** फसवणूक, जादा दर आकारणी किंवा सुरक्षेच्या समस्येवर स्थानिक पोलिसांची त्वरित मदत.
   * **हरवलेल्या वस्तू/तक्रार:** सामान किंवा पासपोर्ट हरवल्यास दूतावास आणि तक्रार नोंदणीसाठी मार्गदर्शन.

३. **महत्त्वाचे आपत्कालीन संपर्क:**
   * 📞 **पर्यटक हेल्पलाइन:** \`१३६३\` (किंवा \`१८००-११-१३६३\`)
   * 🚨 **राष्ट्रीय आपत्कालीन क्रमांक:** \`११२\`
   * 🚆 **रेल्वे सुरक्षा हेल्पलाइन:** \`१३९\``;
    }

    return `### 🛡️ India 24x7 Multi-Lingual Tourist Helpline (1363) & Safety Guide

The **1363 Multi-Lingual Tourist Helpline** is a dedicated 24x7 national toll-free support service launched by the **Ministry of Tourism, Government of India**:

1. **24x7 Round-the-Clock Support in 12 Languages:**
   * Operates 24 hours a day, 365 days a year across all States and Union Territories.
   * Provides fluent assistance in **12 foreign languages** (English, French, German, Spanish, Italian, Portuguese, Russian, Japanese, Korean, Chinese, Arabic, and Turkish) alongside major Indian regional languages.

2. **Core Assistance Provided to Travelers:**
   * **Emergency Medical & Crisis Aid:** Immediate guidance and routing to nearest government hospitals, verified pharmacies, and trauma response teams.
   * **Tourist Police Coordination:** Direct dispatch and coordination with local state Tourist Police units in cases of harassment, scams, or distress.
   * **Grievance Redressal:** Reporting touts, taxi overcharging, fraudulent tour operators, and consumer disputes.
   * **Lost & Found Protocols:** Step-by-step guidance for lost passports, baggage, or documents, including embassy liaison assistance.
   * **Factual Travel Logistics:** Verified monument opening timings, ticketing rules, and authorized regional guides.

3. **Critical Emergency Numbers in India:**
   * 📞 **Tourist Helpline:** Dial \`1363\` (Toll-Free within India) or \`1800-11-1363\`
   * 🚨 **National Unified Emergency:** Dial \`112\` (Police, Fire, Ambulance)
   * 👩 **Women Safety Helpline:** Dial \`1091\` or \`181\`
   * 🚆 **Indian Railways Security:** Dial \`139\`
   * 🌐 **Online Portal:** Accessible in tandem with the official Incredible India platform.`;
  }

  // 3. SARTHI IMPACT SCORE METHODOLOGY & CALCULATION
  const isImpactScore = /(impact\s*score|sarthi\s*score|calculate|formula|scoring|rubric|metrics|100\s*point|how.*impact.*work|इम्पैक्ट\s*स्कोर|इम्पॅक्ट|स्कोर)/i.test(q);

  if (isImpactScore) {
    if (language === 'hi') {
      return `### 🌱 सारथी इम्पैक्ट स्कोर (SARTHI Impact Score) कार्यप्रणाली (0–100 अंक)

सारथी इम्पैक्ट स्कोर एक पारदर्शी, तथ्य-आधारित मीट्रिक है जो प्रत्येक यात्रा योजना का पर्यावरणीय और सामाजिक मूल्यांकन करता है:

1. **पर्यावरण संरक्षण एवं जैवविविधता (30 अंक):**
   * एकल-उपयोग प्लास्टिक (Single-use plastic) से बचाव, जल संरक्षण और संवेदनशील पारिस्थितिकी (Eco-sensitive zones) का सम्मान।
2. **स्थानीय समुदाय आर्थिक लाभ (25 अंक):**
   * कॉरपोरेट मध्यस्थों के स्थान पर गाँव के होमस्टे और स्थानीय गाइडों को प्रत्यक्ष भुगतान (Direct Spend Retention >85%)।
3. **जीवंत सांस्कृतिक धरोहर एवं जीआई शिल्प (20 अंक):**
   * जीआई-टैग प्राप्त हस्तशिल्प (GI Crafts) कारीगरों को संरक्षण और युनेस्को धरोहर स्थलों का आदर।
4. **हरित परिवहन एवं कार्बन दक्षता (15 अंक):**
   * डीजल एसयूवी के स्थान पर भारतीय रेल (Indian Railways) और इलेक्ट्रिक फीडर बसों का उपयोग (~75% कार्बन बचत)।
5. **जिम्मेदार पर्यटन एवं धारण क्षमता (10 अंक):**
   * पर्यटकों की भीड़ (Over-tourism) से बचना और लीव-नो-ट्रेस (Leave No Trace) नियमों का पालन।`;
    }

    return `### 🌱 How the SARTHI Impact Score Works (0–100 Points)

The **SARTHI Impact Score** is an explainable, 100-point sustainability index evaluated across 5 verifiable pillars:

1. **🌿 Environmental Conservation & Ecosystem Stewardship (30 Points):**
   * Zero-waste protocols, avoidance of single-use plastics, water conservation in high-altitude/arid zones, and staying strictly on designated trails.
2. **🏡 Local Economic Retention (25 Points):**
   * Maximizing direct financial retention within host villages (>85% of accommodation and food budget going directly to local families rather than corporate aggregators).
3. **🎨 Living Cultural Heritage & GI Craft Preservation (20 Points):**
   * Support for indigenous artisans, GI-certified crafts (e.g. Warli, Rogan, Pattachitra), and preservation of historical and vernacular architecture.
4. **🚆 Low-Carbon Transit Efficiency (15 Points):**
   * Prioritizing electrified Indian Railways corridors and shared electric/public transit over private diesel SUVs (~75% CO2 reduction).
5. **🛡️ Responsible Tourism & Carrying Capacity (10 Points):**
   * Adherence to carrying-capacity limits (e.g., Kaas Plateau 3,000 visitor cap), noise pollution abatement, and respecting sacred cultural spaces.

*Every generated itinerary displays its exact score breakdown so you can make informed, conscious travel decisions.*`;
  }

  // 4. TRAIN VS SUV & CARBON SAVINGS
  const isCarbonOrTransit = /(train\s*vs\s*suv|carbon|emissions|railways|co2|carbon\s*saving|footprint|transit|diesel|ट्रेन|कार्बन)/i.test(q);

  if (isCarbonOrTransit) {
    return `### 🚆 Train vs SUV: Carbon Footprint Comparison in India

Choosing **Indian Railways** over private diesel vehicles is the single most impactful choice for low-carbon travel:

1. **Emissions Reduction:**
   * **~75% to 80% Reduction:** Electrified Indian Railways emit approximately **28–35g CO2 per passenger-km**, compared to **140–180g CO2 per passenger-km** in a private diesel SUV.
2. **Real-World Corridor Example (500 km Journey):**
   * **Electric Train (Vande Bharat / Express):** ~14–17 kg CO2 per passenger.
   * **Private Diesel SUV:** ~85–100 kg CO2 per passenger.
   * **Net Savings:** ~70+ kg CO2 saved per passenger on a single return journey!
3. **SARTHI Transit Recommendation:**
   * Combine intercity trains with shared electric rickshaws or public buses for last-mile connectivity to achieve near-zero operational emissions.`;
  }

  // 5. HOMESTAYS & COMMUNITY LODGING
  const isHomestay = /(homestay|homestays|community\s*stay|village\s*stay|mud\s*jhopas|solar\s*homestay|accommodation|हॉस्टल|होमस्टे|पाहूणचार)/i.test(q);

  if (isHomestay) {
    return `### 🏡 SARTHI Certified Community Homestays Across India

SARTHI prioritizes certified community-owned homestays where revenue directly sustains local families:

1. **Spiti Valley (Himachal Pradesh - Langza & Kibber):**
   * Traditional mud-brick passive solar homestays with dry compost toilets to conserve scarce alpine water. Includes authentic barley and butter tea breakfasts.
2. **Munroe Island (Kerala Backwaters):**
   * Backwater canal homestays run by coir-weaving families. Enjoy silent canoe punting, homemade organic red-rice meals, and zero engine noise.
3. **Khuri Village (Thar Desert, Rajasthan):**
   * Traditional mud jhopas with natural thatch insulation. Experience authentic folk songs around the hearth, Rajasthani dal-baati-churma, and ethical camel treks away from commercial tourist crowds.
4. **Nongriat & Mawlynnong (Meghalaya):**
   * Khasi community bamboo cottages near Living Root Bridges, managed by village clan councils with strict community-wide cleanliness rules.`;
  }

  // 6. GI CRAFTS, ARTISANS & CULTURAL LIVING HERITAGE
  const isCrafts = /(rogan|sohrai|pattachitra|warli|craft|artisan|gi\s*tag|handicraft|textile|painting|हस्तशिल्प|कारीगर|कला)/i.test(q);

  if (isCrafts) {
    return `### 🎨 Living Craft Traditions & GI-Tagged Artisans in India

Support India's master craftspeople through direct-from-artisan visits:

1. **Rogan Art (Nirona Village, Kutch, Gujarat):**
   * 400-year-old art form using boiled castor oil and natural earth pigments, drawn with a metal stylus. Preserved by the Khatri master artisans.
2. **Sohrai & Khovar Murals (Hazaribagh, Jharkhand):**
   * Ancient indigenous wall frescoes painted by tribal women using natural ochre, kaolin clay, and broken combs to celebrate harvest and marriage.
3. **Pattachitra & Palm Leaf Etching (Raghurajpur Heritage Village, Odisha):**
   * Every home in Raghurajpur is an artist workshop creating intricate cloth scrolls and palm leaf engravings with natural stone and vegetable dyes.
4. **Warli Tribal Painting (Palghar & Dahanu, Maharashtra):**
   * GI-tagged geometric indigenous murals created with rice paste on red ochre mud walls depicting communal harmony with nature.`;
  }

  // 7. REGIONAL DESTINATION KNOWLEDGE

  // Maharashtra
  if (q.includes('maharashtra') || q.includes('ajanta') || q.includes('ellora') || q.includes('kaas') || q.includes('sambhajinagar') || q.includes('किल्ले') || q.includes('महाराष्ट्र')) {
    if (language === 'mr') {
      return `### 🏛️ महाराष्ट्र शाश्वत आणि सांस्कृतिक पर्यटन (SARTHI AI Verified Guide)

**महाराष्ट्र** हे जागतिक वारसा, सह्याद्रीचे गडकिल्ले आणि समृद्ध लोककलांचे केंद्र आहे:
1. **अजिंठा आणि वेरूळ लेणी (छत्रपती संभाजीनगर):** युनेस्को जागतिक वारसा स्थळ. प्राचीन बौद्ध, हिंदू आणि जैन दगडी शिल्पकला. रेल्वे स्थानकावरून प्रदूषणमुक्त ई-बस उपलब्ध.
2. **कास पठार (सातारा):** युनेस्को जागतिक नैसर्गिक वारसा. ऑगस्ट ते ऑक्टोबर दरम्यान फुलांचे पठार. दररोज केवळ ३,००० पर्यटकांची मर्यादा. स्थानिक निसर्ग होमस्टेमध्ये मुक्काम करा.
3. **वारली कला (पालघर):** स्थानिक आदिवासी कारागिरांकडून थेट जीआय-टॅग वारली चित्रे खरेदी करा.
*🌱 SARTHI इम्पॅक्ट स्कोर: ९२/१०० (कमी कार्बन उत्सर्जन व ९५% स्थानिक अर्थव्यवस्था योगदान).*`;
    }
    return `### 🏛️ Maharashtra Sustainable Heritage Circuit (SARTHI AI Verified Guide)

1. **Ajanta & Ellora Caves (Chhatrapati Sambhajinagar):**
   * **Significance:** UNESCO World Heritage rock-cut architecture spanning Buddhist, Hindu, and Jain monuments.
   * **Eco Transit:** Take electric feeder buses from Sambhajinagar station; pollution-free battery-electric shuttles operate within cave grounds.
2. **Kaas Plateau (Satara - UNESCO Natural World Heritage):**
   * **Biodiversity:** Over 850 rare flowering plant species blooming between August and October.
   * **Carrying Capacity:** Capped at 3,000 visitors per day to protect delicate endemic soil. Stay in community-run village homestays.
3. **Warli Indigenous Art (Palghar):**
   * Direct encounters with indigenous master artists creating GI-tagged rice-paste murals.`;
  }

  // Rajasthan
  if (q.includes('rajasthan') || q.includes('jaipur') || q.includes('jaisalmer') || q.includes('jodhpur') || q.includes('udaipur') || q.includes('khuri') || q.includes('राजस्थान')) {
    if (language === 'hi') {
      return `### 🏰 राजस्थान सतत एवं सांस्कृतिक पर्यटन परिपथ (SARTHI AI Verified Guide)

1. **जैसलमेर एवं डेजर्ट नेशनल पार्क (खुरी गाँव):** सैम के व्यावसायिक शोर से दूर **खुरी** में प्रामाणिक मिट्टी के झोपड़ों (Mud Jhopas) वाले समुदाय-संचालित होमस्टे में ठहरें। ग्रेट इंडियन बस्टर्ड संरक्षण क्षेत्र का सम्मान करें।
2. **जोधपुर और शेखावाटी की जीवित हवेलियां:** मथानिया मिर्च, बंधेज और ब्लॉक प्रिंटिंग के कारीगरों से सीधा संपर्क।
3. **परिवहन:** लंबी दूरी के लिए **भारतीय रेल (North Western Railway)** का उपयोग करें (~75% कार्बन बचत)।`;
    }
    return `### 🏰 Rajasthan Sustainable & Cultural Circuit (SARTHI AI Verified Guide)

1. **Khuri Village & Desert National Park (Jaisalmer):**
   * Stay in community-run mud jhopas with natural thatch insulation. Respect the fragile habitat of the critically endangered Great Indian Bustard.
2. **Artisan Hubs in Jodhpur & Shekhawati:**
   * Visit Mathania red chili farms, block-printing cooperatives in Bagru, and open-air frescoed havelis.
3. **Transit:**
   * Connect via North Western Railway express trains to avoid highway fuel consumption.`;
  }

  // Kerala
  if (q.includes('kerala') || q.includes('munroe') || q.includes('backwater') || q.includes('alleppey') || q.includes('wayanad') || q.includes('केरल') || q.includes('கேரளா')) {
    if (language === 'ta') {
      return `### 🌴 கேரளா நிலையான சுற்றுலா (SARTHI AI Verified Guide)

1. **முன்ரோ தீவு அமைதியான படகு சவாரி (Munroe Island):** மோட்டார் இல்லாத அமைதியான மரப் படகுகள் (Silent Punting). அலையாத்திக் காடுகள் மற்றும் கயிறு நெசவு மையங்கள். உள்ளூர் குடும்பங்களால் நடத்தப்படும் சமூக ஹோம்ஸ்டேக்கள்.
2. **தேக்கடி & மூணாறு மலைப்பாதைகள்:** ஆர்கானிக் ஏலக்காய் பண்ணைகள் மற்றும் வனவிலங்கு பாதுகாப்பு நடைப்பயணங்கள்.
*சாரதி தாக்க மதிப்பெண்: 94/100.*`;
    }
    return `### 🌴 Kerala Eco-Tourism & Backwater Heritage (SARTHI AI Verified Guide)

1. **Munroe Island Silent Canal Trails:**
   * Experience quiet punting on engine-free country wooden boats, protecting delicate fish-breeding mangroves and eliminating fuel spills.
   * Stay at family-run canal homestays with red-rice cuisine and coir handicrafts.
2. **Wayanad Agro-Forestry & Indigenous Stays:**
   * Explore organic spice forests, Edakkal neolithic petroglyphs, and tribal cooperative stores.`;
  }

  // Himachal Pradesh & Spiti
  if (q.includes('spiti') || q.includes('himachal') || q.includes('kaza') || q.includes('kibber') || q.includes('langza') || q.includes('manali') || q.includes('हिमाचल') || q.includes('स्पीति')) {
    return `### 🏔️ Himachal Pradesh & Spiti Valley High-Altitude Eco Circuit

1. **Spiti Valley Passive-Solar Homestays (Langza & Kibber):**
   * High-altitude acclimatization is vital: spend 2 days in Kalpa or Tabo before reaching Kaza (3,800m).
   * Stay in certified mud-brick homestays with solar heating and dry compost toilets.
2. **Key Gompa & Buddhist Monasteries:**
   * 1,000-year-old monastery culture. Support local women's cooperatives making sea-buckthorn herbal tea and yak wool socks.
*🌱 SARTHI Impact Score: 95/100 (Zero plastic waste and community water stewardship).*`;
  }

  // Meghalaya & Northeast
  if (q.includes('meghalaya') || q.includes('assam') || q.includes('cherrapunji') || q.includes('root bridge') || q.includes('shillong') || q.includes('majuli') || q.includes('kaziranga') || q.includes('मेघालय')) {
    return `### 🌿 Meghalaya & Assam Rainforest & River Heritage

1. **Nongriat Living Root Bridges (Meghalaya):**
   * Bio-engineered Ficus elastica living aerial roots guided by indigenous Khasi and Jaintia tribes over centuries. Pack out all waste; zero single-use plastic permitted.
2. **Majuli River Island (Assam):**
   * World's largest inhabited river island on the Brahmaputra. Explore 15th-century Vaishnavite Neo-Monastic Satras and traditional mask-making in Samaguri Satra.`;
  }

  // Ladakh & Kashmir
  if (q.includes('ladakh') || q.includes('leh') || q.includes('kashmir') || q.includes('srinagar') || q.includes('pangong') || q.includes('लद्दाख') || q.includes('कश्मीर')) {
    return `### 🏔️ Ladakh & Kashmir High-Mountain Sustainable Trails

1. **Ladakh Passive-Solar Villages (Hemis Shukpachan & Phyang):**
   * Conserve delicate glacial meltwater. Support community ice-stupa initiatives and homestays.
2. **Kashmir Heritage Walks & Artisan Cooperatives:**
   * Walk the historic craft quarters of Downtown Srinagar for Pashmina weaving, walnut wood carving, and paper-mâché artisans.`;
  }

  // West Bengal
  if (q.includes('bengal') || q.includes('santiniketan') || q.includes('sundarban') || q.includes('darjeeling') || q.includes('শান্তিনিকেতন') || q.includes('পশ্চিমবঙ্গ')) {
    return `### 🌾 West Bengal Living Heritage & Eco-Sanctuaries

1. **Santiniketan (Birbhum - UNESCO World Heritage Site):**
   * Rabindranath Tagore's open-air learning sanctuary. Experience the Saturday Sonajhuri Haat, Baul devotional songs, and direct Kantha stitch embroidery cooperatives.
2. **Sundarbans Biosphere Reserve:**
   * Silent electric and non-motorized boat journeys through the mangrove delta with local community naturalist guides.`;
  }

  // Karnataka
  if (q.includes('karnataka') || q.includes('hampi') || q.includes('anegundi') || q.includes('coorg') || q.includes('ಕರ್ನಾಟಕ') || q.includes('ಹಂಪಿ')) {
    return `### 🏛️ Karnataka Heritage & Western Ghats Conservation

1. **Hampi & Anegundi World Heritage (Tungabhadra Basin):**
   * Vijayanagara empire granite boulder architecture. Cross the river via traditional coracles. Support Anegundi village banana-fiber craft self-help groups.
2. **Coorg (Kodagu) Organic Agro-Forestry:**
   * Shade-grown bird-friendly coffee plantations and sacred groves (Devarakadu).`;
  }

  // Tamil Nadu
  if (q.includes('tamil') || q.includes('chettinad') || q.includes('madurai') || q.includes('thanjavur') || q.includes('தமிழ்நாடு')) {
    return `### 🏛️ Tamil Nadu Living Heritage & Architectural Trails

1. **Chettinad Heritage Villages (Kanadukathan):**
   * 19th-century merchant mansions, handmade Athangudi patterned tiles, and organic vegetarian cuisine.
2. **Great Living Chola Temples:**
   * Thanjavur Brihadisvara and Gangaikonda Cholapuram UNESCO stone engineering.`;
  }

  // 8. DYNAMIC CONTEXTUAL RESPONSE FOR NOVEL QUESTIONS
  // When the question does not match a preset category, dynamically synthesize a helpful answer in the requested language
  const hasPacking = /(pack|packing|clothes|wear|weather|season|winter|summer|monsoon|सामान|कपड़े)/i.test(q);
  const hasBudget = /(budget|cost|price|rupee|cheap|expensive|खर्च|बजट|पैसे)/i.test(q);
  const hasSolo = /(solo|alone|woman|female|women|girl|safety|अकेले|महिला)/i.test(q);
  const hasFood = /(food|cuisine|eat|dish|restaurant|thali|खाना|व्यंजन)/i.test(q);

  if (hasPacking) {
    if (language === 'hi') {
      return `### 🎒 भारत यात्रा: पैकिंग एवं पर्यावरण-अनुकूल सुझाव
• **मौसम के अनुसार कपड़े:** हिमालयी क्षेत्रों (लद्दाख/स्पीति) के लिए थर्मल इनर और विंडप्रूफ जैकेट; तटीय व मैदानी इलाकों के लिए सूती (कॉटन) ढीले कपड़े।
• **सतत यात्रा किट:** पुन: उपयोग योग्य पानी की बोतल (स्टेनलेस स्टील), कपड़े का थैला और बायोडिग्रेडेबल टॉयलेटरीज़।
• **सांस्कृतिक मर्यादा:** धार्मिक स्थलों के लिए कंधे और घुटने ढकने वाले शालीन वस्त्र।`;
    }
    return `### 🎒 Sustainable Packing Guide for India
• **Climate Layers:** Breathable cottons for coastal and plains circuits; layered thermals and windbreakers for high-altitude Himalayas (Spiti, Ladakh, Sikkim).
• **Zero-Waste Kit:** Reusable stainless steel water bottle, cloth shopping tote, and solid toiletries to eliminate single-use plastics in fragile ecosystems.
• **Cultural Etiquette:** Modest attire with covered shoulders and knees for temple, mosque, and gurudwara visits.`;
  }

  if (hasBudget) {
    return `### 💰 Budget & Cost Planning with SARTHI AI
• **Low-Carbon Railway Travel:** Indian Railways Sleeper / 3AC fares range from ₹350–₹1,500 for intercity corridors, keeping travel affordable and sustainable.
• **Community Homestays:** Verified village homestays typically range from ₹1,200 to ₹2,500/night including homecooked organic meals.
• **Direct Artisan Spend:** Purchasing GI-tagged crafts directly from artisan villages ensures 100% of your funds reach local creators.
*💡 Pro-tip: Use the **AI Trip Planner** tab to generate a custom itinerary tailored to your exact budget!*`;
  }

  if (hasSolo) {
    return `### 🛡️ Solo & Women Traveler Guidance in India
• **Official Support:** Keep the **1363 24x7 Multi-Lingual Tourist Helpline** and **112 National Emergency** saved in your phone.
• **Transit:** Prefer daytime train travel and verified prepaid taxi booths at railway stations and airports.
• **Accommodations:** Stay at SARTHI-verified community homestays where host families provide safe, warm hospitality and local guidance.`;
  }

  if (hasFood) {
    return `### 🍲 Regional & Sustainable Cuisine Across India
• **Farm-to-Table Village Dining:** Relish authentic millets (Ragi mudde in Karnataka, Bajra roti in Rajasthan, Mandua in Uttarakhand).
• **GI-Tagged Delicacies:** Taste GI-certified regional specialties like Darjeeling tea, Malabar pepper, and Hyderabadi Haleem.
• **Zero-Waste Thalis:** Traditional banana leaf and sal-leaf plate dining eliminates disposable plastics.`;
  }

  // General Contextual Fallback (polite, focused, and guiding the user)
  if (language === 'hi') {
    return `### 🌿 सारथी AI सतत यात्रा सहायता

आपके प्रश्न के संदर्भ में:
• **सतत यात्रा:** हम भारत के सभी २८ राज्यों और ८ केंद्र शासित प्रदेशों में पर्यावरण-अनुकूल यात्रा, समुदाय-संचालित होमस्टे और जिम्मेदार पर्यटन को बढ़ावा देते हैं।
• **सारथी इम्पैक्ट स्कोर:** प्रत्येक मार्ग का कार्बन उत्सर्जन, स्थानीय अर्थव्यवस्था योगदान और जैवविविधता संरक्षण के आधार पर मूल्यांकन किया जाता है।
• **अगला कदम:** आप विशिष्ट राज्य (जैसे राजस्थान, केरल, हिमाचल, महाराष्ट्र) के बारे में पूछ सकते हैं, अथवा ऊपर **"AI Trip Planner"** टैब पर जाकर अपनी व्यक्तिगत यात्रा योजना बना सकते हैं।

मैं इस विषय में आपकी और क्या सहायता कर सकता हूँ?`;
  }

  if (language === 'mr') {
    return `### 🌿 सारथी AI शाश्वत प्रवास मार्गदर्शन

आपल्या प्रश्नाच्या संदर्भात:
• **शाश्वत पर्यटन:** आम्ही भारतातील सर्व २८ राज्ये आणि ८ केंद्रशासित प्रदेशांमध्ये पर्यावरणपूरक प्रवास, प्रमाणित होमस्टे आणि समृद्ध वारशाचा प्रचार करतो.
• **सारथी इम्पॅक्ट स्कोर:** प्रत्येक प्रवासाचा कार्बन उत्सर्जन आणि स्थानिक अर्थव्यवस्थेवरील प्रभावाचा पारदर्शक अंदाज दिला जातो.
• **पुढील पायरी:** आपण विशिष्ट राज्याबद्दल (उदा. महाराष्ट्र, केरळ, हिमाचल, राजस्थान) विचारू शकता किंवा **"AI Trip Planner"** द्वारे स्वतःचा संपूर्ण प्रवास आराखडा तयार करू शकता.

मी आपल्याला आणखी काय माहिती देऊ शकतो?`;
  }

  return `### 🌿 SARTHI AI Sustainable Travel Guidance

Regarding your inquiry:
• **Sustainable Travel Principles:** SARTHI AI connects you with low-carbon rail transit, verified community-owned homestays, and living cultural heritage across all 28 Indian States and 8 Union Territories.
• **Explainable Impact:** Every travel route is evaluated using our 100-point SARTHI Impact Score covering environmental care, village spend retention, and cultural stewardship.
• **Next Steps:** You can ask about any specific destination (e.g. Spiti, Kerala, Rajasthan, Maharashtra), ask about the **1363 helpline**, or use the **"AI Trip Planner"** tab to instantly generate a day-by-day customized itinerary.

What specific destination, budget, or dates would you like to explore next?`;
}
