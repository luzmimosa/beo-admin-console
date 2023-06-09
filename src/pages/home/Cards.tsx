import React from "react";
import { Card, Col, Text } from "@nextui-org/react";
import {useNavigate} from "react-router-dom";

import githubImage from "./github-card.jpg";
import consoleCardImage from "./console-card.jpg";
import hardwareCardImage from "./hardware-card.png";
import levelManagerCardImage from "./level-manager-card.png";
import logsCardImage from "./logs-card.png";
import serverInfoCardImage from "./server-info-card.jpg";
import serverSettingsCardImage from "./server-settings-card.png";
import serverShutdownCardImage from "./server-shutdown-card.png";

export const ServerCard = (props: {
    name: string,
    category: string,
    imageUrl: string,
    onClick?: () => void,
}) => (
    <Card
        isPressable
        isHoverable
        onClick={props.onClick}
    >
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                    {props.category}
                </Text>
                <Text h4 color="white">
                    {props.name}
                </Text>
            </Col>
        </Card.Header>
        <Card.Image
            src={props.imageUrl}
            objectFit="cover"
            width="100%"
            height={340}
            alt={props.name}
        />
    </Card>
);

export const ServerInfoCard = () => {
    const navigate = useNavigate();
    const handleClick = async () => {
        setTimeout(function() {
            navigate("/server-info");
        }, 350)
    };
    return <ServerCard name={"Información del servidor"} category={"Monitorización"} imageUrl={serverInfoCardImage} onClick={() => handleClick()} />
}

export const ServerShutdownCard = () => {
    const navigate = useNavigate();
    const handleClick = async () => {
        setTimeout(function() {
            navigate("/server-shutdown");
        }, 350)
    };
    return <ServerCard name={"Apagar el servidor"} category={"Control"} imageUrl={serverShutdownCardImage} onClick={() => handleClick()} />
}

export const GithubCard = () => {
    const handleClick = async () => {
        setTimeout(function() {
            window.location.href = "https://github.com/luzmimosa/beo-server";
        }, 350)
    };
    return <ServerCard name={"Tutoriales y código fuente"} category={"Documentación"} imageUrl={githubImage} onClick={() => handleClick()} />
}

export const LevelManagerCard = () => {
    const navigate = useNavigate();
    const handleClick = async () => {
        setTimeout(function() {
            navigate("/level-manager");
        }, 350)
    };
    return <ServerCard name={"Gestión de niveles"} category={"Configuración"} imageUrl={levelManagerCardImage} onClick={() => handleClick()} />
}

export const LogsCard = () => {
    const navigate = useNavigate();
    const handleClick = async () => {
        setTimeout(function() {
            navigate("/logs");
        }, 350)
    };
    return <ServerCard name={"Archivos de log"} category={"Monitorización"} imageUrl={logsCardImage} onClick={() => handleClick()} />
}

export const HardwareCard = () => {
    const navigate = useNavigate();
    const handleClick = async () => {
        setTimeout(function() {
            navigate("/hardware");
        }, 350)
    };
    return <ServerCard name={"Recursos del servidor"} category={"Monitorización"} imageUrl={hardwareCardImage} onClick={() => handleClick()} />
}

export const ConsoleCard = () => {
    const navigate = useNavigate();
    const handleClick = async () => {
        setTimeout(function() {
            navigate("/console");
        }, 350)
    };
    return <ServerCard name={"Consola del servidor"} category={"Control"} imageUrl={consoleCardImage} onClick={() => handleClick()} />
}

export const ServerSettingsCard = () => {
    const navigate = useNavigate();
    const handleClick = async () => {
        setTimeout(function() {
            navigate("/server-settings");
        }, 350)
    };
    return <ServerCard name={"Ajustes del servidor"} category={"Configuración"} imageUrl={serverSettingsCardImage} onClick={() => handleClick()} />
}