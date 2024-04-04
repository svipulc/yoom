"use client";

import React, { useEffect } from "react";
import { useState } from "react";

function setCurrentTime(date?: Date) {
  let time: string;
  if (date) {
    time = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return time;
  } else {
    const now = new Date();
    time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return time;
  }
}

export default function CurrentTime() {
  const [time, setTime] = useState(setCurrentTime);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = setCurrentTime(new Date());
      setTime(newTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>{time}</div>;
}
