import React from "react";
import { Box, Button, Text, VStack, Link, useToast } from "@chakra-ui/react";
import { FaCamera, FaFilePdf } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  // Función simulada que 'toma una foto' y genera un enlace de descarga PDF
  const handleTakePhotoAndGeneratePDF = () => {
    // Aquí iría la lógica para tomar una foto y generar el PDF automáticamente.
    // Por ahora, simulamos una respuesta exitosa y mostramos un mensaje.
    toast({
      title: "PDF generado",
      description: "Su ficha de pedido se ha generado y está lista para descargar.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={4} align="stretch">
      <Box p={5} shadow="md" borderWidth="1px">
        <Text fontSize="xl" mb={4}>
          Seguimiento de Pedido de Pizza
        </Text>
        <Button leftIcon={<FaCamera />} colorScheme="teal" onClick={handleTakePhotoAndGeneratePDF}>
          Tomar foto del albarán
        </Button>

        {/* Enlace simulado para la descarga del PDF */}
        <Link href="https://images.unsplash.com/photo-1520359319979-f360d010d777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZGYlMjBkb3dubG9hZCUyMGxpbmt8ZW58MHx8fHwxNzEwMTQ3ODcwfDA&ixlib=rb-4.0.3&q=80&w=1080" isExternal>
          <Button leftIcon={<FaFilePdf />} colorScheme="red" mt={3}>
            Descargar PDF
          </Button>
        </Link>
      </Box>
    </VStack>
  );
};

export default Index;
