const write = document.querySelector("#write")
const read = document.querySelector("#read")
acceptable = ["TITLE", "SUBTITLE", "BP", "BL", "C", "L", "ST", "W", "N", "IL", "NAME"]

function parse() {
    read.replaceChildren()
    const lines = write.value.split("\n")
    for (const line of lines) {
        const keyword = line.split(" ")[0]
        if (acceptable.includes(keyword) && lines != "" && line[line.length - 1] == "#") {
            if (keyword == "TITLE") {read.insertAdjacentHTML("beforeend",`<h1 class="text-gray-900 text-3xl">${line.slice(6, -2)}</h1>`)} 
            else if (keyword == "SUBTITLE" && line[line.length - 1] == "#") {read.insertAdjacentHTML("beforeend",`<h1 class="text-gray-900 text-2xl">${line.slice(9, -2)}</h1>`)}
            else if (keyword == "ST") {read.insertAdjacentHTML("beforeend",`<h1 class="text-gray-900 text-xl">${line.slice(3, -2)}</h1>`)}
            else if (keyword == "BP") {read.insertAdjacentHTML("beforeend",`<h1 class="text-gray-900 text-lg">• ${line.slice(3, -2)}</h1>`)}
            else if (keyword == "BL") {read.insertAdjacentHTML("beforeend",`<h1 class="text-gray-900 text-lg font-bold">${line.slice(3, -2)}</h1>`)}
            else if (keyword == "L") {read.insertAdjacentHTML("beforeend",`<hr class="border-gray-900">`)}
            else if (keyword == "W") {read.insertAdjacentHTML("beforeend",`<h1 class="text-red-500 text-lg font-bold">${String(line.slice(2, -2))}</h1>`) }
            else if (keyword == "N") {read.insertAdjacentHTML("beforeend",`<h1 class="text-green-500 text-lg font-bold">${line.slice(2, -2)}</h1>`) }
            else if (keyword == "IL") {read.insertAdjacentHTML("beforeend",`<h1 class="text-gray-900 text-lg italic">${line.slice(3, -2)}</h1>`)}
            else if (keyword == "C") {read.insertAdjacentHTML("beforeend",`<h1 class="text-gray-400 text-lg italic">${line.slice(2, -2)}</h1>`)}
            else if (keyword == "NAME") {read.insertAdjacentHTML("beforeend",`<h1 class="text-gray-400 text-lg italic">${line.slice(5, -2)}</h1>`)}
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