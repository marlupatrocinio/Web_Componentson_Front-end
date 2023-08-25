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
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        componentRoot.appendChild(cardRight);
        cardRight.setAttribute("class", "cardRight");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "/assets/02.jpeg";
        newsImage.alt = "Foto do ronaldinho";
        cardRight.appendChild(newsImage);
        
        return componentRoot;
    }
    styles() {
        const style = document.createElement("style");
        style.textContent = `
        .card {
            font-family: 'Segoe UI', sans-serif;
            width: 720px;
            border: 1px solid gray;
            display: flex;
            flex-direction: row;
            -webkit-box-shadow: 11px 11px 32px -3px rgba(0,0,0,0.58);
            -moz-box-shadow: 11px 11px 32px -3px rgba(0,0,0,0.58);
            box-shadow: 11px 11px 32px -3px rgba(0,0,0,0.58);
            justify-content: space-between;
        }
        
        .cardLeft {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .cardLeft > span {
            font-weight: 400;
        }
        
        .cardLeft > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        .cardLeft > p {
            color: gray;
        }
        `;

        return style;
    }
}

customElements.define("card-news", CardNews);