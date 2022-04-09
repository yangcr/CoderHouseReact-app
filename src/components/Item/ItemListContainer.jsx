import React, { useEffect, useState } from "react";
import Promises from "./Promises";
import Products from "../../utils/Products";
import ItemList from "./ItemList";
import { Box } from "@mui/material";
import MyLoader from "../../utils/MyLoader";


export default function ItemListContainer({ cartAdd }) {
  const [ItemProduct, setItemProduct] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    Promises(3000, Products)
      .then((result) => {
        setItemProduct(result);
        setLoading(false)
      })
      .catch("error");
  }, [ItemProduct]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: 8,
          margin: 3,
        }}
      >
        {
        loading ? <MyLoader loading={loading}/> : <ItemList ItemProduct={ItemProduct} cartAdd={cartAdd} />
      }
      </Box>
    </>
  );
}