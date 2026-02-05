// Instance tokens 
window.tokens = {
    percy: "25197baffb14d9fdbd881996bca965d8661a4af58325366844534a8c959bc89d7813ffebd6d7c8b0000116fe7afeabf045986db7615b0876391c3c03fdad689a4a6742e4e6e158d86f3e4f3f1f2efc12dd27c281c6517fbfc5bf34ea21449f54f44bff8702e215da4081142be15a95aad7740032d745300d49736a9fa17a7ca6b5d41846854a76f313664da4435bab9fb7414b88686e18287edcb1e46575c45a60be8be30d0235a138ac8ee902c914599ea6ec62affdee6cebc88e1e9f618576a32159a12b79765e09ba8a28866d4734cbe0636fcc74059b72af0f65a05191d61954ff0a8b20ed87a68ff641f53c8fbe9b68c02cb21359f7ad8784c0533e57395a6fa13442adddff9c9474d7019c7b5a",
    ron:   "PASTE_NEW_TOKEN_HERE",
    jo:    "PASTE_NEW_TOKEN_HERE"
};





// pass variables
const baseURL = "https://apps-d.docusign.com/webforms/us/ab4743a19e2f50ecb08d71eae9988706";

function loadUser(key, btn) {
    document.getElementById('welcome-text').style.display = 'none';
    
    document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.getElementById('formFrame').src = baseURL + "#instanceToken=" + window.tokens[key];
}