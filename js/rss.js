get();

            // function that call the API to get the JSON data
async function get() { 
    var container = document.getElementById("feed");

    console.log(container);

    var r = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alod83');
    var data = await r.json();
    var entries = data.items;
    console.log(entries) ;         
    for(var i = 0; i < 4; i++){
                var entry = entries[i];
                var html = "<div class=\"col-md-3 col-sm-6 \"> \
                <div class=\"card RSS\"> \
                    <img class=\"card-img-top img-fluid\" src=\"" + entry.thumbnail + "\"> \
                    <div class=\"card-body\"> \
                        <h5>" + entry.title + "</h5> \
                        <a href=\"" +  entry.link + "\" class=\"btn btn-primary\" target=\"_blank\">Read More</a></div> \
                    </div>\
                </div>";
                console.log(html);
                container.innerHTML += html;
            
        }
    
}
