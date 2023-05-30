// =========== nav barre =========

const btnToggle = document.querySelector('.toggleBtn');
const icon = document.querySelector('.toggleBtn i ');
const menuDrop = document.querySelector('.dropdownMenu');

btnToggle.addEventListener('click',function(){
    menuDrop.classList.toggle('open');

    let isOpen = menuDrop.classList.contains('open');

    icon.className = isOpen ? 'fa-solid fa-xmark':'fa-solid fa-bars';
})
//  ===============================

// ==========   Swiper & filtre par theme =======

  if( typeof Swiper !== 'undefined'){

    window.addEventListener("resize", function(){
        console.log(window.innerWidth);
        creatSwiper();
    });

    function getDirection(){

        return window.innerWidth <= 580 ? 'vertical' : 'horizontal';
    }

    function creatSwiper(){
        const swiper = new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            direction: getDirection() ,
            slidesPerView: "auto",
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            },
          });

    }

     creatSwiper();
     loadListImg("");


    const lstBtnMenu = document.querySelectorAll(".lstTheme li a");
    const titreCat = document.querySelector('.titreCategorie span');
    const SwiperLoad = document.querySelector('#swiperLoader');

    lstBtnMenu.forEach((element)=>{
        element.addEventListener('click', function(event){
            event.preventDefault();
            let categorie = element.textContent;
            titreCat.textContent = categorie;

            loadListImg(+event.target.getAttribute('themeId'));

        })
    })

    function loadListImg(id){

        const lstCat = ['Mariage','Grossesse','BéBé','Famille','Bapteme','Couple','Portait'];
        
        let cat = lstCat[id-1] ?? null ;
        
        fetch('../imgLoad2.json')

        .then(response =>{
            return response.json()
        })
        .then(data => { 

            if(data[cat]){

                ShowSwiper(data[cat])
            
            } else {
                let slt = []

                // fusion objet en 1 tableau 
                for (const key in data) {   
                    slt.push( ...data[key]);    
                }

                // melange la table

                let rdSlt = [];
                while(slt.length){
                    let nb = slt.length;
                    let rand = Math.floor( Math.random() * nb)
                     rdSlt.push( slt[rand]);
                     slt.splice(rand,1);
                }
                // =========

                ShowSwiper(rdSlt);
            }
        });
    }
    function ShowSwiper(lstImage){

        if(!lstImage){return;}
        let str ='';
        lstImage.forEach(function(path){
            str += `<div class="swiper-slide"><img src="${path}" /></div>`;
        })
        SwiperLoad.innerHTML = str;
        creatSwiper();
    }
  }

//  =====================================