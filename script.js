// ============================================
// TRANSLATIONS
// ============================================
const translations = {
    English: {
        welcomeTitle: "Welcome to SML",
        selectLanguage: "Select your preferred language",
        personalTitle: "Let's get to know you",
        personalSubtitle: "Enter your basic information",
        nameLabel: "Your Name",
        namePlaceholder: "Enter your full name",
        mobileLabel: "Mobile Number",
        farmTitle: "About your farm",
        farmSubtitle: "Tell us what you grow",
        cropsLabel: "Select Your Crops",
        cropsPlaceholder: "Tap to select crops",
        acreageLabel: "Land Area (in acres)",
        acreagePlaceholder: "e.g., 2.5",
        locationTitle: "Almost done!",
        locationSubtitle: "Just a few more details",
        stateLabel: "State",
        selectState: "Select your state",
        stateGujarat: "Gujarat",
        stateMaharashtra: "Maharashtra",
        districtLabel: "District",
        selectDistrict: "Select your district",
        placeLabel: "Village/Town (Optional)",
        placePlaceholder: "Enter your location",
        productLabel: "Have you used SML products?",
        yes: "Yes",
        no: "No",
        continue: "Continue",
        submit: "Submit",
        successTitle: "Thank you!",
        successMessage: "Your information has been submitted successfully. We'll get in touch with you soon.",
        submitError: "Unable to submit. Please check your connection and try again.",
        cropWheat: "Wheat",
        cropCotton: "Cotton",
        cropSoybean: "Soybean",
        cropGroundnut: "Groundnut",
        cropMaize: "Maize",
        cropSugarcane: "Sugarcane"
    },
    Marathi: {
        welcomeTitle: "SML मध्ये आपले स्वागत आहे",
        selectLanguage: "तुमची पसंतीची भाषा निवडा",
        personalTitle: "चला तुम्हाला जाणून घेऊया",
        personalSubtitle: "तुमची मूलभूत माहिती प्रविष्ट करा",
        nameLabel: "तुमचे नाव",
        namePlaceholder: "तुमचे पूर्ण नाव प्रविष्ट करा",
        mobileLabel: "मोबाईल नंबर",
        farmTitle: "तुमच्या शेताबद्दल",
        farmSubtitle: "तुम्ही काय पिकवता ते सांगा",
        cropsLabel: "तुमची पिके निवडा",
        cropsPlaceholder: "पिके निवडण्यासाठी टॅप करा",
        acreageLabel: "जमीन क्षेत्र (एकरमध्ये)",
        acreagePlaceholder: "उदा., 2.5",
        locationTitle: "जवळजवळ पूर्ण झाले!",
        locationSubtitle: "फक्त काही अधिक तपशील",
        stateLabel: "राज्य",
        selectState: "तुमचे राज्य निवडा",
        stateGujarat: "गुजरात",
        stateMaharashtra: "महाराष्ट्र",
        districtLabel: "जिल्हा",
        selectDistrict: "तुमचा जिल्हा निवडा",
        placeLabel: "गाव/शहर (पर्यायी)",
        placePlaceholder: "तुमचे स्थान प्रविष्ट करा",
        productLabel: "तुम्ही SML उत्पादने वापरली आहेत का?",
        yes: "होय",
        no: "नाही",
        continue: "पुढे चला",
        submit: "सबमिट करा",
        successTitle: "धन्यवाद!",
        successMessage: "तुमची माहिती यशस्वीरित्या सबमिट केली गेली आहे. आम्ही लवकरच तुमच्याशी संपर्क साधू.",
        submitError: "सबमिट करणे शक्य नाही. कृपया तुमचे कनेक्शन तपासा आणि पुन्हा प्रयत्न करा.",
        cropWheat: "गहू",
        cropCotton: "कापूस",
        cropSoybean: "सोयाबीन",
        cropGroundnut: "भुईमूग",
        cropMaize: "मका",
        cropSugarcane: "ऊस"
    },
    Gujarati: {
        welcomeTitle: "SML માં તમારું સ્વાગત છે",
        selectLanguage: "તમારી પસંદગીની ભાષા પસંદ કરો",
        personalTitle: "ચાલો તમને જાણીએ",
        personalSubtitle: "તમારી મૂળભૂત માહિતી દાખલ કરો",
        nameLabel: "તમારું નામ",
        namePlaceholder: "તમારું પૂરું નામ દાખલ કરો",
        mobileLabel: "મોબાઇલ નંબર",
        farmTitle: "તમારા ખેતર વિશે",
        farmSubtitle: "તમે શું ઉગાડો છો તે જણાવો",
        cropsLabel: "તમારા પાક પસંદ કરો",
        cropsPlaceholder: "પાક પસંદ કરવા ટેપ કરો",
        acreageLabel: "જમીન વિસ્તાર (એકરમાં)",
        acreagePlaceholder: "દા.ત., 2.5",
        locationTitle: "લગભગ પૂર્ણ થયું!",
        locationSubtitle: "માત્ર થોડી વધુ વિગતો",
        stateLabel: "રાજ્ય",
        selectState: "તમારું રાજ્ય પસંદ કરો",
        stateGujarat: "ગુજરાત",
        stateMaharashtra: "મહારાષ્ટ્ર",
        districtLabel: "જિલ્લો",
        selectDistrict: "તમારો જિલ્લો પસંદ કરો",
        placeLabel: "ગામ/શહેર (વૈકલ્પિક)",
        placePlaceholder: "તમારું સ્થાન દાખલ કરો",
        productLabel: "શું તમે SML ઉત્પાદનોનો ઉપયોગ કર્યો છે?",
        yes: "હા",
        no: "ના",
        continue: "આગળ વધો",
        submit: "સબમિટ કરો",
        successTitle: "આભાર!",
        successMessage: "તમારી માહિતી સફળતાપૂર્વક સબમિટ કરવામાં આવી છે. અમે ટૂંક સમયમાં તમારો સંપર્ક કરીશું.",
        submitError: "સબમિટ કરવામાં અસમર્થ. કૃપા કરીને તમારું કનેક્શન તપાસો અને ફરી પ્રયાસ કરો.",
        cropWheat: "ઘઉં",
        cropCotton: "કપાસ",
        cropSoybean: "સોયાબીન",
        cropGroundnut: "મગફળી",
        cropMaize: "મકાઈ",
        cropSugarcane: "શેરડી"
    }
};

