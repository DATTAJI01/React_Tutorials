import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})

  useEffect(() =>{
    fetch(`https://api.exconvert.com/fetchAll?access_key=3afca93d-24881230-b58f2c3c-9dc2eaf0&from=${currency}`
    ).then((res) => res.json()
    ).then((res) =>setData(res.result))
    console.log(data);
    console.log(currency);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currency])
  return data
}


export default useCurrencyInfo;