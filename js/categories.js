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
    <a href="#" class="text-decoration-none text-dark">${category.category_name}</a>
    
    `;
    categoriesContainer.classList.add('d-flex');
    categoriesContainer.classList.add('list-unstyled');
    categoryDiv.classList.add('p-4');
    categoriesContainer.appendChild(categoryDiv);
   
    
    
}
}

//Dynamic News Sections//

const loadAllNews = () => {
    fetch('https://openapi.programming-hero.com/api/news/category/01')
    .then(response => response.json())
    .then(data => showAllNews(data.data))
}

const showAllNews = allNews => {
    for(const news of allNews){
        console.log(news)
        const allNewsContainer = document.getElementById('all-news');
        const newsContainer = document.createElement('div');
        newsContainer.innerHTML =`
        <div class="card mb-3 p-3" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title mb-3">${news.title}</h5>
              <p class="card-text mb-3">${news.details.slice(0,300)}</p>
              
            </div>
            <div class="last-line d-flex content-justify-center align-items-center ">
             <div class="d-flex">
              <div>
                <img src="${news.author.img} " alt="" height="50x" width="50px">
              </div>
              <div class="ms-5">
                <h6>${news.author.name}</h6>
                <p>${news.author.published_date} </p>
                <p></p>
              </div>
             </div>
             <div class="view d-flex ms-5 content-justify-center align-items-center">
              <i class="fa-regular fa-eye mb-2"></i>
             <p class="ms-3 mt-1">${news.total_view}</p>
             </div>
             <div class="review ms-5">
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
             </div>
             <div class="button ms-5">
              <a href="" class="btn-btn-primary text-decoration-none">See Details</a>
             </div>
            </div>
          </div>
       
        </div>
      </div>
        
        
        
        `;

        allNewsContainer.appendChild(newsContainer);
    }
}

loadAllNews();


loadCategories();