function mult() {
    const n1 = Number(document.querySelector("#numero1").value)
    const n2 = Number(document.querySelector("#numero2").value)
    const n3 = Number(document.querySelector("#numero3").value)

    const result = document.querySelector(".resultado")
    result.innerHTML = `Resultado: ${n1*n2*n3}`
}

const button = document.querySelector("button")
button.addEventListener('click', mult)