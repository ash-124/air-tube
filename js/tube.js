// to show the categories first i have to fetch it .

const fetchCategories = () => {
  fetch(" https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((response) => response.json())
    .then((data) => displayCategories(data.categories))
    .catch((err) => console.log(err));
};
// fetching video
const fetchVideos = () => {
  fetch("  https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((data) => displayVideos(data.videos))
    .catch((err) => console.log(err));
};

const displayVideos = (video) => {
  const cardContainer = document.getElementById("videoContainer");
  video.forEach((element) => {
    const card = document.createElement("div");
    card.classList =" card card-compact ";
    card.innerHTML = `
    <figure class = "h-[200px]">
    <img class ="object-cover w-full h-full  "
      src=${element.thumbnail}
      alt="Shoes" />
  </figure>
  <div class = "py-4">
    
    <div class="flex gap-2">
        <div class="w-10 h-10 ">
            <img class="w-full h-full rounded-full object-cover " src="${element.authors[0].profile_picture}" alt="">
        </div>
        <div>
            <h2 class="font-bold">${element.title}</h2>
            <div class="flex items-center gap-2>
                <p class="text-gray-300">${element.authors[0].profile_name}</p>
                <img class="w-5" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png" alt="">
            </div>
            <p></p>
        </div>
    </div>
  </div>
    `;
    cardContainer.append(card);
  });
};
// then i have display the fetch propertys as a button
const displayCategories = (data) => {
  const categoryContainer = document.getElementById("categories");
  data.forEach((item) => {
    const button = document.createElement("button");
    button.classList = "btn ";
    button.innerText = item.category;
    categoryContainer.append(button);
  });
};
fetchCategories();
fetchVideos();
