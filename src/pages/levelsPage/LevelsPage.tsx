import React from "react";
import {PageTitle} from "../../components/Text";
import {LevelInfo, reloadLevelsAndOrbs, startLevel, stopLevel, useLevelInfo} from "../../api/LevelApi";

import {Text, Row, Col, Tooltip, theme, Table, Loading, Button} from "@nextui-org/react";
import {IconButton} from "../../components/Icons";
import {ComplexIcons, SvgIcons} from "../../components/Icons";

const columns = [
    { name: "Nivel", key: "name" },
    { name: "Orbes máximos", key: "limit" },
    { name: "Estado", key: "status" },
    { name: "Acciones", key: "actions" },
];

export const LevelsPage = () => {

    const fetchedLevels = useLevelInfo();

    if (!fetchedLevels) {
        return (
            <div id={"levels-page"}>
                <PageTitle text={"Gestión de niveles"} />
                <Loading>Obteniendo niveles</Loading>
            </div>
        );
    }

    if (fetchedLevels.length === 0) {
        return (
            <div id={"levels-page"}>
                <PageTitle text={"Gestión de niveles"} />
                <Text>No hay niveles registrados</Text>
            </div>
        );
    }

    const levels = [];
    for (let i = 0; i < fetchedLevels.length; i++) {
        levels.push({
            id: fetchedLevels[i],
            name: fetchedLevels[i].name,
            max_players: fetchedLevels[i].max_players,
            state: fetchedLevels[i].state,
        });
    }

    const renderLevelCell = (level: LevelInfo, columnKey: React.Key) => {
        switch (columnKey) {
            case "name":
                return <Text>{level.name}</Text>;
            case "limit":
                return <Text>{level.max_players}</Text>;
            case "status":
                let status = "red" as "red" | "yellow" | "green";
                switch (level.state) {
                    case 2:
                        status = "yellow";
                        break;
                    case 1:
                        status = "green";
                        break;
                    case 0:
                        status = "red";
                        break;
                }
                return <ComplexIcons.StyledBadge type={status}>
                    {
                        level.state === 0 ? "Cargado" : level.state === 1 ? "Ejecutando" : "Finalizado"
                    }
                </ComplexIcons.StyledBadge>;
            case "actions":
                return (
                    <Row justify="center" align="center">
                        {(level.state === 0) && (
                            <Col css={{ d: "flex" }}>
                                <Tooltip
                                    content="Ejecutar nivel"
                                    onClick={() => {}}
                                >
                                    <IconButton onClick={() => handleStartLevelRequest(level)}>
                                        {SvgIcons.PLAY(theme?.colors.primary.value ?? "#ffc800")}
                                    </IconButton>
                                </Tooltip>
                            </Col>
                        )}
                        {(level.state == 1) && (
                            <Col css={{ d: "flex" }}>
                                <Tooltip
                                    content="Detener ejecución"
                                onClick={() => {}}
                                >
                                    <IconButton onClick={() => handleStopLevelRequest(level)}>
                                        {SvgIcons.STOP(theme?.colors.error.value ?? "#ffc800")}
                                    </IconButton>
                                </Tooltip>
                            </Col>
                        )}
                    </Row>
                );
        }
    }

    const columns = [
        { name: "Nivel", uid: "name" },
        { name: "Límite de orbes", uid: "limit" },
        { name: "Estado", uid: "status" },
        { name: "acciones", uid: "actions" },
    ];

    const handleStartLevelRequest = (level: LevelInfo) => {
        startLevel(level.name);
    }

    const handleStopLevelRequest = (level: LevelInfo) => {
        stopLevel(level.name);
    }

    const handleLevelReloadRequest = () => {
        reloadLevelsAndOrbs();
    }

    return (
        <div id={"levels-page"}>
            <PageTitle text={"Gestión de niveles"} />
            <Table
                css={{
                    height: "auto",
                    minWidth: "100%",
                }}
                selectionMode="none"
            >
                <Table.Header columns={columns}>
                    {(column) => (
                        <Table.Column
                            key={column.uid}
                            hideHeader={column.uid === "actions"}
                            align={column.uid === "actions" ? "center" : "start"}
                        >
                            {column.name}
                        </Table.Column>
                    )}
                </Table.Header>
                <Table.Body items={levels}>
                    {(item: LevelInfo) => (
                        <Table.Row>
                            {(columnKey) => (
                                <Table.Cell>{renderLevelCell(item, columnKey)}</Table.Cell>
                            )}
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
            <Button onPress={() => handleLevelReloadRequest()}>Recargar niveles y orbes</Button>
        </div>

    );
}

type UserType = {
    id: string | number,
    name?: string,
    email?: string,
    role?: string,
    team?: string,
    status: "active" | "paused" | "vacation",
    age?: string,
    avatar?: string,
};