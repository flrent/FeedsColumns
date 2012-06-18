Ext.define("FeedsColumns.view.Main", {
    extend: 'Ext.navigation.View',
    requires:['Ext.form', 'Ext.field.Select'],
    config: {
        navigationBar:false,
        style:'background:#333',
        id:'main',
        items: [
	        {
	        	xtype:'homePanel'
	        },
	        {
	        	xtype:'carouselContainer'
	        },
	        {
	        	xtype:'toolbar',
	        	title:'',
	        	docked:'bottom',
	        	items:[
	        		{
	        			xtype:'button',
	        			text:'Back to home',
	        			ui:'back',
	        			hidden:true,
	        			id:'backToHome'
	        		}
	        	]
	        }
        ]
    }
});
