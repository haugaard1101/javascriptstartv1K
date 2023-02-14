console.log("jeg er i setbacgrcolor")

const inp = document.querySelector(".inpColor")
console.log(inp)

const pbCol = document.querySelector(".pbSetColor")
console.log(pbCol)

function setBackGrColor(e) {
    const bdy = document.querySelector("body");
    let col = inp.value
    console.log(col)
    bdy.style.backgroundColor = col;
}

pbCol.addEventListener('click', setBackGrColor)

