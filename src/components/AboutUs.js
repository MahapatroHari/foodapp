import React, { useState, useEffect } from "react";

const AboutUs = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetch("https://api.github.com/users/mahapatrohari");
        const data = await rawData.json();
        console.log(data);

      setUserInfo(data);
    };

    fetchData();
  }, []);


  return (
    <div className="mt-20 h-screen flex flex-col items-center text-center gap-10">
      <h1 className="font-extrabold text-5xl underline">My Details</h1>
      <h2 className="font-bold">{userInfo.name}</h2>
      <div className="flex gap-10">
        <h2>Following = {userInfo.following}</h2>
        <h2>Followers = {userInfo.followers}</h2>
      </div>
      <img
        className="w-48 rounded-full"
        src={userInfo.avatar_url}
        alt="Oops"
      />
    </div>
  );
};

export default AboutUs;
