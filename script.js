// ============================================
// TRANSLATIONS OBJECT
// ============================================
const translations = {
    English: {
        selectLanguage: "Select Your Language",
        languageSubtitle: "Choose your preferred language",
        personalDetails: "Personal Details",
        personalSubtitle: "Tell us about yourself",
        name: "Name *",
        namePlaceholder: "Enter your full name",
        alternateMobile: "Alternate Mobile Number *",
        farmingDetails: "Farming Details",
        farmingSubtitle: "Your crops and land information",
        crops: "Select Crops *",
        cropsPlaceholder: "Select your crops...",
        landAcreage: "Land Acreage (in acres) *",
        landPlaceholder: "e.g., 2.5",
        location: "Location",
        locationSubtitle: "Where is your farm located?",
        state: "State *",
        selectState: "Select State",
        district: "District *",
        selectDistrict: "Select District",
        place: "Place (Optional)",
        placePlaceholder: "Enter your village/town",
        productUsage: "Product Usage",
        productSubtitle: "Your experience with SML",
        usedProducts: "Have you ever used SML Products before? *",
        yes: "Yes",
        no: "No",
        next: "Next",
        back: "Back",
        submit: "Submit",
        successTitle: "Submission Successful!",
        successText: "Your farmer validation has been submitted successfully.",
        submitError: "Failed to submit. Please check your connection and try again."
    },
    Marathi: {
        selectLanguage: "तुमची भाषा निवडा",
        languageSubtitle: "तुमची पसंतीची भाषा निवडा",
        personalDetails: "वैयक्तिक तपशील",
        personalSubtitle: "आपल्याबद्दल सांगा",
        name: "नाव *",
        namePlaceholder: "तुमचे पूर्ण नाव प्रविष्ट करा",
        alternateMobile: "पर्यायी मोबाईल नंबर *",
        farmingDetails: "शेती तपशील",
        farmingSubtitle: "तुमची पिके आणि जमीन माहिती",
        crops: "पिके निवडा *",
        cropsPlaceholder: "तुमची पिके निवडा...",
        landAcreage: "जमीन क्षेत्र (एकरमध्ये) *",
        landPlaceholder: "उदा., 2.5",
        location: "स्थान",
        locationSubtitle: "तुमचे शेत कुठे आहे?",
        state: "राज्य *",
        selectState: "राज्य निवडा",
        district: "जिल्हा *",
        selectDistrict: "जिल्हा निवडा",
        place: "ठिकाण (पर्यायी)",
        placePlaceholder: "तुमचे गाव/शहर प्रविष्ट करा",
        productUsage: "उत्पादन वापर",
        productSubtitle: "SML सोबतचा तुमचा अनुभव",
        usedProducts: "तुम्ही यापूर्वी SML उत्पादने वापरली आहेत का? *",
        yes: "होय",
        no: "नाही",
        next: "पुढे",
        back: "मागे",
        submit: "सबमिट करा",
        successTitle: "सबमिशन यशस्वी!",
        successText: "तुमचा शेतकरी प्रमाणीकरण यशस्वीरित्या सबमिट झाला आहे.",
        submitError: "सबमिट करण्यात अयशस्वी. कृपया तुमचे कनेक्शन तपासा आणि पुन्हा प्रयत्न करा."
    },
    Gujarati: {
        selectLanguage: "તમારી ભાષા પસંદ કરો",
        languageSubtitle: "તમારી પસંદગીની ભાષા પસંદ કરો",
        personalDetails: "વ્યક્તિગત વિગતો",
        personalSubtitle: "તમારા વિશે જણાવો",
        name: "નામ *",
        namePlaceholder: "તમારું પૂરું નામ દાખલ કરો",
        alternateMobile: "વૈકલ્પિક મોબાઇલ નંબર *",
        farmingDetails: "ખેતી વિગતો",
        farmingSubtitle: "તમારા પાક અને જમીન માહિતી",
        crops: "પાક પસંદ કરો *",
        cropsPlaceholder: "તમારા પાક પસંદ કરો...",
        landAcreage: "જમીન વિસ્તાર (એકરમાં) *",
        landPlaceholder: "દા.ત., 2.5",
        location: "સ્થળ",
        locationSubtitle: "તમારું ખેતર ક્યાં આવેલું છે?",
        state: "રાજ્ય *",
        selectState: "રાજ્ય પસંદ કરો",
        district: "જિલ્લો *",
        selectDistrict: "જિલ્લો પસંદ કરો",
        place: "સ્થળ (વૈકલ્પિક)",
        placePlaceholder: "તમારું ગામ/શહેર દાખલ કરો",
        productUsage: "ઉત્પાદન ઉપયોગ",
        productSubtitle: "SML સાથેનો તમારો અનુભવ",
        usedProducts: "શું તમે પહેલાં ક્યારેય SML ઉત્પાદનોનો ઉપયોગ કર્યો છે? *",
        yes: "હા",
        no: "ના",
        next: "આગળ",
        back: "પાછળ",
        submit: "સબમિટ કરો",
        successTitle: "સબમિશન સફળ!",
        successText: "તમારું ખેડૂત માન્યતા સફળતાપૂર્વક સબમિટ થયું છે.",
        submitError: "સબમિટ કરવામાં નિષ્ફળ. કૃપા કરીને તમારું કનેક્શન તપાસો અને ફરી પ્રયાસ કરો."
    }
};

