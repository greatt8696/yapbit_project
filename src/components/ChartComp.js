import React, { useEffect, useRef, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
ChartJS.register(ArcElement, Tooltip, Legend);

const ChartComp = () => {
  const myAssets = useSelector((state) => state.myAssetReducer.myAssets);
  const coinsPrice = useSelector((state) => state.coinReducer.coinsPrice);

  const [datas, setDatas] = useState([]);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  });

  useEffect(() => {
    const assets = myAssets.filter((asset) => asset.size !== 0);
    const updatePrice = assets.map((asset) => {
      const findCoin = coinsPrice.find((coin) => coin.code === asset.code);
      return findCoin
        ? { ...asset, price: findCoin.trade_price, name: findCoin.name }
        : asset;
    });
    const values = updatePrice.map((asset) => asset.size * asset.price);
    const totalValue = values.reduce(
      (prevValue, currValue) => prevValue + currValue,
      0
    );
    setDatas(updatePrice);
    setChartData({
      ...chartData,
      labels: [...assets.map((asset) => asset.code)],
      datasets: [
        {
          label: "# of Votes",
          data: assets.map(
            (asset) => ((asset.size * asset.price) / totalValue) * 100
          ),
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
        },
      ],
    });
  }, [myAssets, coinsPrice]);

  return (
    <div className="w-[600px] mt-12 flex">
      <Doughnut className="mw-auto" data={chartData}></Doughnut>
      <div className="w-[600px] mt-6 flex flex-col">
        {datas.map(({ name, price, size, entryPrice }, idx) => (
          <div className="flex w-[400px]" key={idx}>
            <div className="h-12  mx-3">{name}</div>
            <div className="h-12  mx-3">{parseInt(price * size)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartComp;
