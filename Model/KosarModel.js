class KosarModel{
    #kosarTomb=[]
    constructor(){
        
    }

    setKosarElem(adat){
        this.#kosarTomb.push(adat)
        console.log(this.#kosarTomb);
    }

    getKosarTomb(){
        return this.#kosarTomb;
    }
}

export default KosarModel;