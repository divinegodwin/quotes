let quotes = document.querySelector(".quotes");

let author = document.querySelector(".author");

let btn = document.querySelector(".btn");

btn.addEventListener('click', function(){
  
  const url = "https://api.quotable.io/random";
  fetch(url)
  .then(response =>response.json())
  .then(data =>{
    quotes.innerHTML = data.content;
    author.innerHTML = data.author;
  })
  .catch((error)=>console.log(error))
})

