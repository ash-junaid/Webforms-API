// Instance tokens 
window.tokens = {
    percy: "",
    ron:   "",
    jo:    "bb6f24d8b5cb9e8ce318f31fc2d742c2781e0b74a346868ddc6250387d1708698f7e38a49cd1d15f46038a94b3fae7cfb39ec90bbbafef41eac77c164ea2b9a5fc17493985a6e853fbf2f0827f75e45404599e3c99dd5533719283ebe77242f41bb5eab7112c5b8958fea82acddffd9857a6df69b76359e16bc2c7cbd5a03f1e88027873415e33cb2fe76cd88bbb4fcea531b8c8e85e0cae0d96c7e7cc3b6a679d51586c9eb4f2569423d0a62b388ff6f1e3bb996230d923ce87cbb4c23e2584a160d76ddef6ec63b250e4f9e12f923c3e074915322b62ee0195feea3b9dc59a45601dd8f8e2ac6e43328b15f65bf83137ef25c35564aebb2e253503cb975ceccdb97bf8db1b05931da8cbf193d40fdb"
};



// pass variables
const baseURL = "https://apps-d.docusign.com/webforms/us/ab4743a19e2f50ecb08d71eae9988706";

function loadUser(key, btn) {
    document.getElementById('welcome-text').style.display = 'none';
    
    document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.getElementById('formFrame').src = baseURL + "#instanceToken=" + window.tokens[key];
}