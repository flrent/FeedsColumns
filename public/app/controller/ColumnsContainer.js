Ext.define('FeedsColumns.controller.ColumnsContainer', {
    extend: 'Ext.app.Controller',
    requires:['Ext.data', 'Ext.data.JsonP','Ext.field.Search', 'Ext.Img'],
    config: {
        refs: {
        	carouselContainer:'#carouselContainer',
            keywordsPanel: '#keywordsPanel'
        },
        control: {
            '#browseContent':{
                'tap':'refreshFeeds'
            }
        }
    },
    carouselTab:[],
    emptyApp: function() {
    	this.carouselTab=[];
    	this.getCarouselContainer().removeAll(true, true);
    },
    refreshFeeds: function() {
        this.emptyApp();
        this.start();
    },
    start: function(event) {
        this.getQueries();
        var that = this,
            queries = this.carouselTab;

        Ext.Array.each(queries, function(query) {
            if(query.query!="") {
                that.createColumnFeeds(query.query, query.type);                
            }
        });
    },
    getQueries: function() {
        this.carouselTab=[
            {query:Ext.getCmp("keyword1").getValue(), type:Ext.getCmp("source1").getValue()},
            {query:Ext.getCmp("keyword2").getValue(), type:Ext.getCmp("source2").getValue()},
            {query:Ext.getCmp("keyword3").getValue(), type:Ext.getCmp("source3").getValue()}
        ];
    },
    createContainerCarousel: function(query,cb) {

    	var newCarousel = Ext.create('Ext.Carousel', {
    		direction:'up',
    		flex:1.5,
    		indicator:false
    	});
    	this.getCarouselContainer().add(Ext.create('Ext.Panel', {
    		layout:'vbox',
    		cls:'column',
    		items:[
    			{
    				xtype:'toolbar',
    				title:'#'+query
    			},
    			newCarousel
    		]
    	}));
    	cb(newCarousel);
    },
    createColumnFeeds: function(query, type) {
        var ctl = this;
        if(type=="twitter") {
            this.getTweets(query, function(tweets) {
                ctl.createContainerCarousel(query, function(carousel) {
                    ctl.showTweetsPanel(tweets, carousel);
                    setInterval(function() {
                        carousel.next();
                    },3000);
                });
            });
        }
        else if(type=="flickr") {
            this.getFlickrPhotos(query, function(photos) {
                ctl.createContainerCarousel(query, function(carousel) {
                    ctl.showFlickrPanel(photos, carousel);
                    setInterval(function() {
                        carousel.next();
                    },3000);
                });
            });
        }
    },
    getTweets: function(query, cb) {
        Ext.data.JsonP.request({
            url: 'http://search.twitter.com/search.json?q='+query+'&rpp=80&include_entities=true&result_type=mixed',
            success: function(result, request) {
                cb(result.results);
            }
        });
    },
    getFlickrPhotos: function(query, cb) {
        Ext.data.JsonP.request({
            url:'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20flickr.photos.search%20where%20text%3D%22'+query+'%22%20and%20api_key%3D%226c064b055aaf10cbe60761b3f9c8816c%22%20limit%2025&format=json&diagnostics=true',
            callbackKey: 'callback',
            success: function(result, request) {
                cb(result.query.results.photo);
            }
        });
    },
    showTweetsPanel: function(tweets, carousel) {
        Ext.getCmp(carousel.getId()).removeAll(true, true);
        var items = [];
        Ext.Array.each(tweets, function(tweet) {
            items.push({
                xtype:'panel',
                cls:'news',
                styleHtmlContent:true,
                html:'<div class="tweet"><img src="'+tweet["profile_image_url"]+'" /><h3>'+tweet.from_user+'</h3><p>'+tweet.text+'</p></div>'
            });
        });
        Ext.getCmp(carousel.getId()).add(items);
    },
    showFlickrPanel: function(photos, carousel) {
        Ext.getCmp(carousel.getId()).removeAll(true, true);
        var items = [];
        Ext.Array.each(photos, function(photo) {
            items.push({
                xtype:'panel',
                cls:'news',
                styleHtmlContent:true,
                html:'<div class="flickphoto"><h3>'+photo.title+'</h3><img src="http://farm'+photo.farm+'.staticflickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'.jpg" /></div>'
            });
        });
        Ext.getCmp(carousel.getId()).add(items);
    }
});