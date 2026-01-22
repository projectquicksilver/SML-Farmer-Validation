// ============================================
// CONFIGURATION
// ============================================
const WEBHOOK_URL = 'https://n8n.srv1152566.hstgr.cloud/webhook/84ec9b62-a32c-45e0-8068-a796a5682eba';
const ENABLE_WEBHOOK = true;
const WEBHOOK_TIMEOUT = 5000;

// WhatsApp API Configuration
const WHATSAPP_API_URL = 'https://wa-dashboard.digicides.in/whatsapp/api/receive_missedcall';
const DID_NO = '7738089884';
const COMPANY = 'Digicides';
const AGENT_NAME = 'Digicides demo';

// Campaign Name Mapping based on language and product
const CAMPAIGN_MAPPING = {
    'Marathi': {
        'SML': 'thankmr',
        'Sumil Chemicals': 'thankyoumr',
        'Both': 'thankmr',
        'None': 'thankmr'
    },
    'Gujarati': {
        'SML': 'thankgu',
        'Sumil Chemicals': 'thankyougu',
        'Both': 'thankgu',
        'None': 'thankgu'
    },
    'English': {
        'SML': 'thankmr', // Default to Marathi for English
        'Sumil Chemicals': 'thankyoumr',
        'Both': 'thankmr',
        'None': 'thankmr'
    }
};

// Language code mapping for API
const LANGUAGE_CODE_MAPPING = {
    'Marathi': 'Mr',
    'Gujarati': 'Gu',
    'English': 'Mr' // Default to Marathi for English
};

// ============================================
// TRANSLATIONS
// ============================================
const translations = {
    English: {
        pageTitle: "Farmer Registration", pageSubtitle: "Complete the form below",
        langSec: "Language Preference", persSec: "Personal Information", 
        farmSec: "Farm Information", locSec: "Location Details", prodSec: "Product Information",
        nameLbl: "Your Name", mobLbl: "Mobile Number", cropsLbl: "Select Your Crops",
        acreLbl: "Land Area (in acres)", stateLbl: "State", distLbl: "District",
        placeLbl: "Village/Town (Optional)", 
        prodLbl: "Please indicate the company whose product(s) you have previously used",
        namePh: "Enter your full name", acrePh: "e.g., 2.5", placePh: "Enter your location",
        otherPh: "Specify your crop", stateSel: "Select your state", distSel: "Select your district",
        prodSel: "Select an option",
        prodSML: "SML",
        prodSumil: "Sumil Chemicals",
        prodBoth: "Both",
        prodNone: "None",
        stateGuj: "Gujarat", stateMah: "Maharashtra",
        cWheat: "Wheat", cCotton: "Cotton", cSoy: "Soybean", cGround: "Groundnut",
        cMaize: "Maize", cSugar: "Sugarcane", cOther: "Other",
        submitBtn: "Submit Registration",
        successTitle: "Thank you!", successMsg: "Your information has been submitted successfully. We'll get in touch with you soon."
    },
    Marathi: {
        pageTitle: "शेतकरी नोंदणी", pageSubtitle: "खालील फॉर्म भरा",
        langSec: "भाषा प्राधान्य", persSec: "वैयक्तिक माहिती",
        farmSec: "शेत माहिती", locSec: "स्थान तपशील", prodSec: "उत्पादन माहिती",
        nameLbl: "तुमचे नाव", mobLbl: "मोबाईल नंबर", cropsLbl: "तुमची पिके निवडा",
        acreLbl: "जमीन क्षेत्र (एकरमध्ये)", stateLbl: "राज्य", distLbl: "जिल्हा",
        placeLbl: "गाव/शहर (पर्यायी)", 
        prodLbl: "कृपया आपण यापूर्वी कोणत्या कंपनीची उत्पादने वापरली आहेत ते नमूद करा",
        namePh: "तुमचे पूर्ण नाव प्रविष्ट करा", acrePh: "उदा., 2.5", placePh: "तुमचे स्थान प्रविष्ट करा",
        otherPh: "तुमचे पीक निर्दिष्ट करा", stateSel: "तुमचे राज्य निवडा", distSel: "तुमचा जिल्हा निवडा",
        prodSel: "एक पर्याय निवडा",
        prodSML: "SML",
        prodSumil: "Sumil Chemicals",
        prodBoth: "दोन्ही",
        prodNone: "नाही",
        stateGuj: "गुजरात", stateMah: "महाराष्ट्र",
        cWheat: "गहू", cCotton: "कापूस", cSoy: "सोयाबीन", cGround: "भुईमूग",
        cMaize: "मका", cSugar: "ऊस", cOther: "इतर",
        submitBtn: "नोंदणी सबमिट करा",
        successTitle: "धन्यवाद!", successMsg: "तुमची माहिती यशस्वीरित्या सबमिट केली गेली आहे. आम्ही लवकरच तुमच्याशी संपर्क साधू."
    },
    Gujarati: {
        pageTitle: "ખેડૂત નોંધણી", pageSubtitle: "નીચેનું ફોર્મ ભરો",
        langSec: "ભાષા પ્રાધાન્ય", persSec: "વ્યક્તિગત માહિતી",
        farmSec: "ખેત માહિતી", locSec: "સ્થાન વિગતો", prodSec: "ઉત્પાદન માહિતી",
        nameLbl: "તમારું નામ", mobLbl: "મોબાઇલ નંબર", cropsLbl: "તમારા પાક પસંદ કરો",
        acreLbl: "જમીન વિસ્તાર (એકરમાં)", stateLbl: "રાજ્ય", distLbl: "જિલ્લો",
        placeLbl: "ગામ/શહેર (વૈકલ્પિક)", 
        prodLbl: "કૃપા કરીને જણાવો કે તમે અગાઉ કઈ કંપનીના ઉત્પાદનો ઉપયોગમાં લીધા છે",
        namePh: "તમારું પૂર્ણ નામ દાખલ કરો", acrePh: "દા.ત., 2.5", placePh: "તમારું સ્થાન દાખલ કરો",
        otherPh: "તમારો પાક ઉલ્લેખ કરો", stateSel: "તમારું રાજ્ય પસંદ કરો", distSel: "તમારો જિલ્લો પસંદ કરો",
        prodSel: "એક વિકલ્પ પસંદ કરો",
        prodSML: "SML",
        prodSumil: "Sumil Chemicals",
        prodBoth: "બંને",
        prodNone: "કોઈ નહીં",
        stateGuj: "ગુજરાત", stateMah: "મહારાષ્ટ્ર",
        cWheat: "ઘઉં", cCotton: "કપાસ", cSoy: "સોયાબીન", cGround: "મગફળી",
        cMaize: "મકાઈ", cSugar: "શેરડી", cOther: "અન્ય",
        submitBtn: "નોંધણી સબમિટ કરો",
        successTitle: "આભાર!", successMsg: "તમારી માહિતી સફળતાપૂર્વક સબમિટ કરવામાં આવી છે. અમે ટૂંક સમયમાં તમારો સંપર્ક કરીશું."
    }
};

