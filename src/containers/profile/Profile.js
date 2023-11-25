import React, { useState, useEffect, lazy, Suspense } from "react";
import { openSource } from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

export default function Profile() {
  const [prof, setProfile] = useState([]);

  async function getProfileData() {
    try {
      const result = await fetch("/profile.json");

      if (result.ok) {
        const response = await result.json();
        setProfile(response.data.user);
      } else {
        throw new Error("Failed to fetch profile data");
      }
    } catch (error) {
      console.error(
        `${error} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
      );
      setProfile("Error");
      openSource.showGithubProfile = "false";
    }
  }

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      getProfileData();
    }
  }, []);

  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    !(typeof prof === "string" || prof instanceof String)
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}