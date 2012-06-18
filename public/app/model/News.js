Ext.define('Tweet', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: "id",                type: "int"},
            {name: "text",              type: "string"},
            {name: "from_user",         type: "string"},
            {name: "profile_image_url", type: "string"},
            {name: "created_at",        type: "string"},
            {name: "metadata"},
            {name: 'search_id'}
        ]
    }
});