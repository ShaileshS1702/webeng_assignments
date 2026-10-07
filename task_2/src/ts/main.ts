import "@fortawesome/fontawesome-free/css/all.css";
import "../css/layout.css";
import "@picocss/pico/css/pico.min.css";
import { CSV_Data, readCSV } from "./csv";



const file_entry = document.querySelector("#file-input")
if (file_entry instanceof HTMLElement) {
    file_entry.addEventListener("change", update )
    
}

function changedata (name: String = "No name found", type: string = "No type found", size: number | "Size not found" = "Size not found", num_row: number | "rows not found"  = "rows not found") {
    const name_output = document.querySelector("#file-name-data")
    const type_output = document.querySelector("#file-type-data")
    const size_output = document.querySelector("#file-size-data")
    const row_output = document.querySelector("#num-row-data")

    let inputs = [name, type, size, num_row]
    let outputs = [name_output, type_output, size_output, row_output]

    name_output?.textContent

    for (let i = 0; i < 4; i++) {
        let input = inputs[i];
        let output = outputs[i];

        if (output) {
            output.textContent = String(input);
        }

    }
}

changedata()
async function update(event: Event) {
    if (event) {
        const data = await readCSV(event);

        if (!(file_entry instanceof HTMLInputElement) || file_entry.files===null) {changedata(); return;};

        let files: FileList = file_entry.files
        if (files.length===0) {changedata(); return;};
        let file = files[0];
        if (!file) {changedata(); return}
        let name = file.name;
        let type = file.type;
        let size = file.size;

        changedata(name, type, size, data.length)
        fill_table(data);
    }
}

function create_header(keys: Array<string>): HTMLElement {
    let tr = document.createElement("tr");
    let th: HTMLTableCellElement;

    for (let key of keys) {
        th = document.createElement("th");
        th.textContent = key;
        tr.appendChild(th);
    }

    return tr;
}

function create_rows(data: CSV_Data): Array<HTMLElement> {
    let retArray: Array<HTMLElement> =[];
    let tr: HTMLTableRowElement;
    let th: HTMLTableCellElement;
    for (let row of data) {
        if (!(row instanceof Object)) continue;
    
        let vals = Object.values(row);
        tr = document.createElement("tr");
        

        for (let val of vals) {
            th = document.createElement("th");
            th.textContent = String(val);

            tr.appendChild(th)
        }

        retArray.push(tr);
    }

    return retArray;

}
function fill_table (data: CSV_Data) {

    const data_table_container = document.querySelector("#table-content");
    if (!(data_table_container instanceof HTMLElement)) return;

    let data_table = document.createElement("table");
    if (!(data[0] instanceof Object)) return;
    
    let keys = Object.keys(data[0]);
    
    let table_header = create_header(keys);
    data_table.appendChild(table_header);


    let table_rows = create_rows(data);

    for (let row_ele of table_rows) {
        data_table.appendChild(row_ele)
    }



    data_table_container.appendChild(data_table);

}

