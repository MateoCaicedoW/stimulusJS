import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
window.Stimulus = Application.start()

import car from "./controllers/car_controller.js";
import car_dealer from "./controllers/car_dealer_controller.js";
import inventory from "./controllers/inventory_controller.js";
import wrong from "./controllers/wrong_controller.js";

Stimulus.register("car", car)
Stimulus.register("car-dealer", car_dealer)
Stimulus.register("inventory", inventory)
Stimulus.register("wrong", wrong)
