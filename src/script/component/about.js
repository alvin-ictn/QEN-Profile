class AboutPage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
	<section class="pt-11 pb-10 pt-lg-14 pb-lg-13">
		<div class="floating-objects">
			<img src="./src/assets/banners/night.jpg" class="img-fluid" alt="Day Image">
		</div>
		<div class="container">
			<div class="row align-items-center justify-content-center text-center">
				<div class="col-md-10 col-lg-7 aos-init aos-animate" data-aos="fade-down">
					<h1 class="display-4">The beauty of 
						<span class="font-weight-lighter">simplicity</span>
					</h1>
					<p class="mb-6">Square, a fully flexible Bootstrap theme that utilises timeless Swiss influenced graphic design and typography to create beautiful responsive websites</p>
					<a href="#pages" data-scroll="" class="btn btn-primary text-uppercase d-inline-flex align-items-center">Explore pages
						<svg width="16" height="16" class="ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<title>arrow-right-1</title>
							<path d="M19.5,12a2.3,2.3,0,0,1-.78,1.729L7.568,23.54a1.847,1.847,0,0,1-2.439-2.773l9.752-8.579a.25.25,0,0,0,0-.376L5.129,3.233A1.847,1.847,0,0,1,7.568.46l11.148,9.808A2.31,2.31,0,0,1,19.5,12Z">
							</path>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</section>
	<section class="pt-11 pb-10 pt-lg-14 pb-lg-13">
	<div class="floating-objects">
		<img src="./src/assets/banners/day.jpg" class="img-fluid" alt="Day Image">
	</div>
	<div class="container">
		<div class="row align-items-center justify-content-center text-center">
			<div class="col-md-10 col-lg-7 aos-init aos-animate" data-aos="fade-down">
				<h1 class="display-4">The beauty of 
					<span class="font-weight-lighter">simplicity</span>
				</h1>
				<p class="mb-6">Square, a fully flexible Bootstrap theme that utilises timeless Swiss influenced graphic design and typography to create beautiful responsive websites</p>
				<a href="#pages" data-scroll="" class="btn btn-primary text-uppercase d-inline-flex align-items-center">Explore pages
					<svg width="16" height="16" class="ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<title>arrow-right-1</title>
						<path d="M19.5,12a2.3,2.3,0,0,1-.78,1.729L7.568,23.54a1.847,1.847,0,0,1-2.439-2.773l9.752-8.579a.25.25,0,0,0,0-.376L5.129,3.233A1.847,1.847,0,0,1,7.568.46l11.148,9.808A2.31,2.31,0,0,1,19.5,12Z">
						</path>
					</svg>
				</a>
			</div>
		</div>
	</div>
</section>
<section class="pt-11 pb-10 pt-lg-14 pb-lg-13">
<div class="floating-objects">
	<img src="./src/assets/banners/day.jpg" class="img-fluid" alt="Day Image">
</div>
<div class="container">
	<div class="row align-items-center justify-content-center text-center">
		<div class="col-md-10 col-lg-7 aos-init aos-animate" data-aos="fade-down">
			<h1 class="display-4">The beauty of 
				<span class="font-weight-lighter">simplicity</span>
			</h1>
			<p class="mb-6">Square, a fully flexible Bootstrap theme that utilises timeless Swiss influenced graphic design and typography to create beautiful responsive websites</p>
			<a href="#pages" data-scroll="" class="btn btn-primary text-uppercase d-inline-flex align-items-center">Explore pages
				<svg width="16" height="16" class="ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<title>arrow-right-1</title>
					<path d="M19.5,12a2.3,2.3,0,0,1-.78,1.729L7.568,23.54a1.847,1.847,0,0,1-2.439-2.773l9.752-8.579a.25.25,0,0,0,0-.376L5.129,3.233A1.847,1.847,0,0,1,7.568.46l11.148,9.808A2.31,2.31,0,0,1,19.5,12Z">
					</path>
				</svg>
			</a>
		</div>
	</div>
</div>
</section>
    `;
  }
}

customElements.define('about-page', AboutPage);