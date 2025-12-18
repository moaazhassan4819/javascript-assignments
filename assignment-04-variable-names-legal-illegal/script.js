var variables = "String 'hello', number 123, boolean true";
document.write("1. Declare 3 variables in one statement. <br> <b>" + variables + "<br>");

var legal = "name, myName, name7086, name_, name$, case sensitive";
var illegal = "123name, Myname, -name, reserved keyword example alert, @#$!%^&*( not use specia characters";
document.write("<br> 2. Declare 5 legal & 5 illegal variable names. <br> <b>" + legal + "<br>" + illegal + "<br>");

// 3. Display this in your browser
var heading = "<h1> Rules for naming JS variables</h1><br>";
var contain = "<b>Variable names can only contain<u> $, _, myName, case sensitive</u><br>";
var begin= " Variable must begin with a<u> $name, _name, name</u> <br>";
var Case = " Variable names are <u>case sensitive</u>  <br>";
var Not = "Variable names should not be <u> Reserved Keywords</u> </b>";
document.write(heading + contain + begin + Case + Not);
