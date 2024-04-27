const btns = document.querySelectorAll("buttons");

for(let btn of btns) {
    btn.addEventListener("click", ()=> {
        console.log("button was clicked");
    });
}