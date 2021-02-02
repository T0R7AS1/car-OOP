class Car {
    constructor(tank, consumption) {
        this.ok = true;
        this.engine = false;
        this.mileage = 0;
        this.tank = tank;
        this.consumption = consumption;
    }

    turnOn(){
        if (!this.ok) {
            console.log('masina neveikia...');
            return false;
        }
        if (this.engine) {
            this.ok = false;
            this.engine = false;
            console.log('Sveikinu, sugadinai starteri! :)');
            return false;
        }
        this.engine = true;
        console.log('variklis ijungtas');
    }

    turnOff(){
        if (!this.engine) {
            console.log('isjungto variklio dar karta isjungti nemoku');
        }
        this.engine = false;
        console.log('variklis isjungtas');
    }

    drive(distance) {
        if (!this.engine) {
            console.log('norint vaziuoti - ijunk varikli');
            return false;
        }
        
        const maxDistanceAvailable = this.tank / this.consumption * 100;
        if (maxDistanceAvailable >= distance) {
            this.mileage += distance;
            this.tank -= distance * this.consumption / 100;
            console.log('Nuvaziavo:', distance);
        }else {
            this.mileage += maxDistanceAvailable;
            console.log('nuvaziavo:', maxDistanceAvailable);
            this.tank = 0;
            this.turnOff();
            console.log(`Bake per mazai norimam atstumui: nuvaziavo ${maxDistanceAvailable} ir liko nenuvaziuoti ${distance - maxDistanceAvailable}`);
        }
    }
}

export { Car }