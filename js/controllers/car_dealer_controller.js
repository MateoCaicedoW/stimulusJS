import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

export default class extends Controller {
    static targets = ["container", "addButton"]
    
    connect(){
        this.carList()
    }

    addCar(){
        const template = `
        <div class="flex flex-col justify-center items-center" data-controller="car" data-car-target="container">
            <div class=" rounded-md bg-white p-3 text-center">
                <div class="flex justify-between">
                    <p data-car-target="name">
                        I'm a car
                    </p>
                    <button data-action="click->car#editName">
                        <img src="edit_icon.png" alt="car" width="20">
                    </button>
                </div>
                
                <button class="rounded-full">
                    <img class="rounded-full"  data-action="click->car#turnOn" src="pngwing.com.png"alt="turn on" width="150" data-car-target="image">
                </button>
                <button>
                    <img class="rounded-full"  data-action="click->car#remove" src="remove.png"alt="turn on" width="50" data-car-target="image">
                </button>
            </div>
        </div>`

        this.containerTarget.insertAdjacentHTML("afterbegin", template)
        this.containerTarget.lastElementChild.scrollIntoView({behavior: "smooth"})
        this.dispatch("car-added", {detail: {"count": this.containerTarget.childElementCount - 1}})
    }

    carList(){
        for (let index = 0; index < 5; index++) {
            this.addCar()
        }
    }
}