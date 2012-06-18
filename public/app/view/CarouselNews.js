Ext.define("FeedsColumns.view.CarouselNews", {
    extend: 'Ext.carousel.Carousel',
    requires:['Ext.carousel.Carousel'],
    xtype:'carouselNews',
    config: {
        direction:'up',
        defaults:{
            styleHtmlContent:true
        },
        items: []
    }
});