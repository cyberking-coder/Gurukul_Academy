import type { Metadata } from "next";
import TrialClient from "./TrialClient";

export const metadata: Metadata = {
  title: "Free Trial Class | Gurukul Academy — Experience World-Class Coaching",
  description:
    "Watch a free demo lesson from Gurukul Academy's expert faculty. See why 118+ students rate us 5.0 stars. Enroll in our Maths & Science coaching in Karvenagar, Pune.",
};

export default function TrialPage() {
  return <TrialClient />;
}
