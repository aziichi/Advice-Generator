let dice = document.getElementsByClassName("dice")[0];
let id = document.getElementsByClassName("advice-id")[0];
let quote = document.getElementsByClassName("quote")[0];

async function get_advice(){
    url = "https://api.adviceslip.com/advice";
    let response = await fetch(url,{
        method: "GET",
        cache: "no-cache",
    });

    return response.json();
}
let r = 0;
dice.addEventListener("click", () => {
    r += 90;
    dice.childNodes[0].style.transform = `rotate(${r}deg)`;
    get_advice()
    .then(data=>{
        id.innerHTML = `ADVICE # ${data["slip"]["id"]}`;
        quote.textContent = `"${data["slip"]["advice"]}"`;
    });
});