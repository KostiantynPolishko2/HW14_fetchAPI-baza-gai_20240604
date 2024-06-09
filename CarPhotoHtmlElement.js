class CarPhotoHtmlElement extends HTMLElement{
    #identifier = 'car-photo';
    #template;

    constructor(){
        super();

        this.#template = document.querySelector('template#car-photo').content.cloneNode(true);
        this.#createElement();
        this.#setDefault();
    }
    
    get identifier(){
        return this.#identifier;
    }

    #createElement(){
        this.appendChild(this.#template);
    }

    #setDefault(number='XXDDDDXX'){
        $(this).find('img').attr('src', './img/car_icon.jpg');

        $(this).find('div.plate-number__code-country > span').empty();
        $(this).find('div.plate-number__text > span').text(number);
        $(this).find('div.plate-data__registr > span').empty();
        $(this).find('div.car-card__data-model > span').empty();
        $(this).find('div.car-card__mark-model > span').empty();
    }

    setCarPhotoTxt(carPhotoData){
        $(this).find('img').attr('src', carPhotoData.photoUrl);

        $(this).find('div.plate-number__code-country > span').text(carPhotoData.codeCountry);
        $(this).find('div.plate-number__text > span').text(carPhotoData.numberText);
        $(this).find('div.plate-data__registr > span').text(carPhotoData.dataRegistr);
        $(this).find('div.car-card__data-model > span').text(carPhotoData.dataModel);
        $(this).find('div.car-card__mark-model > span').text(carPhotoData.markModel);

        $(this).find('div.content-top__message-info > span').empty();
        $(this).find('div.plate-number').next().removeClass();
    }

    setInputUnFormat(number){
        this.#setDefault(number);
        $(this).find('div.plate-number').next().addClass('content-top__message-info');
        $(this).find('div.content-top__message-info > span').text('UNCORRECT FORMAT!');
    }

    setEror404(number){
        this.#setDefault(number);
        $(this).find('div.plate-number').next().addClass('content-top__message-info');
        $(this).find('div.content-top__message-info > span').text('NUMBER IS ABSENT!');
        $(this).find('img').attr('src', './img/error404.jpg');
    }
}

customElements.define('car-photo', CarPhotoHtmlElement);