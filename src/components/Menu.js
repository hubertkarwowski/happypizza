import {
  Badge,
  Box,
  Button,
  Checkbox,
  Flex,
  Image,
  Input,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { data } from "../data";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const Menu = () => {
  const [allData, setAllData] = useState(data);
  const [filteredData, setFilteredData] = useState(allData);

  const handleSearch = (e) => {
    let value = e.target.value;
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
      return data.pizza.search(value) !== -1;
    });
    setFilteredData(result);
  };

  const dispatch = useDispatch();

  const handleAddToCart = (pizza) => {
    dispatch(addToCart(pizza));
  };

  return (
    <Flex flexDirection="column" gap="3rem" my="6rem">
      <Stack dis="flex" alignItems="center">
        <Input
          variant="outline"
          placeholder="Search for Pizza!"
          w={["300px", "300px", "400px", "400px"]}
          onChange={(e) => handleSearch(e)}
        />
        <Stack spacing={5} direction="row">
          <Checkbox>Vegan</Checkbox>
          <Checkbox>Meat</Checkbox>
        </Stack>
      </Stack>
      <Flex flexWrap="wrap" gap="2rem" justifyContent="center">
        {filteredData.map((pizza, index) => {
          return (
            <Box
              maxW="300px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              key={index}
            >
              <Image src={pizza.img} alt={pizza.pizza} />

              <Flex p="6" alignItems="center" justifyContent="space-between">
                <Box dis="flex">
                  <Box display="flex" alignItems="baseline">
                    <Badge
                      borderRadius="full"
                      px="2"
                      colorScheme="teal"
                      mr="4px"
                    >
                      {pizza.vegetarian === true ? "Vege" : "Meat"}
                    </Badge>
                    {pizza.new && (
                      <Badge
                        borderRadius="full"
                        px="2"
                        colorScheme="teal"
                        mr="4px"
                      >
                        New
                      </Badge>
                    )}
                    {pizza.bestseller && (
                      <Badge borderRadius="full" px="2" colorScheme="orange">
                        Bestseller
                      </Badge>
                    )}
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    ></Box>
                  </Box>

                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                    className="capitalize"
                  >
                    {pizza.pizza}
                  </Box>

                  <Box>{pizza.price}</Box>

                  <Box display="flex" mt="2" alignItems="center" width="20ch">
                    {pizza.description}
                  </Box>
                </Box>
                <Box>
                  <Button
                    colorScheme="yellow"
                    onClick={() => handleAddToCart(pizza)}
                  >
                    Add
                  </Button>
                </Box>
              </Flex>
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Menu;
