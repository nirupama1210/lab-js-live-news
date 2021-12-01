const apikey = '5436215f984d44f28069ec7aebfd42b3'
async function getData(api)
{
    try{
        const data=await fetch(api);
        return await data.json()
    }
    catch(err)
    {
        console.log(err);
    }
}

async function category() {
    let country=document.getElementById("dd1").value
    if(country!=="")
    {
    try{
       
    let apiurl="http://newsapi.org/v2/top-headlines?country="+country+"&apiKey="+apikey;
    let api=await fetch(apiurl)
    const data = await api.json()
    console.log(data.articles);
    // let latestNews = data.articles;
    // //   console.log(latestNews);
    //    var newsContent = '';
     
    //    for (var i in latestNews) {
    //    newsContent +=
  
    //    `<div class="newsContent">
    // <div class="card-image">
    // <img  src="${latestNews[i].urlToImage}">
    // </div>
    // <div class="card-title">
    // <h6>${latestNews[i].title}</h6>
    // </div>
    // <div class="card-des">
    // <p>${latestNews[i].description}</p>
    // </div>
    // <div class="btn">
    // <a href="${latestNews[i].url}">READ MORE</a>
    // </div>
    // </div>`; }
    // document.getElementById('content').innerHTML = newsContent; 
    }
    catch(err)
    {
        console.log(err.message)
    }
}
   }

   
/*

            //console.log(api);
    //const data=await getData(api);
    //console.log(data);
          let latestNews = res.articles;
           //   console.log(latestNews);
              var newsContent = '';
            
              for (var i in latestNews) {
              newsContent +=
         
              `<div class="newsContent">
           <div class="card-image">
           <img  src="${latestNews[i].urlToImage}">
           </div>
           <div class="card-title">
           <h6>${latestNews[i].title}</h6>
           </div>
           <div class="card-des">
           <p>${latestNews[i].description}</p>
           </div>
           <div class="btn">
           <a href="${latestNews[i].url}">READ MORE</a>
           </div>
           </div>`; }
        //   document.getElementById('content').innerHTML = newsContent; 
         
              }
             
 }*/