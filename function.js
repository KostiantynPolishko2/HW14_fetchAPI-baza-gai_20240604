const key = '53f98d3aa5e27428971d52008bedee4a';

const createArrCarPhotoNext = (carsPhotoNext, size) => {
    for(let i = 0; i != size; i++){
        carsPhotoNext.push(new CarPhotoNext('car-photo__next'));
    }
}

const isNumber = (number) => {
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