Ext.define("FeedsColumns.view.HomePanel", {
    extend: 'Ext.Panel',
    requires:['Ext.Panel', 'Ext.form', 'Ext.form.FormPanel', 'Ext.form.FieldSet'],
    xtype:'homePanel',
    config: {
        layout:{type:'hbox',align:'stretch'},
        defaults:{
        	flex:1,height:'auto',
			styleHtmlContent:true
        },
    	items:[
    		{
		    	html:'<h1>Hi. This is just a small app letting you browse content from APIs.</h1><h3>For now, you can browse public content from Twitter and Flickr.</h3><h5>I\'ll add later more APIs, more templating options and real-time data search with socket.io</h5><p>Follow me on twitter : <a href="http://twitter.com/flrent" target="_new">@flrent</a></p><p>This app is on github : <a href="https://github.com/flrent/FeedsColumns.git" target="_new">https://github.com/flrent/FeedsColumns.git</a></p>'
    		},
    		{
    			xtype:'formpanel',
    			id:'keywordsPanel',
    			items:[
    				{
    					xtype:'fieldset',
    					title:'First #topic',
    					value:'firstKeyword',
    					items:[
							{
								xtype:'textfield',
								label:'Keyword',
								name:'keyword1',
								id:'keyword1',
								value:'montreal'
							},
							{
								xtype:'selectfield',
								label:'Source',
								name:'source1',
								id:'source1',
								options:[
									{
										text:"Flickr",
										value:"flickr"
									},
									{
										text:"Twitter",
										value:"twitter"
									}
								]
							}
    					]
    				},
    				{
    					xtype:'fieldset',
    					title:'Second #topic',
    					items:[
							{
								xtype:'textfield',
								label:'Keyword',
								id:'keyword2',
								name:'keyword2',
								value:'javascript'
							},
							{
								xtype:'selectfield',
								label:'Source',
								id:'source2',
								name:'source2',
								options:[
									{
										text:"Twitter",
										value:"twitter"
									},
									{
										text:"Flickr",
										value:"flickr"
									}
								]
							}
    					]
    				},
    				{
    					xtype:'fieldset',
    					title:'Third #topic',
    					items:[
							{
								xtype:'textfield',
								label:'Keyword',
								id:'keyword3',
								name:'keyword3',
								value:'california'
							},
							{
								xtype:'selectfield',
								label:'Source',
								name:'source3',
								id:'source3',
								options:[
									{
										text:"Flickr",
										value:"flickr"
									},
									{
										text:"Twitter",
										value:"twitter"
									}
								]
							}
    					]
    				},
    				{
    					xtype:'button',
    					ui:'action',
    					text:'Browse content',
    					id:'browseContent'
    				}
    			]
    		}
    	]
    }
});