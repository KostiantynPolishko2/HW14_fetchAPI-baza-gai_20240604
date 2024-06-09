document.addEventListener('DOMContentLoaded', async (e) => {
    console.log('Start index.html');

    const carPhotoMain = new CarPhotoMainHtml();
    document.querySelector('main').firstElementChild.appendChild(carPhotoMain);

    // const carPhotoNext = new CarPhotoNextHtml();

    document.search.send.addEventListener('click', (e)=>{ 
        removeChild($('main section').last()[0]);
        
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

const createCarPhoto = async(nomer, carPhotoMain) => {
    try{
        const result = await getApiObjByNumber(nomer);
        carPhotoMain.identity = `${result.vendor??= 'x-vendor'}-${result.model??= 'y-model'}`;
        carPhotoMain.setCarPhotoTxt(getCarPhotoData(result));

        //===create list photos of previous cars===
        const cars = Array.from(result.operations);
        
        if(cars.length > 1){
            const carPhotoNextError404 = new CarPhotoNextHtml();
            for(let i = 1; i != cars.length; i++){
                try{
                    let url_photo = getUrlPhotoCar(await getApiObjByVendorModel(cars[i].vendor, cars[i].model));
                    const carPhotoNext = new CarPhotoNextHtml();
                    carPhotoNext.identity = `${cars[i].vendor??= 'vendor' + (i-1).toString()}-${cars[i].model??= 'model' + (i-1).toString()}`;
                    carPhotoNext.setCarPhotoTxt(getCarPhotoDataToNext(cars[i], url_photo, nomer));
                    document.querySelector('main').lastElementChild.appendChild(carPhotoNext);
                }
                catch(error){
                    carPhotoNextError404.setEror404(nomer);
                    document.querySelector('main').lastElementChild.appendChild(carPhotoNextError404);
                }
            }
        }
    }
    catch(error){
        carPhotoMain.setEror404(nomer);
    }
}