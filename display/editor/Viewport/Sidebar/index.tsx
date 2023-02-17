import { useEditor } from "libs/core/src";
import { Layers } from "libs/layers/src";
import React, { useState } from "react";
import styled from "styled-components";

import { SidebarItem } from "./SidebarItem";
import { Tabs, Tab, makeStyles } from "@material-ui/core";

import CustomizeIcon from "../../../../public/icons/customize.svg";
import LayerIcon from "../../../../public/icons/layers.svg";
import { Toolbar } from "../../Toolbar";

export const SidebarDiv = styled.div<{ enabled: boolean }>`
  min-width: 320px;
  opacity: ${(props) => (props.enabled ? 1 : 0)};
  background: #2c2c2c;
  margin-right: ${(props) => (props.enabled ? 0 : -280)}px;
`;
// const CarbonAdsContainer = styled.div`
//   width: 100%;
//   margin-top: auto;

//   #carbonads * {
//     margin: initial;
//     padding: initial;
//   }

//   #carbonads {
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
//       Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial,
//       sans-serif;

//     padding: 10px 0.5rem;
//     border-top: 1px solid rgb(229 231 235);
//   }

//   #carbonads {
//     display: flex;
//     width: 100%;
//     background-color: transparent;
//     z-index: 100;
//   }

//   #carbonads a {
//     color: inherit;
//     text-decoration: none;
//   }

//   #carbonads a:hover {
//     color: inherit;
//   }

//   #carbonads span {
//     position: relative;
//     display: block;
//     overflow: hidden;
//   }

//   #carbonads .carbon-wrap {
//     display: flex;
//   }

//   #carbonads .carbon-img {
//     display: block;
//     margin: 0;
//     line-height: 1;
//   }

//   #carbonads .carbon-img img {
//     display: block;
//   }

//   #carbonads .carbon-text {
//     font-size: 11px;
//     padding: 10px;
//     margin-bottom: 16px;
//     line-height: 1.5;
//     text-align: left;
//     color: #333333;
//     font-weight: 400;
//   }

//   #carbonads .carbon-poweredby {
//     display: block;
//     padding: 6px 8px;
//     text-align: center;
//     text-transform: uppercase;
//     letter-spacing: 0.5px;
//     font-weight: 600;
//     font-size: 8px;
//     line-height: 1;
//     position: absolute;
//     bottom: 0;
//     right: 0;
//     color: #8f8f8f;
//   }
// `;

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyleTab = makeStyles(() => ({
  "&.MuiTab-root": {
    minWidth: "120px",
    width: "120px"
  },
}));
const useStyleTabs = makeStyles(() => ({
  scrollButtons: {
    "& .MuiTouchRipple-root": {
      backgroundImage: "linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.25),hsla(0,0%,100%,.55))",
    },
    "& svg": {
      fill : "white",
      fontSize: "1.5rem"
    },
  },
}));
export const Sidebar = () => {
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const [currentTab, setCurrentTab] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };
  const tabsStyle = useStyleTabs({});
  const tabStyle = useStyleTab({});                                             
                                           
  return (
    <SidebarDiv enabled={enabled} className="sidebar transition bg-dark w-2">
      <div className="flex flex-col h-full">
        <Tabs
          value={currentTab}
          onChange={handleChangeTab}
          aria-label="simple tabs example"
          scrollButtons="auto"
          variant="scrollable"
          classes={tabsStyle}
        >
          <Tab label="Customize" className="text-white-important" {...a11yProps(0)} classes={tabStyle}/>
          <Tab label="Layers" className="text-white-important" {...a11yProps(1)} classes={tabStyle}/>
          <Tab label="Events" className="text-white-important" {...a11yProps(2)} classes={tabStyle}/>
        </Tabs>
        <SidebarItem
          role="tabpanel"
          id={`simple-tabpanel-${0}`}
          aria-labelledby={`simple-tab-${0}`}
          icon={CustomizeIcon}
          title="Customize"
          height="full"
          visible={currentTab === 0}
        >
          <Toolbar type="settings"/>
        </SidebarItem>
        <SidebarItem
        role="tabpanel"
        id={`simple-tabpanel-${1}`}
        aria-labelledby={`simple-tab-${1}`}
          icon={LayerIcon}
          title="Layers"
          height="full"
          visible={currentTab === 1}
        >
          <div className="">
            <Layers expandRootOnLoad={true} />
          </div>
        </SidebarItem>
        <SidebarItem
          role="tabpanel"
          id={`simple-tabpanel-${2}`}
          aria-labelledby={`simple-tab-${2}`}
          icon={CustomizeIcon}
          title="Customize"
          height="full"
          visible={currentTab === 2}
        >
          <Toolbar type="events"/>
        </SidebarItem>
      </div>
    </SidebarDiv>
  );
};
