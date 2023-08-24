class CardNews extends HTMLElement {

    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {

        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        const cardRight = document.createElement("div");

        componentRoot.appendChild(cardLeft);
        cardLeft.setAttribute("class", "cardLeft");

        const autor = document.createElement("span");
        autor.textContent = "By: " + (this.getAttribute("autor") || "quem mais? Ronaldo, claro");

        const linkTitle = document.createElement("a");
        const newsContent = document.createElement("p");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        componentRoot.appendChild(cardRight);
        cardRight.setAttribute("class", "cardRight");

        const newsImage = document.createElement("img");

        cardRight.appendChild(newsImage);
        
        return componentRoot;
    }
    styles() {

    }
}

customElements.define("card-news", CardNews);