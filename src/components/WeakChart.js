import React from "react";
import Section from "./Section";
import { Link } from "react-router-dom";

const WeakChart = ({ data }) => {
  const { items } = data;
  return (
    <Section className="mt-12 flex justify-between items-center gap-7">
      {items.map((item,index) => (
        <div key={index} className="block overflow-hidden rounded group">
          <Link to={item.link} className="block">
            <img
              className="w-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
              src={item.cover}
              alt=""
            />
          </Link>
        </div>
      ))}
    </Section>
  );
};

export default WeakChart;
