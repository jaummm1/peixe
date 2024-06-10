import React from "react";
import { GiCirclingFish } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { FlexboxGrid } from "rsuite";
import "./Header.css";

const HeaderLogin = () => {
  const history = useNavigate();
  return (
    <header className="header">
      <FlexboxGrid align="middle">
        <FlexboxGrid.Item colspan={3} style={{marginRight: "1rem"}}>
          <GiCirclingFish size={30} />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={13} >
          <h5 style={{ margin: 0 }}>Fish-Care</h5>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={3}>
          <GiCirclingFish size={30} />
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </header>
  );
};

export default HeaderLogin;
