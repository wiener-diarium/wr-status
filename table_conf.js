

var table = new Tabulator("#example-table", {
    height: 600,
    layout: "fitColumns",
    ajaxURL: 'data.json',
    columns: [
        {
            title: "ID", field: "col_id", width: 150
        },
        {
            title: "Name", field: "doc_title"
        },
        // {
        //     title: "Image", field: "doc_thumb",
        //     formatter: function (cell) {
        //         var value = cell.getValue();
        //         return `<img src="${value}" class="img-thumbnail">`
        //     }
        // },
        {
            title: "Transcribed", field: "doc_transcribed", formatter:"tickCross"
        },
        // {
        //     title: "Transcribed", field: "doc_transcribed",
        //     formatter: function (cell) {
        //         var value = cell.getValue();
        //         if (value) {
        //             return `<span class="badge bg-success">yes</span>`
        //         } else {
        //             return `<span class="badge bg-danger">no</span>`
        //         }
        //     }
        // },
        {
            title: "Pages", field: "pages"
        }
    ]
});