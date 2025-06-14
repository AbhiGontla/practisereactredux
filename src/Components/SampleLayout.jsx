import { useContext } from "react";
import SampleCarousel from "./Elements/SampleCarousel";
import { UserContext } from "../Context/UserProvider";
import { NavLink } from "react-router-dom";

function SampleLayout(params) {
  const { user, logoutUser } = useContext(UserContext);
  return (
    <div>
      <main role="main">
        <div>
          <SampleCarousel />
        </div>

        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4">
              <img
                className="rounded-circle"
                src="../practisereactredux/src/assets/react.svg"
                alt="Generic placeholder image"
                width="140"
                height="140"
              />
              <h2>Heading</h2>
              <p>
                Donec sed odio dui. Etiam porta sem malesuada magna mollis
                euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna.
              </p>
              <p>
                <a className="btn btn-secondary" href="#" role="button">
                  View details &raquo;
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <img
                className="rounded-circle"
                src="../practisereactredux/src/assets/react.svg"
                alt="Generic placeholder image"
                width="140"
                height="140"
              />
              <h2>Heading</h2>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem nec elit. Cras mattis consectetur purus
                sit amet fermentum. Fusce dapibus, tellus ac cursus commodo,
                tortor mauris condimentum nibh.
              </p>
              <p>
                <a className="btn btn-secondary" href="#" role="button">
                  View details &raquo;
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <img
                className="rounded-circle"
                src="../practisereactredux/src/assets/react.svg"
                alt="Generic placeholder image"
                width="140"
                height="140"
              />
              <h2>Heading</h2>
              <p>
                Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Vestibulum id ligula porta felis euismod
                semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
              <p>
                <a className="btn btn-secondary" href="#" role="button">
                  View details &raquo;
                </a>
              </p>
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                First featurette heading.{" "}
                <span className="text-muted">It'll blow your mind.</span>
              </h2>
              <p className="lead">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="featurette-image img-fluid mx-auto"
                src="https://t4.ftcdn.net/jpg/01/35/08/59/360_F_135085967_K8tvXYKca02oD8X0zDkbl3V9N9Sonemy.jpg"
                alt="Generic placeholder image"
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">
                Oh yeah, it's that good.{" "}
                <span className="text-muted">See for yourself.</span>
              </h2>
              <p className="lead">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                className="featurette-image img-fluid mx-auto"
                src="https://t4.ftcdn.net/jpg/01/35/08/59/360_F_135085967_K8tvXYKca02oD8X0zDkbl3V9N9Sonemy.jpg"
                alt="Generic placeholder image"
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                And lastly, this one.{" "}
                <span className="text-muted">Checkmate.</span>
              </h2>
              <p className="lead">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="featurette-image img-fluid mx-auto"
                src="https://t4.ftcdn.net/jpg/01/35/08/59/360_F_135085967_K8tvXYKca02oD8X0zDkbl3V9N9Sonemy.jpg"
                alt="Generic placeholder image"
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          <footer className="footer   py-3">
            <div className="container d-flex justify-content-between align-items-center">
              <p className="mb-0">
                &copy; 2017-2018 Company, Inc. &middot;{" "}
                <a href="#" className="text-dark">
                  Privacy
                </a>{" "}
                &middot;{" "}
                <a href="#" className="text-dark">
                  Terms
                </a>
              </p>
              <a href="#" className="text-dark">
                Back to top
              </a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
export default SampleLayout;
