"use client"
import React, { useEffect, useState } from "react";

export const useBoardRequest = ({ formValues }) => {
  const [serverResponse, setServerResponse] = useState([]);

  const urlSearchParams = new URLSearchParams();
  if (formValues?.companyName) urlSearchParams.set("companyName", formValues.companyName);
  if (formValues?.functionalArea) urlSearchParams.set("functionalArea", formValues.functionalArea);
  if (formValues?.keywords) urlSearchParams.set("keywords", formValues.keywords);
  if (formValues?.locationFull) urlSearchParams.set("locationFull", formValues.locationFull);
  if (formValues?.perks) urlSearchParams.set("perks", formValues.perks);
  if (formValues?.recent) urlSearchParams.set("recent", formValues.recent);
  if (formValues?.seniority) urlSearchParams.set("seniority", formValues.seniority);

  let options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    cache: "no-store",
  };

  useEffect(() => {
    const response = async () => {
      const params = urlSearchParams.toString();
      const resp = await fetch(
        `/api/jobs${params ? `?${params}` : ""}`,
        options
      );
      const json = await resp.json();
      setServerResponse(json.success);
    };
    response();
  }, [formValues]);

  return {
    serverResponse,
  };
};