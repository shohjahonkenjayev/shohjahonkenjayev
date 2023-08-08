var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  function menu_left_header() {
    let menu = document.querySelector(".left_header"),
        btn = document.querySelector(".button_left_header_responsive_change_item");
  
    btn.style.transform = "translate(620%)"  
    menu.style.transform = "translate(260px)"
    btn.onclick = menu_left_header_close;
  }
  function menu_left_header_close() {
    let menu = document.querySelector(".left_header"),
        btn = document.querySelector(".button_left_header_responsive_change_item");
  
    btn.style.transform = "translate(0)"
    btn.innerHTML = "<lord-icon src='https://cdn.lordicon.com/jtqpkhoh.json' trigger='click' style='width:30px;height:30px; color: red;'></lord-icon>";
    menu.style.transform = "translate(-260px)"
    btn.onclick = menu_left_header;
  }