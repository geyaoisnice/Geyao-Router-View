console.log("geyao")
const oApp = document.getElementById("app")
function handleRouter() {
    // const hash = window.location.hash.substring(1)
    //
    console.log(window.history,"state")
    const {state} = window.history
    console.log(state,"state")
    switch (state) {
        case '':
        case '/':
        case 'home':
            oApp.innerHTML = `<h1>home</h1><button id="toListButton">To List</button>`
            bindEvent()
            break;
        case 'list':
            oApp.innerHTML = `<h1>List</h1><button id="toHomeButton">To home</button>`
            bindEvent()
            break; 
        default:
            oApp.innerHTML = `<h1>404</h1><button id="toHomeButton">To home</button>`
    }
}
function handleToListBtnClick(){
    window.history.pushState('list','','/list')
    handleRouter()
}
function handleToHomeBtnClick(){
    window.history.pushState('home','','/home')
    handleRouter()
}
function bindEvent(){
    const oToListBtn=document.getElementById("toListButton")
    const oToHomeBtn=document.getElementById("toHomeButton")
    oToListBtn&&oToListBtn.addEventListener('click',handleToListBtnClick,false)
    oToHomeBtn&&oToHomeBtn.addEventListener('click',handleToHomeBtnClick,false)

  
}
// window.addEventListener('hashchange',handleRouter,false)
handleRouter()
bindEvent()