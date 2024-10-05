// to show the categories first i have to fetch it .
const fetchCategories = () => {
  fetch(" https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((response) => response.json())
    .then((data) => displayCategories(data.categories));
};
// then i have display the fetch propertys as a button
const displayCategories = (data) => {
  data.forEach(item => {
    const categoryContainer = document.getElementById("categories");
    const button = document.createElement("button");
    button.classList = "btn ";
    button.innerText = item.category;
    categoryContainer.append(button);

    
  });
};
fetchCategories();