// ============================================
// STATE/DISTRICT DATA
// ============================================
const districts = {
    Gujarat: {
        English: ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"],
        Gujarati: ["અમદાવાદ", "અમરેલી", "આણંદ", "અરવલ્લી", "બનાસકાંઠા", "ભરૂચ", "ભાવનગર", "બોટાદ", "છોટા ઉદેપુર", "દાહોદ", "ડાંગ", "દેવભૂમિ દ્વારકા", "ગાંધીનગર", "ગીર સોમનાથ", "જામનગર", "જૂનાગઢ", "ખેડા", "કચ્છ", "મહિસાગર", "મહેસાણા", "મોરબી", "નર્મદા", "નવસારી", "પંચમહાલ", "પાટણ", "પોરબંદર", "રાજકોટ", "સાબરકાંઠા", "સુરત", "સુરેન્દ્રનગર", "તાપી", "વડોદરા", "વલસાડ"],
        Marathi: ["अहमदाबाद", "अमरेली", "आनंद", "अरावली", "बनासकांठा", "भरूच", "भावनगर", "बोटाद", "छोटा उदयपुर", "दाहोद", "डांग", "देवभूमि द्वारका", "गांधीनगर", "गीर सोमनाथ", "जामनगर", "जूनागढ", "खेडा", "कच्छ", "महिसागर", "मेहसाना", "मोरबी", "नर्मदा", "नवसारी", "पंचमहाल", "पाटण", "पोरबंदर", "राजकोट", "साबरकांठा", "सुरत", "सुरेंद्रनगर", "तापी", "वडोदरा", "वलसाड"]
    },
    Maharashtra: {
        English: ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"],
        Marathi: ["अहमदनगर", "अकोला", "अमरावती", "औरंगाबाद", "बीड", "भंडारा", "बुलढाणा", "चंद्रपूर", "धुळे", "गडचिरोली", "गोंदिया", "हिंगोली", "जळगाव", "जालना", "कोल्हापूर", "लातूर", "मुंबई शहर", "मुंबई उपनगर", "नागपूर", "नांदेड", "नंदुरबार", "नाशिक", "उस्मानाबाद", "पालघर", "परभणी", "पुणे", "रायगड", "रत्नागिरी", "सांगली", "सातारा", "सिंधुदुर्ग", "सोलापूर", "ठाणे", "वर्धा", "वाशिम", "यवतमाळ"],
        Gujarati: ["અહમદનગર", "અકોલા", "અમરાવતી", "ઔરંગાબાદ", "બીડ", "ભંડારા", "બુલઢાણા", "ચંદ્રપુર", "ધુળે", "ગડચિરોલી", "ગોંદિયા", "હિંગોલી", "જળગાંવ", "જાલના", "કોલ્હાપુર", "લાતુર", "મુંબઈ શહેર", "મુંબઈ ઉપનગર", "નાગપુર", "નાંદેડ", "નંદુરબાર", "નાશિક", "ઉસ્માનાબાદ", "પાલઘર", "પરભણી", "પુણે", "રાયગડ", "રત્નાગિરી", "સાંગલી", "સાતારા", "સિંધુદુર્ગ", "સોલાપુર", "ઠાણે", "વર્ધા", "વાશિમ", "યવતમાળ"]
    }
};

