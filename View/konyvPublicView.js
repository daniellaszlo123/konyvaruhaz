//egy konyv divben, h es p tagakkel, kosarba gomb
class KonyvPublicView{
    #elem
    constructor(elem, szuloElem){
        szuloElem.append(`
        <div class="termek">
            <h2>Cím: ${elem.cim}</h2>
            <p>Szerző: ${elem.szerzo}</p>
            <p>Ár: ${elem.ar} Ft</p>
            <button class="megtekint">Megtekintés</button>
            <button class="kosarba">Kosárba</button>
        </div>
        `)
        this.#elem=elem;
        this.elemId=elem.id;

        this.divElem=szuloElem.children("div:last-child")
        //console.log(this.divElem);

        this.megtekint=this.divElem.children(":nth-child(4)")
        this.kosarba=this.divElem.children(":nth-child(5)")

        this.megtekint.on("click", ()=>{
            //console.log("megtekint a viewban");
            this.kattintasTrigger("megtekint")
        })
        this.kosarba.on("click", ()=>{
            //console.log("kosarba rak a viewban");
            this.kattintasTrigger("kosarba")
        })
        
    }
    kattintasTrigger(esemenyNev){
        const esemeny= new CustomEvent(esemenyNev, {detail:this.#elem})
        window.dispatchEvent(esemeny)
    }
}

export default KonyvPublicView;