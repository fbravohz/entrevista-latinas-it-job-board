"use client";

import React from "react";
import { Card } from "react-bootstrap";

export const CardComponent = ({
    headerChildren,
    bodyChildren = <></>,
    hasFooter = false,
    footerChildren = <></>,
    cardProps = {},
}) => {
    return (
        <Card className="p-3" {...cardProps}>
            {headerChildren && <Card.Header>{headerChildren}</Card.Header>}
            <Card.Body>{bodyChildren}</Card.Body>
            {hasFooter && <Card.Footer>{footerChildren}</Card.Footer>}
        </Card>
    );
};
