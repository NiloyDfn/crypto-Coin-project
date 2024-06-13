import { Heading, Img, VStack,Text } from "@chakra-ui/react";
import React from "react";

const ExchangeCard = ({ name, img, code, url }) => {
  return (
    <a href={url} target={"blank"}>
      <VStack w={'52'} p={'8'} borderRadius={'lg'} shadow={'lg'} transition={'all .3s ease'} 
      m={'4'}
      css={{
       "&:hover":{
        transform : "scale(1.1)"
       }
      }}>
        <Img
          src={img}
          w={"10"}
          h={"10"}
          objectFit={"contain"}
          alt="exchange"
        />
      <Heading size={'md'} noOfLines={'1'}>
          {code}
        </Heading>  
        <Text alignItems={'center'} fontSize={'12'} fontWeight={'bold'} textTransform={'capitalize'}>{name}</Text>
      </VStack>
    </a>
  );
};

export default ExchangeCard;
