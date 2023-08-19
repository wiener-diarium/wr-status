
const transkribusUrl = "https://app.transkribus.eu/collection/"


function makeTranskribusLink(cell) {
    var row = cell.getRow().getData()
    var colId = row.col_id
    var docId = row.doc_id
    var detailViewUrl = `${transkribusUrl}${colId}/doc/${docId}`
    var linkToDetailView = `<a target="_blank" href="${detailViewUrl}">${cell.getData().doc_title}</a>`
    return linkToDetailView
}


var table = new Tabulator("#example-table", {
    height: 600,
    layout: "fitColumns",
    ajaxURL: 'data.json',
    columns: [
        {
            title: "ID", field: "col_id", width: 150
        },
        {
            title: "Name", field: "doc_title", headerFilter: "input", formatter: function (cell) {
                return makeTranskribusLink(cell)
            }
        },
        {
            title: "Transcribed", field: "doc_transcribed", formatter: "tickCross"
        },
        {
            title: "Pages", field: "pages"
        }
    ]
});