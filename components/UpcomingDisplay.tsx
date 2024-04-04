"use client";
import useGetCall from "@/hooks/useGetCall";

export default function UpcomingDisplay() {
  const { upcomingCalls, isLoading } = useGetCall();
  if (isLoading) return "Loading...";

  if (upcomingCalls && upcomingCalls.length > 0 && !isLoading) {
    console.log("in 1");
    const upcomingMeetingTime =
      upcomingCalls[0].state.startsAt?.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
    return `Upcoming Meeting At: ${upcomingMeetingTime}`;
  }
  if (upcomingCalls?.length == 0 && !isLoading) return "No Upcoming Meeting";
}
