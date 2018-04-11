var person = {
  firstName: "Lesha",
  lastName: " Vylegdjoin",
  preference: "somethin",
  preference2: "JavaScript"
};
function representPerson(i) {
  document.getElementById("lesson-one").innerHTML =
  " My name is " + i.firstName + i.lastName + " I like " + i.preference + " and " + i.preference2;
}
representPerson(person);
