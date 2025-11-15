// From the folder this file is in (./) look for an Item.css file.
import "./Item.css";

// We define <Item /> by writing a function called Item
function Item() {
  // Components can only return one thing. That's why we wrapped everything in a div.
  return (
    <div className="item">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEZuT1CDTg-N6EMe8cAlh000s1VjUxeVbnKw&s"
        className="logo"
      />
      <h2>Five Guys</h2>
    </div>
  );
}

// "export": make this file import-able by other files
// "default": Item is the most important export of this file
export default Item;
