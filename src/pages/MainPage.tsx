import { getCountries } from "../api/api";
import CountryList from "../components/CountryList";

const MainPage = () => {
  getCountries();
  return (
    <>
      <div className="flex flex-col items-center justify-content w-full h-full pt-[50px] bg-gray-100">
        <CountryList />
      </div>
    </>
  );
};

export default MainPage;
