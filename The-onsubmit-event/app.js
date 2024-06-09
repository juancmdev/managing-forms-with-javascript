/*If we want to manage the form with Js we need to prevent de default behaviour 
of the onsubmit event; to do this we use e.preventDefault();*/

const form = document.querySelector("#form");

const handleSubmit = (e) => {
  e.preventDefault(); //Prevent the defaul behaviour
};

form.addEventListener("submit", handleSubmit);
