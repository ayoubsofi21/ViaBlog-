const addButton = document.querySelector(".addButton");
const form = document.querySelector(".form-content");
addButton.addEventListener("click", () => {
  form.style.display = "block";
});
const array = [
  {
    id: 1,
    Title: "Trip in Newzelanda",
    date: 1221,
    image:
      "https://images.unsplash.com/photo-1768893517908-5661476bc1d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
    note: "hello",
    Category: "Forest",
  },
  {
    id: 1,
    Title: "Trip in Newzelanda",
    date: 1221,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/049/855/328/small/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg",
    note: "hello",
    Category: "Forest",
  },
  {
    id: 1,
    Title: "Trip in Newzelanda",
    date: 1221,
    image: "url",
    note: "hello",
    Category: "Forest",
  },
  {
    id: 1,
    Title: "Trip in Newzelanda",
    date: 1221,
    image: "url",
    note: "hello",
    Category: "Forest",
  },
];
const allbody = document.querySelector(".allbody");
const imgTrip = document.querySelector(".imgTrip");
const Title = document.querySelector(".Title");
const pays = document.querySelector(".pays");
const time = document.querySelector(".time");
const kelometer = document.querySelector(".kelometer");

const h1 = document.querySelector("h1");
array.forEach((element) => {
  //   h1.textContent = "Hello Ayoub";
  imgTrip.src = element.image;
  Title.textContent = element.Title;
});
