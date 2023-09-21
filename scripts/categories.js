const categories = [
    {
      name: "Auto",
      icon: `fa-solid fa-car-rear`,
      announcementsCount: 123,
      link: "#",
    },
    {
      name: "Elettronica",
      icon: `fa-solid fa-laptop`,
      announcementsCount: 564,
      link: "#",
    },
    {
      name: "Moto",
      icon: `fa-solid fa-motorcycle`,
      announcementsCount: 230,
      link: "#",
    },
    {
      name: "Abbigliamento",
      icon: `fa-solid fa-shirt`,
      announcementsCount: 321,
      link: "#",
    },
    {
      name: "Sport",
      icon: `fa-solid fa-person-running`,
      announcementsCount: 90,
      link: "#",
    },
    {
      name: "Giardinaggio",
      icon: `fa-solid fa-leaf`,
      announcementsCount: 50,
      link: "#",
    },
    {
      name: "Casa",
      icon: `fa-solid fa-house-chimney`,
      announcementsCount: 134,
      link: "#",
    },
    {
      name: "Cucina",
      icon: `fa-solid fa-fire-burner`,
      announcementsCount: 176,
      link: "#",
    },
  ];

const createMenuCategories=(target,categories)=>{
    //creo un ciclo foreach per iterare l'array di oggetti ed andare ad iniettare nel dropdownmenu tutte le category
    categories.forEach(category =>{
        
        let li=document.createElement("li");
        li.classList.add("border","border-radius") 
        let anchor=document.createElement("a");
        anchor.classList.add("dropdown-item");
        anchor.setAttribute("href",`${category.link}`)
        anchor.textContent=category.name
        li.appendChild(anchor)
        target.appendChild(li)
    });

};
// ho eseguito lo stesso procedimento di prima per creare le varie category
const createSearchBarCategories=(target,categories)=>{
    categories.forEach(category=>{
        
        let option=document.createElement("option");
        option.value=category.name;
        option.textContent=category.name;
        target.appendChild(option)

    });
};

const createCategoryCards=(target,categories)=>{
  categories.forEach(category=>{
    //console.log(category)
    let cardCol=document.createElement("div")
    cardCol.classList.add("col-12","col-lg-3","mb-4");
    let cardTemplate=
    `
    <div class="card category-cards" data-aos="zoom-in">
      <div class="card-body py-5 text-center">
        <i class=" ${category.icon}  fa-2xl icons"></i>
        <p class="mb-0 mt-3 mb-2 h4" > ${category.name} </p>
        <p class="my-0 " ><b class=" icons" >${category.announcementsCount}</b> annunci </p>

      </div>
    </div>


    `
    cardCol.innerHTML=cardTemplate
    target.appendChild(cardCol)
    cardCol.addEventListener("click",(e)=>{
      e.preventDefault();
      alert(category.name)
    })

  });

  
};

