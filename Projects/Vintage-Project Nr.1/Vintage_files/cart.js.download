function setItemsCart() {
  const items = getCurrent();

  document.getElementById("items").innerHTML = items
    .map((item) => {
      const current = products.find((product) => product.id === item.id);

      return `<tr>
                    <td onClick="removeItem(${
                      current.id
                    })"><img src="./image/x.png" class="cross"></td>
                    <td><img src="./image/${current.image}" class="photo"></td>
                    <td>
                        <p class="product_name"><a href="product.html?id=${
                          current.id
                        }">${current.name}</a></p>
                        <p class="product_type">Greutate: ${current.kg1}</p>
                    </td>
                    <td>
                        <p class="product_price">${current.pret1} Lei</p>
                    </td>
                    <td>
                        <div  class="counter"> 
                        <button onClick={removeCount(${
                          current.id
                        })} class="minus">-</button>
                        <p class="number">${item.count}</p>
                        <button onClick={addCount(${
                          current.id
                        })} class="plus">+</button>
                        </div>
                    </td>
                    <td>
                        <p class="product_price_final">
                        <span class="sub">Subtotal: </span>
                        ${current.pret1 * item.count} Lei
                        </p>
                    </td>
                </tr>`;
    })
    .join("");

  setTotal();
}

function setTotal() {
  const current = getCurrent();
  const totalAmount = current
    .map(
      (item) =>
        products.find((product) => product.id === item.id).pret1 * item.count
    )
    .reduce((a, b) => a + b, 0);

  const shippingPrice = totalAmount > 200 ? 0 : 30;

  document.getElementById("subtotal").innerText = `${totalAmount} Lei`;
  document.getElementById("shippingPrice").innerText = shippingPrice
    ? `${shippingPrice} Lei`
    : "Gratis";
  document.getElementById("total").innerText = `${
    totalAmount + shippingPrice
  } Lei`;
}

function addCount(id) {
  const current = getCurrent();

  const newList = current.map((item) =>
    item.id === id ? { ...item, count: item.count + 1 } : item
  );

  localStorage.setItem("items", JSON.stringify(newList));
  setItemsCart();
}

function removeCount(id) {
  const current = getCurrent();

  const newList = current
    .map((item) =>
      item.id === id
        ? item.count === 1
          ? null
          : { ...item, count: item.count - 1 }
        : item
    )
    .filter((item) => item !== null);

  localStorage.setItem("items", JSON.stringify(newList));
  setItemsCart();
}

function removeItem(id) {
  const current = getCurrent();
  const newList = current.filter((item) => item.id !== id);
  localStorage.setItem("items", JSON.stringify(newList));
  setItemsCart();
}

function finishOrder() {
  localStorage.setItem("items", JSON.stringify([]));
  window.location.href = "./comanda.html";
}
