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

  if( typeof Swiper !== 'undefined'){

    function creatSwiper(){
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

            loadListImg(categorie);

        })
    })

    function loadListImg(cat){
        
        fetch('../imgLoad2.json')
        .then(response =>{
            return response.json()
        })
        .then(data => { 

            if(data[cat]){

                ShowSwiper(data[cat])
            
            } else {
                let slt = []
                
                for (const key in data) {   
                    slt.push( ...data[key]);    
                }

                // melage le table
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