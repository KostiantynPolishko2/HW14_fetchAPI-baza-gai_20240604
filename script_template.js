document.addEventListener('DOMContentLoaded', async e => {
    console.log('Start template.html');

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

    //===create and use <template> inside customElement cts parameter = <template>===//

    // const template = document.querySelector('template#car-photo').content.querySelector('div.car-card__main');
    // const carPhoto = new CarPhotoHtmlElement(template);
    // document.querySelector('body#template').appendChild(carPhoto);

    // const clone = carPhoto.cloneNode(true);
    // console.log(clone);
    // document.querySelector('body#template').appendChild(clone);

    //===create and use <template> inside customElement cts parameter = <template>===//

    // const carPhoto = new CarPhotoHtmlElement();
    // document.querySelector('body#template').appendChild(carPhoto);

    console.log('form', document.querySelector('form'));

    const carPhotoMain = new CarPhotoMainHtml();
    carPhotoMain.identity = 'BMW-X3';
    
    // carPhotoMain.setCarPhotoTxt(getCarPhotoData(await getApiObjByNumber('AE4000IT')));
    // document.querySelector('body#template').appendChild(carPhotoMain);
    
    // const clone = carPhotoMain.cloneNode(true);
    // clone.setCarPhotoTxt(getCarPhotoData(await getApiObjByNumber('AE4000IT')));
    // document.querySelector('body#template').appendChild(clone);

    // carPhotoMain.setInputUnFormat('AE4000IT');
    // document.querySelector('body#template').appendChild(carPhotoMain);

    carPhotoMain.setEror404('AE4000IT');
    document.querySelector('body#template').appendChild(carPhotoMain);

    // const clone = carPhoto.cloneNode(true);
    // document.querySelector('body#template').appendChild(clone);
})

