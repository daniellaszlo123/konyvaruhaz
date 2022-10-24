//listazzuk a konyveket divekben 
import KonyvPublicView from "./KonyvPublicView.js";
class KonyvekPublicView{
    constructor(tomb, szuloElem){
        szuloElem.append("<div id='container'></div>")

        this.tartalomElem=szuloElem.children("div")
        tomb.forEach(konyv => {
            new KonyvPublicView(konyv, this.tartalomElem);
        });
    }
}

export default KonyvekPublicView;