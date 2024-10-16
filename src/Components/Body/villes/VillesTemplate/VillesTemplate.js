import React from "react";
import { Link } from "react-router-dom";
import { Card,CardBody,Image,Stack,Heading,Text,Divider,CardFooter,Button,ButtonGroup } from "@chakra-ui/react";

export default function VillesTemplate({children, src,id}) {

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={src}
          w={400}
          h={200}
          alt={children}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{children}</Heading>
        </Stack>
        <Link to={`/Villes/${id}`} className="btn btn-primary m-2" >Allez découvrir !</Link>
      </CardBody>
    </Card>

  );
}
