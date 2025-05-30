import { useRef, useState } from "react";
import { Center, Container, Flex, Image, SimpleGrid, Space, Avatar } from "@mantine/core";
import PrimaryInput from "../components/PrimaryInput";
import SecondaryText from "../components/SecondaryText";
import PrimaryPassword from "../components/PrimaryPassword";
import { IconAt } from '@tabler/icons-react';
import PrimaryButton from "../components/PrimaryButton";
import '../App.css'

const SignUp = () =>
{
    const [ collegeImage, setCollegeImage ] = useState<string | null>( null );
    const fileInputRef = useRef<HTMLInputElement>( null );

    const handleImageChange = ( event: React.ChangeEvent<HTMLInputElement> ) =>
    {
        const file = event.target.files?.[ 0 ];
        if ( file )
        {
            const reader = new FileReader();
            reader.onload = ( e ) => setCollegeImage( e.target?.result as string );
            reader.readAsDataURL( file );
        }
    };

    return (
        <Container w='100%' h="100%" mih="100%" pt={ 5 } fluid >
            <Container
                fluid
                w="80%"
                h="20rem"
                className="collegeImg"
                onClick={ () => fileInputRef.current?.click() }
            >
                <input
                    type="file"
                    accept="image/*"
                    style={ { display: "none" } }
                    ref={ fileInputRef }
                    onChange={ handleImageChange }
                />
                <Center w="100%" h="100%" >
                    { collegeImage ? (
                        <Image src={ collegeImage } alt="College" fit="cover" w="100%" h="100%" />
                    ) : (
                        <PrimaryButton variant="light" color="#28a745 " text="Click to upload college photo" />
                    ) }
                </Center>
                <div className="avator" onClick={ e => e.stopPropagation() }>
                    <Avatar size="8rem" >
                    </Avatar>
                </div>
            </Container>
            <Space h="md" />
            <Center>
                <SecondaryText color="Black" text="Create Your Account" size="xl" fw={ 550 } align="center" />
            </Center>
            <Space />
            <SimpleGrid cols={ 2 } spacing="lg" >
                <Flex
                    gap="md"
                    justify="flex-end"
                    align="flex-start"
                    direction="column"
                    wrap="wrap">
                    <PrimaryInput size="md" label="Full Name" placeholder="Enter your full name" radius="md" />
                    <PrimaryInput size="md" leftSection={ <IconAt size={ 16 } /> } label="Offical College Email" placeholder="Enter your email" radius="md" />
                    <PrimaryInput size="md" label="College Name" placeholder="Enter your college name" radius="md" />

                </Flex>
                <Flex
                    gap="md"
                    justify="flex-end"
                    align="flex-start"
                    direction="column"
                    wrap="wrap">
                    <PrimaryInput type="number" size="md" label="Mobile No." placeholder="Enter your phoneno" radius="md" />
                    <PrimaryPassword size="md" label="Password" placeholder="Enter your password" radius="md" />
                    <PrimaryPassword size="md" label="Confirm Password" placeholder="Confirm your password" radius="md" />
                </Flex>
            </SimpleGrid>
            <Space h="md" />
            <Center>
                <PrimaryButton width="20%" fullWidth text="Submit" />
            </Center>
        </Container>
    )
}

export default SignUp;