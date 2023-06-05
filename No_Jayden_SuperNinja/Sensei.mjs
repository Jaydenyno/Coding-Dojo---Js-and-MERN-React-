import Ninja from "./Ninja.mjs"

class Sensei extends Ninja{
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }
    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months")
        return this.drinkSake();
    }
}

const sensei1 = new Sensei("Master Splinter")
sensei1.speakWisdom();
sensei1.showStats();