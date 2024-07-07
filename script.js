const copyIconElements = document.getElementsByClassName("clipboard");

for (let ele of copyIconElements) {
    ele.addEventListener("click", (e) => {
        const codeEle = e.currentTarget.parentNode.getElementsByTagName("code")[0];
        navigator.clipboard.writeText(codeEle.textContent);
    })
}