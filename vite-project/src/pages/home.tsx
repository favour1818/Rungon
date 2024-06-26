import { useState, useEffect } from "react";
import InfoBar from "../components/infobar";
import HouseCard from "../components/housecard";
import uuid from "react-uuid";

function Home() {
  const [data, setData] = useState<any>([]);
  const [hitsCounts, setHitCounts] = useState(0);
  const [displayArea, setDisplayArea] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "5dacd2fb77msh980e60fc98afb92p12f970jsn6834fd618af3",
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);
        const resultText = await response.text();
        const result = JSON.parse(resultText);
        setData(result);
      } catch (error: any) {
        console.error(`the Error: ${error.name} was found from the code`);
      }
    };
    fetchData();
  }, []);

  setTimeout(() => {
    setHitCounts(data.hitsPerPage);
  }, 1200);
  setTimeout(() => {

    const cards = data.hits?.map((result: any) => {
      return (
        <>
          <HouseCard
            key={uuid}
            name={result.location[3].name}
            country={result.location[1].name}
            bath={result.baths}
            image={result.coverPhoto.url}
            size={Math.round(result.area)}
            parkingNumber={result.baths}
            price={result.price}
            rentFrequency={result.rentFrequency}
            isVerified={result.isVerified}
            location={result.location[2].name}
            bedroom={result.rooms}
            ranking={result.score}
          />
        </>
      );
    });
    setDisplayArea(cards);
  }, 1000);

  return (
    <>
      <h1 id="header-text">
        <span id="content1">Discover the Best Rental Properties</span> with Our
        Home Rent Service
      </h1>
      <section id="display-area">
        <InfoBar hitsPerPage={hitsCounts} />
      </section>

      <section className="card-display-area">{displayArea}</section>
    </>
  );
}

export default Home;
