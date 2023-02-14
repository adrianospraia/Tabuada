function gerar() {
    
    let txtnum = document.querySelector("#txtnum")
    let n1 = Number(txtnum.value)
    let res = document.querySelector("#res")
    let txtc = document.querySelector("#txtc")
    let c = Number(txtc.value)
    let tab = document.querySelector("#tab")

    if (n1 == 0 || c <= 0) {
        alert("[ERRO]Algum valor está incorreto, por favor tente novamente com novos dados")
    } else {
        res.innerHTML = ''
        for (let d = 0; d <= c; d++) {
            res.innerHTML += (`<p>${n1} x ${d} = <strong>${n1*d}</strong></p><br> `)
        }    
    }

    
}