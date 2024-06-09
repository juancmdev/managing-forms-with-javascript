/*We can use JS formData constructor to achieve the same thing without
having to retrieve the forms elements from the DOM*/

const form = document.querySelector("#form");

const handleSubmit = (e) => {
  e.preventDefault(); //Prevent the defaul behaviour

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  console.log(data);
};

form.addEventListener("submit", handleSubmit);

/*FormData converts the form element into a collection of key/value pairs, or entries
and Object.fromEntries converts these entries into an object.*/
