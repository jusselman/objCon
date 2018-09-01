function Fruit(name, color, shape) {
  this.name = name;
  this.color = color;
  this.shape = shape;

  this.describe = function() {
    return "A " + this.name+ ' is the color ' + this.color+ ' and is the shape '+ this.shape;
  }
}

var tomato = new Fruit('tomato', 'red', 'spherical');

console.log(tomato.describe());


var users = [
  {
    name: 'John Doe',
    age: 30
  },
  {
    name: 'Jane Dope',
    age: 50
  },
  {
    name: 'Delano Rose',
    age: 40
  }
];

console.log(users[0].name + " " + users[0].age);


function doClick() {
  alert('You Clicked It!')
};

function changeText(id) {
  var heading = document.getElementById('heading');
  heading.innerHTML = "You Clicked!";
};

function showDate() {
  document.getElementById('time');
  time.innerHTML = Date();
}

function clearDate() {
  document.getElementById('time');
  time.innerHTML = '';
}

function changeBg(e) {
  console.log(e.value);
  var body = document.getElementById('body');
  time.style.color = e.value;
}

function validateForm() {
  var firstName = document.forms['myForm']['firstName'].value;
    if(firstName.length < 3) {
      alert('First name must be at least 3 characters');
      return false;
    }

    if(firstName.length == null || '') {
      alert("First Name required");
      return false;
    }

}