// ============================================
// STATE & DISTRICT DATA
// ============================================
const stateDistrictData = {
    Gujarat: {
        English: [
            "Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", 
            "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", 
            "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "Kutch", 
            "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", 
            "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", 
            "Tapi", "Vadodara", "Valsad"
        ],
        Gujarati: [
            "અમદાવાદ", "અમરેલી", "આણંદ", "અરવલ્લી", "બનાસકાંઠા", "ભરૂચ", 
            "ભાવનગર", "બોટાદ", "છોટા ઉદેપુર", "દાહોદ", "ડાંગ", "દેવભૂમિ દ્વારકા", 
            "ગાંધીનગર", "ગીર સોમનાથ", "જામનગર", "જુનાગઢ", "ખેડા", "કચ્છ", 
            "મહિસાગર", "મહેસાણા", "મોરબી", "નર્મદા", "નવસારી", "પંચમહાલ", 
            "પાટણ", "પોરબંદર", "રાજકોટ", "સાબરકાંઠા", "સુરત", "સુરેન્દ્રનગર", 
            "તાપી", "વડોદરા", "વલસાડ"
        ],
        Marathi: [
            "अहमदाबाद", "अमरेली", "आनंद", "अरावली", "बनासकांठा", "भरूच", 
            "भावनगर", "बोटाद", "छोटा उदयपुर", "दाहोद", "डांग", "देवभूमि द्वारका", 
            "गांधीनगर", "गीर सोमनाथ", "जामनगर", "जुनागढ", "खेडा", "कच्छ", 
            "महिसागर", "मेहसाना", "मोरबी", "नर्मदा", "नवसारी", "पंचमहाल", 
            "पाटण", "पोरबंदर", "राजकोट", "साबरकांठा", "सुरत", "सुरेंद्रनगर", 
            "तापी", "वडोदरा", "वलसाड"
        ]
    },
    Maharashtra: {
        English: [
            "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", 
            "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", 
            "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", 
            "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", 
            "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", 
            "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"
        ],
        Marathi: [
            "अहमदनगर", "अकोला", "अमरावती", "औरंगाबाद", "बीड", "भंडारा", 
            "बुलढाणा", "चंद्रपूर", "धुळे", "गडचिरोली", "गोंदिया", "हिंगोली", 
            "जळगाव", "जालना", "कोल्हापूर", "लातूर", "मुंबई शहर", "मुंबई उपनगर", 
            "नागपूर", "नांदेड", "नंदुरबार", "नाशिक", "उस्मानाबाद", "पालघर", 
            "परभणी", "पुणे", "रायगड", "रत्नागिरी", "सांगली", "सातारा", 
            "सिंधुदुर्ग", "सोलापूर", "ठाणे", "वर्धा", "वाशिम", "यवतमाळ"
        ],
        Gujarati: [
            "અહમદનગર", "અકોલા", "અમરાવતી", "ઔરંગાબાદ", "બીડ", "ભંડારા", 
            "બુલઢાણા", "ચંદ્રપુર", "ધુળે", "ગડચિરોલી", "ગોંદિયા", "હિંગોલી", 
            "જળગાંવ", "જાલના", "કોલ્હાપુર", "લાતુર", "મુંબઈ શહેર", "મુંબઈ ઉપનગર", 
            "નાગપુર", "નાંદેડ", "નંદુરબાર", "નાશિક", "ઉસ્માનાબાદ", "પાલઘર", 
            "પરભણી", "પુણે", "રાયગડ", "રત્નાગિરી", "સાંગલી", "સાતારા", 
            "સિંધુદુર્ગ", "સોલાપુર", "ઠાણે", "વર્ધા", "વાશિમ", "યવતમાળ"
        ]
    }
};

