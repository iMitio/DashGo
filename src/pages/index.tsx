import {Flex,  Button, Stack} from  "@chakra-ui/react"

import {Input} from "../components/Form/input"
export default function Home() {
  return (
   <Flex 
    width="100vw" 
    height="100vh"
    align="center"
    justify="center"
    >

     <Flex
      as="form"
      width="100%"
      maxW={360}
      bg="gray.800"
      p="8"
      borderRadius={8}
      flexDir="column"
     >

       <Stack spacing={4}>
         
        <Input name="email" label="E-mail" type="email"/>
        <Input name="password"  label="Password" type="password"/>

        <Button 
          type="submit" 
          marginTop="6"
          colorScheme="pink"
          size="lg"
        > 
          Entrar
        </Button>
       </Stack>
      
     </Flex>
   </Flex>
  )
}
