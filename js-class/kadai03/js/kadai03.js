document.addEventListener('mousemove',(event) =>{
    document.querySelector('#client-x').value = event.clientX;
    document.querySelector('#client-y').value = event.clientY;

    document.querySelector('#screen-x').value = event.screenX;
    document.querySelector('#screen-y').value = event.screenY;

    document.querySelector('#global-x').value = event.pageX;
    document.querySelector('#global-y').value = event.pageY;
});