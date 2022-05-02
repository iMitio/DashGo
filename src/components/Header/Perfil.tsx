import {Flex, Box, Text, Avatar} from "@chakra-ui/react"

interface PerfilProps{
    showProfileData: boolean
}

export function Perfil ({showProfileData= true}:  PerfilProps) {
    return (
        
        <Flex
        align="center"
    >
       { showProfileData && (
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
       ) }

        <Avatar
            size="md"
            name="nanorin"
        />
    </Flex>
    )
}