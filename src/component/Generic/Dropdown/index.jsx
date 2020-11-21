import React, { useState, useEffect } from "react";
import { KeyboardArrowDown } from "@styled-icons/material/KeyboardArrowDown";
import { Container, Selection, Menu } from "./style";

const Single = ({
    onClick,
    top,
    bottom,
    hover,
    arrow,
    options,
    placeholder,
    marginRight,
    onChange,
    onSelect,
    size,
    disabled,
    dwidth,
    ...args
}) => {
    const [open, setOpen] = useState(false);
    const [end, setEnd] = useState(false);
    const [width, setWidth] = useState(0);
    const [windowH] = useState(window.innerHeight);
    const [windowW] = useState(window.innerWidth);
    const [item, setItem] = useState(placeholder || options[0].value);
    let onClik = (e) => {
        setItem(e.target.value);
        onSelect ? onSelect(e.target.id) : console.log(e.target.value);
        setOpen(false);
        if (onClick) onClick(e.target.value);
    };
    const openToggle = () => setOpen(!open);
    const handleResize = (e) => {
        setWidth(e);
    };
    useEffect(() => {
        const vh = document
            .getElementById("dropdown-container")
            .getBoundingClientRect();
        const wv = document.getElementById("selection-container").clientWidth;
        const menuHeight = document.getElementById("menu-container")
            .clientHeight;

        window.addEventListener("resize", handleResize(wv));

        if (vh.bottom + menuHeight > window.innerHeight) {
            setEnd(true);
        } else {
            setEnd(false);
        }
    }, [end, windowW, item, open, width, windowH]);
    return (
        <Container
            id="dropdown-container"
            end={end ? 1 : 0}
            onMouseLeave={() => setOpen(false)}
            onMouseEnter={!disabled && hover ? openToggle : null}
            onClick={!disabled ? openToggle : null}
            dwidth={dwidth}
        >
            <Selection
                disabled={disabled}
                size={size}
                onClick={!disabled ? openToggle : null}
                {...args}
                id="selection-container"
            >
                <Selection.Text disabled={disabled} {...args}>
                    {item}
                </Selection.Text>
                <Selection.Icon Open={open}>
                    {arrow && <KeyboardArrowDown id="KeyboardArrowDownIcon" />}
                </Selection.Icon>
            </Selection>
            <Menu
                top={bottom}
                bottom={top}
                id="menu-container"
                Open={open}
                disable
                width={width}
                end={end ? 1 : 0}
                {...args}
            >
                {options.map((itm, i) =>
                    Array.isArray(itm.child) ? (
                        <div key={itm.id}>
                            <Menu.Item
                                key={itm.id}
                                readOnly
                                disabled
                                danger={itm.danger}
                                value={itm.value}
                                width={width}
                            />
                            {itm.child.map((sub) => (
                                <Menu.SubItem
                                    key={sub.id}
                                    disabled={itm.disabled}
                                    id={sub.id[i]}
                                    readOnly
                                    onClick={(e) => onClik(e)}
                                    value={sub.value}
                                    name={sub.name}
                                    active={item === sub.value}
                                    width={width}
                                />
                            ))}
                        </div>
                    ) : (
                            <Menu.Item
                                id={itm.id}
                                key={itm.id}
                                readOnly
                                danger={itm.danger}
                                disabled={itm.disabled}
                                onClick={(e) => onClik(e)}
                                value={itm.value}
                                name={itm.name}
                                active={item === itm.value}
                            />
                        )
                )}
            </Menu>
        </Container>
    );
};

export default Single;
