import React, { useEffect, useState } from "react";
import PriceCard from "../price-card/price-card";
import { Tab, Tabs } from "../tab/tab";
import { priceCard as priceCardStyle } from "./price-page.style";

const dataAPI = `https://api.jsonbin.io/b/5f37d6294d93991036154add`;

const PricePage = () => {
    const [data, setData] = useState([]);

    // Fetching Data from outside API
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(dataAPI);
            const dataArray = await response.json();
            setData(data.concat(dataArray));
        }

        if (data.length === 0) {
            fetchData();
        };
    }, [data]);

    // Get tabs header text array
    const getTabsHeader = () => {
        const averageHomePricePoints = data.map(homePrice => homePrice.averageHomePricePoint);
        const distinctValues = averageHomePricePoints.filter((value, index, array) => array.indexOf(value) === index);
        return distinctValues;
    }

    /**
     * filter tab data of header from data collection
     * @param {string} header - text of header
     */
    const getTabData = (header) => {
        const filteredData = data.filter(homePrice => homePrice.averageHomePricePoint === header);
        return filteredData;
    }

    return (
        <Tabs>
            {getTabsHeader().map((header, index) =>
                <Tab key={index} name={header}>
                    {getTabData(header).map((data, index) => <PriceCard style={priceCardStyle} key={index} data={data.details} />)}
                </Tab>
            )}
        </Tabs>
    );
}

export default PricePage;