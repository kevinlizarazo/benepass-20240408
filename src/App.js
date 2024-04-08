import "./App.css";
import { LoadingSpinner } from "./components/ui/LoadingSpinner";
import { CardContainer } from "./components/Card/CardContainer";
import mockDataset from "./mockDataset.json";
import { useEffect, useState } from "react";


function App() {
  const [mockCardData, setMockCardData] = useState(null);

  // note: I am using this useEffect as a
  // "simulated" API call to represent a delay in
  // fetching data, testing the LoadSpinner component
  useEffect(() => {
    setTimeout(() => {
      setMockCardData(mockDataset.cards);
    }, 1000);
  }, []); 

  return (
    <div className="App sm:flex sm:flex-wrap max-w-full ">
      {mockCardData ? (
        mockCardData.map((data) => <CardContainer key={data.mockId} data={data} />)
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}

export default App;
