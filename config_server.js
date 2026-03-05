
// OAuth Token
const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjY4MTg1ZmYxLTRlNTEtNGNlOS1hZjFjLTY4OTgxMjIwMzMxNyJ9.eyJUb2tlblR5cGUiOjUsIklzc3VlSW5zdGFudCI6MTc3MTgwNTU2NiwiZXhwIjoxNzcxODM0MzY2LCJVc2VySWQiOiJhNzUwZThjMS1hNTgzLTRiNjktYTZiNi1kM2MwYzNkZTA1NzMiLCJzaXRlaWQiOjEsInNjcCI6WyJzaWduYXR1cmUiLCJhb3dfbWFuYWdlIiwid2ViZm9ybXNfcmVhZCIsIndlYmZvcm1zX3dyaXRlIiwid2ViZm9ybXNfaW5zdGFuY2VfcmVhZCIsIndlYmZvcm1zX2luc3RhbmNlX3dyaXRlIl0sImF1ZCI6IjY0NWJlY2FlLWRlZmUtNDVkMC1iYTgzLTJlZjc0NWMyYTg4MCIsImF6cCI6IjY0NWJlY2FlLWRlZmUtNDVkMC1iYTgzLTJlZjc0NWMyYTg4MCIsImlzcyI6Imh0dHBzOi8vYWNjb3VudC1kLmRvY3VzaWduLmNvbS8iLCJzdWIiOiJhNzUwZThjMS1hNTgzLTRiNjktYTZiNi1kM2MwYzNkZTA1NzMiLCJhbXIiOlsibWFuYWdlZCIsImRzX2ludGVybmFsIl0sImF1dGhfdGltZSI6MTc3MTgwNTI2OH0.xtlye_Ho_1hAFPxWFR2pxWTUggJrsIq8f38nucsfDVeueMlXTDv19QVQib90GE8L2o8GEW3j0Nu37lzGM6Mor5CVMQ34t9wWJ0l6yr7fvAthwXuM0LwYOll1odvuTq_SqDLUJuMMQTOFsdE8ZdNtI5Mhl9hMWacd_kHgEEW9KzjlBw5JwcKWxJ0VOJzglZzEySTP-Hd2LcINWQMRzftMe_AsJlkzz-hq-FR7sVTOb8P5JnxTXqXtbBX-QlNSUrJiQg-65oXbXm8QFr00CC7rGxcG8fvm8KkFVwzxY3QGL6MJ7Ye312eRjDuHOualaeQg_PEFilsaI3B1OqQIcCHffw";

// Account IDs
const ACCOUNT_ID = "bc61fee0-91aa-4984-934c-8d2b20c5a399";
const FORM_ID    = "b4dc7136-5f19-4a21-a23b-e0cfb7b623f8";
const BASE_URL   = `https://apps-d.docusign.com/api/webforms/v1.1/accounts/${ACCOUNT_ID}/forms/${FORM_ID}/instances`;

// JSON payload
const users = {
    percy: { 
        clientUserId: "User_Percy_001", 
        formValues: { 
            "Member_name": "Percy Jackson", 
            "Member_email": "percy.jackson2290@gmail.com",
            "Member_Age": "29",
            "Member_Gender": "Male",
            "Member_Date": "1997-01-11",
            "Member_Phone": "123456",
            "Member_Address": "123 Sydney St"
        } 
    },
    ron: { 
        clientUserId: "User_Ron_001",   
        formValues: { 
            "Member_name": "Ron Weasley",   
            "Member_email": "ron.weasley2290@gmail.com",
            "Member_Age": "30",
            "Member_Gender": "Male",
            "Member_Date": "1996-03-01",
            "Member_Phone": "987654",
            "Member_Address": "321 Changi St"
        } 
    },
    jo: { 
        clientUserId: "User_Jo_001",    
        formValues: { 
            "Member_name": "Jo Jamerson",   
            "Member_email": "jo.customer2290@gmail.com",
            "Member_Age": "42",
            "Member_Gender": "Female",
            "Member_Date": "1982-11-15",
            "Member_Phone": "567345",
            "Member_Address": "64 Docu Rd"
        } 
    }
};

module.exports = { TOKEN, BASE_URL, users };