import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

export default class extends Controller {
    static targets = ["name", "container", "image"]

    turnOn() {
        this.imageTarget.setAttribute("src", "pngwing.com-off.png")
        this.imageTarget.setAttribute("data-action", "click->car#turnOff")
    }


    turnOff() {
        this.imageTarget.setAttribute("src", "pngwing.com.png")
        this.imageTarget.setAttribute("data-action", "click->car#turnOn")
    }

    remove() {
        this.containerTarget.remove()
        const cars = document.querySelectorAll("[data-controller='car']")
        const inventoryElement = document.querySelector("[data-controller='inventory']")
        const inventoryController = this.application.getControllerForElementAndIdentifier(inventoryElement, "inventory")
        inventoryController.countCars({detail: {count: cars.length}})
    }

    editName() {
        const input = prompt("Enter a new name")
        this.nameTarget.innerText = input
    }

}