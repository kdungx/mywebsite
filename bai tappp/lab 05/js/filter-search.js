(function() {
    var $imgs =$('#gallery img');
    var $search =$('#filter-search');
    var cache =[];

    $imgs.each(function() {
        cache.push({
            element: this,
            text: this.alt.trim().toLowerCase()
        });
    });
    
}