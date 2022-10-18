//listazzuk a konyveket divekben 
import KonyvPublicView from "./KonyvPublicView.js";
class KonyvekPublicView{
    constructor(tomb, szuloElem){
        szuloElem.append("<div id='container'></div>")

        tomb.forEach(konyv => {
            new KonyvPublicView(konyv, szuloElem);
        });
    }
}

export default KonyvekPublicView;