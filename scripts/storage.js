const current = localStorage.getItem("text") || `NAME TUTORIAL.ezmd #
TITLE How To Use Easy Markdown #

SUBTITLE Basic Syntax #
BP Always end off a line with " #" #
BP Keywords are always in capitals #
L #
SUBTITLE All Features #
BP NAME: Define the file name
BP TITLE: Creates a title #
BP SUBTITLE: Creates a subtitle #
BP SMT: Creates a small title #
BP BP: add a bullet point #
BP BL: Make a line bold #
BP IL: Make a line italic #
BP L: Create a separator #
BP W: Add a warning #
BP N: Add a note #
BP C: Add a faded comment #
BP Or use no identifier for plain text #
L #
TITLE Title #
SUBTITLE Subtitle #
ST Small Title #
Body Text #
BP Bullet Point #
W Warning #
N Note #
IL Italics #
C Comment #
L #


C v1.2 #`
write.value = current
write.addEventListener("input", () => {
    localStorage.setItem("text", write.value)
})