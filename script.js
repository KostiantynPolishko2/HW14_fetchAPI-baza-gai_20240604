const key = '53f98d3aa5e27428971d52008bedee4a';

document.addEventListener('DOMContentLoaded', async (e) => {
    console.log('Start');

    // const carPhotoNext = new CarPhotoNext('car-photo__next');
    // document.querySelector('body').appendChild(carPhotoNext.divContainer);

    // getUrlPhotoCar(await getApiObjByVendorModel('bmw', '328i'), 2014);

    const carPhotoMain = new CarPhotoMain('car-photo__main');
    document.querySelector('body').appendChild(carPhotoMain.divContainer);

    document.search.send.addEventListener('click', (e)=>{       
        let number = e.target.previousElementSibling.value.replace(/\s/g, '');
        number = number.replace(/[a-z]/gi, x => x.toUpperCase());

        if(isNumber(number)){
            createCarPhoto(number, carPhotoMain);
            e.target.previousElementSibling.value = number;
        }
        else{
            carPhotoMain.setInputUnFormat(number);
            document.search.reset();         
        }       
    })
})

const isNumber = (number) => {
    const regex = /\b[A-Z]{2}\d{4}[A-Z]{2}\b/i;
    return regex.test(number);
}

const createCarPhoto = async(nomer, carCardPhoto) => {
    try{
        const result = await getApiObjByNumber(nomer);
        carCardPhoto.setCarPhotoTxt(getCarPhotoData(result));

        //===create list photos of previous cars===
        const cars = Array.from(result.operations);
        if(cars.length > 1){
            for(let i = 1; i != cars.length; i++){
                let url_photo = getUrlPhotoCar(await getApiObjByVendorModel(cars[i].vendor, cars[i].model));
                console.log(i, getCarPhotoDataToNext(cars[i], url_photo, nomer));
            }
        }
    }
    catch(error){
        carCardPhoto.setEror404(nomer);
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
        return null;
    }
}

const getUrlPhotoCar = (apiObj) => {
    return apiObj.catalog_model.photo_url??= './img/car_come_soon.jpg';
}