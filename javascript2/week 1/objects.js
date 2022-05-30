fetch("https://www.breakingbadapi.com/api/characters")
  .then(res => res.json())
  .then(data => {
    console.log(data)
   
    // selecting an element i.e body and creating new element i.e h1 and finally inserting text in it
    const body = document.querySelector('body');

    const heading = document.createElement('h1');
    heading.innerText = "Characters of Breaking Bad";
    document.body.appendChild(heading);

  // creating a loop so that only first 12 characters are displayed
    
    for (let i = 0; i < 12; i++) {
      let myDiv = document.createElement('div');
      
      // creating HTML elements, adding texts in it and adding it to the page using appendChild method.
      let characterName = document.createElement('h2');
      characterName.innerText= data[i].name
      myDiv.appendChild(characterName);
      
      let images = document.createElement('img');
      images.src = data[i].img;
      
      myDiv.appendChild(images);

    
      let HBD = document.createElement('p');
      HBD.innerText = 'D.O.B: ' + data[i].birthday
      myDiv.appendChild(HBD);


      let shortName = document.createElement('p');
      shortName.innerText = 'Nickname: ' + data[i].nickname
      myDiv.appendChild(shortName);

      let occupation = document.createElement('p');
      occupation.innerText = 'Profession: ' + data[i].occupation
      myDiv.appendChild(occupation);

      body.appendChild(myDiv)

     // Creating button to show status
      let buttonInput = document.createElement('button');
      myDiv.appendChild(buttonInput);
      
      buttonInput.innerText = "Click to see my status";

     // creating a function that shows the status of character
      buttonInput.addEventListener('click', function (e) {
        alert('I am ' + data[i].status)
      })
    }
     
  
  })

   
  