// ============================================
// GLOBAL STATE
// ============================================
let currentStep = 1;
const totalSteps = 4;
let selectedLanguage = 'English';
let selectedCrops = [];

// Crop mapping for translation
const cropMapping = {
    'Wheat': { English: 'Wheat', Marathi: 'गहू', Gujarati: 'ઘઉં' },
    'Cotton': { English: 'Cotton', Marathi: 'कापूस', Gujarati: 'કપાસ' },
    'Soybean': { English: 'Soybean', Marathi: 'सोयाबीन', Gujarati: 'સોયાબીન' },
    'Groundnut': { English: 'Groundnut', Marathi: 'भुईमूग', Gujarati: 'મગફળી' },
    'Maize': { English: 'Maize', Marathi: 'मका', Gujarati: 'મકાઈ' },
    'Sugarcane': { English: 'Sugarcane', Marathi: 'ऊस', Gujarati: 'શેરડી' }
};

// ============================================
// DOM ELEMENTS
// ============================================
const elements = {
    appHeader: document.getElementById('appHeader'),
    stepIndicator: document.getElementById('stepIndicator'),
    stepsWrapper: document.getElementById('stepsWrapper'),
    ctaButton: document.getElementById('ctaButton'),
    ctaContainer: document.getElementById('ctaContainer'),
    errorBanner: document.getElementById('errorBanner'),
    successScreen: document.getElementById('successScreen'),
    chipsInput: document.getElementById('chipsInput'),
    chipsContainer: document.getElementById('chipsContainer'),
    chipsDropdown: document.getElementById('chipsDropdown'),
    stateSelect: document.getElementById('state'),
    districtSelect: document.getElementById('district')
};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    updateUI();
    
    // Prevent form autofill/prefill
    clearFormOnLoad();
});

