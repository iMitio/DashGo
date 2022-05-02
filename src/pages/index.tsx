import {Flex,  Button, Stack} from  "@chakra-ui/react"
import {SubmitHandler, useForm} from "react-hook-form"
import *  as yup  from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

import {Input} from "../components/Form/input"

type SignInFormData=  {
  email: string;
  password: string;
}

const  signInFormSchema =  yup.object().shape({
  email:  yup.string().required('E-mail obrigatorio').email('E-mail invalido'),
  password: yup.string().required('Senha obrigatorio')
})

export default function Home() {
  const {register, handleSubmit, formState: {isSubmitting, errors}} = useForm({
    resolver: yupResolver(signInFormSchema)
  });
  

  const  handlesignIn:SubmitHandler<SignInFormData> = async (value) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(value);
    console.log(errors)
  }

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
      onSubmit={handleSubmit(handlesignIn)}
     >

       <Stack spacing={4}>
         
        <Input name="email" label="E-mail" type="email" error={errors.email} {...register('email')}/>
        <Input name="password"  label="Password" type="password" error={errors.password} {...register('password')}/>

        <Button 
          type="submit" 
          marginTop="6"
          colorScheme="pink"
          size="lg"
          isLoading={isSubmitting}
        > 
          Entrar
        </Button>
       </Stack>
      
     </Flex>
   </Flex>
  )
}
