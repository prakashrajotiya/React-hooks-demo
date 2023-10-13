import React,{ Suspense,lazy  } from "react";
import Loading from "../components/Loading";
// import WithUseMemo from "../components/WithUseMemo";
// import WithoutUseMemo from "../components/WithoutUseMemo";
const  WithUseMemo = lazy(()=>import("../components/WithUseMemo"));
const  WithoutUseMemo = lazy(()=>import("../components/WithoutUseMemo"));
const UseMemo = () => {


  return (
    <div className="page">
      <div className="col-header">
        Change Theme to see Difference
      </div>
      <Suspense fallback={<Loading />}>
        <WithUseMemo/>
        <WithoutUseMemo/>
        </Suspense>
    </div>
  );
};

export default UseMemo;

