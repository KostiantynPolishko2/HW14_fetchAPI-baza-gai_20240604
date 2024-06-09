class CarPhotoNextHtml extends CarPhotoHtmlElement{
    #userWidth = '355px';
    #userHeight = '265px';

    constructor(){
        super();
        this.#setSize();
    }

    set identity(value){
        this.id = `${this.identifier}__${value}`
    }

    #setSize(){
        $(this).find('div.car-card__main').css({width: this.#userWidth, height: this.#userHeight});
        $(this).find('div.car-card__main').addClass('car-card__main__br-radius');
    }
}

customElements.define('car-photo-next', CarPhotoNextHtml);