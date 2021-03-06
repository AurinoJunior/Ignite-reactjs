import { Flex, Text, Input as ChakraInput, Icon } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      marginX="auto"
      marginTop="4"
      paddingX="6"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashgo
        <Text as="span" marginLeft="1" color="pink.500">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        paddingY="4"
        paddingX="8"
        maxW={400}
        alignItems="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <ChakraInput
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{
            color: "gray.400",
          }}
          paddingX="4"
          marginRight="4"
        />

        <Icon as={RiSearchLine} fontSize="20" cursor="text" />
      </Flex>
    </Flex>
  );
}
