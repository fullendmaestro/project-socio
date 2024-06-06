import React from "react";

const Team = (teams) => {
  return (
    <>
      {teams.teams.map((user) => {
        return (
          <img
            src="assets/images/john-doe.jpg"
            alt="user.name"
            className="size-6 rounded-full bg-black ring-2 ring-white"
            loading="lazy"
          />
        );
      })}
    </>
  );
};

export default Team;
