class CarCardPhoto{
    divContainer;
    carPhotoData;

    constructor(id){
        this.identifier = id;
        this.createCarCard();
        this.setDefault();
    }

    createCarCard(){
        this.divContainer = $('<div>').attr('id', this.identifier).addClass(['car-card__main', 'car-card__img'])[0];
        $(this.divContainer).append($("<img src='./img/car_icon.jpg' alt='car'>").addClass('img__car-card__main'));

        $(this.divContainer).append("<div class='car-card__content car-card__overlay'></div>");
        $(this.divContainer).find('div.car-card__content').append("<div class='car-card__content-top'></div>");
        $(this.divContainer).find('div.car-card__content').append("<div class='car-card__content-bottom'></div>");

        $(this.divContainer).find('div.car-card__content-top').append("<div class='plate-number'></div>");
        $(this.divContainer).find('div.car-card__content-top').append("<div><span></span></div>");
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
        $(this.divContainer).find('img').attr('src', carPhotoData.photoUrl);

        $(this.divContainer).find('div.plate-number__code-country > span').text(carPhotoData.codeCountry);
        $(this.divContainer).find('div.plate-number__text > span').text(carPhotoData.numberText);
        $(this.divContainer).find('div.plate-data__registr > span').text(carPhotoData.dataRegistr);
        $(this.divContainer).find('div.car-card__data-model > span').text(carPhotoData.dataModel);
        $(this.divContainer).find('div.car-card__mark-model > span').text(carPhotoData.markModel);

        $(this.divContainer).find('div.content-top__message-info > span').empty();
        $(this.divContainer).find('div.plate-number').next().removeClass();
    }

    setDefault(number='XXDDDDXX'){
        $(this.divContainer).find('img').attr('src', './img/car_icon.jpg');

        $(this.divContainer).find('div.plate-number__code-country > span').empty();
        $(this.divContainer).find('div.plate-number__text > span').text(number);
        $(this.divContainer).find('div.plate-data__registr > span').empty();
        $(this.divContainer).find('div.car-card__data-model > span').empty();
        $(this.divContainer).find('div.car-card__mark-model > span').empty();
    }

    setInputUnFormat(number){
        this.setDefault(number);
        $(this.divContainer).find('div.plate-number').next().addClass('content-top__message-info');
        $(this.divContainer).find('div.content-top__message-info > span').text('UNCORRECT FORMAT!');
    }

    setEror404(number){
        this.setDefault(number);
        $(this.divContainer).find('div.plate-number').next().addClass('content-top__message-info');
        $(this.divContainer).find('div.content-top__message-info > span').text('NUMBER IS ABSENT!');
        $(this.divContainer).find('img.img__car-card__main').attr('src', './img/error404.jpg');
    }
}