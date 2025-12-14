
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});


const editBtn = document.getElementById("editJobBtn");
const jobTitle = document.querySelector(".job-title-text"); // 



const savedJob = localStorage.getItem("jobTitle");
if (savedJob) {
  jobTitle.textContent = savedJob;
}


editBtn.addEventListener("click", function () {
  const newTitle = prompt("Enter your new job title:");

  if (newTitle !== null && newTitle.trim() !== "") {
    jobTitle.textContent = newTitle;
    localStorage.setItem("jobTitle", newTitle);
  }
});

const toggleBtn = document.getElementById("toggleSkillsBtn");
  const skillsSection = document.getElementById("skillsSection");

  toggleBtn.addEventListener("click", () => {
    skillsSection.style.display = skillsSection.style.display === "none" ? "block" : "none";
    toggleBtn.textContent = skillsSection.style.display === "none" ? "Show Skills" : "Hide Skills";
  });
  
  const messageBox = document.getElementById("msgBox");
const counterSpan = document.getElementById("counter");


const maxLength = messageBox.getAttribute("maxlength"); 

-
messageBox.addEventListener("keyup", function() {
   
    const currentLength = messageBox.value.length;

   
    const charactersLeft = maxLength - currentLength;

    
    counterSpan.textContent = charactersLeft;

    
    if (charactersLeft <= 10) {
        counterSpan.style.color = "red";
    } else {
        counterSpan.style.color = "black"; 
    }
});

function validateForm() {
    
    var name = document.getElementById('nameField').value;
    var email = document.getElementById('emailField').value;
    var message = document.getElementById('msgBox').value;

   
    if (name === "") {
        alert("Name must be filled out");
        return false; 
    }

    if (email === "") {
        alert("Email must be filled out");
        return false;
    }
    
   
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    
    if (message === "") {
        alert("Message cannot be empty");
        return false;
    }

    
    return true;
}


document.addEventListener('DOMContentLoaded', (event) => {
    const msgBox = document.getElementById('msgBox');
    const counter = document.getElementById('counter');
    const maxLength = 200;

    if (msgBox && counter) {
        msgBox.addEventListener('input', function() {
            const currentLength = msgBox.value.length;
            const remaining = maxLength - currentLength;
            counter.textContent = remaining;
        });
    }
});


const dateElement = document.getElementById('dateDisplay');

const currentDate = new Date();


const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);

if (dateElement) {
    dateElement.textContent = formattedDate;
}



const date = new Date();
const hour = date.getHours();


let greeting;

if (hour < 12) {
  greeting = "Good morning";
} else if (hour < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}


document.getElementById('greeting-message').textContent = greeting + "!";

console.log(greeting + "!");