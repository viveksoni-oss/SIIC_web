import React from "react";
import PageLayout from "../components/PageLayout";
import OfficeSpacesBanner from "../components/banners/MentorsBanner";

function OfficeSpaces() {
  return <PageLayout banner={<OfficeSpacesBanner/>} bodyStyle="-mt-60">office spaces</PageLayout>;
}

export default OfficeSpaces;
