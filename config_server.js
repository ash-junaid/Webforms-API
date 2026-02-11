
// OAuth Token
const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjY4MTg1ZmYxLTRlNTEtNGNlOS1hZjFjLTY4OTgxMjIwMzMxNyJ9.eyJUb2tlblR5cGUiOjUsIklzc3VlSW5zdGFudCI6MTc3MDY4Mjg4OSwiZXhwIjoxNzcwNzExNjg5LCJVc2VySWQiOiJhNzUwZThjMS1hNTgzLTRiNjktYTZiNi1kM2MwYzNkZTA1NzMiLCJzaXRlaWQiOjEsInNjcCI6WyJzaWduYXR1cmUiLCJhb3dfbWFuYWdlIiwid2ViZm9ybXNfcmVhZCIsIndlYmZvcm1zX3dyaXRlIiwid2ViZm9ybXNfaW5zdGFuY2VfcmVhZCIsIndlYmZvcm1zX2luc3RhbmNlX3dyaXRlIl0sImF1ZCI6IjY0NWJlY2FlLWRlZmUtNDVkMC1iYTgzLTJlZjc0NWMyYTg4MCIsImF6cCI6IjY0NWJlY2FlLWRlZmUtNDVkMC1iYTgzLTJlZjc0NWMyYTg4MCIsImlzcyI6Imh0dHBzOi8vYWNjb3VudC1kLmRvY3VzaWduLmNvbS8iLCJzdWIiOiJhNzUwZThjMS1hNTgzLTRiNjktYTZiNi1kM2MwYzNkZTA1NzMiLCJhbXIiOlsibWFuYWdlZCIsImRzX2ludGVybmFsIl0sImF1dGhfdGltZSI6MTc3MDY4MjgxOX0.D_LRd3rAov6495sgX6JQO2Ei2MpsfLW6amieduouagKn4oHQ2dq6whntBvrszxE6enLDhB8_LxOZg7l0Cj0hBtlFl-tgPXABkryrliqSmskPKgzI9lNVXJuLxYkBR14-JQ6sWIcmwwUH_3tKouDZGKCtvws-GXZjyzuU5_HIA90XWsA7GXodize1uepNUZJ0jmW1kRq_-F9P_nSkJU7mE_eR0Ra5g3Fh3S5uZToO9mTkk3JQdbdEYub10XQ-jTtvGcVc8YLSZzI-Ey3ydp5htZRvt2-fZUOP0yn5Ot9AkzYxZaq-YKOUkIo3VsMoDTqjdxyOToVz-9cvRagh4IjpWw";

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