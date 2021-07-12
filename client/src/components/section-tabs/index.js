import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SectionTabPanel from "../section-tab-panel";
import OuterCarouselSlider from "../outer-carousel-slider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const SectionTabs = (props) => {
    const {tabItems} = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab label="House" />
        <Tab label="Flats" />
        <Tab label="Apartments" />
        <Tab label="Villas" />
      </Tabs>
      <SectionTabPanel value={value} index={0}>
        <OuterCarouselSlider items={tabItems} />
      </SectionTabPanel>
      <SectionTabPanel value={value} index={1}>
        <OuterCarouselSlider items={tabItems} />
      </SectionTabPanel>
      <SectionTabPanel value={value} index={2}>
        <OuterCarouselSlider items={tabItems} />
      </SectionTabPanel>
      <SectionTabPanel value={value} index={3}>
        <OuterCarouselSlider items={tabItems} />
      </SectionTabPanel>
    </div>
  );
};

export default SectionTabs;
