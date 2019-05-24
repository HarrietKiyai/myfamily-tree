// Object creation - constructor function

function Family(name, title, age) {
  this.name = name;
  this.title = title;
  this.age = age;
}

var members = [];
members.push(new Family("John", "Dad", 80));
members.push(new Family("Faith", "Mom", 75));
members.push(new Family("Caro", "Daughter", 50));
members.push(new Family("Ben", "Son", 48));
members.push(new Family("Hannah", "Granddaughter", 9));
members.push(new Family("Jeremiah", "Grandson", 7));

function print() {
  var text = "";
  var i;
  for (i = 0; i < members.length; i++) {
    text +=
      members[i].name + " " + members[i].age + " " + members[i].title + "<br/>";
  }

  console.log(text);
  document.getElementById("father").innerHTML = text;
}

// Initial steps - object constructor
//var member2 = new Family("Faith", "Mom", 75);
//var member3 = new Family("Caro", "Daughter", 50);
//var member4 = new Family("Ben", "Son", 48);
//var member5 = new Family("Hannah", "Granddaughter", 9);
//var member6 = new Family("Jeremiah", "Grandson", 7);

/*function print() {
  var x = member1.name;
  var y = member1.title;
  var z = member1.age;
  (document.getElementById("father").innerHTML = x),
    (document.getElementById("father1").innerHTML = y),
    (document.getElementById("father2").innerHTML = z);
}*/
