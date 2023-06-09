import React, {useState} from "react";
import {PageTitle} from "../../components/Text";
import {downloadLog, LogFileInfo, useLogInfo} from "../../api/LogsApi";
import {Button, Table, Text, Popover, Row, Grid, Spacer} from "@nextui-org/react";

export const LogFilesPage = () => {
    const logs = useLogInfo();

    return (
        <div id={"log-files-page"}>
            <PageTitle text={"Logs del servidor"} />
            {logs && logs.length > 0 ? (
                <LogTable logs={logs} />
            ) : (
                <Text>No hay logs registrados en el servidor.</Text>
            )}
        </div>
    );
}
const dateFormatOptions: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
};

const LogTable = (props: {logs: LogFileInfo[]}) => {

    const columns = [
        { name: "Nombre de archivo", uid: "name" },
        { name: "Fecha", uid: "date" },
        { name: "Peso", uid: "size" },
    ];

    const renderCell = (item: LogFileInfo, columnKey: React.Key) => {
        switch (columnKey) {
            case "name":
                return (
                    <Popover>
                        <Popover.Trigger>
                            <Button color="primary" auto flat>{item.name}</Button>
                        </Popover.Trigger>
                        <Popover.Content>
                            <DownloadPopup name={item.name} />
                        </Popover.Content>
                    </Popover>
                );
            case "date":
                return <Text>{ item.last_modified.toLocaleString('es-ES', dateFormatOptions) }</Text>;
            case "size":
                return <Text>{ item.size }</Text>;
        }
    }

    return (
        <Table
            aria-label="Niveles registrados en el servidor"
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
                        align={column.uid === "size" ? "center" : "start"}
                    >
                        {column.name}
                    </Table.Column>
                )}
            </Table.Header>
            <Table.Body items={props.logs}>
                {(item: LogFileInfo) => (
                    <Table.Row
                        key={item.name}
                    >
                        {
                            (columnKey) => (
                                <Table.Cell>
                                    {renderCell(item, columnKey)}
                                </Table.Cell>
                            )
                        }
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
    )
}

const DownloadPopup = (props: {name: string}) => {

    const downloadFile = () => {
        downloadLog(props.name);
    }

    return (
        <Grid.Container
            css={{ borderRadius: "14px", padding: "0.75rem", maxWidth: "330px" }}
        >
            <Row justify="center" align="center">
                <Text b>Descargar archivo</Text>
            </Row>
            <Row>
                <Text>
                    Puedes descargar el archivo de log pulsando el botón de abajo.
                </Text>
            </Row>

            <Spacer y={1} />

            <Grid.Container justify="space-between" alignContent="center">
                <Grid>
                    <Button size="sm" light onClick={() => downloadFile()} shadow color="secondary">
                        Descargar
                    </Button>
                </Grid>
            </Grid.Container>
        </Grid.Container>
    );
};