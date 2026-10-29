const download = document.querySelector("#dwnld")
const reset = document.querySelector("#reset")
const tutorial = document.querySelector("#tutorial")

reset.addEventListener("click", () => {
    write.value = ""
    parse()
})

tutorial.addEventListener("click", () => {
    write.value = `TITLE How To Use Easy Markdown #

SUBTITLE Basic Syntax #
BP Always end off a line with " #" #
BP Keywords are always in capitals #
L #
SUBTITLE All Features #
BP TITLE: Creates a title #
BP SUBTITLE: Creates a subtitle #
BP SMT: Creates a small title #
BP BP: add a bullet point #
BP BL: Make a line bold #
BP IL: Make a line italic #
BP L: Create a separator #
BP W: Add a warning #
BP N: Add a note #
BP Or use no identifier for plain text #
BP You may add a comment with '=' #
L #
TITLE Title #
SUBTITLE Subtitle #
SMT Small Title #
Body Text #
BP Bullet Point #
W Warning #
N Note #
IL Italics #
L #









N Still in very early stages of development, expect changes or additions later on. #

v1.2`
parse()
})

download.addEventListener("click", () => {
    const blob = new Blob([write.value], {type:"text/plain"})
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    const topLine = write.value.split("\n")[0]
    console.log(topLine);
    
    let fn = "notes.ezmd"
    const kewd = topLine.split(" ")[0]
    if (kewd == "NAME") {
        fn = String(topLine.slice(4, -2))
    }
    if (fn.length >= 5) {
        if (fn.slice(-5, -1) + fn.slice(-1) == ".ezmd") {
            fileName = fn
        }
        else {
            fileName = fn + ".ezmd"
        }
    }

    a.href = url
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
})