import React from "react";
import CountUp from "react-countup";

const Section4 = () => {
  return (
    <>
      <section className="gap-7 md:gap-0 flex flex-col md:flex-row items-center justify-around py-16 bg-[#f7f7f7]">
        <div>
          <CountUp start={0} end={10} delay={0} suffix="+">
            {({ countUpRef }) => (
              <div className="felx border-solid flex-1 border-2 border-primary px-16 py-4 md:flex-row gap-5 items-center justify-center ">
                <h1
                  className="Child1 text-4xl font-bold py-3 text-center"
                  ref={countUpRef}
                />
                <h1 className="Child2 text-secondary text-center">
                  Years Of Experience
                </h1>
              </div>
            )}
          </CountUp>
        </div>

        {/* 2nd Count */}
        <div>
          <CountUp start={0} end={100} delay={0} suffix="+">
            {({ countUpRef }) => (
              <div className="section3Second border-2 border-primary px-20 py-4">
                <h1
                  className="Child1 text-4xl font-bold py-3 text-center"
                  ref={countUpRef}
                />
                <h1 className="Child2 text-secondary text-center">
                  Industries Built
                </h1>
              </div>
            )}
          </CountUp>
        </div>

        {/* 3rd Count */}
        <div>
          <CountUp start={0} end={2000} delay={0} suffix="+">
            {({ countUpRef }) => (
              <div className="section3Third border-2 border-primary px-16 py-4">
                <h1
                  className="Child1 text-4xl font-bold py-3 text-center"
                  ref={countUpRef}
                />
                <h1 className="Child2 text-secondary text-center">
                  Satisfied Customers
                </h1>
              </div>
            )}
          </CountUp>
        </div>
      </section>
    </>
  );
};

export default Section4;
