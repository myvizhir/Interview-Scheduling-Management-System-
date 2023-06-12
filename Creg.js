function validate()
{
    var d = new Date();
    var n = d.getFullYear();
    var regName = /^[a-zA-Z]+$/;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var pass = document.getElementById('pass').value;
    var cpass = document.getElementById('cpass').value;
    var yeraofpassing = document.getElementById('yp').value;
    var exp = document.getElementById('exp').value;
    if(!regName.test(fname) && !regName.test(lname)){
        alert('Invalid name given');
        return false;
    }
    if(pass != cpass){
        alert("Password does not matches");
        return false;
    }
    const x = n - yeraofpassing;
    if(exp > x){
        alert("Invalid year experiance");
        return false;
    }
    else{
        alert("Candidate Registration Succcessfull!!!");
        return true;
    }
}