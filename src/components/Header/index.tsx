import {Flex, Icon, IconButton, useBreakpointValue} from "@chakra-ui/react"
import { RiMenuLine } from "react-icons/ri"
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext"


import { Logo } from "../Header/Logo"
import { NotificationNav } from "../Header/NotificationNav"
import { Perfil } from "../Header/Perfil"
import { SearchBox } from "../Header/SearchBot"

export  function Header () {
    const {onOpen} = useSidebarDrawer()


    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

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

            {
                !isWideVersion && (
                    <IconButton 
                        aria-label="Open navegation"
                        icon={<Icon as={RiMenuLine}/>}
                        fontSize="24"
                        variant="unstyled"
                        onClick={onOpen}
                        marginRight="2"
                    
                    >

                    </IconButton>
                )
            }


            <Logo/>
            {isWideVersion &&  <SearchBox/>}
            <Flex
                alignItems="center"
                marginLeft="auto"
            >
                <NotificationNav/>
                <Perfil showProfileData={isWideVersion}/>
            </Flex>
        </Flex>
    )
}