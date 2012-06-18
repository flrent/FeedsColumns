Ext.define('FeedsColumns.controller.HomeController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            main: '#main',
            carouselContainer: '#carouselContainer',
            backToHome: '#backToHome'
        },
        control: {
            '#browseContent': {
                tap: 'browseContent'
            },
            '#backToHome': {
                tap: 'backToHome'
            }
        }
    },
    browseContent: function() {
        this.getMain().setActiveItem(1);
        this.getBackToHome().show();
    },
    backToHome: function() {
        this.getBackToHome().hide();
        this.getMain().setActiveItem(0, {type:'slide', direction:'right'});
    },
    launch: function() {
        this.getMain().setActiveItem(0);
    }
});