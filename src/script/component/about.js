class AboutPage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
	<section class="pt-11 pb-10 pt-lg-14 pb-lg-13">
		<div class="floating-objects">
			<span 
				class="d-none d-md-block" 
				style="
					width: 332px; 
					height: 332px; 
					opacity: 0.0477585; 
					transform: translate3d(421px, 20px, 0px) scale(0.295983); 
					transition-duration: 63.9439s;"
			></span>
			<span 
				class="d-none d-md-block" 
				style="
					width: 323px; 
					height: 323px; 
					opacity: 0.0149718; 
					transform: translate3d(80px, 515px, 0px) scale(0.506878); 
					transition-duration: 46.254s;"
			></span>
			<span 
				class="d-none d-md-block" 
				style="
					width: 277px; 
					height: 277px; 
					opacity: 0.00952202; 
					transform: translate3d(390px, 404px, 0px) scale(0.143601); 
					transition-duration: 68.4657s;"
			></span>
			<span 
				class="d-none d-md-block" 
				style="
					width: 253px; 
					height: 253px; 
					opacity: 0.0279137; 
					transform: translate3d(522px, 115px, 0px) scale(0.152648); 
					transition-duration: 58.5741s;"
			></span>
			<span 
				class="d-none d-md-block" 
				style="
					width: 256px; 
					height: 256px; 
					opacity: 0.0586631; 
					transform: translate3d(488px, 377px, 0px) scale(0.494738); 
					transition-duration: 66.1357s;"
			></span>
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