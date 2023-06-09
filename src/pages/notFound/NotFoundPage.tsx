import React from "react";
import {Link} from "react-router-dom";

export const NotFoundPage = () => {
    return (
        <div>
            <h1>Página no encontrada</h1>
            <Link to={"/"}>Volver al inicio</Link>
        </div>
    );
}