"use client";

import Board from "@/components/board/Board";
import { CardComponent } from "@/components/containers/CardComponent";
import { Row } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Row>
        <CardComponent
          cardProps={{
            className: "p-3",
            style: { backgroundColor: "#f4f4f4" },
          }}
          bodyChildren={<Board/>}
        />
      </Row>
    </div>
  );
}
