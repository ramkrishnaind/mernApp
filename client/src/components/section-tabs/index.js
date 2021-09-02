import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SectionTabPanel from "../section-tab-panel";
import OuterCarouselSlider from "../outer-carousel-slider";
import './section-tabs.css';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const SectionTabs = (props) => {
  const {propertyData} = props;
  console.log("propertyData", props, propertyData);
  const {sell, rent, construction, interior} = propertyData;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log("val", newValue);
    setValue(newValue);
  };

  const tabs = () => {
    return Object.keys(propertyData).map((data) => {
      return <Tab label={data} />;
    });
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        {
          tabs()
        }
        {console.log("val", value)}
      </Tabs>
      <SectionTabPanel value={value} index={0}>
        <OuterCarouselSlider items={sell} />
      </SectionTabPanel>
      <SectionTabPanel value={value} index={1}>
        <OuterCarouselSlider items={rent} />
      </SectionTabPanel>
      <SectionTabPanel value={value} index={2}>
        <OuterCarouselSlider items={construction} />
      </SectionTabPanel>
      <SectionTabPanel value={value} index={3}>
        <OuterCarouselSlider items={interior} />
      </SectionTabPanel>
    </div>
  );
};

export default SectionTabs;
