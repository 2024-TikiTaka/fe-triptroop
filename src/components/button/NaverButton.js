import React from "react";
import { Button } from "react-bootstrap";
import { Naver } from "../common/Icons";

const NaverButton = () => {
  return (
    <>
      <Button
        variant="light"
        size={"lg"}
        style={{ background: "#03c75a" }}
        className="fs-6 mb-0"
      >
        <Naver width={"18"} fill={"#fff"} />
        <span className="ms-2 text-white">네이버로 시작하기</span>
      </Button>
    </>
  );
};

export default NaverButton;
