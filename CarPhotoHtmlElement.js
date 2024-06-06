class CarPhotoHtmlElement extends HTMLElement{

    constructor(){
        super();

        this.style.width = '500px';
        this.style.height = '375px';
        this.style.backgroundColor = 'red';
    }
}

customElements.define('car-photo', CarPhotoHtmlElement);