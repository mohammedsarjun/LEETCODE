var mostCommonWord = function (paragraph, banned) {

    let filteredParagraph = []
    let tempStr = ""

    for (let i = 0; i < paragraph.length; i++) {
        const c = paragraph[i]

        if (c === " " || c === "!" || c === "?" || c === "'" ||
            c === "," || c === ";" || c === ".") {

            if (tempStr.length > 0) {
                filteredParagraph.push(tempStr.toLowerCase())
                tempStr = ""
            }
            continue
        }

        tempStr += c.toLowerCase()
    }

    if (tempStr.length > 0) {
        filteredParagraph.push(tempStr.toLowerCase())
    }

    banned = new Set(banned.map(b => b.toLowerCase()))
    filteredParagraph = filteredParagraph.filter(word => !banned.has(word))

    let freq = {}
    let highest = [-Infinity, ""]

    for (let word of filteredParagraph) {
        freq[word] = (freq[word] || 0) + 1

        if (freq[word] >= highest[0]) {
            highest[0] = freq[word]
            highest[1] = word
        }
    }

    return highest[1]
};
