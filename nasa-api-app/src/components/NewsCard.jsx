import React from "react";

const NewsCard = ({
  img,
  earthDate,
  description,
  name,
  landingDate,
  launchDate,
  missionStatus,
}) => {
  return (
    <div className="news__card lg:max-w-xl lg:mx-auto lg:flex shadow-[rgba(0, 0, 0, 0.24), 0px 3px 8px;]">
      <div className="card__image max-w-full lg:flex lg:max-w-80">
        <img
          className="max-w-full w-full lg:w-full h-auto rounded-ss-2xl rounded-se-2xl lg:rounded-se-none lg:object-cover lg:rounded-s-2xl"
          src={img}
          alt="Image"
        />
      </div>
      <div className="card__body bg-white rounded-es-2xl rounded-ee-2xl lg:rounded-es-none lg:rounded-se-2xl px-3 py-6 text-black text-center lg:text-start lg:p-6 lg:flex lg:flex-col lg:justify-center">
        <h3 className="card__name text-2xl font-semibold">{name}</h3>
        <p className="card_date font-medium text-balance">{earthDate}</p>
        <p className="card__description font-medium text-md">{description}</p>
        <p className="card__launch font-medium text-md">{launchDate}</p>
        <p className="card__land font-medium text-md">{landingDate}</p>
        <p className="card__status font-medium text-md">{missionStatus}</p>
      </div>
    </div>
  );
};

export default NewsCard;
