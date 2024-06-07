document.addEventListener('DOMContentLoaded', e => {
    console.log('Start templates');

    const carPhoto = document.querySelector('template#car-photo').content.querySelector('div.car-card__main');
    const body = document.querySelector('body#template');

    // let content1 = carPhoto.cloneNode(true);
    // $(content1).css({width: `${355}px`, height: `${265}px`});

    // body.appendChild(content1);

    for (let i = 0; i != 2; i++){
        let content = carPhoto.cloneNode(true);
        content.id = `${(i+1)}tmpt`;
        console.log(`${(i+1)}tmpt`);
        $(content).css({width: `${355}px`, height: `${265}px`});
        body.appendChild(content);
    }

    console.log('id=', document.getElementById('1tmpt'));
})

