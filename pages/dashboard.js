import Layout from "../components/layout";
import NavBar from "../components/navbar";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function DashBoard() {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <section className="flex flex-col h-full pt-20">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Dashboard
                </span>
                <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                  Our Latest Updates
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <div className="px-4 py-6 sm:px-0">
                <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
              </div>
              {/* /End replace */}
            </div>
          </div>
        </div>

        <div>
          <Calendar onChange={onChange} value={value} />
        </div>
      </section>
    </>
  );
}

DashBoard.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NavBar />
      {page}
    </Layout>
  );
};
