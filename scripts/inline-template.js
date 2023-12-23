htmx.defineExtension('inline-template', {
    transformResponse: function(text, xhr, elt) {
        template = elt.dataset.template;
        if(template) {
            return Handlebars.compile(template)(JSON.parse(text));
        }
        return text;
    }
})