// ============================================
// STATE & DISTRICT DATA
// ============================================
const stateDistrictData = {
    Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
    Maharashtra: ["Pune", "Nashik", "Nagpur", "Ahmednagar", "Kolhapur"]
};

// ============================================
// GLOBAL VARIABLES
// ============================================
let currentStep = 1;
const totalSteps = 5;
let selectedLanguage = 'English';
let selectedCrops = [];

// ============================================
// DOM ELEMENTS
// ============================================
const form = document.getElementById('farmerForm');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const buttonContainer = document.querySelector('.button-container');
const cropDisplay = document.getElementById('cropDisplay');
const cropDropdown = document.getElementById('cropDropdown');
const stateSelect = document.getElementById('state');
const districtSelect = document.getElementById('district');
const successMessage = document.getElementById('successMessage');
const submitError = document.getElementById('submitError');
const formContainer = document.querySelector('.form-container');

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    updateStepDisplay();
    setupEventListeners();
});

// ============================================
// EVENT LISTENERS SETUP
// ============================================
function setupEventListeners() {
    // Navigation buttons
    backBtn.addEventListener('click', goToPreviousStep);
    nextBtn.addEventListener('click', goToNextStep);
    submitBtn.addEventListener('click', handleSubmit);

    // Language selection
    const languageInputs = document.querySelectorAll('input[name="language"]');
    languageInputs.forEach(input => {
        input.addEventListener('change', handleLanguageChange);
    });

    // Multi-select crops
    cropDisplay.addEventListener('click', toggleCropDropdown);
    const cropCheckboxes = document.querySelectorAll('input[name="crops"]');
    cropCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleCropSelection);
    });

    // State/District cascade
    stateSelect.addEventListener('change', handleStateChange);

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.multi-select-wrapper')) {
            cropDropdown.classList.remove('active');
            cropDisplay.classList.remove('active');
        }
    });

    // Input validation on change
    const nameInput = document.getElementById('name');
    const mobileInput = document.getElementById('alternate_mobile');
    const acreageInput = document.getElementById('land_acreage');

    nameInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^A-Za-z\s]/g, '');
    });

    mobileInput.addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, '').slice(0, 10);
    });

    acreageInput.addEventListener('input', function() {
        if (parseFloat(this.value) < 0) {
            this.value = '';
        }
    });
}

// ============================================
// LANGUAGE CHANGE HANDLER
// ============================================
function handleLanguageChange(e) {
    selectedLanguage = e.target.value;
    updateTranslations();
}

function updateTranslations() {
    const t = translations[selectedLanguage];
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (t[key]) {
            element.textContent = t[key];
        }
    });

    // Update placeholder attributes
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (t[key]) {
            element.placeholder = t[key];
        }
    });
}

// ============================================
// NAVIGATION FUNCTIONS
// ============================================
function goToNextStep() {
    if (validateCurrentStep()) {
        if (currentStep < totalSteps) {
            currentStep++;
            updateStepDisplay();
            window.scrollTo(0, 0);
        }
    }
}

