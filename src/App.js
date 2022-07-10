import "./App.css";

import Navbar from "./components/UI/Navbar/Navbar";
import NewResource from "./components/NewResource/NewResource";
import AnimatedCursor from "react-animated-cursor";
import Time from "./components/Clocks/Time/Time";
import Resources from "./components/Resources/Resources";
import Clock from "./components/Clocks/RawTime/RawTime";
import StickySliderNavigation from "./components/UI/Navbar/StickSliderNavigation/StickyNavigation";
import {Component} from "@types/react";

class StickyNavigation extends Component {
    render() {
        return null;
    }
}

function App() {
    const resources = [
        {
            id: 'e1',
            resource_title: 'iop links',
            resource_resources: "01.01.01",
            resource_date: new Date(2020, 7, 14),
            resource_counter: 0,
            resource_reference_number: 123451,

        },
        {
            id: 'e2',
            resource_title: 'maintenance links',
            resource_resources: "02.02.02",
            resource_date: new Date(2021, 2, 12),
            resource_counter: 0,
            resource_reference_number: 123452,

        },
        {
            id: 'e3',
            resource_title: 'phone_links',
            resource_resources: "03.03.03",
            resource_date: new Date(2021, 2, 28),
            resource_counter: 0,
            resource_reference_number: 123453,

        },
        {
            id: 'e4',
            resource_title: 'aeon portal links',
            resource_resources: "40.04.04",
            resource_date: new Date(2021, 5, 12),
            resource_counter: 0,
            resource_reference_number: 123454,

        },
    ];

    return (
        <div>

            <StickyNavigation />
            {/*<NewResource/>*/}
            {/*<AnimatedCursor*/}
            {/*    color="255,255,255"*/}
            {/*    innerSize={8}*/}
            {/*    outerSize={35}*/}
            {/*    innerScale={1}*/}
            {/*    outerScale={1.7}*/}
            {/*    outerAlpha={0}*/}
            {/*    outerStyle={{*/}
            {/*        border: '3px solid #fff'*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<Time />*/}
            {/*<Resources items={resources}/>*/}

            <Clock/>





        </div>
    );
}

export default App;
