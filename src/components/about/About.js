import React from "react"
import topimg from "../../images/hero_1.jpg"
import img2 from "../../images/hero_2.jpg"
import AOS from "aos"
class About extends React.Component {
  componentDidMount() {
    this.aos = AOS
    this.aos.init({
      duration: 2000,
    })
  }
  componentDidUpdate() {
    this.aos.refresh()
  }

  render() {
    return (
      <>
        <div class="site-section py-5 custom-border-bottom" data-aos="fade">
          <div class="container">
            <div class="row mb-5">
              <div class="col-md-6">
                <div class="block-16">
                  <figure>
                    <img
                      src={topimg}
                      alt="Image placeholder"
                      class="img-fluid"
                    />
                  </figure>
                </div>
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-5">
                <div class="site-section-heading pt-3 mb-4">
                  <h2 class="text-black font-heading-serif">How We Started</h2>
                </div>
                <p>
                  Rerum quis soluta, esse, cupiditate voluptate ipsum? Sunt unde
                  eos vitae suscipit harum eligendi reprehenderit, illo eaque
                  sit!
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Delectus consequuntur hic quaerat cupiditate tempore
                  temporibus nulla at eum!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="site-section py-5 bg-light custom-border-bottom"
          data-aos="fade"
        >
          <div class="container">
            <div class="row">
              <div class="col-md-6 order-md-2">
                <div class="block-16">
                  <figure>
                    <img
                      src={img2}
                      alt="Image placeholder"
                      class="img-fluid "
                    />
                    <a
                      href="https://vimeo.com/channels/staffpicks/93951774"
                      class="play-button popup-vimeo"
                      data-fancybox
                    >
                      <span class="icon-play"></span>
                    </a>
                  </figure>
                </div>
              </div>
              <div class="col-md-5 mr-auto">
                <div class="site-section-heading pt-3 mb-4">
                  <h2 class="text-black font-heading-serif">
                    Wines For You All
                  </h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Delectus consequuntur hic quaerat cupiditate tempore
                  temporibus nulla at eum!
                </p>
                <p>
                  Magni debitis minima ipsam, itaque nam eligendi iusto?
                  Adipisci blanditiis itaque ipsam cupiditate architecto, dolore
                  saepe placeat culpa.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="site-section site-section-sm site-blocks-1 border-0"
          data-aos="fade"
        >
          <div class="container">
            <div class="row">
              <div
                class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4"
                data-aos="fade-up"
                data-aos-delay=""
              >
                <div class="icon mr-4 align-self-start">
                  <span class="icon-truck text-primary"></span>
                </div>
                <div class="text">
                  <h2 class="font-heading-serif">Free Shipping</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus at iaculis quam. Integer accumsan tincidunt
                    fringilla.
                  </p>
                </div>
              </div>
              <div
                class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="icon mr-4 align-self-start">
                  <span class="icon-refresh2 text-primary"></span>
                </div>
                <div class="text">
                  <h2 class="font-heading-serif">Free Returns</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus at iaculis quam. Integer accumsan tincidunt
                    fringilla.
                  </p>
                </div>
              </div>
              <div
                class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="icon mr-4 align-self-start">
                  <span class="icon-help text-primary"></span>
                </div>
                <div class="text">
                  <h2 class="font-heading-serif">Customer Support</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus at iaculis quam. Integer accumsan tincidunt
                    fringilla.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default About
