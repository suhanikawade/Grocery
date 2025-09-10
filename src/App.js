import React, { useState } from "react";
import "./App.css";

const PRODUCTS = [
  { category: "Fruits", price: "₹80", stocked: true, name: "Apple", image: "https://tse2.mm.bing.net/th/id/OIP.4ljPEDRb9hiwmlIw1NAL9AHaFW?pid=Api&P=0&h=180" },
  { category: "Fruits", price: "₹90", stocked: true, name: "Dragonfruit", image: "https://mindfulnessmemories.com/wp-content/uploads/2020/10/20190807_092735-2048x2048.jpg" },
  { category: "Fruits", price: "₹120", stocked: false, name: "Passionfruit", image: "https://tse4.mm.bing.net/th/id/OIP.Ixfms8pbgmvI2ArZShrCFAHaEo?pid=Api&P=0&h=180" },
  { category: "Fruits", price: "₹120", stocked: false, name: "Strawberry", image: "https://tse2.mm.bing.net/th/id/OIP.vE8UbBKkeHTXXlR3vacNEAHaEo?pid=Api&P=0&h=180" },
  { category: "Vegetables", price: "₹60", stocked: true, name: "Spinach", image: "https://tse1.mm.bing.net/th/id/OIP.GPmz2cGV5Nq3WI5pdJYD0AHaGH?pid=Api&P=0&h=180" },
  { category: "Vegetables", price: "₹60", stocked: true, name: "Tomato", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg" },
  { category: "Vegetables", price: "₹160", stocked: false, name: "Pumpkin", image: "https://tse4.mm.bing.net/th/id/OIP.vSkdxFTv2gcOrAhrSyV7lAHaEU?pid=Api&P=0&h=180" },
  { category: "Vegetables", price: "₹40", stocked: true, name: "Peas", image: "https://tse2.mm.bing.net/th/id/OIP.6r-z_Z5b8zRWV6k6Sk7JvQHaEL?pid=Api&P=0&h=180" },
  { category: "Fruits", price: "₹150", stocked: true, name: "Mango Raw", image: "https://tse4.mm.bing.net/th/id/OIP.BJE4sKZ1SM-eMF6tvimiYQHaEK?pid=Api&P=0&h=180" },
  { category: "Fruits", price: "₹250", stocked: false, name: "Grapes", image: "https://tse3.mm.bing.net/th/id/OIP.fBJX5ocUhvkazgei5JEwqgHaEj?pid=Api&P=0&h=180" },
  { category: "Fruits", price: "₹55", stocked: true, name: "Banana", image: "https://tse1.mm.bing.net/th/id/OIP.xW2SAK_9PbhzSXaH_7TTEwHaE8?pid=Api&P=0&h=180" },
  { category: "Fruits", price: "₹300", stocked: true, name: "Pineapple", image: "https://tse4.mm.bing.net/th/id/OIP.DXIOCbn5_BBScaP6P0d0vgHaHa?pid=Api&P=0&h=180" },
  { category: "Fruits", price: "₹180", stocked: true, name: "Orange", image: "https://tse4.mm.bing.net/th/id/OIP.tEc9zPKRcIGJ9MfnPSSlrQHaGe?pid=Api&P=0&h=180" },
  { category: "Dairy", price: "₹60", stocked: true, name: "Milk", image: "https://tse2.mm.bing.net/th/id/OIP.nvr4TEjkfHIoWgRkh2h5dQAAAA?pid=Api&P=0&h=180" },
  { category: "Dairy", price: "₹100", stocked: true, name: "Cheese", image: "https://tse2.mm.bing.net/th/id/OIP.A4gHOA9z5EHR7I6JnadeLAHaEI?pid=Api&P=0&h=180" },
  { category: "Dairy", price: "₹100", stocked: true, name: "Paneer", image: "https://tse2.mm.bing.net/th/id/OIP.7k-9NzgzkWKTnX67_Rc6FwHaFf?pid=Api&P=0&h=180" },
  { category: "Dairy", price: "₹80", stocked: true, name: "Yogurt", image: "https://tse3.mm.bing.net/th/id/OIP.N2FBoFjaKU22073btLefjwHaIH?pid=Api&P=0&h=180" },
  { category: "Snacks", price: "₹30", stocked: true, name: "Chips", image: "https://tse1.mm.bing.net/th/id/OIP.lxQVJ5t4ZfOFmZ35BNAPJAHaHa?pid=Api&P=0&h=180" },
  { category: "Snacks", price: "₹30", stocked: true, name: "Chakali", image: "https://tse4.mm.bing.net/th/id/OIP.OoiQ270HPf6nwl1ZipY-BwHaHa?pid=Api&P=0&h=180" },
  { category: "Snacks", price: "₹20", stocked: true, name: "Biscuits", image: "https://tse1.mm.bing.net/th/id/OIP.6gc0by1-pWEysv84ch-c7gHaFc?pid=Api&P=0&h=180" },
  { category: "Snacks", price: "₹50", stocked: false, name: "Peanuts", image: "https://tse2.mm.bing.net/th/id/OIP.mn4B7U6yvuUDG4udVY5QeQHaHa?pid=Api&P=0&h=180" },
  { category: "Beverages", price: "₹25", stocked: true, name: "Tea", image: "https://tse3.mm.bing.net/th/id/OIP.a7AlTO9gF7CfLtvsqfAaAQHaHa?pid=Api&P=0&h=180" },
  { category: "Beverages", price: "₹25", stocked: true, name: "Limka", image: "https://tse1.mm.bing.net/th/id/OIP.PLFxzIZv9L_vPs7jgUqVagAAAA?pid=Api&P=0&h=180" },
  { category: "Beverages", price: "₹100", stocked: false, name: "Coffee", image: "https://tse2.mm.bing.net/th/id/OIP.IenpCB0tELzkN6Wwd6nkhwHaHa?pid=Api&P=0&h=180" },
  { category: "Beverages", price: "₹15", stocked: true, name: "Lemonade", image: "https://tse4.mm.bing.net/th/id/OIP.ETaCSLmDHAIALJUEQnbGRAHaHa?pid=Api&P=0&h=180" },
  { category: "Sweets", price: "₹120", stocked: true, name: "Gulab Jamun", image: "https://tse3.mm.bing.net/th/id/OIP.B32bansRI7RS3yfbUSEBNwHaHa?pid=Api&P=0&h=180" },
  { category: "Sweets", price: "₹80", stocked: false, name: "Jalebi", image: "https://tse3.mm.bing.net/th/id/OIP.6_AMDfjQM-tFWcY-qe-egQHaHa?pid=Api&P=0&h=180" },
  { category: "Sweets", price: "₹80", stocked: true, name: "Ladu", image: "https://tse3.mm.bing.net/th/id/OIP.HSuoBUOXId2fFFs-oNGkHAHaHa?pid=Api&P=0&h=180" },
  { category: "Sweets", price: "₹200", stocked: true, name: "Rasgulla", image: "https://tse2.mm.bing.net/th/id/OIP.QqZONoLpH6x3w0N99CndyQHaE8?pid=Api&P=0&h=180" }
];

function App() {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const categories = [...new Set(PRODUCTS.map((p) => p.category))];

  return (
    <div className="app">
      <header>
        <h1>Grocery Lane 🛒</h1>
        <p>Your one-stop shop for fresh groceries.</p>
      </header>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for items..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
          />{" "}
          Only show products in stock
        </label>
      </div>

      {categories.map((cat) => (
        <div key={cat} className="category-section">
          <h2>{cat}</h2>
          <div className="product-grid">
            {PRODUCTS.filter(
              (p) =>
                p.category === cat &&
                p.name.toLowerCase().includes(filterText.toLowerCase()) &&
                (!inStockOnly || p.stocked)
            ).map((p) => (
              <div
                key={p.name}
                className={`product-card ${!p.stocked ? "out-of-stock" : ""}`}
              >
                <img src={p.image} alt={p.name} />
                <h3>{p.name}</h3>
                <p className="price">{p.price}</p>
                {!p.stocked && <p className="stock-text">Out of Stock</p>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
