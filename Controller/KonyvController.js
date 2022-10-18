import KonyvekView from "../View/KonyvekView.js";
import KonyvModel from "../Model/KonyvModel.js";
import KonyvekPublicView from "../View/konyvekPublicView.js";

class KonyvController {
    constructor() {
        const admin=$("#admin");
        const publikus=$("#public");
       // console.log("KonyvController");
        const konyvmodel = new KonyvModel();

        admin.on("click", ()=>{
            konyvmodel.adatBe("../adat.json", this.konyvAdatok);

            $(window).on("modosit", (event)=>{
                console.log("controllerben modosit", event.detail);
                konyvmodel.adatModosit(event.detail)
            })
            $(window).on("torol", (event)=>{
                console.log("controllerben töröl", event.detail);
                konyvmodel.adatTorol(event.detail)
            })
        })
        publikus.on("click", ()=>{
            konyvmodel.adatBe("../adat.json", this.konyvAdatokPublikus);

            $(window).on("kosarba", (event)=>{
                console.log("controllerben kosarba rak", event.detail);
                konyvmodel.termekKosarba(event.detail)
            })

            $(window).on("megtekint", (event)=>{
                console.log("controllerben megtekint", event.detail);
                konyvmodel.termekMegtekint(event.detail)
            })
        })
        
        

        
    }
    
    konyvAdatok(tomb) {
        //console.log(tomb);
        let szuloelem=$("main");
        new KonyvekView(tomb, szuloelem);
    }

    konyvAdatokPublikus(tomb) {
        //console.log(tomb);
        let szuloelem=$("main");
        new KonyvekPublicView(tomb, szuloelem);
    }
}

export default KonyvController;