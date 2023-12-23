htmx.defineExtension('local-storage', {
    onEvent: function(n,e) {
        if (n === "htmx:configRequest") {
            if(e.detail.elt.dataset.lsItem) {
                e.detail.headers[e.detail.elt.dataset.lsHeader]=localStorage.getItem(e.detail.elt.dataset.lsItem);
            }
        }
    }
})