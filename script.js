window.addEventListener("load", function()  {
                                            new Glider(document.querySelector(".carrusel__lista"),   {
                                                                                                    slidesToShow: 1,
                                                                                                    dots: '.carrusel__indicadores',
                                                                                                    draggable: false,
                                                                                                    arrows: {
                                                                                                            prev: '.carrusel__anterior',
                                                                                                            next: '.carrusel__siguiente'
                                                                                                            }                                                           
                                                                                                    });
                                            });