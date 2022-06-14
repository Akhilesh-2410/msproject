import React from "react";
import { Link } from "react-router-dom";

const RequestForAidSuccess = () => {
  return (
    <main className="w-full space-y-20">
      <div className="w-full">
        <section className="w-full my-8">
          <h1 className="text-6xl font-oswald">
            {"Request Successful"}
          </h1>
          <h2 className="text-lg font-poppins mt-2">
            {
              "Your request has been sent. Check for messages from SJFL Admin Team whether your request has been approved or rejected."
            }
          </h2>
        </section>
        <Link to="/" className="hover:underline font-poppins mt-12 text-clinic-500">
          {"Go Back to Home"}
        </Link>
      </div>
    </main>
  );
};

export default RequestForAidSuccess;
