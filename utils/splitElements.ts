import SplitType from "split-type"

export function splitAlias(alias: HTMLElement): void {
    const aliasText = alias.innerText
    const aliasTextArray = aliasText.split("")
    if (aliasTextArray) {
        let aliasLeft = aliasTextArray[0]
        let aliasContent = aliasTextArray.slice(1, aliasTextArray.length-1).join("")
        let aliasRight = aliasTextArray[aliasTextArray.length - 1]

        const aliasLeftSpan = document.createElement("span")
        aliasLeftSpan.classList.add("alias__left")
        aliasLeftSpan.innerText = aliasLeft

        const aliasContentSpan = document.createElement("span")
        aliasContentSpan.classList.add("alias__content")
        aliasContentSpan.innerText = aliasContent

        const aliasRightSpan = document.createElement("span")
        aliasRightSpan.classList.add("alias__right")
        aliasRightSpan.innerText = aliasRight

        alias.innerHTML = ""
        alias.appendChild(aliasLeftSpan)
        alias.appendChild(aliasContentSpan)
        alias.appendChild(aliasRightSpan)
    }
}

export function splitLink(link: HTMLElement): void {
    const wrapper = link.querySelector(".line__wrapper")
    const wrapperClone = wrapper?.cloneNode(true) as HTMLElement

    wrapper?.classList.add("line__wrapper--top")
    wrapperClone?.classList.add("line__wrapper--bottom")

    wrapper?.parentNode?.insertBefore(wrapperClone, wrapper.nextSibling)
}

export function splitIntoLines(element: HTMLElement): void {
    const wrapper = new SplitType(element, {
        types: "lines",
        lineClass: "line__wrapper"
    })
    const inner = new SplitType(wrapper.lines, {
        types: "lines",
        lineClass: "line__inner"
    })
}