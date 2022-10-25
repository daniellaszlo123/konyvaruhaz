import KonyvekView from "../View/KonyvekView.js";
import KonyvModel from "../Model/KonyvModel.js";
import KonyvekPublicView from "../View/konyvekPublicView.js";
import KosarModel from "../Model/KosarModel.js";
import KosarView from "../View/KosarView.js";


class AdminController {
    constructor() {
        const admin=$("#admin");
        const publikus=$("#public");
        const kosarBtn=$("#kosar");
       // console.log("AdminController");
        const konyvmodel = new KonyvModel();
        const kosar = new KosarModel();
        const oldalNav=$("nav")
        console.log(oldalNav);
        oldalNav.on("click", ()=>{
            //oldalNav.remove();
        })
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
                var elem=event.detail
                //console.log("controllerben kosarba rak", event.detail);
                konyvmodel.termekKosarba(event.detail)
                kosar.setKosarElem(elem);
            })

            $(window).on("megtekint", (event)=>{
                //console.log("controllerben megtekint", event.detail);
                konyvmodel.termekMegtekint(event.detail)
            })

            kosarBtn.on("click", ()=>{
                new KosarView(kosar.getKosarTomb(),$("main"));
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

export default AdminController;