//egy konyv divben, h es p tagakkel, kosarba gomb
class KonyvPublicView{
    constructor(elem, szuloElem){
        szuloElem.append(`
        <div class="termek">
            <h2>Cím: ${elem.cim}</h2>
            <p>Szerző: ${elem.szerzo}</p>
            <p>Ár: ${elem.ar}</p>
            <button class="megtekint">Megtekintés</button>
            <button class="kosarba">Kosárba</button>
        </div>
        `)

        this.divElem=szuloElem.children("div:last-child")
        console.log(this.divElem);

        this.megtekint=this.divElem.children("nth-child(4)")
        this.kosarba=this.divElem.children("nth-child(5)")

        this.megtekint.on("click", ()=>{
            this.kattintasTrigger("megtekint")
        })
        this.kosarba.on("click", ()=>{
            this.kattintasTrigger("kosarba")
        })
        
    }
    kattintasTrigger(esemenyNev, event){
        const esemeny= new CustomEvent(esemenyNev, {detail:event.detail})
        window.dispatchEvent(esemeny)
    }
}

export default KonyvPublicView;