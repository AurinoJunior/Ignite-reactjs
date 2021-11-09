import {
  Flex,
  Text,
  Input as ChakraInput,
  Icon,
  HStack,
  Box,
  Avatar,
} from "@chakra-ui/react";

import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";

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

      <Flex align="center" marginLeft="auto">
        <HStack
          spacing="8"
          marginX="8"
          paddingRight="8"
          paddingY="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box>
            <Text>Aurino Junior</Text>
            <Text color="gray.300" fontSize="small">
              aurino@gmail.com
            </Text>
          </Box>
        </Flex>

        <Avatar marginLeft="4" size="md" name="Aurino Junior" />
      </Flex>
    </Flex>
  );
}
