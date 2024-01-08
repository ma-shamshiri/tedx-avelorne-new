// ImageModal.tsx
import React from "react";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { ChevronLeftIcon, CloseIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  handlePrevious: () => void;
  handleNext: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  image,
  handlePrevious,
  handleNext,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent
        backgroundColor="rgba(0, 0, 0, 0.8)"
        borderRadius="none" // No border radius for a uniform rectangle
        p={20} // No padding to ensure the image covers the entire modal
        maxW="100%" // Ensure the modal is centered
        // maxH="10px" // Ensure the modal is centered
      >
        <ModalBody>
          <Box
            textAlign="center"
            position="relative"
            height="100 %"
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image
              src={image}
              alt="Enlarged Image"
              width="80rem"
              height="80rem"
              objectFit="contain"
              borderRadius={7}
            />
            <Box
              mt={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton
                icon={<ChevronLeftIcon />}
                onClick={handlePrevious}
                color="white"
                aria-label="Previous"
                mr={2}
                fontSize="2rem"
                _hover={{ transform: "scale(1.2)", color: "teal.500" }}
                transition="transform 0.3s, color 0.3s"
              />
              <IconButton
                icon={<CloseIcon />}
                onClick={onClose}
                color="white"
                aria-label="Close"
                mx={2}
                fontSize="2rem"
                _hover={{ transform: "rotate(180deg)", color: "red.500" }}
                transition="transform 0.3s, color 0.3s"
              />
              <IconButton
                icon={<ChevronRightIcon />}
                onClick={handleNext}
                color="white"
                aria-label="Next"
                ml={2}
                fontSize="2rem"
                _hover={{ transform: "scale(1.2)", color: "teal.500" }}
                transition="transform 0.3s, color 0.3s"
              />
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ImageModal;
