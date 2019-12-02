import {LitElement, html, css} from 'lit-element';

export class MyNotepad extends LitElement {
    static get styles() {
        return css`
        button {
            background: white;
            border: 0;
            border-radius:5px;
            color:black;
            font-size:1rem;
            padding:0.5rem;
        }
        `;
    }
    static get properties(){
        return {
            title: {type: String},
            field: {type: String},
            date: {type: Date},
            button: {type: String}
        };
    }

    constructor(){
        super();
        this.title = 'title';
        this.field= 'text';
        this.button = 'delete';
    }

    connectedCallback(){
        super.connectedCallback();
    
    }

    render() {
        return html`
        <div class="note">
            <button>${this.button} </button>
            <textarea id="myTitle" placeholder=${this.title}></textarea>
            <textarea id = "myTextArea"
                rows = "25"
                cols = "80" placeholder=${this.field}></textarea>
            <p>${new Date().toDateString()}</p>
        </div>
        `;
    }

}
