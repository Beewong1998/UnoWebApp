import React, { useState } from "react";

export default function ResetButton({ confirmation, setConfirmation }) {
  return (
    <>
      <div className="row-start-8 row-span-1 col-start-3 col-span-4 z-0">
        {!confirmation ? (
          <button className="resetButton" onClick={() => setConfirmation(true)}>
            Reset All
          </button>
        ) : (
          <>
            <button className="resetButton bg-customLightBlue text-black font-semibold w-4/5 h-4/5 rounded-2xl mt-3 text-s">
              <p className="underline mb-1">Are you sure?</p>
              <button className="mr-3" onClick={() => setConfirmation(false)}>
                No
              </button>
              <button className="ml-3" onClick={() => window.location.reload()}>
                Yes
              </button>
            </button>
          </>
        )}
      </div>
    </>
  );
}
