class CarCardPhoto{
    divContainer;
    carPhotoData;

    constructor(id){
        this.identifier = id;
        this.createCarCard();
    }

    createCarCard(){
        this.divContainer = $('<div>').attr('id', this.identifier).addClass('car-card__img')[0];
        $(this.divContainer).append($("<img src='./img/car_icon.jpg' alt='car'>").addClass('img__car-card__main'));

        $(this.divContainer).append("<div class='car-card__content car-card__overlay'></div>");
        $(this.divContainer).find('div.car-card__content').append("<div class='car-card__content-top'></div>");
        $(this.divContainer).find('div.car-card__content').append("<div class='car-card__content-bottom'></div>");

        $(this.divContainer).find('div.car-card__content-top').append("<div class='plate-number'></div>");
        $(this.divContainer).find('div.car-card__content-top').append("<div class='plate-data__registr'><span></span></div>");
        $(this.divContainer).find('div.plate-number').append("<div class='plate-number__flag'></div>");
        $(this.divContainer).find('div.plate-number').append("<div class='plate-number__text'><span></span></div>");

        $(this.divContainer).find('div.plate-number__flag').append("<div class='plate-number__flag-icon'></div>");
        let flag = $(this.divContainer).find('div.plate-number__flag-icon')[0];
        $(flag).append("<div class='flag-icon__blue'></div>").append("<div class='flag-icon__yellow'></div>");
        $(this.divContainer).find('div.plate-number__flag').append("<div class='plate-number__code-country'><span></span></div>");
        $(this.divContainer).find('div.car-card__content-bottom').append("<div class='car-card__data-model'><span></span></div>");
        $(this.divContainer).find('div.car-card__content-bottom').append("<div class='car-card__mark-model'><span></span></div>");
    }
   
    setCarPhotoTxt(carPhotoData){
        console.log(carPhotoData.photoUrl);
        let url = 'https://baza-gai.com.ua/catalog-images/bmw/x3/III%20(G01)/image.jpg';

        $(this.divContainer).find('img').attr('src', carPhotoData.photoUrl);

        $(this.divContainer).find('div.plate-number__code-country > span').text(carPhotoData.codeCountry);
        $(this.divContainer).find('div.plate-number__text > span').text(carPhotoData.numberText);
        $(this.divContainer).find('div.plate-data__registr > span').text(carPhotoData.dataRegistr);
        $(this.divContainer).find('div.car-card__data-model > span').text(carPhotoData.dataModel);
        $(this.divContainer).find('div.car-card__mark-model > span').text(carPhotoData.markModel);
    }
}