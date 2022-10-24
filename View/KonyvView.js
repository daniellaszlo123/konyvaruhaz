class KonyvView {
    #elem
    constructor(elem, szuloElem) {
        // console.log("KonyvView");
        
        //console.log(elem);
        this.#elem=elem;
        szuloElem.append(`<tr>
        <td>${elem.id}</td>
        <td>${elem.cim}</td>
        <td>${elem.szerzo}</td>
        <td>${elem.ar}</td>
        <td><button class="modosit">módosítás</button></td>
        <td><button class="torol">törlés</button></td>
        </tr>`);

        /*az obj egyes html elemeinek elnevezese*/
        this.rekordElem=szuloElem.children("tr:last-child");
        //console.log(this.rekordElem);
        //elnevezzuk a gombot
        this.modositElem=this.rekordElem.children("td:nth-child(5)").children("button")
        this.torolElem=this.rekordElem.children("td:nth-child(6)").children("button")

        console.log(this.modositElem);

        /*a gombokhoz hozzatesszuk az esemenykezelot*/
        this.modositElem.on("click", ()=>{
            console.log("modositas a viewban");
            this.kattintasTrigger("modosit")
        })

        this.torolElem.on("click", ()=>{
            console.log("torles a viewban");
            this.kattintasTrigger("torol")
        })
    }

    kattintasTrigger(esemenyNeve){
        //console.log(esemenyNeve);
        const esemeny= new CustomEvent(esemenyNeve, {detail:this.#elem.id})
        window.dispatchEvent(esemeny)
    }
    

}

export default KonyvView;