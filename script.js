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
    image: "image.png",
    note: "hello",
    Category: "Forest",
  },
  {
    id: 2,
    Title: "Trip in Newzelanda",
    date: 1221,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/049/855/328/small/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg",
    note: "hello",
    Category: "Forest",
  },
  {
    id: 3,
    Title: "Trip in Newzelanda",
    date: 1221,
    image: "url",
    note: "hello",
    Category: "Forest",
  },
  {
    id: 4,
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
array.forEach((element, index) => {
  Title[index].textContent = element.Title;
  imgTrip[index].src = element.image;
  pays[index].textContent = element.pays;
  time[index].textContent = element.time;
  kelometer[index].textContent = element.kelometer;
});
