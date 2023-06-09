import React from "react";
import {BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";
import {Button, Container, NextUIProvider, Text} from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import {BlurryParticlesWallpaper} from "./wallpaper/BlurryParticlesWallpaper";

import './App.css';
import {GlobalLayout} from "./layout/GlobalLayout";
import {HomePage} from "./pages/home/HomePage";
import {darkTheme} from "./theme/Themes";
import {ServerInfoPage} from "./pages/serverInfo/ServerInfoPage";
import {LogFilesPage} from "./pages/logFiles/LogFilesPage";
import {ShutdownPage} from "./pages/shutdown/ShutdownPage";
import {JvmResourcesPage} from "./pages/jvmResources/JvmResourcesPage";
import {LevelsPage} from "./pages/levelsPage/LevelsPage";

export const App = () => {
    return (
        <NextThemesProvider defaultTheme={'system'}>
            <BlurryParticlesWallpaper />
            <NextUIProvider theme={darkTheme}>
                <GlobalLayout navItems={<h1>Nav items</h1>}>
                    <HashRouter>
                        <Routes>
                            <Route path="/">
                                <Route index element={<HomePage />} />

                                <Route path={"server-info"} element={<ServerInfoPage />} />
                                <Route path={"logs"} element={<LogFilesPage />} />
                                <Route path={"server-shutdown"} element={<ShutdownPage />} />
                                <Route path={"hardware"} element={<JvmResourcesPage />} />
                                <Route path={"level-manager"} element={<LevelsPage />} />

                                <Route path="*" element={<HomePage />} />
                            </Route>
                        </Routes>
                    </HashRouter>
                </GlobalLayout>
            </NextUIProvider>
        </NextThemesProvider>
    );
}