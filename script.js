const addButton = document.querySelector(".addButton");
addButton.addEventListener("click", () => {
  form.style.display = "block";
});
// const resetbtn = document.querySelector("#resetbtn");
// resetbtn.addEventListener("click", () => {
//   form.style.display = "none";
// });

// const array = [
//   {
//     id: 1,
//     Title: "Trip in Newzelanda",
//     date: "12K",
//     image:
//       "https://images.unsplash.com/photo-1768854524297-44252dffae71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D",
//     note: "hello",
//     Category: "Forest",
//   },
//   {
//     id: 2,
//     Title: "Trip in Newzelanda",
//     date: "12K",
//     image:
//       "https://plus.unsplash.com/premium_photo-1732569109951-e3a15dd4be9c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
//     note: "hello",
//     Category: "Forest",
//   },
//   {
//     id: 3,
//     Title: "Trip in Newzelanda",
//     date: "12K",
//     image:
//       "https://plus.unsplash.com/premium_photo-1664367173121-2ef20faec859?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
//     note: "hello",
//     Category: "Forest",
//   },
//   {
//     id: 4,
//     Title: "Trip in Newzelanda",
//     date: "12K",
//     image:
//       "https://images.unsplash.com/photo-1768310481123-9c8e4e6fc61a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
//     note: "hello",
//     Category: "Forest",
//   },
//   {
//     id: 5,
//     Title: "Trip in New Zealand",
//     date: "12K",
//     image:
//       "https://images.unsplash.com/photo-1768215592110-6283f76ac552?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
//     note: "hello",
//     Category: "Forest",
//   },
//   {
//     id: 6,
//     Title: "Mountain Escape",
//     date: "12k",
//     image:
//       "https://images.unsplash.com/photo-1768590237847-ebc94f180def?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
//     note: "hello",
//     Category: "Forest",
//   },
// ];

const imgTrip = document.querySelectorAll(".imgTrip");
const title_default = document.querySelectorAll(".title_of_default");
const noteTrip = document.querySelectorAll(".note");
const kelometer = document.querySelectorAll(".kelometer");

// function displayTrips() {
//   // Clear previous trips if needed (optional)
//   // Or overwrite existing ones
//   array.forEach((trip, index) => {
//     if (title_default[index]) title_default[index].textContent = trip.Title;
//     if (imgTrip[index])
//       imgTrip[index].src = trip.image || "images/imgstory.webp";
//     if (noteTrip[index]) noteTrip[index].textContent = trip.note;
//     if (kelometer[index]) kelometer[index].textContent = trip.date;
//   });
// }

// displayTrips();

// i do this for avoied the repetition code html
const tripsContainer = document.getElementById("tripsContainer");

function displayTrips() {
  tripsContainer.innerHTML = "";

  array.forEach((trip) => {
    const card = document.createElement("article");
    card.className =
      "allbody rounded-b-[10px] shadow-sm rounded-t-[20px] w-full";

    card.innerHTML = `
      <h2 class="sr-only">hello</h2>
      <div class="imghome mt-4">
        <a href="details.html">
          <img src="${trip.image || "images/default.png"}" class="imgTrip rounded-t-[15px] w-[100%] h-70" alt="image-home">
        </a>
      </div>
      <div class="localClockkm flex justify-between m-2">
        <h2 class="title_of_default">${trip.Title}</h2>
        <div class="flex justify-between text-red items-center gap-4">
          <div class="flex justify-between items-center">
            <img src="images/location.png" class="w-3 h-3" alt="location">
            <p class="note text-gray-500">${trip.Category}</p>
          </div>
          <div class="flex justify-between items-center">
            <img src="images/eye.png" class="w-3 h-3 text-gray-500" alt="eye">
            <p class="kelometer text-gray-500">${trip.date}</p>
          </div>
          <div class="crudMenu flex justify-between items-center hover:bg-gray-200 rounded-full p-1">
          </div>
        </div>
      </div>
    `;
    // const menuBtn = card.querySelector(".menuBtn");
    // const menu = card.querySelector(".menu");
    // const deleteBtn = card.querySelector(".deleteBtn");
    // const updateBtn = card.querySelector(".updateBtn");

    // menuBtn.addEventListener("click", () => {
    //   menu.classList.toggle("hidden");
    // });

    // deleteBtn.addEventListener("click", () => {
    //   array = array.filter((t) => t.id !== trip.id);
    //   displayTrips();
    // });

    // updateBtn.addEventListener("click", () => {
    //   editId = trip.id;
    //   form.style.display = "block";

    //   document.getElementById("titre_name").value = trip.Title;
    //   document.getElementById("Date").value = trip.date;
    //   document.getElementById("number").value = trip.note;
    //   document.getElementById("Category").value = trip.Category;
    // });

    tripsContainer.appendChild(card);
  });
}

displayTrips();

let compteur = 2;
const form = document.getElementById("form_content");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("titre_name").value;
  const date = document.getElementById("Date").value;
  const image = document.querySelector(".Image").value;
  const note = document.getElementById("number").value;
  const category = document.getElementById("Category").value;
  const newTrip = {
    id: compteur++,
    Title: title,
    date: date,
    image: image,
    note: note,
    Category: category,
  };
  array.push(newTrip);
  console.log(array);
  displayTrips();
});
