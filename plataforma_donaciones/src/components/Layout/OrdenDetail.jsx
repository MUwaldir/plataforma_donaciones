import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// const URL_API_PAYPAL = "http://localhost:3001/api/capture-order";
function OrdenDetail() {
  const searchParams = new URLSearchParams(window.location.search);
  const dataOrder= searchParams.get("orderData");
  
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    // setDataOrden(JSON.parse(dataOrder))
    if (dataOrder) {
      // Convertir la cadena JSON a un objeto de JavaScript
      const parsedOrderData = JSON.parse(decodeURIComponent(dataOrder));
      setOrderData(parsedOrderData);
    }
    
  },[])
  console.log(orderData)

  return (
    <>
      <p>Orden Detail</p>
      <p>{orderData && orderData.status}</p>
      {/* <p>{orderData.purchase_units[0].payments.captures[0].amount.value}</p> */}
    
    </>
  );
}

export default OrdenDetail;
