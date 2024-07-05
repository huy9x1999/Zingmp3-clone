import React, { memo, useState, useEffect, useRef } from "react";
import Section from "./Section";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { Link } from "react-router-dom";
import SmallThumbPlayMusic from "./SmallThumbPlayMusic";
import icons from "../utils/icons";
import { chartColor } from "../utils/fn";
import _ from "lodash";

const ChartSection = ({ item }) => {
  const [data, setData] = useState(null);
  const { chart, items } = item;
  const { TbPlayerPlayFilled } = icons;
  const chartRef = useRef(null);
  const [selected, setSelected] = useState(null);
  const [tooltipState, setTooltipState] = useState({
    opacity: 0,
    top: 0,
    left: 0
  });

  const options = {
    responsive: true,
    pointRadius: 0,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          display: false
        },
        grid: { color: "rgba(255,255,255,0.1)", drawTicks: false },
        min: chart?.minScore,
        max: chart?.maxScore,
        border: {
          dash: [3, 6]
        }
      },
      x: {
        ticks: { color: "white" },
        grid: { color: "transparent" }
      }
    },
    plugins: {
      legend: false,
      tooltip: {
        enabled: false,
        external: ({ tooltip }) => {
          if (!chartRef || !chartRef.current) return;
          if (tooltip.opacity === 0) {
            if (tooltipState.opacity !== 0)
              setTooltipState((prev) => ({ ...prev, opacity: 0 }));
            return;
          }
          const counters = [];
          for (let i = 0; i < 3; i++) {
            counters.push({
              data: chart?.items[Object.keys(chart?.items)[i]]
                ?.filter((i) => +i.hour % 2 === 0)
                ?.map((item) => item.counter),
              bgColor: chartColor(i),
              encodeId: Object.keys(chart?.items)[i]
            });
          }

          const rs = counters.find((i) =>
            i.data.some(
              (n) => n === +tooltip.body[0]?.lines[0]?.replace(",", "")
            )
          );
          setSelected({ bgColor: rs?.bgColor, encodeId: rs?.encodeId });
          const newTooltipData = {
            opacity: 1,
            left: tooltip.caretX,
            top: tooltip.caretY
          };
          if (!_.isEqual(tooltipState, newTooltipData))
            setTooltipState(newTooltipData);
        }
      }
    },
    hover: {
      mode: "dataset",
      intersect: false
    }
  };

  useEffect(() => {
    const labels = chart?.times
      ?.filter((item) => +item.hour % 2 === 0)
      ?.map((item) => `${item.hour}:00`);

    const datasets = [];
    if (chart?.items) {
      for (let i = 0; i < 3; i++) {
        datasets.push({
          data: chart?.items[Object.keys(chart?.items)[i]]
            ?.filter((i) => +i.hour % 2 === 0)
            ?.map((item) => item.counter),
          borderColor: chartColor(i),
          tension: 0.3,
          borderWidth: 2,
          pointHoverRadius: 5,
          pointBackgroundColor: "white",
          pointHitRadius: 5,
          pointBorderColor: chartColor(i),
          animation: false,
          pointHoverBorderWitdh: 5
        });
      }
      setData({ labels, datasets });
    }
  }, [item]);

  return (
    <Section className="mt-12 relative w-full bg-[#471c65] p-5 rounded-lg">
      <div className="relative">
        <div className=" mb-5 flex gap-2 items-center">
          <h3 className="inline text-radial-gradint-zingmp3 text-[28px] font-bold">
            #zingchart
          </h3>
          <div className="flex justify-center items-center text-black rounded-full w-[22px] h-[22px] bg-white">
            <TbPlayerPlayFilled size={16} />
          </div>
        </div>
        <div className="flex flex-col-reverse 1228:flex-row">
          <div className="w-full 1228:w-5/12 flex-shrink-0 flex-grow-0 1228:pr-[14px]">
            <div>
              {items &&
                items
                  .filter((i, index) => index < 3)
                  ?.map((item, index) => (
                    <li
                      key={item.encodeId}
                      className="p-2.5 bg-white/5 hover:bg-white/45 rounded group flex items-center mb-2.5 text-white/50"
                    >
                      <div className="flex items-center flex-grow cursor-pointer">
                        <span
                          className={`inline-block mr-[15px] roboto-font text-[32px] text-transparent leading-[1] font-[900]  text-stock-${
                            index + 1
                          }`}
                        >
                          {index + 1}
                        </span>
                        <div className=" mr-2.5 rounded overflow-hidden relative group flex-shrink-0">
                          <div className="w-[60px] h-[60px]">
                            <SmallThumbPlayMusic
                              notAtAlbum={true}
                              item={item}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col flex-grow">
                          <span className="flex gap-2 items-center justify-start text-white/50">
                            <Link to="/" className="text-overflow-1-line">
                              {item.title}
                            </Link>
                          </span>
                          <p className="group-hover:pr-0 pr-4 mt-[3px] text-[13px] leading-[18px] text-overflow-1-line text-white/50">
                            {item.artistsNames.split(",").map((text, index) => {
                              if (
                                index ===
                                item.artistsNames.split(",").length - 1
                              ) {
                                return (
                                  <Link
                                    key={index}
                                    to=""
                                    className="pr-[3px] hover:underline"
                                  >
                                    {text}
                                  </Link>
                                );
                              }
                              return (
                                <Link
                                  key={index}
                                  to=""
                                  className="pr-[4px] hover:underline"
                                >
                                  {text + `,`}
                                </Link>
                              );
                            })}
                          </p>
                        </div>
                      </div>
                      <div className="items-center justify-end text-white">
                        <p className="p-1.5 mx-1">
                          {Math.round((item.score * 100) / chart?.totalScore)}%
                        </p>
                      </div>
                    </li>
                  ))}
            </div>
            <div className="flex justify-center">
              <Link
                to="/"
                className="text-center mt-[5px] py-[5px] px-[25px] rounded-full border text-[14px] border-white text-white"
              >
                Xem thêm
              </Link>
            </div>
          </div>
          <div className="text-white w-full 1228:w-7/12 1228:flex-shrink 1228:flex-grow 1228:pl-[14px] mb-4 relative h-[300px]">
            {data && (
              <Line
                className="w-full"
                ref={chartRef}
                data={data}
                options={options}
              />
            )}
            {items
              .filter((i, index) => i.encodeId === selected?.encodeId)
              ?.map((item, index) => (
                <div
                  className="tooltip absolute"
                  style={{
                    top: tooltipState.top,
                    left: tooltipState.left,
                    opacity: tooltipState.opacity
                  }}
                >
                  <li
                    key={item.encodeId}
                    style={{ backgroundColor: selected.bgColor || "#fff" }}
                    className="max-w-[200px] min-w-[175px] p-1.5  rounded group flex items-center mb-2.5 text-white"
                  >
                    <div className="flex items-center flex-grow cursor-pointer">
                      <div className=" mr-2.5 rounded overflow-hidden relative group flex-shrink-0">
                        <div className="w-[40px] h-[40px]">
                          <img
                            className="w-full object-cover"
                            src={item?.thumbnailM}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="flex gap-2 items-center justify-start text-white text-[12px] font-semibold">
                          <Link to="/" className="text-overflow-1-line">
                            {item.title}
                          </Link>
                        </span>
                        <p className="group-hover:pr-0 pr-2 mt-[1.5px] text-[10px] leading-[14px] text-overflow-1-line text-white">
                          {item.artistsNames.split(",").map((text, index) => {
                            if (
                              index ===
                              item.artistsNames.split(",").length - 1
                            ) {
                              return (
                                <Link
                                  key={index}
                                  to=""
                                  className="pr-[3px] hover:underline"
                                >
                                  {text}
                                </Link>
                              );
                            }
                            return (
                              <Link
                                key={index}
                                to=""
                                className="pr-[4px] hover:underline"
                              >
                                {text + `,`}
                              </Link>
                            );
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="items-center justify-end text-white text-[16px] font-semibold">
                      <p className="p-1.5 mx-1">
                        {Math.round((item.score * 100) / chart?.totalScore)}%
                      </p>
                    </div>
                  </li>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default memo(ChartSection);
