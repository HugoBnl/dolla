import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormButton,
    FormContent,
    Form,
    FormInput,
    FormH1,
    FormLabel,
    Text
} from './SigninElements'

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">DOLLA</Icon>
                    <FormContent>
                        <Form action="#" >
                            <FormH1> Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text> Forgot Password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn;
