import { AllInfo } from "../api/api";

interface CountryCardProps {
  country: AllInfo;
  isLikeHandler: (selectedCountry: AllInfo) => void;
}

const CountryCard = ({ country, isLikeHandler }: CountryCardProps) => {
  return (
    <li className="p-[15px] flex flex-col justify-center items-center border-transparent rounded-md bg-white shadow-md hover:border-blue-400 border-[2px]">
      <button
        className="flex flex-col justify-center items-center w-full"
        onClick={() => isLikeHandler(country)}
      >
        <img
          className="h-[100px] aspect-[1.5/1] object-cover"
          src={country.flags.svg}
          alt={country.flags.alt}
        />
        <div className="flex flex-col items-center w-full mt-[10px]">
          <span className="block text-[20px] font-bold mb-[5px]">
            {country.name.common}
            {country.flag}
          </span>
          <span className="block">{country.capital}</span>
        </div>
      </button>
    </li>
  );
};

export default CountryCard;
