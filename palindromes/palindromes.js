function isValidDate(dateString)
{
    // On verifie le format de la date
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) {// expressions rationnelles js
        return false;
    }

    var parts = dateString.split("/");
    var day = Number(parts[0]);
    var month = Number(parts[1]);
    var year = Number(parts[2]);

    // ranges annees et mois
    if(year < 999|| year > 9999 || month == 0 || month > 12) {
        return false;
    }
    if (maxDaysInMonth (day, month, year)== false) {
        return false;
    }

    return true;
}

function maxDaysInMonth (day, month, year) {
    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // pour les annees bissextiles
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
        monthLength[1] = 29;
    }
    // On verifie que le jour est dans le range
    if (day > 0 && day <= monthLength[month - 1]) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isValidDate("29/11/1995"));

function IsPalindrome (dateString) {
    
    if (isValidDate(dateString)== false) {
        return false;
    }

    var splitString=dateString.split("");
    var array= splitString.filter(string => string!== "/");
    //console.log(splitString);
    var arrayJoin=array.join();
    //console.log(arrayJoin);
    var reverseArray= array.reverse();
    //console.log(reverseArray);
    var reverseArrayJoin=reverseArray.join();
    //console.log(reverseArrayJoin);
    if  (arrayJoin==reverseArrayJoin) {
        return true
    }
    else {
        return false;
    }
 }

//console.log(IsPalindrome("03/04/2001"));

function getNextPalindromes (x) {
    let date= new Date();
    let arrayPalindromes=[];
    while (arrayPalindromes.length<x) {
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); 
    let yyyy =String(date.getFullYear());
    let dateString = dd + '/' + mm + '/' + yyyy;
        if (IsPalindrome(dateString)) {
            arrayPalindromes.push(dateString);
        }
    date.setDate(date.getDate() +1);  
    }
    return arrayPalindromes;
}

//console.log(getNextPalindromes(12));

