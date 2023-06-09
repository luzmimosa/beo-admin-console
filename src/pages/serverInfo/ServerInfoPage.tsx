import React from "react";
import {PageTitle} from "../../components/Text";
import {Card, Col, Button, Row, Text, Tooltip, Table, Spacer, useTheme} from "@nextui-org/react";
import {LevelStatus, ServerInfo, useServerInfo} from "../../api/ServerApi";
import {useNavigate} from "react-router-dom";
import {ComplexIcons, IconButton, SvgIcons} from "../../components/Icons";

import "./ServerInfoPage.css";

import backgroundVideo from "./server-card-video.mp4";

export const ServerInfoPage = () => {

    const serverInfo = useServerInfo();
    const navigate = useNavigate();
    const theme = useTheme().theme;

    if (!serverInfo) {
        navigate("/connection-lost");
        return null;
    }

    const handleLevelPageClick = () => {
        navigate("/level-manager");
    }

    return (
        <div id={"server-info-page"}>
            <PageTitle text={"Información del servidor"} />

            <ServerInfoCard serverInfo={serverInfo} />

            <Spacer y={1} />

            <Button flat color="primary" auto onClick={() => handleLevelPageClick()}>
                Ver niveles
            </Button>

        </div>
    )
}

const ServerInfoCard = (props: {serverInfo: ServerInfo}) => {

    const navigate = useNavigate();

    const handleShutdownButtonClick = () => {
        navigate("/server-shutdown");
    }

    return (
        <Card css={{w: "100%", h: "400px"}}>
            <Card.Header css={{position: "absolute", zIndex: 1, top: 5}}>
                <Col>
                    <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                        Servidor solitario
                    </Text>
                    <Text h2 color="white">
                        {props.serverInfo.name}
                    </Text>
                </Col>
            </Card.Header>
            <Card.Body css={{p: 0}}>
                <video autoPlay className={"poster-video"}>
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
            </Card.Body>
            <Card.Footer
                isBlurred
                css={{
                    position: "absolute",
                    bgBlur: "rgba(49,49,49,0.4)",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                }}
            >
                <Row>
                    <Col>
                        <Text color="#ffffffAA" size={12}>
                            Versión {props.serverInfo.version}
                        </Text>
                        <Text color="#ffffffAA" size={14}>
                            {props.serverInfo.running_levels.length + " niveles registrados"}
                        </Text>
                    </Col>
                    <Col>
                        <Row justify="flex-end">
                            <Button  auto rounded color="error" onClick={() => handleShutdownButtonClick()}>
                                <Text
                                    css={{color: "error"}}
                                    size={12}
                                    weight="bold"
                                    transform="uppercase"
                                >
                                    Apagar
                                </Text>
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
};