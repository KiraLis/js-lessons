function representPerson() {
  document.getElementById("lesson-one").innerHTML =
  " My name is " + person.firstName + person.lastName + " I like " + person.preference + " and " + person.preference2;
}
var person = {
  firstName: "Kira",
  lastName: " Lis.",
  preference: "mushrooms",
  preference2: "JavaScript"
};
representPerson();
