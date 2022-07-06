// import logo from './logo.svg';
import './App.css';
import ResourceItem from "./components/ResourceItem/ResourceItem";

function App() {
    const resources = [
        {
            id: 'e1',
            resource_title: 'iop links',
            resource_resources: "01.01.01",
            resource_date: new Date(2020, 7, 14),
        },
        {
            id: 'e2',
            resource_title: 'maintenance links',
            resource_resources: "02.02.02",
            resource_date: new Date(2021, 2, 12) },
        {
            id: 'e3',
            resource_title: 'phone_links',
            resource_resources: "03.03.03",
            resource_date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            resource_title: 'aeon portal links',
            resource_reference: 40404,
            resource_date: new Date(2021, 5, 12),
        },
    ];






  return (
    <div className="App">
      <header className="App-header">


          <ResourceItem
          resourceTitle = {resources[0].resource_title}
          resourceDate = {resources[0].resource_date}
          resourceResource = {resources[0].resource_resources}
          />
          <ResourceItem
              resourceTitle = {resources[1].resource_title}
              resourceDate = {resources[1].resource_date}
              resourceResource = {resources[1].resource_resources}/>
          <ResourceItem
              resourceTitle = {resources[2].resource_title}
              resourceDate = {resources[2].resource_date}
              resourceResource = {resources[2].resource_resources}/>
          <ResourceItem
              resourceTitle = {resources[3].resource_title}
              resourceDate = {resources[3].resource_date}
              resourceResource = {resources[3].resource_resources}/>
      </header>
    </div>
  );
}

export default App;