function goToPreviousStep() {
    if (currentStep > 1) {
        currentStep--;
        updateStepDisplay();
        clearStepErrors(currentStep);
        window.scrollTo(0, 0);
    }
}

function updateStepDisplay() {
    // Hide all steps
    document.querySelectorAll('.form-step').forEach(step => {
        step.classList.remove('active');
    });

    // Show current step
    const currentStepElement = document.querySelector(`[data-step="${currentStep}"]`);
    if (currentStepElement) {
        currentStepElement.classList.add('active');
    }

    // Update progress dots
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.remove('active', 'completed');
        if (index + 1 === currentStep) {
            dot.classList.add('active');
        } else if (index + 1 < currentStep) {
            dot.classList.add('completed');
        }
    });

    // Update progress text
    const t = translations[selectedLanguage];
    document.getElementById('currentStepText').textContent = `${t.step || 'Step'} ${currentStep} ${t.of || 'of'} ${totalSteps}`;

    // Update button visibility
    buttonContainer.classList.remove('first-step', 'last-step');
    if (currentStep === 1) {
        buttonContainer.classList.add('first-step');
    }
    if (currentStep === totalSteps) {
        buttonContainer.classList.add('last-step');
    }
}

// ============================================
// VALIDATION FUNCTIONS
// ============================================
function validateCurrentStep() {
    clearStepErrors(currentStep);
    let isValid = true;

    switch(currentStep) {
        case 1:
            isValid = validateLanguageStep();
            break;
        case 2:
            isValid = validatePersonalDetailsStep();
            break;
        case 3:
            isValid = validateFarmingDetailsStep();
            break;
        case 4:
            isValid = validateLocationStep();
            break;
        case 5:
            isValid = validateProductUsageStep();
            break;
    }

    return isValid;
}

function validateLanguageStep() {
    const languageInput = document.querySelector('input[name="language"]:checked');
    if (!languageInput) {
        showError('language', 'Please select a language');
        return false;
    }
    return true;
}

function validatePersonalDetailsStep() {
    let isValid = true;

    // Validate name
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();
    if (!name) {
        showError('name', 'Name is required');
        isValid = false;
    } else if (name.length < 2) {
        showError('name', 'Name must be at least 2 characters');
        isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
        showError('name', 'Name can only contain letters and spaces');
        isValid = false;
    }

    // Validate mobile
    const mobileInput = document.getElementById('alternate_mobile');
    const mobile = mobileInput.value.trim();
    if (!mobile) {
        showError('alternate_mobile', 'Mobile number is required');
        isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
        showError('alternate_mobile', 'Mobile number must be exactly 10 digits');
        isValid = false;
    }

    return isValid;
}

function validateFarmingDetailsStep() {
    let isValid = true;

    // Validate crops
    if (selectedCrops.length === 0) {
        showError('crops', 'Please select at least one crop');
        isValid = false;
    }

    // Validate land acreage
    const acreageInput = document.getElementById('land_acreage');
    const acreage = acreageInput.value.trim();
    if (!acreage) {
        showError('land_acreage', 'Land acreage is required');
        isValid = false;
    } else if (parseFloat(acreage) <= 0) {
        showError('land_acreage', 'Land acreage must be greater than 0');
        isValid = false;
    }

    return isValid;
}

function validateLocationStep() {
    let isValid = true;

    // Validate state
    const state = stateSelect.value;
    if (!state) {
        showError('state', 'State is required');
        isValid = false;
    }

    // Validate district
    const district = districtSelect.value;
    if (!district) {
        showError('district', 'District is required');
        isValid = false;
    }

    return isValid;
}

function validateProductUsageStep() {
    const productInput = document.querySelector('input[name="used_sml_products"]:checked');
    if (!productInput) {
        showError('used_sml_products', 'Please select an option');
        return false;
    }
    return true;
}

