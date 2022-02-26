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

dice.addEventListener("click", () => {
    get_advice()
    .then(data=>{
        id.innerHTML = `ADVICE # ${data["slip"]["id"]}`;
        quote.textContent = `${data["slip"]["advice"]}`;
    });
});