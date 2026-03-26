
// OAuth Token
const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjY4MTg1ZmYxLTRlNTEtNGNlOS1hZjFjLTY4OTgxMjIwMzMxNyJ9.eyJUb2tlblR5cGUiOjUsIklzc3VlSW5zdGFudCI6MTc3Mjc2MDE2MywiZXhwIjoxNzcyNzg4OTYzLCJVc2VySWQiOiJhNzUwZThjMS1hNTgzLTRiNjktYTZiNi1kM2MwYzNkZTA1NzMiLCJzaXRlaWQiOjEsInNjcCI6WyJzaWduYXR1cmUiLCJhb3dfbWFuYWdlIiwid2ViZm9ybXNfcmVhZCIsIndlYmZvcm1zX3dyaXRlIiwid2ViZm9ybXNfaW5zdGFuY2VfcmVhZCIsIndlYmZvcm1zX2luc3RhbmNlX3dyaXRlIl0sImF1ZCI6IjY0NWJlY2FlLWRlZmUtNDVkMC1iYTgzLTJlZjc0NWMyYTg4MCIsImF6cCI6IjY0NWJlY2FlLWRlZmUtNDVkMC1iYTgzLTJlZjc0NWMyYTg4MCIsImlzcyI6Imh0dHBzOi8vYWNjb3VudC1kLmRvY3VzaWduLmNvbS8iLCJzdWIiOiJhNzUwZThjMS1hNTgzLTRiNjktYTZiNi1kM2MwYzNkZTA1NzMiLCJhbXIiOlsibWFuYWdlZCIsImRzX2ludGVybmFsIl0sImF1dGhfdGltZSI6MTc3Mjc1NjYyNH0.mSnxvxGNb8ruRcT45eUktFHcLyPkg6ZFlHDzLMHqv7btMKNB6o-dKR5wrwR5arcT9lkyxe1puRwxb2vJU8G3o59HUNq_ErfRaN_NcuM0aLHRJh_SVeHeXUHat4WfCME89ZDuVQuYwPzDQ00wgwHqEjWmcXo51_GV53X2-smKig7pu4Rg1b1rCBVNh_Py1jnACRAAZJ9YxOIPeRPGuxWVLuRItCiMJqWrXic_uc1VU5SF7zrC4eCbuyOzviOLx1IqShAw-yChUwZ2CgdOqjOB6nAOQvyWIebDhgom7XShkYYJSZVi6HqYu5d_pqAtyTANy-UGx445VaoHGvNpmrDlsw";


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

// Account IDs
const ACCOUNT_ID = "bc61fee0-91aa-4984-934c-8d2b20c5a399";
const FORM_ID    = "b4dc7136-5f19-4a21-a23b-e0cfb7b623f8";
const BASE_URL   = `https://apps-d.docusign.com/api/webforms/v1.1/accounts/${ACCOUNT_ID}/forms/${FORM_ID}/instances`;


module.exports = { TOKEN, BASE_URL, users };