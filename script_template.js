document.addEventListener('DOMContentLoaded', e => {
    console.log('Start templates');

    //===create and use <template> inside DOM===//

    // const carPhoto = document.querySelector('template#car-photo').content;
    // const body = document.querySelector('body#template');

    // for (let i = 0; i != 2; i++){
    //     let content = carPhoto.cloneNode(true);
    //     content.querySelector('div').id = `${(i+1)}tmpt`;
    //     content.querySelector('div.plate-number__code-country').firstElementChild.textContent = 'TT';
    //     $(content.querySelector('div')).css({width: `${355}px`, height: `${265}px`});
    //     body.appendChild(content);
    // }

    // console.log('id=', document.getElementById('1tmpt'));

    //===create and use <template> inside customElement===//

    const template = document.querySelector('template#car-photo').content.querySelector('div.car-card__main');
    const carPhoto = new CarPhotoHtmlElement(template);
    document.querySelector('body#template').appendChild(carPhoto);

    const clone = carPhoto.cloneNode(true);
    console.log(clone);
    document.querySelector('body#template').appendChild(clone);
})

