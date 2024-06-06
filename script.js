document.addEventListener('DOMContentLoaded', async (e) => {
    console.log('Start');

    const carCardPhoto = new CarCardPhoto('car_photo_main');
    document.querySelector('body').appendChild(carCardPhoto.divContainer);

    document.search.send.addEventListener('click', (e)=>{       
        let number = e.target.previousElementSibling.value.replace(/\s/g, '');
        number = number.replace(/[a-z]/gi, x => x.toUpperCase());

        if(isNumber(number)){
            // createCarPhoto(number, carCardPhoto);
            number = e.target.previousElementSibling.value = number;
            console.log('Correct');
        }
        else{
            // carCardPhoto.setDefault();
            document.search.reset();
            console.log('Uncorrect!!!');           
        }       
    })
})

const isNumber = (number) => {
    const regex = /\b[A-Z]{2}\d{4}[A-Z]{2}\b/i;
    return regex.test(number);
}

const createCarPhoto = async(nomer, carCardPhoto) => {
    let url = 'https://baza-gai.com.ua/nomer/';
    const key = '53f98d3aa5e27428971d52008bedee4a';

    try{
        const carPhotoData = getCarPhotoData(await getApiObjByNumber(url, nomer, key));
        carCardPhoto.setCarPhotoTxt(carPhotoData);
    }
    catch(error){
        console.log(error);
    }
}

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