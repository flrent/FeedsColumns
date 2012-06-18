Ext.define("FeedsColumns.view.CarouselContainer", {
    extend: 'Ext.Panel',
    requires:['Ext.Panel'],
    xtype:'carouselContainer',
    config: {
        layout:{type:'hbox',align:'stretch'},
        defaults:{flex:1,height:'auto'},
        id:'carouselContainer'
    }
});