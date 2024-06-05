class CarCardPhoto{
    divContainer;
    identifier;
    numberText;
    dataRegistr;
    dataModel;
    markModel;

    constructor(){
        this.identifier = 'AE4000IT_BMW_X3';
        this.numberText = 'AE 4000 IT';
        this.dataRegistr = '28.02.2024';
        this.markModel = 'BMW X3';

        this.createCarCard();
    }

    createCarCard(){
        this.divContainer = $('<div>').attr('id', this.identifier).addClass('car-card car-card__img')[0];
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
}