
/*const acessKey = "gMitVtGSgLzSxFn0ON6kD3_p_jlTtch3sH6dN0TExf4" ;

const formEl = document.querySelector("form") ;

const inputEl = document.getElementById("search-input") ;

const searchResults = document.querySelector("search-results") ;

const showMore = document.getElementById("show-more-button") ;

let inputData = "" ;

let page = 1 ;

async function searchImages(){
     
    inputData = inputEl.values ;

    const url = `https://api.unsplash.com/search/photos?page=${page}&
    query=${inputData}&client_id=${acessKey}` ;

    const response = await fetch(url) ;
    const data = await response.json() ;

    const results = data.results ;

    if(page === 1)
    {
        searchResults.innerHTML = "" ;
    }

    results.map((result)=>{
          const imageWrapper =document.createElement('div') ;
          imageWrapper.classList.add("search-result") ;
          const image = document.createElement('img') ;
          image.src = result.urls.small ;
          image.alt =result.alt_description ;
          const imageLink  = document.createElement('a') ;
          imageLink.href = result.links.html  ;
          imageLink.target = "_blank" ;
          imageLink.textContent = result.alt_description ; 


          // apending In our page 

          imageWrapper.appendChild(image) ;
          imageWrapper.appendChild(imageLink) ;
          imageWrapper.appendChild(imageWrapper) ;


    }) ;

    page ++ ;

    if( page > 1)
    {
        showMore.style.display = "block" ;
    }
     
     
}

formEl.addEventListener("submit",(event1)>{

    event1.preventDefault() ;
    page = 1;
    searchImages() ;
})



showMore.addEventListener("click",(event1)>{
    searchImages() ;
})
*/

const accessKey = "gMitVtGSgLzSxFn0ON6kD3_p_jlTtch3sH6dN0TExf4";

const formEl = document.querySelector("form");

const inputEl = document.getElementById("search-input");

const searchResults = document.querySelector(".search-results");

const showMore = document.getElementById("show-more-button");

let inputData = "";

let page = 1;

async function searchImages() {
    inputData = inputEl.value;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1) {
        searchResults.innerHTML = "";
    }

    results.map((result) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("search-result");
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        // Appending to our page
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper); // Append imageWrapper to searchResults
    });

    page++;

    if (page > 1) {
        showMore.style.display = "block";
    }
}

formEl.addEventListener("submit", (event1) => {
    event1.preventDefault();
    page = 1;
    searchImages();
});

showMore.addEventListener("click", (event1) => {
    searchImages();
});
