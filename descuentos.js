// const precioOriginal =120;
// const descuento = 18;



// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento

}

function buttonPriceDiscount(){
    const InputPrice = document.getElementById("InputPrice");
    const PriceValue=InputPrice.value;

    const InputDiscount = document.getElementById("InputDiscount");
    const discountValue = InputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(PriceValue,discountValue);

    const resultP = document.getElementById("resultP");
    resultP.innerText= "El precio con descuento es de $"+ precioConDescuento;
}

