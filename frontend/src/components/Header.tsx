import { Container, Flex } from "@mantine/core"
import PrimaryButton from "./PrimaryButton"
import PrimaryText from "./PrimaryText"

const Header = () =>
{
    return (
        <Container fluid p={ 8 } >
            <Flex justify="space-between" >
                <PrimaryText text="CampusConnect" size="xl" />
                <PrimaryButton size="sm" onClick={ function (): void
                {
                    throw new Error( "Function not implemented." )
                } } text="Log In" />
            </Flex>
        </Container>
    )
}

export default Header