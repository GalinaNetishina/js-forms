
export default class Popover {
    constructor(element, {title, content}) {
        this._element = element;
        this.title = title;
        this.content = content;
        this.visible = false;
        const popoverElement = document.createElement('DIV');
        popoverElement.classList.add('popover')
        popoverElement.innerHTML = `            
            <h3 class="popover-header">${this.title}</h3>
            <div class="popover-body">${this.content}</div>
            <div class="arrow"></div>`
        this.popover = popoverElement
    }

    show() {    
        this._element.appendChild(this.popover);  
        this.visible = true;     
    }

    hide() {
        this._element.removeChild(this.popover);
        this.visible = false;
    }

    toggleDisplay(e) {
        e.preventDefault()
        const trigger = e.target
        // const {x, y, width, height} = trigger.getBoundingClientRect()
        this.popover.style.left = `${50}%`
        this.popover.style.bottom = `${20}%`
        this.visible ? this.hide(): this.show()
        
    }

    
    bindToDOM() {
        const myButton = this._element.querySelector('.pop_btn');
        myButton.addEventListener('click', (e) => this.toggleDisplay(e));
      }
}
