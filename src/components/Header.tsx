import {Flex, Input, Text, Icon, HStack, Box, Avatar} from "@chakra-ui/react"
import {RiNotificationLine, RiSearch2Line, RiUserAddLine} from "react-icons/ri"

export  function Header () {
    return(
        <Flex
            as="header"
            width="100%"
            maxWidth={1480}
            h="20"
            marginX="auto"
            marginTop="4"
            paddingX="6"
            alignContent="center"

        >
           <Text
            fontSize="3xl"
            fontWeight="bold"
            letterSpacing="tight"
            width="64"
           >
               DashGo
               <Text
                as="span"
                marginLeft="1"
                color="pink.500"
               >
                   .
               </Text>
            </Text>


            <Flex
                as="label"
                flex="1"
                paddingY="4"
                paddingX="8"
                marginLeft="6"
                maxWidth={400}
                alignSelf="center"
                color="gray.200"
                position="relative"
                bg="gray.800"
                borderRadius="full"
            >
                <Input
                     color="gray.50"
                     variant="unstyled"
                     paddingX="4"
                     marginRight="4"
                     placeholder="Buscar na plataforma"
                     _placeholder={{color : "gray.400"}}
                />

                <Icon 
                    as={RiSearch2Line}
                />
            </Flex>

            <Flex
                alignItems="center"
                marginLeft="auto"
            >
                <HStack
                    spacing="8"
                    marginX="8"
                    paddingRight="8"
                    paddingY="1"                
                    color="gray.300"
                    borderRightWidth={1}
                    borderColor="gray.700"
                >
                
                    <Icon as={RiNotificationLine} size="20"/>
                    <Icon as={RiUserAddLine} fontSize="20"/>
                </HStack>

                <Flex
                    align="center"
                >
                    <Box
                        marginRight="4"
                    >
                        <Text>Nanorin</Text>
                        <Text
                            color="gray.300"
                            fontSize="small"
                        >
                            inanorin5@gmail.com
                        </Text>
                    </Box>

                    <Avatar
                        size="md"
                        name="nanorin"
                    />
                </Flex>
            </Flex>
        </Flex>
    )
}