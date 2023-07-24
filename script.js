confirmacaoEl = document.querySelector("#confirmação");

window.addEventListener('load', ()=>{
    confirmacaoEl.classList.add("revelar");
});

botaoConfirmarPresencaEl = document.querySelector("#confirmar_presença");

botaoConfirmarPresencaEl.addEventListener('click', ()=>{
    window.location.href = "https://forms.gle/dJwgMFtce52LTvYW9";
});
