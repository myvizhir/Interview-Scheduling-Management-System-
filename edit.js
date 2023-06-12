function validate()
{
    var v = document.getElementById('vacancy').value;
    var min = document.getElementById('exp').value;

    var date=document.getElementById('date').value;
    var currentDate = new Date();
    date = new Date(date);

    if(date<currentDate){
        alert("Closing date should be greater than current date");
    }
    if(v>5){
        alert("vacancy should be bet 1 and 5");
    }
    if(!(min>=1 && min<=12)){
        alert("Minimum experiance is not valid");
    }
    else{
        alert("Edited Succcessfull!!!");
    }
}