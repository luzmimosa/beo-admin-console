import React from "react";
import {Button, Link, Card, Navbar, Text} from "@nextui-org/react";

import './GlobalLayout.css';

export const GlobalLayout = (props: { navItems: React.ReactNode, children: React.ReactNode }) => {

    const handleExitButtonClick = () => {
        console.log("Exit button clicked")
        window.close();
    }

    return (
        <div id={"content-container"}>
            <Navbar isBordered variant={"sticky"}>
                <Navbar.Brand>
                    <Text b color="inherit" hideIn="xs">
                        BEO Console
                    </Text>
                </Navbar.Brand>
                <Navbar.Content>
                    <Navbar.Item>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <Button color={"error"} auto flat as={Link} onPress={() => handleExitButtonClick()}>
                            Salir
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>
            <main>
                {props.children}
            </main>
        </div>
    );
}