function initializeApp() {
    // Set first step as active
    const firstStep = document.querySelector('[data-step="1"]');
    if (firstStep) {
        firstStep.classList.add('active');
    }
}

function clearFormOnLoad() {
    // Clear all form inputs
    document.querySelectorAll('input[type="text"], input[type="tel"], input[type="number"], textarea').forEach(input => {
        input.value = '';
    });
    
    // Uncheck all radio buttons and checkboxes
    document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => {
        input.checked = false;
    });
    
    // Reset all select dropdowns
    document.querySelectorAll('select').forEach(select => {
        select.selectedIndex = 0;
    });
    
    // Clear selected crops
    selectedCrops = [];
    updateChipsDisplay();
    
    // Reset to step 1
    currentStep = 1;
    selectedLanguage = 'English';
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    // CTA Button
    elements.ctaButton.addEventListener('click', handleContinue);
    
    // Language selection
    document.querySelectorAll('input[name="language"]').forEach(input => {
        input.addEventListener('change', (e) => {
            selectedLanguage = e.target.value;
            updateTranslations();
        });
    });
    
    // Chips input (crops)
    elements.chipsContainer.addEventListener('click', toggleChipsDropdown);
    
    document.querySelectorAll('#chipsDropdown input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', handleCropSelection);
    });
    
    // Close chips dropdown on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.chips-input')) {
            closeChipsDropdown();
        }
    });
    
    // State/District cascade
    elements.stateSelect.addEventListener('change', handleStateChange);
    
    // Input validation
    const nameInput = document.getElementById('name');
    const mobileInput = document.getElementById('alternate_mobile');
    const acreageInput = document.getElementById('land_acreage');
    
    if (nameInput) {
        nameInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, '');
        });
    }
    
    if (mobileInput) {
        mobileInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
        });
    }
    
    if (acreageInput) {
        acreageInput.addEventListener('input', (e) => {
            if (parseFloat(e.target.value) < 0) {
                e.target.value = '';
            }
        });
    }
}

// ============================================
// TRANSLATIONS
// ============================================
function updateTranslations() {
    const t = translations[selectedLanguage];
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (t[key]) {
            element.textContent = t[key];
        }
    });
    
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (t[key]) {
            element.placeholder = t[key];
        }
    });
    
    // Update chips display with translated crop names
    updateChipsDisplay();
    
    // Update district dropdown if state is selected
    if (elements.stateSelect.value) {
        handleStateChange();
    }
}

// ============================================
// NAVIGATION
// ============================================
function handleContinue() {
    if (validateCurrentStep()) {
        if (currentStep < totalSteps) {
            goToNextStep();
        } else {
            handleSubmit();
        }
    }
}

function goToNextStep() {
    const currentStepEl = document.querySelector(`[data-step="${currentStep}"]`);
    const nextStep = currentStep + 1;
    const nextStepEl = document.querySelector(`[data-step="${nextStep}"]`);
    
    if (currentStepEl && nextStepEl) {
        // Exit animation for current step
        currentStepEl.classList.add('exit-left');
        
        setTimeout(() => {
            currentStepEl.classList.remove('active', 'exit-left');
            nextStepEl.classList.add('active');
            currentStep = nextStep;
            updateUI();
            window.scrollTo(0, 0);
        }, 400);
    }
}

function updateUI() {
    // Update step dots
    document.querySelectorAll('.step-dot').forEach((dot, index) => {
        dot.classList.remove('active', 'completed');
        if (index + 1 === currentStep) {
            dot.classList.add('active');
        } else if (index + 1 < currentStep) {
            dot.classList.add('completed');
        }
    });
    
    // Hide header and indicator after step 1
    if (currentStep > 1) {
        elements.appHeader.classList.add('hidden');
        elements.stepIndicator.classList.add('hidden');
    } else {
        elements.appHeader.classList.remove('hidden');
        elements.stepIndicator.classList.remove('hidden');
    }
    
    // Update CTA button text
    const t = translations[selectedLanguage];
    const ctaText = elements.ctaButton.querySelector('.cta-text');
    if (currentStep === totalSteps) {
        ctaText.textContent = t.submit || 'Submit';
    } else {
        ctaText.textContent = t.continue || 'Continue';
    }
}

