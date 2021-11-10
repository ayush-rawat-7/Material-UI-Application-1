import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./UI/Header";
import theme from "./UI/Theme";
import { Footer } from "./UI/Footer";
import { LandingPage } from "./LandingPage";
import { Services } from "./Services";
import { CustomSoftware } from "./CustomSoftware";
import { MobileApps } from "./MobileApps";
import { Website } from "./Websites";
import { Revolution } from "./Revolution";
import { About } from "./About";

function App() {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [value, setValue] = React.useState(0)

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) =>
              <LandingPage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />}
          />
          <Route exact path="/services"
            render={(props) =>
              <Services
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />}
          />
          <Route
            exact
            path="/customsoftware"
            render={(props) =>
              <CustomSoftware
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />}
          />
          <Route
            exact
            path="/mobileapps"
            render={(props) =>
              <MobileApps
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />}
          />
          <Route exact path="/websites" render={(props) =>
            <Website
              {...props}
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
            />} />
          <Route
            exact
            path="/revolution"
            render={(props) =>
              <Revolution
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />}
          />
          <Route
            exact
            path="/about"
            render={(props) =>
              <About 
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />}
          />
          <Route exact path="/contact" component={() => <div>contact</div>} />
          <Route exact path="/estimate" component={() => <div>estimate</div>} />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
