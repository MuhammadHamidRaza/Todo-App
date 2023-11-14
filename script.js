

function addItem() {
  var inputElement = document.getElementById('input');
  var ulElement = document.getElementById('list');
  var liElement = document.createElement('li');

  liElement.className = 'ok';
  var dltbtn = '<button onclick="dlt(event)">Delete</button>'

  var editbtn = '<button onclick="edit(event)">Edit</button>'
  editbtn.className = 'edit'
  
  liElement.innerHTML = inputElement.value + editbtn + dltbtn
  ulElement.append(liElement)
  inputElement.value = ""
}


function dlt(e) {
  var liElement = e.target.parentElement
  liElement.remove()
}







var activeItem = null; 

function edit(event) {
  console.log(event)
  // input chaiha
  var inputElement = document.getElementById('input');
  // location
  var itemElement = event.target.previousSibling
  // active item me location dalni ha
  activeItem = itemElement
  var textContent = itemElement.textContent
  inputElement.value = textContent

  var addbtn = document.getElementById('Add-btn');
addbtn.className = 'hide';

var updatebtn = document.getElementById('update-btn');
updatebtn.className = '';
}

function updatebtnFunction() {
  
  var inputElement = document.getElementById('input')
  var updateValue = inputElement.value
  activeItem.textContent = updateValue
  inputElement.value = "";

  var addbtn = document.getElementById('Add-btn');
  addbtn.className = '';

  var updatebtn = document.getElementById('update-btn');
  updatebtn.className = 'hide';
}


function DeleteAll(){  
  var delall = document.getElementsByTagName('li')
  for (let i = 0; i < delall.length;) {
    delall[i].remove()

  }
  
}

