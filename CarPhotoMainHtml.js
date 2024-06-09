class CarPhotoMainHtml extends CarPhotoHtmlElement{
    #userWidth = '500px';
    #userHeight = '375px';

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

customElements.define('car-photo-main', CarPhotoMainHtml);