import "@fortawesome/fontawesome-free/css/all.css";
import "../css/layout.css";
import "@picocss/pico/css/pico.min.css";
import { readCSV } from "./csv";

// TODO start here with the first entry point

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
    }




   
}