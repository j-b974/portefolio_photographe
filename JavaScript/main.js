console.log("connecté!!!!");
const btnToggle = document.querySelector('.toggleBtn');
const icon = document.querySelector('.toggleBtn i ');
const menuDrop = document.querySelector('.dropdownMenu');

btnToggle.addEventListener('click',function(){
    menuDrop.classList.toggle('open');

    let isOpen = menuDrop.classList.contains('open');

    icon.className = isOpen ? 'fa-solid fa-xmark':'fa-solid fa-bars';
})


// =============   Swiper ==========


  if(Swiper){
    const swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
      });

    const lstBtnMenu = document.querySelectorAll(".lstTheme li a");
    const titreCat = document.querySelector('.titreCategorie span');
    const SwiperLoad = document.querySelector('#swiperLoader');

    lstBtnMenu.forEach((element)=>{
        element.addEventListener('click', function(event){
            event.preventDefault();
            let categorie = element.textContent;
            titreCat.textContent = categorie;

            loadListImg(categorie);

        })
    })

    function loadListImg(cat){
        
        
    }

    function ShowSwiper(lstImage){

        if(!lstImage){return;}
        SwiperLoad.innerHTML = '';
        lstImage.forEach(function(path){
            SwiperLoad.innerHTML += `<div class="swiper-slide"><img src="${path}" /></div>`;
        })
    }
  }



//  =====================================