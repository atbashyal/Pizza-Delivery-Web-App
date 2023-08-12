// non veg pizza
import ChickenDominator from "../images/NonVeg/ChickenDominator.png";
import ChickenGoldenDelight from "../images/NonVeg/ChickenGoldenDelight.png";
import ChickenPepperoni from "../images/NonVeg/ChickenPepperoni.png";
import ChickenSausage from "../images/NonVeg/ChickenSausage.png";
import IndieChicken from "../images/NonVeg/IndieChicken.png";
import PepperBarbeque from "../images/NonVeg/PepperBarbeque.png";

//veg pizza
import Capsicum from "../images/Veg/Capsicum.jpg";
import CheesenCorn from "../images/Veg/CheesenCorn.jpg";
import DeluxVeggie from "../images/Veg/DeluxVeggie.jpg";
import FarmHouse from "../images/Veg/FarmHouse.jpg";
import IndiTandooriPaneer from "../images/Veg/IndiTandoor.jpg";
import MexicanGreenWave from "../images/Veg/MexicanGreenWave.jpg";
import PeppyPaneer from "../images/Veg/PeppyPaneer.jpg";
import VegExtraVaganza from "../images/Veg/VegExtravaganza.jpg";

//drinks
import SevenUp from "../images/Drinks/7up.png";
// import Cola from "../images/Drinks/Cola.png";
import Mirinda from "../images/Drinks/Mirinda.png";
import Pepsi from "../images/Drinks/Pepsi.png";
import PepsiBlack from "../images/Drinks/PepsiBlack.png";

export function getData() {
  return [
    // non veg
    { title: "Chicken Dominator Pizza", price: 150, Image: ChickenDominator,id:1, type:"non-veg" },
    { title: "Chicken Golden Delight Pizza", price: 175, Image: ChickenGoldenDelight,id:2, type:"non-veg" },
    { title: "Chicken Pepperoni Pizza", price: 200, Image: ChickenPepperoni,id:3, type:"non-veg"},
    { title: "Chicken Sausage Pizza", price: 125, Image: ChickenSausage,id:4, type:"non-veg" },
    { title: "Indie Chicken Pizza", price: 100, Image: IndieChicken,id:5, type:"non-veg" },
    { title: "Pepper Barbeque Pizza", price: 225, Image: PepperBarbeque,id:6, type:"non-veg" },

    //veg
    { title: "Capsicum Pizza", price: 75, Image: Capsicum,id:7, type:"veg" },
    { title: "Cheese and Corn Pizza", price: 90, Image: CheesenCorn,id:8, type:"veg" },
    { title: "Delux Veggie Pizza", price: 110, Image: DeluxVeggie,id:9, type:"veg" },
    { title: "Farm House Pizza", price: 125, Image: FarmHouse,id:10, type:"veg" },
    { title: "Indi Tandoori Paneer Pizza", price: 150, Image: IndiTandooriPaneer,id:11, type:"veg" },
    { title: "Mexican Green Wave Pizza", price: 150, Image:MexicanGreenWave ,id:12, type:"veg" },
    { title: "Peppy Paneer Pizza", price: 175, Image: PeppyPaneer,id:13, type:"veg" },
    { title: "Veg Extravaganza Pizza", price: 200, Image: VegExtraVaganza,id:14, type:"veg" },

    //drinks
    { title: "7 Up", price: 40, Image: SevenUp,id:15, type:"drink" },
    // { title: "Coca Cola", price: 40, Image: Cola,id:16 },
    { title: "Mirinda", price: 35, Image: Mirinda,id:17, type:"drink" },
    { title: "Pepsi", price: 40, Image: Pepsi,id:18 , type:"drink"},
    { title: "Pepsi Black", price: 75, Image: PepsiBlack,id:19, type:"drink" }
  ];
}
