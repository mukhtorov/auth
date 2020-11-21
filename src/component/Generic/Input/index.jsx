import React, { useState } from 'react';
import { Container, Input, Label, Wrapper, ShowPassword } from "./style";

const NoramlInput = ({
    placeholder, disabled, typePwd, label, size, type, eye, position, password, ...others
}) => {
    const [see, setSee] = useState(false);
    return (
        <Wrapper type={type}>
            {label && <Label>{label}</Label>}
            <Container typePwd={typePwd}>
                <Input
                    autoComplete="off"
                    typePwd={typePwd}
                    position={position}
                    disabled={disabled ? true : false}
                    type={see ? "text" : password ? 'password' : "text"}
                    size={size}
                    {...others}
                    placeholder={placeholder}
                />

                {password && <ShowPassword onClick={() => setSee(!see)}>{see ? "HIDE" : 'SHOW'}</ShowPassword>}
            </Container>
        </Wrapper>
    );
};

export default NoramlInput;
