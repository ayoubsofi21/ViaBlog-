const addButton = document.querySelector(".addButton");
const form = document.querySelector(".form-content");
addButton.addEventListener("click", () => {
  form.style.display = "block";
});
const array = [
  {
    id: 1,
    Title: "Trip in Newzelanda",
    date: "12K",
    image:
      "https://images.unsplash.com/photo-1768854524297-44252dffae71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D",
    note: "hello",
    Category: "Forest",
  },
  {
    id: 2,
    Title: "Trip in Newzelanda",
    date: "12K",
    image:
      "https://plus.unsplash.com/premium_photo-1732569109951-e3a15dd4be9c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
    note: "hello",
    Category: "Forest",
  },
  {
    id: 3,
    Title: "Trip in Newzelanda",
    date: "12K",
    image:
      "https://plus.unsplash.com/premium_photo-1664367173121-2ef20faec859?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
    note: "hello",
    Category: "Forest",
  },
  {
    id: 4,
    Title: "Trip in Newzelanda",
    date: "12K",
    image:
      "https://images.unsplash.com/photo-1768310481123-9c8e4e6fc61a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
    note: "hello",
    Category: "Forest",
  },
  {
    id: 5,
    Title: "Trip in New Zealand",
    date: "12K",
    image:
      "https://images.unsplash.com/photo-1768215592110-6283f76ac552?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
    note: "hello",
    Category: "Forest",
  },
  {
    id: 6,
    Title: "Mountain Escape",
    date: "12k",
    image:
      "https://images.unsplash.com/photo-1768590237847-ebc94f180def?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
    note: "hello",
    Category: "Forest",
  },
];
const imgTrip = document.querySelectorAll(".imgTrip");
const Title = document.querySelectorAll(".Title");
const note = document.querySelectorAll(".note");
const kelometer = document.querySelectorAll(".kelometer");

const h1 = document.querySelector("h1");
function DisplayTrips() {
  array.forEach((element, index) => {
    Title[index].textContent = element.Title;
    imgTrip[index].src = element.image;
    note[index].textContent = element.note;
    kelometer[index].textContent = element.date;
  });
}
DisplayTrips();

// const crudMenu = document.querySelector(".crudMenu");
// const mncr = document.querySelector("#mncr");
// crudMenu.forEach((menu) => {
//   menu.addEventListener("click", () => {
//     const mncr = menu.nextElementSibling;
//     mncr.textContent = "Delete";
//     mncr.style.color = "red";
//   });
// });

// create new trip
const container = document.querySelector(".allArticle");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("Titre").value;
  const date = document.getElementById("Date").value;
  const image = document.getElementById("Image").value;
  const note = document.getElementById("number").value;
  const category = document.getElementById("Category").value;
  const newTrip = {
    id: Date.now(),
    Title: title,
    date: date,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600",
    note: note,
    Category: category,
  };
  array.push(newTrip);
  DisplayTrips();
});
