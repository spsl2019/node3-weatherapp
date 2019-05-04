console.log("Client side javascript file is loaded!");

// fetch("http://puzzle.mead.io/puzzle").then(response => {
//   response.json().then(data => {
//     console.log(data);
//   });
// });

const weatherForm = document.querySelector("form");
const searchElement = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", event => {
  event.preventDefault();
  const location = searchElement.value;
  messageOne.textContent = "Loading...";
  //   console.log(location);
  fetch(`/weather?address=${location}`).then(response => {
    response.json().then(data => {
      if (data.error) {
        // console.log(data.error);
        messageOne.textContent = `${data.error}`;
      } else {
        // console.log(data.location);
        // console.log(data.forecast);
        messageOne.textContent = `${data.location} , ${data.forecast}`;
      }
    });
  });
});
