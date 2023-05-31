class Dictionary {
    constructor(){
        this.dict= new Array();
    }

    add = (key, value) => {
        this.dict[key] = value;
    }

    find = (key) =>{
        return this.dict[key];
    }

    remove = (key) =>{
        delete this.dict[key];
    }

    showAll = () =>{
        this.dict.forEach( el => {
            console.log(el)
        });
    }
}