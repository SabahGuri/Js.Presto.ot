const dropdownMenu=document.getElementById("dropdownMenu");
const searchbar=document.getElementById("searchbar")
const categorySelect=document.getElementById("categorySelect");
const cardsContainer=document.getElementById("cardsContainer");
const contactForm=document.getElementById("contactForm");
const contacFromInput=document.getElementById("contacFromInput")
const contctFormEmailInput=document.getElementById("contctFormEmailInput");
const formMassage=document.getElementById("formMassage");
const newsletterForm=document.getElementById("newsletterForm")
const lastAnnouncements=document.getElementById("lastAnnouncements")
 document.addEventListener("scroll",()=>{});
   







// executions
createMenuCategories(dropdownMenu,categories);
createSearchBarCategories(categorySelect,categories);
createCategoryCards(cardsContainer,categories);
getLastAnnouncemetns(6,lastAnnouncements)

// contactForm.addEventListener("submit",submitForm);
// newsletterForm.addEventListener("submit",newsletterSubmit)


//declarations
// function submitForm(event){
//     event.preventDefault()
//     let data={};
    
//     data.fullName=contacFromInput.value;
//     data.userEmail=contctFormEmailInput.value;
//     data.userDescription=formMassage.value;
//     const firstModal=new bootstrap.Modal("#firstModal",{});
//     firstModal.show();
//     contacFromInput.value="";
//     contctFormEmailInput.value="";
//     formMassage.value="";
//     console.log(data);
    
// };


// const newsletterSubmit=(e)=>{
//     e.preventDefault();
//     let data={};
//     const newslettetInput=document.getElementById("newslettetInput");
//     if(newslettetInput.value==""){
//         const invalidNewsletterInput=document.getElementById("invalidNewsletterInput");
//         invalidNewsletterInput.classList.add("d-block")
//     }
// };






