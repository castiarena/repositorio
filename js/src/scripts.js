var PRODUCTO = {
    data: null,
    carousel: null,
    tabs: null,
    form: document.getElementById('comprar'),
    init: function(){
        this.setCarousel();
        this.setTabs();
        this.actions();
    },
    setCarousel: function(){
        this.carousel = $('#carousel').carousel({pagination:true});
    },
    setTabs: function(){
        this.tabs = $('#tabs').tabs();
    },
    actions: function(){
        this.form.addEventListener('submit',function(e){
            e.preventDefault();
            var statusBuy = $('.ch-box-ok[data-buy]');
            statusBuy.html('Gracias por comprar un <b>'+ statusBuy.attr('data-buy').toUpperCase().replace(new RegExp('-'),' ')+'</b> en MercadoLibre');
            statusBuy.fadeIn(function(){
                setTimeout(function(){
                    statusBuy.fadeOut();
                },500);
            });

        })
    }
};

PRODUCTO.init();
