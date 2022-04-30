import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default  function UserList() {
    return (
        <Box>
            <Header/>

            <Flex
                width="100%"
                marginY="6"
                maxWidth={1480}
                marginX="auto"
                paddingX="6"
            >
                <Sidebar/>

                <Box
                    flex="1"
                    borderRadius={8}
                    bg="gray.800"
                    p="8"
                >
                    <Flex
                        marginBottom="8"
                        justify="space-between"
                        align="center"
                    >
                        <Heading
                            size="lg"
                            fontWeight="normal"
                        >
                            Usuários

                        </Heading>


                        <Button
                            as="a"
                            fontSize="small"
                            colorScheme="pink"
                            leftIcon={<Icon  as={RiAddLine} fontSize="20"/>}
                        >
                            Criar novo usuário
                        </Button>
                    </Flex>
                    
                    <Table
                        colorScheme="whiteAlpha"
                    >
                        <Thead>
                            <Tr>
                                <Th
                                    paddingX="6"
                                    color="gray.300"
                                    width="8"
                                >
                                    <Checkbox colorScheme="pink"/>
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td paddingX="6">
                                    <Checkbox colorScheme="pink"/>
                                </Td>

                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Jonathan Mitio</Text>
                                        <Text 
                                            fontSize="small"
                                            color="gray.300"
                                        >
                                            noguchimitio@gmail.com
                                        </Text>
                                    
                                    </Box>
                                </Td>

                                <Td>
                                    04 de Abril 2022
                                </Td>

                                <Td>
                                <Button
                                    as="a"
                                    fontSize="small"
                                    colorScheme="purple"
                                    leftIcon={<Icon  as={RiPencilLine}  fontSize="16"/>}
                                >
                                    Editar
                                </Button>
                                </Td>
                            </Tr>
                        </Tbody>

                    </Table>
                    <Pagination/>
                    
                </Box>
            </Flex>
        </Box>
    )
}