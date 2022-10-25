class KosarView{
    constructor(tomb, szuloElem){
        //szuloElem.children(":first-child").remove()
        szuloElem.html("<table id='kosarTablazat'></table>")
        this.tablazat=$("#kosarTablazat")
        for (let i = 0; i < tomb.length; i++) {
            this.tablazat.append(`<tr>
            <td>${i+1}</td>
            <td>${tomb[i].cim}</td>
            <td>${tomb[i].ar} Ft</td>
            <td><button class="torol">törlés</button></td>
            </tr>`);
        }

        
        
    }
}

export default KosarView;