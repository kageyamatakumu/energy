import { Box, Flex, Heading, Input, Stack, Select, Text, Image } from '@chakra-ui/react'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'
import React, { useContext, useState } from 'react'

import {
    FormControl,
    FormLabel,
} from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import { PrimaryButton } from '../atoms/button/PrimaryButton'
import { ElectricBilll } from '../../providers/ElectricBillProvider'
import { SelectHour } from '../../providers/SelectHourProvider'
import { SelectQuanity } from '../../providers/SelectQuanityProvider'
import { SelectPrice } from '../../providers/SelectPriceProvider'
import { SelectPeriod } from '../../providers/SelectPeriodProvider'
import { SelectPower } from '../../providers/SelectPowerProvider'

import lite from '../../images/lite.png'

export const InputArea = () => {
    const history = useHistory()
    const { setElectric } = useContext(ElectricBilll);
    const { setHour } = useContext(SelectHour);
    const { setQuanity } = useContext(SelectQuanity);
    const { setPrice } = useContext(SelectPrice);
    const { setPeriod } = useContext(SelectPeriod);
    const { setPower } = useContext(SelectPower);

    const onClickToResult = () => {
        const result = time*thing*company*day*consumption/1000
        setElectric(result)
        setHour(time)
        setQuanity(thing)
        setPrice(company)
        setPeriod(day)
        setPower(consumption)
        history.push('/result')
    }

    // 消費電力(W) 電球１個あたり
    const [consumption, setConsumption] = useState('')
    const handleChangeW = (e) => {
        setConsumption(() => e.target.value)
    }

    // 電力会社
    const [company, setCompany] = useState('')
    const handleChangeCompany = (e) => {
        setCompany(() => e.target.value)
        setDisable(false)
        console.log(disable)
    }

    // 使用日数（日/月）
    const [day, setDay] = useState(1)
    const handleChangeDay = (value) => {
        setDay(value)
    }

    // 1日の使用時間（時間）
    const [time, setTime] = useState(1)
    const handleChangeTime = (value) => {
        setTime(value)
    }

    // 個数
    const [thing, setThing] = useState(1)
    const handleChangeThing = (value) => {
        setThing(value)
    }

    // ボタン(シミュレーション結果へ)の非活性化
    const [disable, setDisable] = useState(true);

    return (
        <>
            <Box ml="auto" mr="auto" mt={5}>
                <Heading as="h1" size="lg" textAlign="center">電気代・電気料金の計算</Heading>
            </Box>
            <Flex display={{ base: "block", md: "flex" }}>
                <Box w={{base: "100%", md: "lg"}} p={4} ml={{base: "none", md: "20%"}} mt="5%">
                    <Stack spacing={{base: 4, md: 7, lg: 10}}>
                        <FormControl isRequired>
                            <FormLabel htmlFor='first-name'>消費電力(W) 電球１個あたり</FormLabel>
                                <Input placeholder="消費電力(W) 電球１個あたり" type="number" onChange={handleChangeW} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel htmlFor='first-name'>1日の使用時間（時間）</FormLabel>
                                <NumberInput step={0.1} defaultValue={0} min={0} max={24} value={time} onChange={handleChangeTime}>
                                    <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                </NumberInput>
                                <Text>{Math.round(time*60)}分</Text>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel htmlFor='first-name'>使用日数（日/月）</FormLabel>
                                <NumberInput defaultValue={1} min={1} max={30} value={day} onChange={handleChangeDay}>
                                    <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                </NumberInput>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel htmlFor='company'>電力会社</FormLabel>
                            <Select id='company' placeholder='電力会社を選択' onChange={handleChangeCompany}>
                                <option value="26.48">東京電力</option>
                                <option value="25.51">中部電力</option>
                                <option value="25.71">関西電力</option>
                                <option value="30.26">北海道電力</option>
                                <option value="25.33">東北電力</option>
                                <option value="21.73">北陸電力</option>
                                <option value="27.44">中国電力</option>
                                <option value="26.99">四国電力</option>
                                <option value="23.06">九州電力</option>
                                <option value="28.49">沖縄電力</option>
                                <option value="25.35">東京ガス</option>
                                <option value="25.3">大阪ガス</option>
                                <option value="26.1">全国平均(電力10社平均)</option>
                            </Select>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel htmlFor='first-name'>個数</FormLabel>
                                <NumberInput defaultValue={1} min={1} max={30} value={thing} onChange={handleChangeThing}>
                                    <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                </NumberInput>
                        </FormControl>
                        <PrimaryButton  onClick={onClickToResult} disable={disable}>シミュレーション結果へ</PrimaryButton>
                    </Stack>
                </Box>
                <Box position="container" >
                    <Image src={lite} display={{base: "none", md: "none", lg: "flex"}} boxSize={'300px'} position="absolute" ml={"100px"} bottom={10}/>
                </Box>
            </Flex>
        </>
    )
}
