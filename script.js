document.addEventListener('DOMContentLoaded', async (e) => {
    console.log('Start');

    let url = 'https://baza-gai.com.ua/nomer/';
    const key = '53f98d3aa5e27428971d52008bedee4a';
    let nomer = 'AE4000IT';

    try{
        const carPhotoData = getCarPhotoData(await getApiObjByNumber(url, nomer, key));
        console.log(carPhotoData);
    }
    catch(error){
        console.log(error);
    }

    const carCardPhoto = new CarCardPhoto();
    document.querySelector('body').appendChild(carCardPhoto.divContainer);
})


const getApiObjByNumber = async (url, nomer, key) => {

    const responce = await fetch(`${url}${nomer}`, {headers: {'Accept': 'application/json', 'X-Api-Key': key}});
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