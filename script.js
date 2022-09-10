let firstNameCondition = false;
let lastNameCondition = false;
let userNameCondition  = false;
let cityNameCondition = false;
let stateNameCondition = false;
let zipCondition = false;
let tNc = false;

// ----------------------

function firstNameCheck(){
    let firstName = document.getElementById("firstNameId").value;
    console.log(firstName);

    if(firstName.length >= 2)
    {
        document.getElementById("valid-feedback-firstNameId").style.display = 'block';
        document.getElementById("invalid-feedback-firstNameId").style.display = 'none';
        firstNameCondition = true;
    }
    else
    {
        document.getElementById("valid-feedback-firstNameId").style.display = 'none';
        document.getElementById("invalid-feedback-firstNameId").style.display = 'block'; 
        firstNameCondition = false;
    }
}

// -----------------------------

function lastNameCheck(){
    let lastName = document.getElementById("lastNameId").value;
    console.log(lastName);

    if(lastName.length >= 2)
    {
        document.getElementById("valid-feedback-lastNameId").style.display = 'block';
        document.getElementById("invalid-feedback-lastNameId").style.display = 'none';
        lastNameCondition = true;
    }
    else
    {
        document.getElementById("valid-feedback-lastNameId").style.display = 'none';
        document.getElementById("invalid-feedback-lastNameId").style.display = 'block';
        lastNameCondition = false; 
    }
}

// ---------------------------------


function emailCheck()
{
    let emailAddress = document.getElementById("emailId").value;
    console.log(emailAddress);

// if(user.length >=2 )
//     { 
//         // console.log('First Name is Valid');
//         document.getElementById('first-name-valid').style.display = 'block'
//         document.getElementById('first-name-invalid').style.display = 'none';
//         userNameCondition = true;
//     }
//     else
//     {
//     document.getElementById('first-name-invalid').style.display = 'block'
//     document.getElementById('first-name-valid').style.display = 'none';
//     userNameCondition = false;
//     }
// }


let firstChar  = emailAddress.charAt(0);
let atCondition = false;
let lastTwoCondition = false;

if((firstChar >= 'a' && firstChar <='z') || firstChar >= 'A' && firstChar <= 'Z')
    atCondition = true;

let indexOfDot = emailAddress.lastIndexOf('.');

let afterDotSubstring  = emailAddress.substr(indexOfDot);
if(afterDotSubstring.length>=3)
    lastTwoCondition= true;

    // console.log(indexOfDot);
    // console.log(afterDotSubstring);
    // console.log(lastTwoCondition)

if(emailAddress.includes('@') && emailAddress.includes('.') && atCondition && lastTwoCondition)
{
    document.getElementById('valid-feedback-emailId').style.display = 'block'
    document.getElementById('invalid-feedback-emailId').style.display = 'none'
    userNameCondition = true;
}
else
{
document.getElementById('invalid-feedback-emailId').style.display = 'block'
document.getElementById('valid-feedback-emailId').style.display = 'none';
userNameCondition = false;
}


}


// ----------------------------------------------------------


function checkCity(){
        // city should have 3 characters
        let cityName = document.getElementById('city').value;

        if(cityName.length>=3)
        {
            document.getElementById('city-valid').style.display = 'block'
            document.getElementById('city-invalid').style.display = 'none';
            cityNameCondition = true;
        }
        else
        {
        document.getElementById('city-invalid').style.display = 'block'
        document.getElementById('city-valid').style.display = 'none';
        cityNameCondition = false;
        }
}


// -------------------------------------------------------

function checkState(){
    let stateName = document.getElementById('state').value; 

    if(stateName != "")
    {
        document.getElementById('valid-state-message').style.display = 'block';
        document.getElementById('invalid-state-message').style.display = 'none';
        stateNameCondition= true;
     
    }
    else
    {
    document.getElementById('invalid-state-message').style.display = 'block';
    document.getElementById('valid-state-message').style.display = 'none';
    stateNameCondition = false;
    
    }
}


// -------------------------------------------------------


function checkZip(){
    let zipCode = document.getElementById('zip').value
    let zipLen = zipCode.length;
    zipCondition = false;

      if(zipLen == 6)
    {
        zipCondition = true;
        for(let i=0; i<zipLen; i++)
        {
            if(zipCode.charAt(i)>='0' && zipCode.charAt(i)<= '9')
                continue;
            else{
                zipCondition=false;
                break;
            }
        }


    }
    
    if(zipCondition)
    {
        document.getElementById('zip-valid').style.display = 'block'
        document.getElementById('zip-invalid').style.display = 'none';
        zipCondition = true;
    }
    else
    {
    document.getElementById('zip-invalid').style.display = 'block'
    document.getElementById('zip-valid').style.display = 'none';
    zipCondition=false;
    }
}

// ---------------------------------------------

function checkTnC(){
     tNc = document.getElementById('tnc').checked ;

    if(tNc)
    {
        document.getElementById('invalid-tnc').style.display = 'none'
     
    }
    else
    {
    document.getElementById('invalid-tnc').style.display = 'block'
    
    }
}

// --------------------------------------------------- 

function validateAll(){

    firstNameCheck();
    console.log(firstNameCondition);
    lastNameCheck();
    console.log(lastNameCondition);
    emailCheck();
    console.log(userNameCondition);
    checkCity();
    console.log(cityNameCondition );
    checkState();
    console.log(stateNameCondition);
   
    checkZip();
    console.log(zipCondition);
    checkTnC();
    console.log(tNc);

    if(firstNameCondition && lastNameCondition && userNameCondition && cityNameCondition &&  zipCondition && tNc && stateNameCondition)
    {
     alert('Success. Your data is Submitted for review :)');
     document.getElementById("myForm").reset();
     clearMessage();
    }

}


function clearMessage(){

    document.getElementById("invalid-feedback-firstNameId").style.display = 'none';
    document.getElementById("valid-feedback-firstNameId").style.display = 'none';
    document.getElementById("invalid-feedback-lastNameId").style.display = 'none';
    document.getElementById("valid-feedback-lastNameId").style.display = 'none';
    document.getElementById('invalid-feedback-emailId').style.display = 'none'
    document.getElementById('valid-feedback-emailId').style.display = 'none';
    document.getElementById('city-invalid').style.display = 'none';
    document.getElementById('city-valid').style.display = 'none';
    document.getElementById('invalid-state-message').style.display = 'none';
    document.getElementById('valid-state-message').style.display = 'none';
    document.getElementById('zip-invalid').style.display = 'none';
    document.getElementById('zip-valid').style.display = 'none';
    document.getElementById('invalid-tnc').style.display = 'none'

}