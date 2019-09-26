import React from "react"
import img_1 from "../../images/img_1.jpg"
import img_2 from "../../images/img_2.jpg"
import img_3 from "../../images/img_3.jpg"

const Blog = () => {
  return (
    <div class="site-section bg-light">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 section-title text-center mb-5">
            <h2 class="d-block">Wine's Blog</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
              perspiciatis!
            </p>
            <p>
              <a href="#">
                View All Products <span class="icon-long-arrow-right"></span>
              </a>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 mb-4 mb-lg-0 col-md-6">
            <div class="post-entry-1">
              <a href="post-single.html">
                <img src={img_1} alt="Image" class="img-fluid" />
              </a>
              <h2>
                <a href="blog-single.html">
                  What You Need To Know About Premium Rosecco
                </a>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi temporibus praesentium neque, voluptatum quam
                quibusdam.
              </p>
              <div class="post-meta">
                <span class="d-block">
                  <a href="#">Dave Rogers</a> in <a href="#">News</a>
                </span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4 mb-lg-0 col-md-6">
            <div class="post-entry-1">
              <a href="post-single.html">
                <img src={img_2} alt="Image" class="img-fluid" />
              </a>
              <h2>
                <a href="blog-single.html">
                  What You Need To Know About Premium Rosecco
                </a>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi temporibus praesentium neque, voluptatum quam
                quibusdam.
              </p>
              <div class="post-meta">
                <span class="d-block">
                  <a href="#">Dave Rogers</a> in <a href="#">News</a>
                </span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4 mb-lg-0 col-md-6">
            <div class="post-entry-1">
              <a href="post-single.html">
                <img src={img_3} alt="Image" class="img-fluid" />
              </a>
              <h2>
                <a href="blog-single.html">
                  What You Need To Know About Premium Rosecco
                </a>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi temporibus praesentium neque, voluptatum quam
                quibusdam.
              </p>
              <div class="post-meta">
                <span class="d-block">
                  <a href="#">Dave Rogers</a> in <a href="#">News</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
