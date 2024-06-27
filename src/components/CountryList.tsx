import { useEffect, useState } from "react";
import { Country } from "../types/country";
import { AllInfo, getCountries } from "../api/api";
import CountryCard from "./CountryCard";

const CountryList = () => {
  // const [countries, setCountries] = useState<Country[]>([]);
  const [countries, setCountries] = useState<AllInfo[]>([]);

  useEffect(() => {
    const addCountries = async () => {
      try {
        const data: Country[] = await getCountries();
        const addInfoData = data.map((country: Country) => {
          return { ...country, isLike: false };
        });
        setCountries(addInfoData);
      } catch (error) {
        alert(error);
      }
    };
    addCountries();
  }, []);

  const isLikeHandler = (selectedCountry: AllInfo) => {
    // 클릭한 아이템
    // const fillterIsLike = countries.filter(
    //   (country) => selectedCountry.name.common === country.name.common
    // );
    const LikeMap = countries.map((country) => {
      if (selectedCountry.name.common === country.name.common) {
        return { ...country, isLike: !country.isLike };
      } else {
        return country;
      }
    });
    setCountries(LikeMap);
  };

  console.log("Countries:", countries);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="text-[30px] font-bold mb-[20px] ">
          Favorite Countries
        </div>
        <div className="container grid grid-cols-4 gap-[10px]">
          {countries
            .filter((country) => country.isLike)
            .map((country: AllInfo) => {
              return (
                <CountryCard
                  key={country.name.common}
                  country={country}
                  isLikeHandler={isLikeHandler}
                />
              );
            })}
        </div>
        <div className="text-[30px] font-bold mb-[20px] ">Countries</div>
        <ul className="container grid grid-cols-4 gap-[20px]">
          {countries
            .filter((country) => !country.isLike)
            .map((country: AllInfo) => {
              return (
                <CountryCard
                  key={country.name.common}
                  country={country}
                  isLikeHandler={isLikeHandler}
                />
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default CountryList;
