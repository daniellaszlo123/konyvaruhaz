import KonyvView from "./KonyvView.js";

class KonyvekView {
    constructor(tomb, szuloElem) {
        //szuloElem.children(":first-child").remove()
        szuloElem.html(`<table><thead><tr>
                        <th>ID</th>
                        <th>Cím</th>
                        <th>Szerző</th>
                        <th>Ár</th>
                        <th></th>
                        <th></th>
                        </tr></thead>
                        <tbody></tbody></table>`);
        this.tablaElem = szuloElem.children("table:last-child");
        this.tbodyElem=this.tablaElem.children("tbody");

        tomb.forEach(konyv => {
            new KonyvView(konyv, this.tbodyElem);
        });
    }
}

export default KonyvekView;