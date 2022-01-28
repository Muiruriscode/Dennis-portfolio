const SingleProject = ({ name, image, link, description }) => {
  return (
    <div className="projectBox pointer relative">
      <div className="projectBoxImg pointer">
        <div className="projectImgBox">
          <img src={image} alt={name} className="projectImg" />
        </div>
        <div className="maskEffect"></div>
        <div className="projectMeta absolute">
          <h4 className="homeText">{name}</h4>
          <h5 className="homeText">{description}</h5>
          <a href={link} className="projectBtn">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
