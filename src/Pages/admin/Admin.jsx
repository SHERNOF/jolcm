import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Container from "../../Components/common/container/Container";
import Section from "../../Components/common/section/Section";
import classes from "./admin.module.css";

export default function Admin() {
  const userInfo = useSelector((state) => state.userInfo);
  console.log(userInfo);

  return (
    <Section>
      <Container>
        {userInfo ? (
          <div className={classes.admin}>Hi {userInfo.name}!!!</div>
        ) : (
          console.log(userInfo)
        )}
      </Container>
    </Section>
  );
}
