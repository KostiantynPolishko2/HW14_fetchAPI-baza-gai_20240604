class CarPhotoNext extends CarCardPhoto{
    #userWidth = 355;
    #userHeight = 265;

    constructor(id){
        super(id);
        this.#setSize();
    }

    #setSize(){
        $(this.divContainer).css({width: `${this.#userWidth}px`, height: `${this.#userHeight}px`});
    }
}