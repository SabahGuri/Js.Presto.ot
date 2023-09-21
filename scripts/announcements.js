


const getLastAnnouncemetns=(count=6,target)=>{
    fetch("../data/announcements.json")
    .then(res=>res.json())
    .then(announcements=>{
        //console.log(announcements)
        announcements.forEach((element,index) => {
            if(index<count){
                createElementCard(element,target)
               
            }
            
            
        });
    })
    .catch(error=>{
        console.log(error)
    })
};


const createElementCard=(element,target)=>{
   
    let cardCol=document.createElement("div")
    cardCol.classList.add("col-12","col-md-6","col-lg-4")
   
   
    
    let cardTemplate = `
<div class="card announcement-card shadow-lg mb-4">
    <div id="carousel-${element.id}" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="${element.image[0].url1}" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="${element.image[0].url2}" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${element.id}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel-${element.id}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <div class="card-body">
        <p class="h2 fw-bold myColor">${element.price} €</p>
        <p class="h2">${element.name}</p>
        <p class="h6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, impedit?</p>
    </div>
    <div class="card-footer">
        <div class="row">
            <div class="col-6">
                <p class="mb-0 myColor">
                    <i class="fa-solid fa-tag "></i>
                    ${element.category}
                </p>
            </div>
            <div class="col-6">
                <p class="mb-0 myColor">
                    <i class="fa-solid fa-calendar-day"></i>
                    Data
                </p>
            </div>
        </div>
    </div>
    <p class="h5 m-0">
        <span class="badge ${element.type==="sell"?"bg-success":"bg-danger"}"> ${element.type==="sell"?"vendo":"cerco"} </span>
    </p>
</div>
`;
    
    cardCol.innerHTML=cardTemplate;
    target.appendChild(cardCol);
};