// ============================================
// ERROR HANDLING
// ============================================
function showError(fieldName, message) {
    const errorElement = document.getElementById(`error-${fieldName}`);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }

    const inputElement = document.getElementById(fieldName) || document.querySelector(`input[name="${fieldName}"]`);
    if (inputElement) {
        if (inputElement.classList) {
            inputElement.classList.add('error');
        }
        // For radio/checkbox groups
        if (inputElement.type === 'radio' || inputElement.type === 'checkbox') {
            const parentGroup = inputElement.closest('.language-options, .radio-group');
            if (parentGroup) {
                parentGroup.style.borderColor = '#f56565';
            }
        }
    }

    // Handle multi-select display
    if (fieldName === 'crops') {
        cropDisplay.style.borderColor = '#f56565';
    }
}

function clearStepErrors(step) {
    const stepElement = document.querySelector(`[data-step="${step}"]`);
    if (stepElement) {
        stepElement.querySelectorAll('.error-message').forEach(error => {
            error.classList.remove('show');
            error.textContent = '';
        });
        stepElement.querySelectorAll('.error').forEach(input => {
            input.classList.remove('error');
        });
    }
    cropDisplay.style.borderColor = '#e2e8f0';
    submitError.classList.remove('show');
}

// ============================================
// CROP MULTI-SELECT FUNCTIONS
// ============================================
function toggleCropDropdown(e) {
    e.stopPropagation();
    cropDropdown.classList.toggle('active');
    cropDisplay.classList.toggle('active');
}

function handleCropSelection(e) {
    const cropValue = e.target.value;
    if (e.target.checked) {
        if (!selectedCrops.includes(cropValue)) {
            selectedCrops.push(cropValue);
        }
    } else {
        selectedCrops = selectedCrops.filter(crop => crop !== cropValue);
    }
    updateCropDisplay();
}

function updateCropDisplay() {
    cropDisplay.innerHTML = '';
    
    if (selectedCrops.length === 0) {
        const placeholder = document.createElement('span');
        placeholder.className = 'placeholder';
        placeholder.setAttribute('data-translate', 'cropsPlaceholder');
        placeholder.textContent = translations[selectedLanguage].cropsPlaceholder || 'Select your crops...';
        cropDisplay.appendChild(placeholder);
    } else {
        selectedCrops.forEach(crop => {
            const tag = document.createElement('span');
            tag.className = 'crop-tag';
            tag.innerHTML = `
                ${crop}
                <button type="button" class="crop-tag-remove" data-crop="${crop}">×</button>
            `;
            cropDisplay.appendChild(tag);
        });

        // Add click handlers to remove buttons
        cropDisplay.querySelectorAll('.crop-tag-remove').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const cropToRemove = this.getAttribute('data-crop');
                selectedCrops = selectedCrops.filter(crop => crop !== cropToRemove);
                
                // Uncheck the checkbox
                const checkbox = document.querySelector(`input[name="crops"][value="${cropToRemove}"]`);
                if (checkbox) {
                    checkbox.checked = false;
                }
                
                updateCropDisplay();
            });
        });
    }
}

// ============================================
// STATE/DISTRICT CASCADE
// ============================================
function handleStateChange() {
    const selectedState = stateSelect.value;
    districtSelect.innerHTML = '<option value="">Select District</option>';
    
    if (selectedState && stateDistrictData[selectedState]) {
        districtSelect.disabled = false;
        stateDistrictData[selectedState].forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    } else {
        districtSelect.disabled = true;
    }
    
    districtSelect.value = '';
}

// ============================================
// FORM SUBMISSION
// ============================================
async function handleSubmit() {
    if (!validateCurrentStep()) {
        return;
    }

    // Gather form data
    const formData = {
        language: selectedLanguage,
        name: document.getElementById('name').value.trim(),
        alternate_mobile: document.getElementById('alternate_mobile').value.trim(),
        crops: selectedCrops,
        land_acreage: parseFloat(document.getElementById('land_acreage').value),
        state: stateSelect.value,
        district: districtSelect.value,
        place: document.getElementById('place').value.trim(),
        used_sml_products: document.querySelector('input[name="used_sml_products"]:checked').value
    };

    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    submitError.classList.remove('show');

    try {
        const response = await fetch('http://localhost:5678/webhook-test/sml_farmer_validation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            // Show success message
            formContainer.style.display = 'none';
            buttonContainer.style.display = 'none';
            successMessage.classList.add('show');
        } else {
            throw new Error('Submission failed');
        }
    } catch (error) {
        console.error('Submission error:', error);
        submitError.classList.add('show');
    } finally {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
