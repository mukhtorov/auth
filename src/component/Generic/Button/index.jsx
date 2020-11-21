import React from "react";
import { Container } from "./style";

const LinkButton = ({
    title,
    size,
    Primary,
    Default,
    Text,
    Dashed,
    Link,
    block,
    disabled,
    Ghost,
    Danger,
    onClick
}) => (
        <Container
            Dashed={Dashed}
            Default={Default}
            Primary={Primary}
            size={size}
            block={block}
            Ghost={Ghost}
            disabled={disabled}
            Text={Text}
            Link={Link}
            Danger={Danger}
            onClick={onClick}
        >
            {title}
        </Container>
    );

export default LinkButton;
