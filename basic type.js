

document.write("<br/>"+Number("3.14787868"));    
document.write("<br/>"+Number(" "));       
document.write("<br/>"+Number(""));        
document.write("<br/>"+Number("99 88"));  



let num = 111;
let s=String(100 + 23);
document.write("<br/>"+String(num));
document.write("<br/>"+String(123));
document.write("<br/>"+String(s+100 +23));
document.write("<br/>"+String("100" + "23")+String("100" + "23"));


document.write("<br/>"+num.toString());
document.write("<br/>"+String(num+num.toString()));


let numexp = 3.14;
document.write("<br/>"+numexp.toExponential(1));
document.write("<br/>"+numexp.toExponential(2));
document.write("<br/>"+numexp.toExponential(4));
document.write("<br/>"+numexp.toExponential(6));

let numfixed = 3.14;
document.write("<br/>"+numfixed.toFixed());
document.write("<br/>"+numfixed.toFixed(2));
document.write("<br/>"+numfixed.toFixed(4));
document.write("<br/>"+numfixed.toFixed(6));


let numPrec = 3.14;
document.write("<br/>"+numPrec.toPrecision());
document.write("<br/>"+numPrec.toPrecision(2));
document.write("<br/>"+numPrec.toPrecision(4));
document.write("<br/>"+numPrec.toPrecision(6));

let val = 3.14;
document.write("<br/>"+val.valueOf());
val = 3.20;
document.write("<br/>"+val);


document.write("<br/>"+Number(true));
document.write("<br/>"+Number(false));
document.write("<br/>"+Number("11"));
document.write("<br/>"+Number(" 11"));
document.write("<br/>"+Number("11 "));
document.write("<br/>"+Number(" 11 "));
document.write("<br/>"+Number("11.33"));
document.write("<br/>AAAA:"+Number("11,33"));
document.write("<br/>"+Number("11 33"));
document.write("<br/>"+Number("ABC"));
document.write("<br/>"+Number(new Date("1970-01-01")));

document.write("<br/>MIN_VALUE, MAX_VALUE, POSITIVE_INFINITY, NEGATIVE_INFINITY");

document.write("<br/>"+Number.MAX_VALUE);


document.write("<br/>"+Number.MIN_VALUE);

document.write("<br/>"+Number.POSITIVE_INFINITY);


document.write("<br/>"+Number.NEGATIVE_INFINITY);


document.write("<br/>"+parseInt("-10"));
document.write("<br/>"+parseInt("-10.33"));
document.write("<br/>"+parseInt("10"));
document.write("<br/>"+parseInt("10.33"));
document.write("<br/>"+parseInt("10 20 30"));
document.write("<br/>"+parseInt("years is:10"));


document.write("<br/>"+parseFloat("-10"));
document.write("<br/>"+parseFloat("-10.33"));
document.write("<br/>"+parseFloat("10"));
document.write("<br/>"+parseFloat("10.33"));
document.write("<br/>"+parseFloat("10 20 30"));
document.write("<br/>"+parseFloat("10 years"));


Array.prototype.upperCase = function() {
    var i;
    for (i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
};
 
function demoArr() {
    var cars = ["bmw", "ferrari"];
    document.write("<br/>"+cars); 
    cars.upperCase();
    document.write("<br/>"+cars); 
    document.write("<br/>"+cars); 
    document.write("<br/>"+cars); 

    var bikes = ["bullet", "kawasaki"];
    document.write("<br/>"+bikes); 
    bikes.upperCase();
    document.write("<br/>"+bikes); 
}

document.write("<br/>"+new Date()); 
document.write("<br/>"+new Date("1970-01-01"));
document.write("<br/>"+new Date(2018, 11, 24, 10, 33, 30, 0));
document.write("<br/>"+new Date("October 13, 2014 11:13:00"));

var d = new Date();
document.write("<br/>"+d.toString());
document.write("<br/>"+d.toUTCString());
document.write("<br/>"+d.toDateString());
document.write("<br/>"+d.toISOString());

document.write("<br/>"+d.getTime()); 
document.write("<br/>"+d.getDate()); 
document.write("<br/>"+d.getDay()); 
document.write("<br/>"+d.getFullYear()); 
document.write("<br/>"+d.getHours()); 
document.write("<br/>"+d.getMonth()); 

document.write("<br/>"+d.getDay()+"/"+d.getMonth()+"/"+d.getFullYear()); 



