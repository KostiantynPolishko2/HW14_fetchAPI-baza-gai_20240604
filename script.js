document.addEventListener('DOMContentLoaded', e => {
    console.log('Start');

    let url = 'https://baza-gai.com.ua/nomer/';
    const key = '53f98d3aa5e27428971d52008bedee4a';
    let nomer = 'AE4000IT';

    // getByNumber(url, nomer, key);
    const carCardPhoto = new CarCardPhoto();
    document.querySelector('body').appendChild(carCardPhoto.divContainer);
})

const getByNumber = (url, nomer, key) => {
    fetch(`${url}${nomer}`, {headers: {'Accept': 'application/json', 'X-Api-Key': key}}).
    then(res => {
        if(res.status === 200){
            return res.json();
        }
        else{
            throw new Error();
        }
    }).
    then(apiObj => {
        console.log(apiObj);
        console.log(apiObj.digits, apiObj.model, apiObj.model_year, apiObj.vendor, apiObj.photo_url);
        console.log(apiObj.operations[0]);
    }).
    catch(error => {
        console.log(error);
    }).
    finally(console.log('End'));
}