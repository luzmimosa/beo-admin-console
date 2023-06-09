import React from "react";
import {Grid} from "@nextui-org/react";
import {PageTitle} from "../../components/Text";
import {
    ConsoleCard,
    GithubCard, HardwareCard,
    LevelManagerCard,
    LogsCard,
    ServerCard,
    ServerInfoCard, ServerSettingsCard,
    ServerShutdownCard
} from "./Cards";

export const HomePage = () => {
    return (
        <div id={"home-page"}>
            <PageTitle text={"Consola del servidor"} hideHome={true} />
            <Grid.Container gap={2} justify="center">
                <Grid xs={6}>
                    <ServerInfoCard />
                </Grid>
                <Grid xs={6}>
                    <LevelManagerCard />
                </Grid>
                <Grid xs={6}>
                    <LogsCard />
                </Grid>
                <Grid xs={3}>
                    <HardwareCard />
                </Grid>
                <Grid xs={3}>
                    <GithubCard />
                </Grid>
                <Grid xs={3}>
                    {/*<ServerSettingsCard />*/}
                </Grid>
                <Grid xs={6}>
                    {/*<ConsoleCard />*/}
                </Grid>
                <Grid xs={3}>
                    <ServerShutdownCard />
                </Grid>
            </Grid.Container>
        </div>
    );
}