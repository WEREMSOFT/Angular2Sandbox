class HelloWorldComponent extends HTMLElement {
    constructor() {
        super();
        console.log('constructing');
        this.template = document.createElement('template');
        this.template.innerHTML = `
        <style>
        :host {
            display: block;
            background: red;
        }
        h1 {
            background: blue;
        }
        </style>
        <h1>Hello World Start</h1>
            <slot></slot>
        <h1>Hello World End</h1>
        `;
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        console.log('connected');
        this.shadowRoot.appendChild(this.template.content);
        console.log('attribute', this.getAttribute('one'));
    }
}

class HelloAnotherWorldComponent extends HTMLElement {
    constructor() {
        super();
        console.log('constructing');
        this.template = document.createElement('template');
        this.template.innerHTML = '<h2>Hello Another World</h2>';
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        console.log('connected');
        this.shadowRoot.appendChild(this.template.content);
    }
}

customElements.define('hello-world', HelloWorldComponent);
customElements.define('hello-another-world', HelloAnotherWorldComponent);
































// class HelloWorld extends HTMLElement {
//     constructor() {
//         super();
//         this.template = document.createElement('template');
//         this.template.innerHTML = '<h1>hello world</h1><slot/>';
//         console.log('hello from constructor');
//         this.attachShadow({
//             mode: 'open'
//         });
//     }

//     connectedCallback() {
//         this.shadowRoot.appendChild(this.template.content);
//         console.log('connected callback', this.getAttribute('cadorna'));
//     }


// }

// customElements.define('hello-world', HelloWorld);

