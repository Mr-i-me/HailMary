import React from "react";
import './styles.scss'
const Index = props => (
  <>
    <div className="profile-page sidebar-collapse">
      <nav
        className="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg"
        color-on-scroll="100"
        id="sectionsNav"
      >
        <div className="container">
          <div className="navbar-translate">
            <a
              className="navbar-brand"
              href="https://demos.creative-tim.com/material-kit/index.html"
            >
              Material Kit{" "}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="dropdown nav-item">
                <a
                  href="#"
                  className="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                >
                  <i className="material-icons">apps</i> Components
                </a>
                <div className="dropdown-menu dropdown-with-icons">
                  <a href="../index.html" className="dropdown-item">
                    <i className="material-icons">layers</i> All Components
                  </a>
                  <a
                    href="https://demos.creative-tim.com/material-kit/docs/2.0/getting-started/introduction.html"
                    className="dropdown-item"
                  >
                    <i className="material-icons">content_paste</i>{" "}
                    Documentation
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.creative-tim.com/product/material-kit-pro"
                  target="_blank"
                >
                  <i className="material-icons">unarchive</i> Upgrade to PRO
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  rel="tooltip"
                  title=""
                  data-placement="bottom"
                  href="https://twitter.com/CreativeTim"
                  target="_blank"
                  data-original-title="Follow us on Twitter"
                  rel="nofollow"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  rel="tooltip"
                  title=""
                  data-placement="bottom"
                  href="https://www.facebook.com/CreativeTim"
                  target="_blank"
                  data-original-title="Like us on Facebook"
                  rel="nofollow"
                >
                  <i className="fa fa-facebook-square"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  rel="tooltip"
                  title=""
                  data-placement="bottom"
                  href="https://www.instagram.com/CreativeTimOfficial"
                  target="_blank"
                  data-original-title="Follow us on Instagram"
                  rel="nofollow"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="page-header header-filter"
        data-parallax="true"
        style={{"background-image": "url('../../../assets/img/city-profile.jpg')"}}
      />
      <div className="main main-raised">
        <div className="profile-content">
          <div className="container">
            <div className="row">
              <div className="col-md-6 ml-auto mr-auto">
                <div className="profile">
                  <div className="avatar">
                    <img
                      src="../assets/img/faces/christian.jpg"
                      alt="Circle Image"
                      className="img-raised rounded-circle img-fluid"
                    />
                  </div>
                  <div className="name">
                    <h3 className="title">Christian Louboutin</h3>
                    <h6>Designer</h6>
                    <a
                      href="#pablo"
                      className="btn btn-just-icon btn-link btn-dribbble"
                    >
                      <i className="fa fa-dribbble"></i>
                    </a>
                    <a
                      href="#pablo"
                      className="btn btn-just-icon btn-link btn-twitter"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a
                      href="#pablo"
                      className="btn btn-just-icon btn-link btn-pinterest"
                    >
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="description text-center">
              <p>
                An artist of considerable range, Chet Faker &#x2014; the name
                taken by Melbourne-raised, Brooklyn-based Nick Murphy &#x2014;
                writes, performs and records all of his own music, giving it a
                warm, intimate feel with a solid groove structure.{" "}
              </p>
            </div>
            <div className="row">
              <div className="col-md-6 ml-auto mr-auto">
                <div className="profile-tabs">
                  <ul
                    className="nav nav-pills nav-pills-icons justify-content-center"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="#studio"
                        role="tab"
                        data-toggle="tab"
                      >
                        <i className="material-icons">camera</i> Studio
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#works"
                        role="tab"
                        data-toggle="tab"
                      >
                        <i className="material-icons">palette</i> Work
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#favorite"
                        role="tab"
                        data-toggle="tab"
                      >
                        <i className="material-icons">favorite</i> Favorite
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-content tab-space">
              <div className="tab-pane active text-center gallery" id="studio">
                <div className="row">
                  <div className="col-md-3 ml-auto">
                    <img
                      src="../assets/img/examples/studio-1.jpg"
                      className="rounded"
                    />
                    <img
                      src="../assets/img/examples/studio-2.jpg"
                      className="rounded"
                    />
                  </div>
                  <div className="col-md-3 mr-auto">
                    <img
                      src="../assets/img/examples/studio-5.jpg"
                      className="rounded"
                    />
                    <img
                      src="../assets/img/examples/studio-4.jpg"
                      className="rounded"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane text-center gallery" id="works">
                <div className="row">
                  <div className="col-md-3 ml-auto">
                    <img
                      src="../assets/img/examples/olu-eletu.jpg"
                      className="rounded"
                    />
                    <img
                      src="../assets/img/examples/clem-onojeghuo.jpg"
                      className="rounded"
                    />
                    <img
                      src="../assets/img/examples/cynthia-del-rio.jpg"
                      className="rounded"
                    />
                  </div>
                  <div className="col-md-3 mr-auto">
                    <img
                      src="../assets/img/examples/mariya-georgieva.jpg"
                      className="rounded"
                    />
                    <img
                      src="../assets/img/examples/clem-onojegaw.jpg"
                      className="rounded"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane text-center gallery" id="favorite">
                <div className="row">
                  <div className="col-md-3 ml-auto">
                    <img
                      src="../assets/img/examples/mariya-georgieva.jpg"
                      className="rounded"
                    />
                    <img
                      src="../assets/img/examples/studio-3.jpg"
                      className="rounded"
                    />
                  </div>
                  <div className="col-md-3 mr-auto">
                    <img
                      src="../assets/img/examples/clem-onojeghuo.jpg"
                      className="rounded"
                    />
                    <img
                      src="../assets/img/examples/olu-eletu.jpg"
                      className="rounded"
                    />
                    <img
                      src="../assets/img/examples/studio-1.jpg"
                      className="rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer footer-default">
        <div className="container">
          <nav className="float-left">
            <ul>
              <li>
                <a href="https://www.creative-tim.com/">Creative Tim</a>
              </li>
              <li>
                <a href="https://www.creative-tim.com/presentation">About Us</a>
              </li>
              <li>
                <a href="https://www.creative-tim.com/blog">Blog</a>
              </li>
              <li>
                <a href="https://www.creative-tim.com/license">Licenses</a>
              </li>
            </ul>
          </nav>
          <div className="copyright float-right">
            &copy;
            <script>document.write(new Date().getFullYear())</script>, made with{" "}
            <i className="material-icons">favorite</i> by
            <a href="https://www.creative-tim.com/" target="_blank">
              Creative Tim
            </a>{" "}
            for a better web.
          </div>
        </div>
      </footer>
    </div>
  </>
);

export default Index;
