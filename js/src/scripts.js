var PRODUCTO = {
    data: null,
    carousel: null,
    init: function(){
        this.setCarousel();
    },
    setCarousel: function(){
        this.carousel = $('#carousel').carousel();
    }
};

PRODUCTO.init();
