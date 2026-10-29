const current = localStorage.getItem("text") || `NAME TUTORIAL.ezmd #
TITLE How To Use Easy Markdown #

SUBTITLE Basic Syntax #
BP Always end off a line with " #" #
BP Keywords are always in capitals #
L #
SUBTITLE All Features #
BP NAME: Defines the file name #
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

v1.0.0`
write.value = current
write.addEventListener("input", () => {
    localStorage.setItem("text", write.value)
})