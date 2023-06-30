import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

export default class extends Controller {
    static targets = ["count"]

    connect(){
        const cars = document.querySelectorAll("[data-controller='car']")
        this.countTarget.innerText = cars.length
    }

    countCars(event){
        this.countTarget.innerText = event.detail.count
    }

}