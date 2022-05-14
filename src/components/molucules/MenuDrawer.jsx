import { Box, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Link } from '@chakra-ui/react'
import React, { memo } from 'react'

export const MenuDrawer = memo((props) => {
    const { onClose, isOpen, onClickTop} = props;

    return (
        <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen} >
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody p={0} bg="gray.100">
                        <Box w="100%" textAlign="center" mt={30}>
                            <Link onClick={onClickTop}>TOP</Link>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
})
