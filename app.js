const write = document.querySelector("#write")
const read = document.querySelector("#read")
acceptable = ["TITLE", "SUBTITLE", "TEXT", "BP", "=", "BL", "L", "SMT", "W"]
write.value = `TITLE How To Use Easy Markdown #

SUBTITLE Basic Syntax #
BP Always end off a line with " #" #
BP Keywords are always in capitals #
L #
SUBTITLE All Features #
BP TITLE: Creates a title #
BP SUBTITLE: Creates a subtitle #
BP BP: add a bullet point #
BP BL: Make a line bold #
BP L: Create a separator #
BP W: Add a warning #
BP Or use no identifier for plain text #
BP You may add a comment with '=' #









W Still in very early stages of development, expect changes or additions later on. #

v1.0.0`
function parse() {
    read.replaceChildren()
    const lines = write.value.split("\n")
    console.log(lines)
    for (const line of lines) {
        const keyword = line.split(" ")[0]
        console.log(keyword)
        if (acceptable.includes(keyword) && lines != "" && line[line.length - 1] == "#") {
            if (keyword == "TITLE") {
                read.insertAdjacentHTML("beforeend",`<h1 class="text-gray-900 text-3xl">${line.slice(6, -2)}</h1>`)
            } 
            else if (keyword == "SUBTITLE" && line[line.length - 1] == "#") {
                read.insertAdjacentHTML("beforeend",`<h1 class="text-gray-900 text-2xl">${line.slice(9, -2)}</h1>`)
            }
            else if (keyword == "SMT") {
                read.insertAdjacentHTML("beforeend",`<h1 class="text-gray-900 text-xl">${line.slice(3, -2)}</h1>`)
            }
            else if (keyword == "BP") {
                read.insertAdjacentHTML("beforeend",`<h1 class="text-gray-900 text-lg">• ${line.slice(3, -2)}</h1>`)
            }
            else if (keyword == "BL") {
                read.insertAdjacentHTML("beforeend",`<h1 class="text-gray-900 text-lg font-bold">${line.slice(3, -2)}</h1>`)
            }
            else if (keyword == "L") {
                read.insertAdjacentHTML("beforeend",`<hr class="border-gray-900">`)
            }
            else if (keyword == "W") {
               read.insertAdjacentHTML("beforeend",`<h1 class="text-red-500 text-lg font-bold">${line.slice(2, -2)}</h1>`) 
            }
        }
        
        else {
            read.insertAdjacentHTML("beforeend",`<h1 class="text-gray-900 text-lg">${line}</h1>`)
        }
    }
}
parse()
write.addEventListener("input", () => {
    parse()
})