let car = {
    Brand : "Toyota", //Properties and their value
    Variant : "Wigo",
    Transmission : "Automatic",
    Lights : {
        Front : "LED", //Nested Objects
        Rear : "LED/Bulb",
        Signal : "Bulb"
    },

    displayBrand(){ //this method
        alert(this.Brand);
        //document.writeLine(this.Transmission);
    }
}

//Class
class myCar {
    constructor(brand, variant, transmission){
        this.brand = brand;
        this.variant = variant;
        this.transmission = transmission;
    }
}

function vehicle() //First Part
    {
        this.vehicletype="vehicletype";
    }
    vehicle.prototype.display=function() //Second Part: Display Result
    {
        return "The brand is: "+this.vehicletype;
    }

    function MyCar(vehicletype) //Third Part: Create Constructor
    {
        this.vehicletype = vehicletype;
    }

    MyCar.prototype=Object.create(vehicle.prototype); //Last Part: Create an Object
    var mycar = new MyCar("Toyota");
