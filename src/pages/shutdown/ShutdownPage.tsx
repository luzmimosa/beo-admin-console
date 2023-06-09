import React, {useState} from "react";
import {PageTitle} from "../../components/Text";
import {Card, Text, Row, Button, Grid, Progress} from "@nextui-org/react";
import {forceServerShutdown, requestServerShutdown} from "../../api/ServerApi";

export const ShutdownPage = () => {

    const [shutdownState, setShutdownState] = useState(0)
    const [serverShutdownResult, setServerShutdownResult] = useState(false);

    const handleShutdownRequestButton = () => {
        setShutdownState(1);
        requestServerShutdown()
            .then(result => {
                setShutdownState(2);
                setServerShutdownResult(result)
            });
    }

    const handleForceShutdownButton = () => {
        setShutdownState(1);
        forceServerShutdown()
            .then(result => {
                setShutdownState(2);
                setServerShutdownResult(result)
            });
    }

    let content = null;

    switch (shutdownState) {
        case 0:
            content = (
                <Grid.Container gap={2}>
                    <Grid sm={12} md={5}>
                        <Card css={{ mw: "330px" }}>
                            <Card.Header>
                                <Text b>Solicitar apagado controlado</Text>
                            </Card.Header>
                            <Card.Divider />
                            <Card.Body css={{ py: "$10" }}>
                                <Text>
                                    El apagado controlado evita posibles pérdidas de datos y previene la aparición de corrupción en el servidor. <b>Es la opción más recomendada.</b>
                                </Text>
                            </Card.Body>
                            <Card.Divider />
                            <Card.Footer>
                                <Row justify="flex-end">
                                    <Button size="sm" color={"error"} onClick={() => handleShutdownRequestButton()}>Apagar</Button>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Grid>
                    <Grid sm={12} md={5}>
                        <Card css={{ mw: "330px" }}>
                            <Card.Header>
                                <Text b>Forzar apagado</Text>
                            </Card.Header>
                            <Card.Divider />
                            <Card.Body css={{ py: "$10" }}>
                                <Text>
                                    Si el apagado controlado no funciona, es posible que el servidor haya dejado de responder debido a algún error de código. Al forzar el apagado, garantizas que el servidor se cierre, pero <b>puede provocar pérdidas de datos.</b>
                                </Text>
                            </Card.Body>
                            <Card.Divider />
                            <Card.Footer>
                                <Row justify="flex-end">
                                    <Button size="sm" color={"error"} onClick={() => handleForceShutdownButton()}>Forzar apagado</Button>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Grid>
                </Grid.Container>
            );
            break;
        case 1:
            content = (
                <Grid.Container xs={12} sm={6} gap={2}>
                    <Text>Apagando el servidor</Text>
                    <Grid>
                        <Progress
                            indeterminated
                            value={50}
                            color="secondary"
                            status="secondary"
                        />
                    </Grid>
                </Grid.Container>
            );
            break;
        case 2:
            if (serverShutdownResult) {
                content = <Text h2 color={"primary"}>Servidor apagado con éxito</Text>
            } else {
                content = <Text h2 color={"error"}>Error al apagar el servidor</Text>
            }
    }

    return (
        <div id={"log-files-page"}>
            <PageTitle text={"Apagar el servidor"} />

            {content}
        </div>
    );
}