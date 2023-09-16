"use client"

import React, { useEffect, useState } from "react"

export const useIndividualJobRequest = (id) => {
  const [serverResponse, setServerResponse] = useState(null);

  let options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    cache: "no-store",
  };

  useEffect(() => {
    const response = async () => {
      const resp = await fetch(`/api/jobs/${id}`, options);
      const json = await resp.json();
      setServerResponse(json.success);
    };
    response();
  }, [id]);

  return {
    serverResponse,
  };
};