// ============================================
// GLOBAL STATE
// ============================================
let selectedLanguage = 'English';
let formData = {};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    clearForm();
});

function clearForm() {
    document.querySelectorAll('input[type="text"], input[type="tel"], input[type="number"]').forEach(i => i.value = '');
    document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(i => i.checked = false);
    document.querySelectorAll('select').forEach(s => s.selectedIndex = 0);
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    // Language change
    document.querySelectorAll('input[name="language"]').forEach(input => {
        input.addEventListener('change', (e) => {
            selectedLanguage = e.target.value;
            updateTranslations();
        });
    });

    // Name input - letters only
    const nameInput = document.getElementById('name');
    if (nameInput) {
        nameInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, '');
        });
    }

    // Mobile input - digits only, max 10
    const mobileInput = document.getElementById('mobile');
    if (mobileInput) {
        mobileInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
        });
    }

    // Acreage - no negative
    const acreageInput = document.getElementById('acreage');
    if (acreageInput) {
        acreageInput.addEventListener('input', (e) => {
            if (parseFloat(e.target.value) < 0) e.target.value = '';
        });
    }

    // Other crop checkbox
    const otherChk = document.getElementById('otherChk');
    const otherInput = document.getElementById('otherInput');
    if (otherChk && otherInput) {
        otherChk.addEventListener('change', (e) => {
            if (e.target.checked) {
                otherInput.classList.add('show');
            } else {
                otherInput.classList.remove('show');
                document.getElementById('otherCrop').value = '';
            }
        });
    }

    // State change
    const stateSelect = document.getElementById('state');
    const districtSelect = document.getElementById('district');
    if (stateSelect && districtSelect) {
        stateSelect.addEventListener('change', () => {
            updateDistricts();
        });
    }

    // Submit button
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', handleSubmit);
    }
}

// ============================================
// TRANSLATIONS
// ============================================
function updateTranslations() {
    const t = translations[selectedLanguage];
    
    // Update all elements with data-tr attribute
    document.querySelectorAll('[data-tr]').forEach(el => {
        const key = el.getAttribute('data-tr');
        if (t[key]) {
            if (el.tagName === 'OPTION') {
                el.textContent = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-tr-ph]').forEach(el => {
        const key = el.getAttribute('data-tr-ph');
        if (t[key]) {
            el.placeholder = t[key];
        }
    });
    
    updateDistricts();
}

// ============================================
// UPDATE DISTRICTS
// ============================================
function updateDistricts() {
    const stateSelect = document.getElementById('state');
    const districtSelect = document.getElementById('district');
    
    if (!stateSelect || !districtSelect) return;
    
    const selectedState = stateSelect.value;
    
    // Clear districts
    districtSelect.innerHTML = `<option value="">${translations[selectedLanguage].distSel}</option>`;
    
    if (!selectedState) {
        districtSelect.disabled = true;
        return;
    }
    
    // Populate districts
    districtSelect.disabled = false;
    const districtList = districts[selectedState]?.[selectedLanguage] || [];
    
    districtList.forEach(district => {
        const option = document.createElement('option');
        option.value = district;
        option.textContent = district;
        districtSelect.appendChild(option);
    });
}

// ============================================
// VALIDATION
// ============================================
function validateForm() {
    clearErrors();
    let isValid = true;

    // Language
    const language = document.querySelector('input[name="language"]:checked');
    if (!language) {
        showError('lang', 'Please select a language');
        isValid = false;
    }

    // Name
    const name = document.getElementById('name').value.trim();
    if (!name) {
        showError('name', 'Name is required');
        document.getElementById('name').classList.add('error');
        isValid = false;
    }

    // Mobile
    const mobile = document.getElementById('mobile').value.trim();
    if (!mobile) {
        showError('mobile', 'Mobile number is required');
        document.getElementById('mobile').classList.add('error');
        isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
        showError('mobile', 'Mobile must be exactly 10 digits');
        document.getElementById('mobile').classList.add('error');
        isValid = false;
    }

    // Crops
    const cropCheckboxes = document.querySelectorAll('input[name="crops"]:checked');
    if (cropCheckboxes.length === 0) {
        showError('crops', 'Please select at least one crop');
        isValid = false;
    }
    
    // If "Other" is selected, check if text is provided
    const otherChk = document.getElementById('otherChk');
    const otherCrop = document.getElementById('otherCrop').value.trim();
    if (otherChk && otherChk.checked && !otherCrop) {
        showError('crops', 'Please specify the other crop');
        document.getElementById('otherCrop').classList.add('error');
        isValid = false;
    }

    // Acreage
    const acreage = document.getElementById('acreage').value.trim();
    if (!acreage) {
        showError('acreage', 'Land area is required');
        document.getElementById('acreage').classList.add('error');
        isValid = false;
    } else if (parseFloat(acreage) <= 0) {
        showError('acreage', 'Land area must be greater than 0');
        document.getElementById('acreage').classList.add('error');
        isValid = false;
    }

    // State
    const state = document.getElementById('state').value;
    if (!state) {
        showError('state', 'State is required');
        document.getElementById('state').classList.add('error');
        isValid = false;
    }

    // District
    const district = document.getElementById('district').value;
    if (!district) {
        showError('district', 'District is required');
        document.getElementById('district').classList.add('error');
        isValid = false;
    }

    // Product usage - now a dropdown
    const usedProducts = document.getElementById('usedProducts').value;
    if (!usedProducts) {
        showError('products', 'Please select an option');
        document.getElementById('usedProducts').classList.add('error');
        isValid = false;
    }

    return isValid;
}

function showError(field, message) {
    const errorEl = document.getElementById(`err-${field}`);
    if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.add('show');
    }
}

