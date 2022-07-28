"use strict"

let moon = document.getElementById("moon-icon");
moon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    moon.src = "./images/sun.png";
  } else {
    moon.src = "./images/moon.png";
  }
}


const readMoreButton = document.querySelector(".read-more-button");
const text = document.querySelector(".text");

readMoreButton.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreButton.innerText === "Read more") {
    readMoreButton.innerText = "Read less";
  } else {
    readMoreButton.innerText = "Read more";
  }
})




let studyDetails = {
  foocoding: {
    "name": "Foo_Cafe",
    "subject": "Full_stack_web_development_course",
    "location": "Malmo_Sweden",
    "year": "April 2022-present",
    "uni_logo": "./images/fc-logo.png",
    "website": "https://foocafe.org/"
  },
  sfi: {
    "name": "Folk_Universitetet",
    "subject": "Swedish_for_Immigrants(SFI)",
    "location": "Helsingborg_Sweden",
    "year": "2021-present",
    "uni_logo": "./images/f-logo.jpeg",
    "website": "https://www.folkuniversitetet.se/"
  },
  masters: {
    "name": "Lund_University",
    "subject": "Masters_in_Service_Management",
    "location": "Helsingborg_Sweden",
    "year": "2019-2021",
    "uni_logo": "./images/lu-logo.png",
    "website": "https://www.lunduniversity.lu.se/"
  },
  bachelors: {
    "name": "Kathmandu_University",
    "subject": "Bachelors_of_Business_Administration",
    "location": "Lalitpur_Nepal",
    "year": "2014-2018",
    "uni_logo": "./images/ku-logo.png",
    "website": "https://ku.edu.np/"
  },
  high_school: {
    "name": "Tribhuwan_University",
    "subject": "High School in Management",
    "location": "Butwal_Nepal",
    "year": "2011-2013",
    "uni_logo": "./images/tu-logo.jpeg",
    "website": "http://www.tribhuvan-university.edu.np/"
  }

  }


function makeHtmlElements() {
  let educational_container = document.querySelector("#educational-background")
  
  for (const key in studyDetails) {
    let myDiv = document.createElement("div");
    myDiv.setAttribute("class", "edu_div");
    
    let logo = document.createElement("img");
    logo.setAttribute("class", "logo-img");
      logo.src = studyDetails[key].uni_logo;
     
    let universityName = document.createElement("h4");
    universityName.innerText = studyDetails[key].name.replaceAll("_", " ");

    let subjectName = document.createElement("p");
    subjectName.innerText = studyDetails[key].subject.replaceAll("_", " ");

    let locationName = document.createElement("p");
    locationName.innerText = "Place: " + studyDetails[key].location.replaceAll("_", ", ");

    let yearName = document.createElement("p");
    yearName.setAttribute("class", "studiedYear")
    yearName.innerText = "Studied Year: " + studyDetails[key].year;

    let link = document.createElement("a");
    link.href = `${studyDetails[key].website}`;
    link.innerText = "Link: " + studyDetails[key].website;
    link.setAttribute("class", "webLink");
    


    educational_container.appendChild(myDiv);
    myDiv.appendChild(logo);
    myDiv.appendChild(universityName);
    myDiv.appendChild(subjectName);
    myDiv.appendChild(locationName);
    myDiv.appendChild(yearName);
    myDiv.appendChild(link);

   }
}
makeHtmlElements()


/* function for submit button */
let submitBtn = document.getElementById("submitButton");
submitBtn.addEventListener("click", function (e) {
  alert("Thankyou for your message. I'll get in touch soon!!");
});


