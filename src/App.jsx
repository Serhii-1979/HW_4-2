import React, { useState } from "react";
import CitySelector from "./HW_4/components/CitySelector";
import CityCard from "./HW_4/components/CityCard";
import "./HW_4/styles/CityCard.module.css";
import "./HW_4/styles/CitySelector.module.css";
import "./HW_4/styles/Slider.module.css";
import "./HW_4/styles/app.css";

const App = () => {
  const cities = [
    {
      name: "New York",
      images:[
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Statue_of_Liberty%2C_NY.jpg/1024px-Statue_of_Liberty%2C_NY.jpg",
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/07/Dostoprimechatelnosti-Nyu-Yorka-e1531365881714.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Central_Park_-_The_Pond_%2848377220157%29.jpg/1024px-Central_Park_-_The_Pond_%2848377220157%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/NYC_Pride_2019_26.jpg/1024px-NYC_Pride_2019_26.jpg"
      ],
      description:
        "New York, often called New York City to distinguish it from the state of New York, is the most populous city in the United States.With an estimated population in 2023 of 8,258,035 distributed over 300.46 square miles (778.2 km2), the city is the most densely populated major city in the United States. New York has more than double the population of Los Angeles, the nation's second-most populous city. New York is the geographical and demographic center of both the Northeast megalopolis and the New York metropolitan area, the largest metropolitan area in the U.S. by both population and urban area. With more than 20.1 million people in its metropolitan statistical area and 23.5 million in its combined statistical area as of 2020, New York City is one of the world's most populous megacities.",
      facts: [
        {
          text: "Statue of Liberty",
          url: "https://www.nps.gov/stli/index.htm",
        },
        { text: "Times Square", url: "https://www.timessquarenyc.org/" },
        { text: "Central Park", url: "https://www.centralparknyc.org/" },
      ],
    },
    {
      name: "Los Angeles",
      images:[
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Los_Angeles%2C_CA_from_the_air.jpg/290px-Los_Angeles%2C_CA_from_the_air.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Crossing_1st_St._%2815569188450%29_%28cropped2%29.jpg/1024px-Crossing_1st_St._%2815569188450%29_%28cropped2%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Sunny_business_district_roads_%28Unsplash%29_%28cropped%29.jpg/1024px-Sunny_business_district_roads_%28Unsplash%29_%28cropped%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Aerial_view_of_beaches_%28Venice%29_July_2022_%283%29.jpg/1024px-Aerial_view_of_beaches_%28Venice%29_July_2022_%283%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Sunny_business_district_roads_%28Unsplash%29_%28cropped%29.jpg/1024px-Sunny_business_district_roads_%28Unsplash%29_%28cropped%29.jpg"
      ],
      description:
        "Los Angeles, often referred to by its initials L.A., is the largest city in California.The majority of the city proper lies in a basin in Southern California adjacent to the Pacific Ocean in the west and extending partly through the Santa Monica Mountains and north into the San Fernando Valley, with the city bordering the San Gabriel Valley to its east. It covers about 469 square miles (1,210 km2), and is the county seat of Los Angeles County, which is the most populous county in the United States with an estimated 9.86 million residents as of 2022. It is the fourth-most visited city in the U.S. with over 2.7 million visitors as of 2022.",
      facts: [
        { text: "Hollywood", url: "https://www.hollywood.com/" },
        { text: "Santa Monica", url: "https://www.santamonica.com/" },
        { text: "Venice Beach", url: "https://www.venicebeach.com/" },
      ],
    },
    {
      name: "Berlin",
      images:[
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Berliner_Dom_-_panoramio_%2820%29.jpg/1024px-Berliner_Dom_-_panoramio_%2820%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Berlin_TV_tower_Dec_2023.png/1024px-Berlin_TV_tower_Dec_2023.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Berlin_Hackesche_H%C3%B6fe1.jpg/1024px-Berlin_Hackesche_H%C3%B6fe1.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Bikinihaus_Berlin-1210760.jpg/1024px-Bikinihaus_Berlin-1210760.jpg"
      ],
      description:
        "Berlin is the capital and largest city of Germany, both by area and by population. Its more than 3.85 million inhabitants make it the European Union's most populous city, as measured by population within city limits.Berlin was built along the banks of the Spree river, which flows into the Havel in the western borough of Spandau. The city incorporates lakes in the western and southeastern boroughs, the largest of which is Müggelsee. About one-third of the city's area is composed of forests, parks and gardens, rivers, canals, and lakes.",
      facts: [
        {
          text: "Zoologischer Garten Berlin",
          url: "https://www.zoo-berlin.de/",
        },
        {
          text: "Tiergarten park",
          url: "https://www.visitberlin.de/en/tiergarten",
        },
        { text: "Berlin's Botanischer Garten", url: "https://www.bgbm.org/" },
      ],
    },
    {
      name: "Chicago",
      images:[
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/20090524_Buildings_along_Chicago_River_line_the_south_border_of_the_Near_North_Side_and_Streeterville_and_the_north_border_of_Chicago_Loop%2C_Lakeshore_East_and_Illinois_Center.jpg/1024px-thumbnail.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Chicago-00.jpg/1024px-Chicago-00.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Nature_Boardwalk_Lincoln_Park.JPG/1024px-Nature_Boardwalk_Lincoln_Park.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Chicago_Theatre_blend.jpg/1024px-Chicago_Theatre_blend.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Jay_Pritzker_Pavilion%2C_Chicago%2C_Illinois%2C_Estados_Unidos%2C_2012-10-20%2C_DD_09.jpg/1024px-Jay_Pritzker_Pavilion%2C_Chicago%2C_Illinois%2C_Estados_Unidos%2C_2012-10-20%2C_DD_09.jpg"
      ],
      description:
        "Chicago, officially the City of Chicago, is the most populous city in the U.S. state of Illinois, and the third most populous city in the United States.Located on the shore of Lake Michigan, Chicago was incorporated as a city in 1837 near a portage between the Great Lakes and the Mississippi River watershed. It grew rapidly in the mid-19th century. In 1871, the Great Chicago Fire destroyed several square miles and left more than 100,000 homeless, but Chicago's population continued to grow. Chicago made noted contributions to urban planning and architecture, such as the Chicago School, the development of the City Beautiful Movement, and the steel-framed skyscraper.",
      facts: [
        { text: "Willis Tower", url: "https://www.willistower.com/" },
        { text: "Navy Pier", url: "https://navypier.org/" },
        {
          text: "Millennium Park",
          url: "https://www.chicago.gov/city/en/depts/dca/supp_info/millennium_park.html",
        },
      ],
    },
    {
      name: "Houston",
      images:[
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Allen%27s_Landing_Houston_bayou_view.jpg/1024px-Allen%27s_Landing_Houston_bayou_view.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Houston_Skyline_%285374518048%29.jpg/1050px-Houston_Skyline_%285374518048%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Uptown_Houston_North_of_Guilford_Ct._and_McCue_Rd._Panoramic_2_-_Dec_2013.jpg/1050px-Uptown_Houston_North_of_Guilford_Ct._and_McCue_Rd._Panoramic_2_-_Dec_2013.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Skyline_of_the_Texas_Medical_Center_-_Houston%2C_TX_-_December_2019.jpg/1050px-Skyline_of_the_Texas_Medical_Center_-_Houston%2C_TX_-_December_2019.jpg"
      ],
      description:
        "Houston is the most populous city in the U.S. state of Texas, fourth most populous city in the United States, most populous city in the Southern United States, as well as the sixth most populous in North America.Comprising a land area of 640.4 square miles (1,659 km2), Houston is the ninth-most expansive city in the United States (including consolidated city-counties). It is the largest city in the United States by total area whose government is not consolidated with a county, parish, or borough. Though primarily in Harris County, small portions of the city extend into Fort Bend and Montgomery counties, bordering other principal communities of Greater Houston such as Sugar Land and The Woodlands.",
      facts: [
        { text: "Space Center Houston", url: "https://spacecenter.org/" },
        { text: "Houston Zoo", url: "https://www.houstonzoo.org/" },
        { text: "Museum of Fine Arts", url: "https://www.mfah.org/" },
      ],
    },
    
  ];

  const [selectedCity, setSelectedCity] = useState(null);

  const handleCitySelect = (cityName) => {
    const city = cities.find((c) => c.name === cityName);
    setSelectedCity(city);
  };

  return (

    <div className="app__bg-img">
      <div className="App">
        <h1>City Selector App</h1>
        <CitySelector cities={cities} onCitySelect={handleCitySelect} />
        {selectedCity ? (
          <>
            <CityCard city={selectedCity} />
          </>
        ) : (
          <p>Please select a city to see its details.</p>
        )}
      </div>
    </div>
  );
};

export default App;