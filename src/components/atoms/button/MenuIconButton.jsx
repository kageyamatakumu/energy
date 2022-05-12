import React, { memo } from 'react'
import { IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

export const MenuIconButton = memo((props) => {
    const { onOpen } = props;
    return (
        <IconButton
            aria-label="メニューボタン"
            icon={<HamburgerIcon />}
            size="sm"
            variant="unstyled"
            display={{ base: "block", md: "none" }}
            onClick={onOpen}
        />
    )
})