import { Image } from '@chakra-ui/react'
import React, {memo} from 'react'

import error from '../../images/404.png'

export const Page404 = memo(() => {
    return (
        <>
            <Image src={error} maxHeight="100vh" mx="auto"/>
        </>
    )
})
