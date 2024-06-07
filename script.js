const key = '53f98d3aa5e27428971d52008bedee4a';

document.addEventListener('DOMContentLoaded', async (e) => {
    console.log('Start');

    const carPhotoMain = new CarPhotoMain('car-photo__main');
    document.querySelector('main').firstElementChild.appendChild(carPhotoMain.divContainer);

    const carsPhotoNext = [];
    createArrCarPhotoNext(carsPhotoNext, 5);

    document.search.send.addEventListener('click', (e)=>{       
        let number = e.target.previousElementSibling.value.replace(/\s/g, '');
        number = number.replace(/[a-z]/gi, x => x.toUpperCase());

        if(isNumber(number)){
            createCarPhoto(number, carPhotoMain, carsPhotoNext);
            e.target.previousElementSibling.value = number;
        }
        else{
            carPhotoMain.setInputUnFormat(number);
            document.search.reset();         
        }       
    })
})

const createArrCarPhotoNext = (carsPhotoNext, size) => {
    for(let i = 0; i != size; i++){
        carsPhotoNext.push(new CarPhotoNext('car-photo__next'));
    }
}

const isNumber = (number) => {
    console.log(number);
    const regex = /\b[A-Z]{2}\d{4}[A-Z]{2}\b/i;
    return regex.test(number);
}

const removeChild = (layoutElements) => {
    while(layoutElements.firstElementChild){
        layoutElements.firstElementChild.remove();
    }
}

const copyInstance = (instance) => {
    return Object.assign(
        Object.create(
            Object.getPrototypeOf(instance),
        ), JSON.parse(JSON.stringify(instance))
    );
}

const createCarPhoto = async(nomer, carPhotoMain, carsPhotoNext) => {
    
    removeChild($('main section').last()[0]);

    try{
        const result = await getApiObjByNumber(nomer);
        carPhotoMain.id = `${result.vendor??= 'x-vendor'}-${result.model??= 'y-model'}`;
        carPhotoMain.setCarPhotoTxt(getCarPhotoData(result));

        //===create list photos of previous cars===
        const cars = Array.from(result.operations);
        if(cars.length > 1){
            for(let i = 1; i != cars.length; i++){
                try{
                    let url_photo = getUrlPhotoCar(await getApiObjByVendorModel(cars[i].vendor, cars[i].model));
                    carsPhotoNext[i-1].id = `${cars[i].vendor??= 'vendor' + (i-1).toString()}-${cars[i].model??= 'model' + (i-1).toString()}`;
                    carsPhotoNext[i-1].setCarPhotoTxt(getCarPhotoDataToNext(cars[i], url_photo, nomer));
                    document.querySelector('main').lastElementChild.appendChild(carsPhotoNext[i-1].divContainer);
                }
                catch(error){
                    carsPhotoNext[i-1].setEror404(nomer);
                    document.querySelector('main').lastElementChild.appendChild(carsPhotoNext[i-1].divContainer);
                }
            }
        }
    }
    catch(error){
        carPhotoMain.setEror404(nomer);
    }
}

const getApiObjByNumber = async (nomer) => {

    const responce = await fetch(`https://baza-gai.com.ua/nomer/${nomer}`, {headers: {'Accept': 'application/json', 'X-Api-Key': key}});
    if(responce.status === 200){
        return responce.json();
    }
    else{
        throw new Error();
    }
}

const getCarPhotoData = (apiObj) => {

    let carPhotoData = {};
    carPhotoData.photoUrl = apiObj.photo_url??= './img/error404.jpg' ;
    carPhotoData.codeCountry = 'UA';
    carPhotoData.numberText = apiObj.digits??= 'XX 0000 YY';
    carPhotoData.dataRegistr = apiObj.operations[0].registered_at??= 'dd.mm.yyyy';
    carPhotoData.dataModel = apiObj.model_year??= 'yyyy';
    carPhotoData.markModel = `${apiObj.vendor??= 'x-vendor'} ${apiObj.model??= 'y-model'}`
    
    return carPhotoData;
}

const getCarPhotoDataToNext = (apiObj, photo_url, number) => {
    let carPhotoDataNext = {};
    carPhotoDataNext.photoUrl = photo_url??= './img/error404.jpg' ;
    carPhotoDataNext.codeCountry = 'UA';
    carPhotoDataNext.numberText = number??= 'XX 0000 YY';
    carPhotoDataNext.dataRegistr = apiObj.registered_at??= 'dd.mm.yyyy';
    carPhotoDataNext.dataModel = apiObj.model_year??= 'yyyy';
    carPhotoDataNext.markModel = `${apiObj.vendor??= 'x-vendor'} ${apiObj.model??= 'y-model'}`
    
    return carPhotoDataNext;
}

const getApiObjByVendorModel = async (vendor, model) => {

    const responce = await fetch(`https://baza-gai.com.ua/make/${vendor.toLowerCase()}/${model.toLowerCase()}`, {headers: {'Accept': 'application/json', 'X-Api-Key': key}});
    if(responce.status === 200){
        return responce.json();
    }
    else{
        throw new Error();
    }
}

const getUrlPhotoCar = (apiObj) => {
    return apiObj.catalog_model.photo_url??= './img/car_come_soon.jpg';
}