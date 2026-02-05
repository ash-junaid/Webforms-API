

// Instance tokens 
window.tokens = {
    percy: "PASTE_NEW_TOKEN_HERE",
    ron:   "PASTE_NEW_TOKEN_HERE",
    jo:    "PASTE_NEW_TOKEN_HERE"
};

// Web Form URL (Do not change)
const baseURL = "https://apps-d.docusign.com/webforms/us/ab4743a19e2f50ecb08d71eae9988706";


//JS stuff

function loadUser(userKey, btnElement) {
    
    const welcomeText = document.getElementById('welcome-text');
    if (welcomeText) welcomeText.style.display = 'none';
    
   
    document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');

 
    const token = window.tokens ? window.tokens[userKey] : null;

    
    if(token) {
        document.getElementById('formFrame').src = baseURL + "#instanceToken=" + token;
    } else {
        alert("Error: Token not found for " + userKey + ". Please check config.js");
    }
}