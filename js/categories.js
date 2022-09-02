//Dynamic Categories Sections using JS
 
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(response => response.json())
    .then(data => displayCategories (data.data.news_category))
}

const displayCategories = categories => {
for(const category of categories){
    const categoriesContainer = document.getElementById('categories');
    const categoryDiv = document.createElement('li');
    categoryDiv.innerHTML = `
    <h5>${category.category_name}</h5>
    
    `;
    categoriesContainer.classList.add('d-flex');
    categoriesContainer.classList.add('list-unstyled');
    categoryDiv.classList.add('p-4');
    categoriesContainer.appendChild(categoryDiv);
}
}

loadCategories();