// Instance tokens 
window.tokens = {
    percy: "37f159235a54eb45f005f1802f1f321e622130b32dadad546e9e981b462a7f139a906dacb11ade7787e0a33fdc1a78547a8cf1ea14155dc68ce141c23f7307bf333d6225d9aebe2fde2b366fb2a9862d1266519d7b1c130339dd3c2e374076b1c1f9d641a3e66376cfa17aba80710c4a43a8f6323a5e693ccbc4d6d3a96d0d077b62241b3b5ab14a320e96d9ceb7e8b317646c79d7ac947147b1ce6108205a34fcd911bf8ac154f03ed1c85e48c499572cb011cfde8e52d4ee94a9c3a36e2d595708950673e282da9e7628c9618d8b9e64fb2cb59981cd1e5ad6062d18b7546777471244ebe8f6d476fe6968743c405064bfdcfcdf0ae09592d89a3103a76a0acde624a94cc6e688aa2125b209ba9fa4",
    ron:   "efd1ff67e647efe245124d6ec23de6307854caf3e70600f1472538dd013d44cc374b82ae52490aa437793227b38eaea0d090eb9a121daa9306a5938d5f51f72cec492558f45cfca48ed8a53a11ff781c9434a634ede7a63f4e3f39ad22d6c4ade3fc4f2166440936dca97bef29532e3c3f22b7d3f897e7c2977973e451335b7382ddafe1b3980c57d3656ec9b6ea41463eef454f265000bf9e802fe03135977ed88020398995d2134eed65eff4e0bde2e191d2b79aa614fa167090e362ddfc9f3471fe8988e6fb6ce16dfd8b377d2064bb552d2794fd09ca8c5a556daccd73a3fd5a2b9d641e8745b6ceb2d07693b9f205944119a68d6bd9b96b6d931dd058f41913ee9f5c786753465d97ac83e4847f",
    jo:    ""
};





// pass variables
const baseURL = "https://apps-d.docusign.com/webforms/us/ab4743a19e2f50ecb08d71eae9988706";

function loadUser(key, btn) {
    document.getElementById('welcome-text').style.display = 'none';
    
    document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.getElementById('formFrame').src = baseURL + "#instanceToken=" + window.tokens[key];
}