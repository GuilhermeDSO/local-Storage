let user = document.querySelector("#user")
let btn = document.querySelector("#btn")
let welcome = document.querySelector("#welcome")
let exit = document.querySelector("#exit")

// 1 - Salvar localStorage
// localStorage.setItem("name", user.value)

// 2 - Pegar Item localStorage
// localStorage.getItem("name")

// 3 - Excluir item LocalStorage
// localStorage.removeItem("name")


const sair = () => {
    localStorage.removeItem("name")

    welcome.innerHTML = `Faça seu Login`
}
exit.addEventListener("click", sair)

function pegarNome(){
    localStorage.setItem("name", user.value)
    let nome = localStorage.getItem("name")

    welcome.innerHTML = `Bem-vindo ${nome}!`
    user.value = ""
    
}

function local(){
    let nome = localStorage.getItem("name")

    if(nome == null){
        welcome.innerHTML = "Faça seu Login"
    }else{
        welcome.innerHTML = `Bem-vindo ${nome}!`
        
    }

}
local()


btn.addEventListener("click", pegarNome)