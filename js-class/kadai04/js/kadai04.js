const linkIds = ["link_doc", "link_html", "link_css", "link_js"];

linkIds.forEach(id =>{
    const link = document.getElementById(id);

    link.addEventListener("click",(event) =>{
        event.preventDefault();
        const url = link.href;
        window.open(url,"myWindow");
    })
});