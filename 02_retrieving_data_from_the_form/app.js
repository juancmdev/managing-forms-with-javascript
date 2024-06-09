/*Before determining if the data in a form is valid, we first need to retrieve
the data from the form.
The goal is to end up with a Javascript object that represents the form, with the 
object´s key being the names of the fields and the values being the values of the 
form inputs*/

const form = document.querySelector("#form");

const handleSubmit = (e) => {
  e.preventDefault(); //Prevent the defaul behaviour

  const data = {};
  const fields = e.target.querySelectorAll("input, select, textarea");

  for (const field of fields) {
    data[field.name] = field.value;
  }

  console.log(data);
};

form.addEventListener("submit", handleSubmit);
