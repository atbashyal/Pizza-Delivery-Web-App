import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
import CheckoutForm from "./Components/Checkout/CheckOutForm"; // Make sure the import path is correct
// import qrscanImage from "./images/assets/qrscan.png"; // Update the path to the actual image
import Button from "./Components/Button/Button"; // Adjust the path accordingly
// import Menu from "./Components/Menu/Menu";

const { getData } = require("./db/db");
const foods = getData();

const tele = window.Telegram.WebApp;

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutInfo, setCheckoutInfo] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    comment: ""
  });

  //implementing payment option

  //end - implementing payment option


  //implementing search
  const [searchQuery, setSearchQuery] = useState("");
  //search implementation ends

  useEffect(() => {
    tele.ready();
  });

  const onAdd = (food, size) => {
    const existingItem = cartItems.find(
      (item) => item.id === food.id && item.size === size
    );
  
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === food.id && item.size === size
            ? { ...existingItem, quantity: existingItem.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, size, quantity: 1 }]);
    }
  };
  

const onRemove = (food, size) => {
  const existingItem = cartItems.find((item) => item.id === food.id && item.size === size);

  if (!existingItem) {
    // Show a prompt indicating that no pizza of the selected size is in the cart
    alert(`No ${size} pizza selected for ${food.title}`);
    return;
  }

  if (existingItem.quantity === 1) {
    setCartItems(cartItems.filter((item) => item.id !== food.id || item.size !== size));
  } else {
    setCartItems(
      cartItems.map((item) =>
        item.id === food.id && item.size === size
          ? { ...existingItem, quantity: existingItem.quantity - 1 }
          : item
      )
    );
  }
};

  //generating qrcode
  // const [showPaymentImage, setShowPaymentImage] = useState(false);


  const handleInputChange = (field) => (event) => {
    setCheckoutInfo({
      ...checkoutInfo,
      [field]: event.target.value
    });
  };

  const handlePayment = () => {
    // Perform payment logic here
    // setShowPaymentImage(true);

    // Clear checkout info and close the checkout form
    setCheckoutInfo({
      name: "",
      phoneNumber: "",
      address: "",
      comment: ""
    });
    setIsCheckoutOpen(false);
  };

  const onCheckout = () => {
    setIsCheckoutOpen(true);
    tele.MainButton.text = "Pay";
    tele.MainButton.show();
  };
  const [selectedMenu, setSelectedMenu] = useState("all"); // Default: show all items

  const filteredFoods = selectedMenu === "all" ? foods : foods.filter(food => food.type === selectedMenu);

  const filteredItems = filteredFoods.filter(
    food => food.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h1 className="heading">Order your Pizza</h1>
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for items..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
    </div>
      <div className="menu">
        <Button 
          className="menu__button"
          type="all"
          title="All"
          onClick={() => setSelectedMenu("all")}
        />
        <Button
          type="veg"
          title="Veg"
          onClick={() => setSelectedMenu("veg")}
        />
        <Button
          type="non-veg"
          title="Non Veg"
          onClick={() => setSelectedMenu("non-veg")}
        />
        <Button
          type="drink"
          title="Drinks"
          onClick={() => setSelectedMenu("drink")}
        />
      </div>
      <Cart cartItems={cartItems} onCheckout={onCheckout} />
      {isCheckoutOpen ? (
        <CheckoutForm
          checkoutInfo={checkoutInfo}
          onInputChange={handleInputChange}
          onPayment={handlePayment}
        />
      ) : (
        <div className="cards__container">
  {filteredItems.length > 0 ? (
    filteredItems.map(food => (
      <Card
        food={food}
        key={food.id}
        onAdd={onAdd}
        onRemove={onRemove}
        cartItems={cartItems}
      />
    ))
  ) : (
    <p>No items match your search.</p>
  )}
</div>
      )}
      {/* {showPaymentImage && <img src={qrscanImage} alt="Payment" />} */}
    </>
  );
  
  
  
}

export default App;
