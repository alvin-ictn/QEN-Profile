class ImageGalery extends HTMLElement {
  constructor() {
	super();
	this.time = new Date();
	this.time.setHours(this.time.getHours());
  }

  connectedCallback() {
    this.innerHTML = `
    <section id="galeri" style="margin-bottom:400px" id="#utama" class="pt-11 pb-10 pt-lg-14 pb-lg-13">
      <div class="container">
        <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" data-interval="10000">
              <img src="..." class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item" data-interval="2000">
              <img src="..." class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="...">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
    `;
  }
  
}

customElements.define('galery-page', ImageGalery);