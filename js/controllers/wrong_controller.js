import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

export default class extends Controller {
    static targets = ["container", "addButton", "count"]

    connect(){
        this.carList()
        this.countCars()
    }

    addCar(){
        const template = `
        <div class="flex flex-col justify-center items-center carElement">
            <div class="rounded-md bg-white p-3 text-center">
                <div class="flex justify-between">
                    <p data-wrong-target="name">
                        I'm a car
                    </p>
                    <button data-action="click->wrong#editName">
                        <img src="edit_icon.png" alt="car" width="20">
                    </button>
                </div>
                
                <button class="rounded-full">
                    <img class="rounded-full"  data-action="click->wrong#turnOn" src="pngwing.com.png"alt="turn on" width="150" data-wrong-target="image">
                </button>
                <button>
                    <img class="rounded-full"  data-action="click->wrong#remove" src="remove.png"alt="turn on" width="50" data-wrong-target="image">
                </button>
            </div>
        </div>`

        this.containerTarget.insertAdjacentHTML("afterbegin", template)
        this.containerTarget.lastElementChild.scrollIntoView({behavior: "smooth"})
        this.countCars()
    }

    turnOn(event) {
        const currentTarget = event.currentTarget
        currentTarget.setAttribute("src", "pngwing.com-off.png")
        currentTarget.setAttribute("data-action", "click->wrong#turnOff")
    }

    turnOff(event) {
        const currentTarget = event.currentTarget
        currentTarget.setAttribute("src", "pngwing.com.png")
        currentTarget.setAttribute("data-action", "click->wrong#turnOn")
    }

    remove(event) {
        const currentTarget = event.currentTarget.parentElement.parentElement.parentElement
        currentTarget.remove()
        this.countCars()
    }

    editName(event) {
        const currentTarget = event.currentTarget.parentElement.parentElement.parentElement
        const input = prompt("Enter a new name")
        currentTarget.querySelector("[data-wrong-target='name']").innerText = input
    }

    carList(){
        for (let index = 0; index < 5; index++) {
            this.addCar()
        }
    }

    countCars(event){
        const cars = document.querySelectorAll(".carElement")
        this.countTarget.innerText = cars.length
    }
}