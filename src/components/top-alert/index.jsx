/** @format */

import React from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";
import styled, { keyframes } from "styled-components";

// Define the keyframes
const scroll = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-200%);
  }
`;

// Styled components for the breaking news ticker
const BreakingNewsContainer = styled.div`
    width: 100%;
    overflow: hidden;
`;

const BreakingNewsText = styled.div`
    display: inline-block;
    white-space: nowrap;
    animation: ${scroll} 10s linear infinite; /* Increased speed to 5s */
`;



const AlertTop = () => {
    return (
        <section>
            <BreakingNewsContainer>
                <div className="flex justify-between bg-pink-100 h-10">
                    <BreakingNewsText>
                            {" "}
                            <div className="flex justify-center items-center text-center gap-6 py-3">
                                <span className="text-pink-800">
                                    <BsFillLightningChargeFill />
                                </span>
                                <h2 className="text-sm text-pink-800">
                                    Summer sale: Up to 70% off selected items
                                </h2>
                            </div>
                    </BreakingNewsText>
                    <BreakingNewsText>
                            {" "}
                            <div className="flex justify-center items-center text-center gap-6 py-3">
                                <span className="text-pink-800">
                                    <BsFillLightningChargeFill />
                                </span>
                                <h2 className="text-sm text-pink-800">
                                    Summer sale: Up to 70% off selected items
                                </h2>
                            </div>
                    </BreakingNewsText>
                    <BreakingNewsText>
                            {" "}
                            <div className="flex justify-center items-center text-center gap-6 py-3">
                                <span className="text-pink-800">
                                    <BsFillLightningChargeFill />
                                </span>
                                <h2 className="text-sm text-pink-800">
                                    Summer sale: Up to 70% off selected items
                                </h2>
                            </div>
                    </BreakingNewsText>
                </div>
            </BreakingNewsContainer>
        </section>
    );
};

export default AlertTop;
