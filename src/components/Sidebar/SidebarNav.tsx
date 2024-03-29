import  {Stack} from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";


import {NavSection} from "./NavSection"
import  {NavLink} from  "./NavLink"

export  function SidebarNav () {
    return  (
        <Stack
        spacing="12"
        alignItems="flex-start"
    >
       <NavSection title="GERAL">
           <NavLink icon={RiDashboardLine} href="/dashboard">
               Dashboard
            </NavLink>

            <NavLink icon={RiContactsLine} href="/users">
                Usuários
            </NavLink>

       </NavSection>

        <NavSection title="AUTOMAÇÂO">
            <NavLink icon={RiInputMethodLine} href="/forms"> 
                Formulários
            </NavLink>

            <NavLink icon={RiGitMergeLine} href="/automation">
                Automação
            </NavLink>
        </NavSection>

    </Stack>
    )
}