const todos = document.getElementsByClassName('checks');

for (const i of todos) {
  // adding eventListener to every check box so that we will track which one is checked and which one is not
    i.addEventListener('click',toggleCheck);
}

// this function adds and removes the checked option in the classList
function toggleCheck(e) {
    const classes= e.target.classList;
    classes.toggle("checked");
}

// get the delete button and assign an event listener to it
const deletebtn = document.getElementById('deletebtn');
deletebtn.addEventListener('click',deleteTodo);

// function is triggered when delete button is clicked
function deleteTodo() {

    // creating an Array to store allthe todo items which need to be deleted
    let deleteTodoArray = new Array();

    // Only those items which are checked will be deleted
     let elements = document.getElementsByClassName('checked');
    
    //  converting the object collection into an array of values
     const objectToArray = Object.values(elements);

    //  populating the delete Array i.e todo's to be deleted
     for (const [i,element] of objectToArray.entries()) {
      // fetching the ids of every todo so that we can delete them easily
        deleteTodoArray[i] = element.id;
     }

    //  Creating an Ajax Request
    requestHandler(deleteTodoArray);
}


async function requestHandler(deleteTodoArray){
  // using synchronous calling here .... 
  // it will be slow in large scale apps but a we are building a small scale app , it is good to use here

await $.ajax({
    type: "POST",
    url: "/deleteTodos",
    data: {
      "deleteTodoArray": deleteTodoArray
    },
  
  })
  .then((result) => {
    // we are passing a url back and now we redirect here to that url
    window.location.assign(result);
    
  }).catch((err) => {
    alert(`Error in deleting the Todo! Please try Again`);
  });

}

// Rendering Color for category btn
const catbtn =document.getElementsByClassName('categorybtn');

for(const cat of catbtn)
{
  if(cat.innerText == 'work')
  {
    cat.classList.add('work');
    continue;
  }
  else if(cat.innerText == 'school')
  {
    cat.classList.add('school');
    continue;
  }

  else if(cat.innerText == 'personal')
  {
    cat.classList.add('personal');
    continue;
  }

  else if(cat.innerText == 'other')
  {
    cat.classList.add('other');
    continue;
  }
}
