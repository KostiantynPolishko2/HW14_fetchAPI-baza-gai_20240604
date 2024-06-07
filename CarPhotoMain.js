class CarPhotoMain extends CarCardPhoto{
    #userWidth = 500;
    #userHeight = 375;

    constructor(id){
        super(id);
        this.#setSize();
    }

    #setSize(){
        $(this.divContainer).css({width: `${this.#userWidth}px`, height: `${this.#userHeight}px`});
        $(this.divContainer).addClass('car-card__main__br-radius');
    }
}