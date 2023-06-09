import React from "react";
import {PageTitle} from "../../components/Text";
import {Card, Col, Grid, Text} from "@nextui-org/react";
import {useJvmInfo} from "../../api/JvmApi";
import {buildStyles, CircularProgressbar, CircularProgressbarWithChildren} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import _ from "lodash";

export const JvmResourcesPage = () => {

    const jvmInfo = useJvmInfo();

    if (!jvmInfo) return null;

    const memoryProportion = jvmInfo.usedMemory / jvmInfo.maxMemory;
    const diskProportion = (jvmInfo.rootSize + 1) / jvmInfo.rootSizeLimit;

    return (
        <div id={"jvm-resources-page"}>
            <PageTitle text={"Recursos del servidor"} />
            <Grid.Container gap={2} justify="center">
                <Grid xs={4}>
                    <Card
                        isHoverable
                    >
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                            <Col>
                                <Text h4 color="white">
                                    RAM
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Body>
                            <div style={{padding: "15%"}}>
                                <CircularProgressbar
                                    minValue={0}
                                    maxValue={jvmInfo.maxMemory}
                                    value={memoryProportion < 0.05 ? jvmInfo.maxMemory * 0.05 : jvmInfo.usedMemory}
                                    text={`${jvmInfo.usedMemory} MB`}
                                    circleRatio={0.75}
                                    styles={buildStyles({
                                        rotation: 1 / 2 + 1 / 8,
                                        strokeLinecap: "butt",
                                        pathColor: memoryProportion < 0.65 ? "#7B2CBF" : "#FF6D00",
                                        textColor: "#7B2CBF"
                                    })}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Card
                        isHoverable
                    >
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                            <Col>
                                <Text h4 color="white">
                                    Espacio en disco
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Body>
                            <div style={{padding: "15%"}}>
                                <CircularProgressbar
                                    minValue={0}
                                    maxValue={jvmInfo.maxMemory}
                                    value={diskProportion < 0.05 ? jvmInfo.rootSizeLimit * 0.05 : jvmInfo.rootSize}
                                    text={`${(jvmInfo.rootSize / 1024).toFixed(2)} GB`}
                                    circleRatio={0.75}
                                    styles={buildStyles({
                                        rotation: 1 / 2 + 1 / 8,
                                        strokeLinecap: "butt",
                                        pathColor: "#FF6D00",
                                        textColor: "#7B2CBF"
                                    })}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </div>
    );
}

function Separator(props: { turns: any; style: React.CSSProperties | undefined; }) {
    return (
        <div
            style={{
                position: "absolute",
                height: "100%",
                transform: `rotate(${props.turns}turn)`
            }}
        >
            <div style={props.style} />
        </div>
    );
}

function RadialSeparators(props: { count: number; style: any; }) {
    const turns = 1 / props.count;
    return _.range(props.count).map((index: any) => (
        <Separator turns={index * turns} style={props.style} />
    ));
}