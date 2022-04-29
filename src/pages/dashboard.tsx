import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react"

import dynamic  from  "next/dynamic"


import {Header} from "../components/Header"
import {Sidebar} from "../components/Sidebar"

const Charts = dynamic(() => import ("react-apexcharts"), {
    ssr:  false
})

const options = {
    chart:{
        toolbar: {
            show: false
        }
    ,
    zoom: {
        enabled: false
    },
    foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        type: "datetime",
        axisBorder: {
            color:  theme.colors.gray[600]
        },
        axisTicks: {
            color:  theme.colors.gray[600]
        },
         categories: [
             "2022-05-29T00:00:00.000Z",
             "2022-05-30T00:00:00.000Z",
             "2022-06-01T00:00:00.000Z",
             "2022-06-02T00:00:00.000Z",
             "2022-06-03T00:00:00.000Z",
             "2022-06-04T00:00:00.000Z",
             "2022-06-05T00:00:00.000Z"

         ]
    },
    fill : {
        opacity: 0.3,
        type: "gradient",
        gradient: {
            shade: "dark",
            opacityFrom: 0.7,
            opacityTo:0.3
        }
    }


}

const series = [
    {
        name: "series1",
        data: [31, 120, 10, 28, 61, 18, 109]
    }
]

export default function Dashboard() {
    return (
        <Flex
            direction="column"
            height="100vh"
        >
            <Header/>

            <Flex
                width="100%"
                maxWidth={1480}
                marginY="6"
                marginX="auto"
                paddingX="6"
            >
                <Sidebar/>

                <SimpleGrid 
                    flex="1"
                    gap="4"
                    minChildWidth="320px"
                    alignItems="flex-start"
                >
                    <Box
                        padding="8"
                        bg="gray.800"
                        borderRadius={8}
                        paddingBottom="4"

                    >
                        <Text
                            fontSize="lg"
                            marginBottom="4"
                        >
                            Incrito da semana
                        </Text>
                        <Charts 
                            type="area"
                            height={160}
                            options={options}
                            series={series}
                        />
                    </Box>

                    <Box
                        padding="8"
                        bg="gray.800"
                        borderRadius={8}
                        paddingBottom="4"

                    >
                        <Text
                            fontSize="lg"
                            marginBottom="4"
                        >
                            Taxa de abertura
                        </Text>
                        <Charts 
                            type="area"
                            height={160}
                            options={options}
                            series={series}
                        />
                    </Box>

                </SimpleGrid>
            </Flex>
        </Flex>
    )
}