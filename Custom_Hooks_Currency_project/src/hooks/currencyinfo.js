import { useEffect, useState } from "react";
function usecurrencyinfo() {
  const [currency, setCurrency] = useState([]);
  useEffect(() => {
    fetch("`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`")
      .then((res) => res.json())
      .then((data) => {
        setCurrency(data.rates);
      });
  }, []);
  return currency;
}
export default usecurrencyinfo;