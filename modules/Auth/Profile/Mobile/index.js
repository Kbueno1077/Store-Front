import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import InfoTab from "../Tabs/InfoTab";
import PayTab from "../Tabs/PayTab";
import ChangePasswordTab from "../Tabs/ChangePasswordTab";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import InfoIcon from "@material-ui/icons/Info";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { TabPanel, a11yProps, useStyles } from "./MobileElements";

export default function IconLabelTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<InfoIcon />} label="INFORMACION GENERAL" />
        <Tab icon={<CreditCardIcon />} label="METODOS DE PAGO" />
        <Tab icon={<LockOpenIcon />} label="CAMBIAR CONTRASEÑA" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <InfoTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PayTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ChangePasswordTab />
      </TabPanel>

      <div className={classes.buttonwrapper}>
        <Link href="/" passref>
          <a>
            <Button className={classes.button} color="secondary">
              Ir Atrás
            </Button>
          </a>
        </Link>
      </div>
    </Paper>
  );
}
