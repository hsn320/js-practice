const links = document.querySelectorAll('.blank');
let subWindow = null;

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const url = link.href;
        if (subWindow && !subWindow.closed) {
            subWindow.location.href = url;
            subWindow.focus();
        } else {
            subWindow = window.open(url, 'blankWindow');
        }
    });
});