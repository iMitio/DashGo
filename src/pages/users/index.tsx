import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue, Spinner } from "@chakra-ui/react";
import {useQuery} from "react-query"

import { RiAddLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

import Link from "next/link"

export default  function UserList() {

    const  {data, isLoading, error} = useQuery('users', async() => {
        const response  = await fetch('http://localhost:3000/api/users')
        const data = await response.json();

        const users = data.users.map(user => {
            return {
                id:  user.id,
                name: user.name,
                email: user.email,
                createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
                    day:  '2-digit',
                    month: 'long',
                    year: 'numeric'
                })
            }
        })
        return users;
    }, {
        staleTime: 1000 * 5  // 5 seconds
    }
    );

    console.log()


    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    
       

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


                        <Link href="/users/create" passHref>
                            <Button
                                as="a"
                                fontSize="small"
                                colorScheme="pink"
                                leftIcon={<Icon  as={RiAddLine} fontSize="20"/>}
                            >
                                Criar novo usuário
                            </Button>
                        </Link>
                        
                    </Flex>
                    
                   {isLoading? (
                       <Flex justify="center">
                           <Spinner/>
                       </Flex>
                   ): error? (
                       <Flex justify="center">
                           <Text>Falha ao obter dados do usuário</Text>
                       </Flex>
                   ): (
                    <>
                    <Table
                         colorScheme="whiteAlpha"
                    >
                    <Thead>
                       <Tr>
                           <Th
                               paddingX={["4", "4", "6"]}
                               color="gray.300"
                               width="8"
                           >
                               <Checkbox colorScheme="pink"/>
                           </Th>
                           <Th>Usuário</Th>
                           {isWideVersion && <Th>Data de cadastro</Th> }
                           <Th width="8"></Th>
                       </Tr>
                    </Thead>
                    <Tbody>
                        {data.map(user => {
                            return (
                                <Tr key={user.id}>
                                    <Td paddingX={["4", "4", "6"]}>
                                        <Checkbox colorScheme="pink"/>
                                    </Td>
            
                                    <Td>
                                        <Box>
                                            <Text fontWeight="bold">{user.name}</Text>
                                            <Text 
                                                fontSize="small"
                                                color="gray.300"
                                            >
                                                {user.email}
                                            </Text>
                                        
                                        </Box>
                                    </Td>
        
                                {isWideVersion && <Td>{user.createdAt}</Td>}
        
                            </Tr>
                            )
                        })}
                    </Tbody>

                    </Table>
                    <Pagination/>
               </>
                   )}
                    
                </Box>
            </Flex>
        </Box>
    )
}