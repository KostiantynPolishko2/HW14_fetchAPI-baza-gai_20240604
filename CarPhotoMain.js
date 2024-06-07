class CarPhotoMain extends CarCardPhoto{
    #userWidth = 500;
    #userHeight = 375;

    constructor(id){
        super(id);
        this.#setSize();
    }

    #setSize(){
        $(this.divContainer).css({width: `${this.#userWidth}px`, height: `${this.#userHeight}px`});
    }
}