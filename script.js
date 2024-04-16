function newsApi(){
    fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=fb59993f737d45deb07afe4cf6f756d0')
    .then(response => {
        if (response.ok) {
        return response.json(); 
        } else {
        throw new Error('API request failed');
        }
    })
    .then(data => {
        let articles=data.articles;
        let article="";
        console.log(data);
        articles.slice(0,10).map((value)=>{
            article+=`
            <div class="card mb-3" style="width: 22rem;">
                <img src="${value.urlToImage}" class="card-img-top" height="50%" alt="image.jpg">
                <div class="card-body">
                    <p class="text-success">Published : ${value.publishedAt}</p>
                  <h5 class="card-title">${value.title}</h5>
                  <p class="card-text" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis">${value.description}</p>
                  <a href="${value.url}" target="_blank" class="btn btn-primary">Read Article</a>
                </div>
            </div>
            `
        } );
        document.getElementById('articles').innerHTML=article;
    })
    .catch(error => {
        console.error(error); 
    });
}
newsApi();