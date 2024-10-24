import './ProfileCard.css';

export default function Jony() {
  return (
    <div className="col-md-4">
      <div className="card profile-card-3">
        <div className="background-block">
          <img
            src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="profile-background"
            className="background"
          />
        </div>
        <div className="profile-thumb-block">
          <img
            src="https://randomuser.me/api/portraits/men/41.jpg"
            alt="profile-image"
            className="profile"
          />
        </div>
        <div className="card-content">
          <h2>
            Justin Mccoy<small>Designer</small>
          </h2>
          <div className="icon-block">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="mt-3 w-100 float-left text-center">
        <strong>Modren Profile Card</strong>
      </p>
    </div>
  );
}

  