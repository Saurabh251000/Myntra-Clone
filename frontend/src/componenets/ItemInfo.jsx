/* eslint-disable react/prop-types */
function ItemInfo({ item }) {
  return (
    <div className="p-name">
      <p className="Title-name">{item.name}</p>
      <p className="Product-info">{item.brand}</p>
    </div>
  );
}

export default ItemInfo;
