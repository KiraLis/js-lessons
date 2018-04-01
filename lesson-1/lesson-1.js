<!DOCTYPE html>
<html>
<head>
  <title>Introduction</title>
  <style>
  body {
  background-color: #5d5d5d;
}
  p {
    font-family: Calibri; 
    color: white;
  }
    </style>
  </head>
  <body>
<p style="color: Tomato;">Hello Vylegzhanin!</p>
<p id="Lesson1"></p>
<script>
  var person = {
  firstName: "Kira",
  lastName: " Lis.",
  preference: "mushrooms",
  preference2: "JavaScript"
};
document.getElementById("Lesson1").innerHTML =
  " My name is " + person.firstName + person.lastName + " I like " + person.preference + " and " + person.preference2 + " >3";
  </script>
    </body>
  </html>
