import './App.css';
import ResourceItem from "./components/ResourceItem/ResourceItem";
import Navbar from "./components/UI/Navbar/Navbar";
import Resources from "./components/Resources/Resources";

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
    <div>
        <Navbar />
      <header className="app-container">
          <Resources resources={resources}/>



      </header>
    </div>
  );
}

export default App;
