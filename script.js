
var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);
var res=fetch("https://www.anapioficeandfire.com/api/books")
res.then((data)=>data.json()).then((value)=>foo(value));


function foo(value){
    for(var i=0;i<value.length;i++){
        row.innerHTML+=`
        <div class="col-md-4">
        <div class="card border-primary mb-3" style="max-width: 20rem" align-text:"center">
        <div class="card-body text-primary">
        <img src="https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg" class="card-img-top" height="300px" width="200px">
       <p> Name: ${value[i].name}</p>
       <p>ISBN: ${value[i].isbn}</p>
       <p>Author of the book: ${value[i].authors}</p>
       <p>Number of pages: ${value[i].numberOfPages}</p>
       <p>Publisher Name: ${value[i].publisher} </p>
       <p> Released Date: ${value[i].released} </p>
       
       
        </div>
      </div>
      </div>
      `;
      document.body.append(container);
    }
}