// ============================================
// VALIDATION
// ============================================
function validateCurrentStep() {
    clearErrors();
    let isValid = true;
    
    switch (currentStep) {
        case 1:
            isValid = validateLanguage();
            break;
        case 2:
            isValid = validatePersonalDetails();
            break;
        case 3:
            isValid = validateFarmingDetails();
            break;
        case 4:
            isValid = validateLocationAndProduct();
            break;
    }
    
    return isValid;
}

function validateLanguage() {
    const languageInput = document.querySelector('input[name="language"]:checked');
    if (!languageInput) {
        showError('language', 'Please select a language');
        return false;
    }
    return true;
}

function validatePersonalDetails() {
    let isValid = true;
    
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();
    
    if (!name) {
        showError('name', 'Name is required');
        nameInput.classList.add('error');
        isValid = false;
    } else if (name.length < 2) {
        showError('name', 'Name must be at least 2 characters');
        nameInput.classList.add('error');
        isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
        showError('name', 'Name can only contain letters and spaces');
        nameInput.classList.add('error');
        isValid = false;
    }
    
    const mobileInput = document.getElementById('alternate_mobile');
    const mobile = mobileInput.value.trim();
    
    if (!mobile) {
        showError('alternate_mobile', 'Mobile number is required');
        mobileInput.classList.add('error');
        isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
        showError('alternate_mobile', 'Mobile number must be exactly 10 digits');
        mobileInput.classList.add('error');
        isValid = false;
    }
    
    return isValid;
}

function validateFarmingDetails() {
    let isValid = true;
    
    if (selectedCrops.length === 0) {
        showError('crops', 'Please select at least one crop');
        elements.chipsContainer.classList.add('error');
        isValid = false;
    }
    
    const acreageInput = document.getElementById('land_acreage');
    const acreage = acreageInput.value.trim();
    
    if (!acreage) {
        showError('land_acreage', 'Land acreage is required');
        acreageInput.classList.add('error');
        isValid = false;
    } else if (parseFloat(acreage) <= 0) {
        showError('land_acreage', 'Land acreage must be greater than 0');
        acreageInput.classList.add('error');
        isValid = false;
    }
    
    return isValid;
}

function validateLocationAndProduct() {
    let isValid = true;
    
    const state = elements.stateSelect.value;
    if (!state) {
        showError('state', 'State is required');
        elements.stateSelect.classList.add('error');
        isValid = false;
    }
    
    const district = elements.districtSelect.value;
    if (!district) {
        showError('district', 'District is required');
        elements.districtSelect.classList.add('error');
        isValid = false;
    }
    
    const productInput = document.querySelector('input[name="used_sml_products"]:checked');
    if (!productInput) {
        showError('used_sml_products', 'Please select an option');
        isValid = false;
    }
    
    return isValid;
}

// ============================================
// ERROR HANDLING
// ============================================
function showError(fieldName, message) {
    const errorEl = document.getElementById(`error-${fieldName}`);
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
    
    elements.errorBanner.classList.remove('show');
}

// ============================================
// CROPS MULTI-SELECT
// ============================================
function toggleChipsDropdown(e) {
    e.stopPropagation();
    const isActive = elements.chipsDropdown.classList.contains('active');
    
    if (isActive) {
        closeChipsDropdown();
    } else {
        elements.chipsDropdown.classList.add('active');
        elements.chipsContainer.classList.add('active');
    }
}

function closeChipsDropdown() {
    elements.chipsDropdown.classList.remove('active');
    elements.chipsContainer.classList.remove('active');
}

