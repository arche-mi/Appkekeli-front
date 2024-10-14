import React from 'react'
import { Card,CardBody,Image,Stack,Heading,Text,Divider,CardFooter,Button,ButtonGroup } from "@chakra-ui/react";

export const ResidenceComponent = ({model,id,disponible,description,price,photo}) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={photo}
          w={400}
          h={200}
          alt={model}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{model}</Heading>
        </Stack>
        <Button>Reserver</Button>
      </CardBody>
    </Card>
  )
}
