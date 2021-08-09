import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100%",
    // border: "1px solid #000",
    maxWidth: 1000,
    margin: "30px auto 0",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tabpanel: {
    width: "100%",
    maxWidth: "1000px",
  },
  contenttab: { margin: "0 auto 0", padding: "0 50px 0" },
}));