function clearErrors() {
    document.querySelectorAll('.error-text').forEach(el => {
        el.classList.remove('show');
        el.textContent = '';
    });
    
    document.querySelectorAll('.error').forEach(el => {
        el.classList.remove('error');
    });
}

// ============================================
// COLLECT FORM DATA
// ============================================
function collectFormData() {
    const language = document.querySelector('input[name="language"]:checked')?.value || '';
    const name = document.getElementById('name').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    
    // Collect crops
    const crops = [];
    document.querySelectorAll('input[name="crops"]:checked').forEach(chk => {
        if (chk.value === 'Other') {
            const otherCrop = document.getElementById('otherCrop').value.trim();
            if (otherCrop) crops.push(otherCrop);
        } else {
            crops.push(chk.value);
        }
    });
    
    const acreage = parseFloat(document.getElementById('acreage').value) || 0;
    const state = document.getElementById('state').value;
    const district = document.getElementById('district').value;
    const place = document.getElementById('place').value.trim();
    const usedProducts = document.getElementById('usedProducts').value;

    return {
        timestamp: new Date().toISOString(),
        language,
        name,
        alternate_mobile: mobile,
        crops,
        land_acreage: acreage,
        state,
        district,
        place,
        products_used: usedProducts
    };
}

// ============================================
// WHATSAPP API CALL
// ============================================
async function sendWhatsAppNotification(mobile, language, productUsed) {
    try {
        // Get the campaign name based on language and product used
        const campaignName = CAMPAIGN_MAPPING[language]?.[productUsed] || 'thankmr';
        const languageCode = LANGUAGE_CODE_MAPPING[language] || 'Mr';

        const whatsappPayload = {
            did_no: DID_NO,
            company: COMPANY,
            agent_name: AGENT_NAME,
            language: languageCode,
            campaign_name: campaignName,
            caller: mobile
        };

        console.log('📱 Sending WhatsApp notification with payload:', whatsappPayload);

        const response = await fetch(WHATSAPP_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(whatsappPayload)
        });

        if (response.ok) {
            console.log('✅ WhatsApp notification sent successfully');
            return true;
        } else {
            console.warn('⚠️ WhatsApp API returned status:', response.status);
            return false;
        }
    } catch (error) {
        console.error('❌ WhatsApp notification error:', error);
        return false;
    }
}

// ============================================
// SUBMIT FORM
// ============================================
async function handleSubmit() {
    if (!validateForm()) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    const data = collectFormData();
    
    // Send to original webhook
    if (ENABLE_WEBHOOK) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT);

            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (response.ok) {
                console.log('✅ Form submitted to webhook successfully');
            } else {
                console.warn('⚠️ Webhook returned status:', response.status);
            }
        } catch (error) {
            console.error('❌ Webhook submission error:', error);
        }
    }

    // Send WhatsApp notification
    await sendWhatsAppNotification(
        data.alternate_mobile,
        data.language,
        data.products_used
    );

    // Show success screen
    showSuccess();

    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;
}

function showSuccess() {
    document.getElementById('formContainer').style.display = 'none';
    document.querySelector('.submit-wrap').style.display = 'none';
    document.getElementById('successScreen').classList.add('show');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
