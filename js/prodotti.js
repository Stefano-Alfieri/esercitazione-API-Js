const url = "https://fakestoreapi.com/";
//connessione con API e creazione di car con dati prodotto
fetch(url + "products")
    .then(res => res.json())
    .then(data => {
        const prodContainer = document.getElementById("row");
        data.forEach(product => {
            const prodotto = document.createElement("div");
            prodotto.classList.add("col-3", "mb-5");
            prodotto.innerHTML = `
            <div class="card" >
            <img src="${product.image}" class="card-img-top imgProd">
             <div class="card-body">
            <h5 class="card-title" >${product.title}</h5>
            <p class="card-text" >Prezzo: ${product.price}</p>  
            <button type="button" onclick="descrizione(${product.id})" class="btn btn-success">Descrizione</button>
            <p data-tipo="${product.id}" class="d-none card-text">${product.description}</p>
              </div>
            </div>
            `;


            prodContainer.appendChild(prodotto);
        });
    });

//funzione  per  far apparire e scomparire descrizione al click del bottone
function descrizione(id) {
    const el = document.querySelector(`[data-tipo="${id}"]`);
    if (el.classList.contains("d-none")) {
        el.classList.remove("d-none");
    } else {
        el.classList.add("d-none");
    }
}
//considera fino a qui
//incompleto, non funziona non lo considerare Adri
fetch(url + "categories")
    .then(res => res.json())
    .then(data => {
        const catContainer = document.getElementById("rowCont");
        data.forEach(product => {
            const categoria = document.createElement("div");
            categoria.classList.add("col-12", "mb-5");
            const collapseId=`collapse-${index}`;
            categoria.innerHTML = `
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="true" aria-controls="#{collapseId}">
                            ${product}</button>
                        </h2>
                        <div id="${collapseId}" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                 </div>
  
                 `;
            catContainer.appendChild(categoria);
        });
    });