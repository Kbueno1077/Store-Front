import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import InfoTab from "../Tabs/InfoTab";
import PayTab from "../Tabs/PayTab";
import ChangePasswordTab from "../Tabs/ChangePasswordTab";
import Link from "next/link";
import { TabPanel, a11yProps, useStyles } from "./DekstopElements";

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="información general" {...a11yProps(0)} />
        <Tab label="métodos de pago" {...a11yProps(1)} />
        <Tab label="cambiar contraseña" {...a11yProps(2)} />
        <Link href="/" passHref>
          <Tab component="a" label="ir atrás" />
        </Link>
      </Tabs>
      <TabPanel className={classes.tabpanel} value={value} index={0}>
        <div className={classes.contenttab}>
          <InfoTab />
        </div>
      </TabPanel>
      <TabPanel className={classes.tabpanel} value={value} index={1}>
        <div className={classes.contenttab}>
          <PayTab />
        </div>
      </TabPanel>
      <TabPanel className={classes.tabpanel} value={value} index={2}>
        <div className={classes.contenttab}>
          <ChangePasswordTab />
        </div>
      </TabPanel>
    </div>
  );
}
