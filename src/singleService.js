const SingleService = ({ name, description, icon }) => {
  return (
    <div className="service">
      {icon}
      <h1 className="homeText">{name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default SingleService;
