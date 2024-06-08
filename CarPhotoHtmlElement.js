class CarPhotoHtmlElement extends HTMLElement{
    // identifier;
    content

    constructor(template = null){
        super(); 

        this.content = template;
        this.createElement();
        // this.identifier = identifier;  
        // this.setStyle();
        // this.setText('Hello\n');
        // this.innerText = text;
    }

    connectedCallback(){
        console.log(this.content);
        // this.append(this.content);
        // this = this.content;
        // this.setStyle();
        // this.setText('Hello\n');
    }
    
    createElement(){
        this.append(this.content);
    }

    setStyle(){
        this.id = this.identifier;
        this.style.color = 'white';
        this.style.backgroundColor = 'blue';  
    }

    setText(text){
        this.innerText = text;
    }
}

customElements.define('car-photo', CarPhotoHtmlElement);