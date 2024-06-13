import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../main";
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [currency, Setcurrency] = useState("bdt");

  const currencySymbol =
  currency === "bdt" ? "*" : currency === "eur" ? "#" : "$";

  const changepage = (page) => {
    setPage(page);
    setLoading(true);
  };
  const btns = new Array(123).fill(1)
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <ErrorComponent message={"Error while fetching Coins"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
        <RadioGroup onClick={Setcurrency}>
          <HStack>
            <Radio>BDT</Radio>
            <Radio>EUR</Radio>
            <Radio>USD</Radio>
          </HStack>
        </RadioGroup>
          <HStack wrap={"wrap"}>
            {coins.map((i) => (
              <CoinCard
                key={i.id}
                id={i.id}
                name={i.name}
                img={i.image}
                symbol={i.symbol}
                price={i.current_price}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
          <HStack w={'full'} overflowX={'auto'}
           p={'8'}>
            {
              btns.map((item,index)=> (
                <Button
                key={index}
                bg={"black.900"}
                color={"white"}
                onClick={() => changepage(index +1 )}
              >
                {index + 1}
              </Button>
              ))
            }
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
