import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

export default class extends Controller {
    static targets = ["container", "addButton", "carTemplate"]
    
    connect(){
        this.carList()
    }

    addCar(){
        const template = this.carTemplateTarget.innerHTML
        this.containerTarget.insertAdjacentHTML("afterbegin", template)
        this.containerTarget.lastElementChild.scrollIntoView({behavior: "smooth"})
        this.dispatch("car-added", {detail: {"count": this.containerTarget.childElementCount - 2}})
    }

    carList(){
        for (let index = 0; index < 5; index++) {
            this.addCar()
        }
    }
}