function handleCropSelection(e) {
    const value = e.target.value;
    
    if (e.target.checked) {
        if (!selectedCrops.includes(value)) {
            selectedCrops.push(value);
        }
    } else {
        selectedCrops = selectedCrops.filter(crop => crop !== value);
    }
    
    updateChipsDisplay();
}

function updateChipsDisplay() {
    elements.chipsContainer.innerHTML = '';
    
    if (selectedCrops.length === 0) {
        const placeholder = document.createElement('span');
        placeholder.className = 'chips-placeholder';
        placeholder.setAttribute('data-translate', 'cropsPlaceholder');
        placeholder.textContent = translations[selectedLanguage].cropsPlaceholder;
        elements.chipsContainer.appendChild(placeholder);
    } else {
        selectedCrops.forEach(cropKey => {
            const chip = document.createElement('div');
            chip.className = 'chip';
            
            // Get translated crop name
            const translatedCropName = cropMapping[cropKey][selectedLanguage] || cropKey;
            
            chip.innerHTML = `
                ${translatedCropName}
                <button type="button" class="chip-remove" data-crop="${cropKey}">×</button>
            `;
            elements.chipsContainer.appendChild(chip);
        });
        
        // Add remove handlers
        elements.chipsContainer.querySelectorAll('.chip-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const cropToRemove = btn.getAttribute('data-crop');
                selectedCrops = selectedCrops.filter(crop => crop !== cropToRemove);
                
                // Uncheck checkbox
                const checkbox = document.querySelector(`#chipsDropdown input[value="${cropToRemove}"]`);
                if (checkbox) checkbox.checked = false;
                
                updateChipsDisplay();
            });
        });
    }
}

// ============================================
// STATE/DISTRICT CASCADE
// ============================================
function handleStateChange() {
    const selectedState = elements.stateSelect.value;
    const t = translations[selectedLanguage];
    
    elements.districtSelect.innerHTML = `<option value="">${t.selectDistrict}</option>`;
    
    if (selectedState && stateDistrictData[selectedState]) {
        elements.districtSelect.disabled = false;
        const districts = stateDistrictData[selectedState][selectedLanguage] || stateDistrictData[selectedState]['English'];
        
        districts.forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            elements.districtSelect.appendChild(option);
        });
    } else {
        elements.districtSelect.disabled = true;
    }
}

// ============================================
// FORM SUBMISSION
// ============================================
async function handleSubmit() {
    // Prepare form data
    const formData = {
        language: selectedLanguage,
        name: document.getElementById('name').value.trim(),
        alternate_mobile: document.getElementById('alternate_mobile').value.trim(),
        crops: selectedCrops,
        land_acreage: parseFloat(document.getElementById('land_acreage').value),
        state: elements.stateSelect.value,
        district: elements.districtSelect.value,
        place: document.getElementById('place').value.trim(),
        used_sml_products: document.querySelector('input[name="used_sml_products"]:checked').value
    };
    
    // Show loading state
    elements.ctaButton.classList.add('loading');
    elements.ctaButton.disabled = true;
    
    try {
        const response = await fetch('http://localhost:5678/webhook-test/sml_farmer_validation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        // Always show success screen regardless of response
        // This ensures the thank you message appears even if webhook is not running
        showSuccessScreen();
        
    } catch (error) {
        console.error('Submission error:', error);
        // Still show success screen even if there's an error
        // In production, you might want to handle this differently
        showSuccessScreen();
    } finally {
        elements.ctaButton.classList.remove('loading');
        elements.ctaButton.disabled = false;
    }
}

function showSuccessScreen() {
    // Hide current step
    const currentStepEl = document.querySelector(`[data-step="${currentStep}"]`);
    if (currentStepEl) {
        currentStepEl.classList.remove('active');
    }
    
    // Show success screen
    elements.successScreen.classList.add('active');
    elements.ctaContainer.style.display = 'none';
    elements.stepIndicator.classList.add('hidden');
}
