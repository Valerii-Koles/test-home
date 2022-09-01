$(document).ready(function(){
    $('.popular-goods-content').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 0,
        prevArrow: `<div class="arrow-prev"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.15517 13.8552C7.25172 13.9517 7.37241 14 7.50517 14C7.63793 14 7.75862 13.9517 7.85517 13.8552C8.04828 13.6621 8.04828 13.3483 7.85517 13.1552L1.7 7L7.85517 0.844828C8.04828 0.651724 8.04828 0.337931 7.85517 0.144828C7.66207 -0.0482759 7.34828 -0.0482759 7.15517 0.144828L0.65 6.65C0.456896 6.8431 0.456896 7.1569 0.65 7.35L7.15517 13.8552Z" fill="black"/>
        </svg>
        </div>`,
        nextArrow: `<div class="arrow-next"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.844828 0.144828C0.748276 0.0482759 0.627586 0 0.494828 0C0.362069 0 0.241379 0.0482759 0.144828 0.144828C-0.0482759 0.337931 -0.0482759 0.651725 0.144828 0.844828L6.3 7L0.144828 13.1552C-0.0482759 13.3483 -0.0482759 13.6621 0.144828 13.8552C0.337931 14.0483 0.651724 14.0483 0.844828 13.8552L7.35 7.35C7.5431 7.1569 7.5431 6.8431 7.35 6.65L0.844828 0.144828Z" fill="black"/>
        </svg>
        </div>`,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
          ]
    });
  });