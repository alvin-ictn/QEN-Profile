class HomeScreen extends HTMLElement {
  constructor() {
	super();
	this.time = new Date();
	this.time.setHours(this.time.getHours());
  }

  connectedCallback() {
    this.innerHTML = `
    <section id="#utama" class="pt-11 pb-10 pt-lg-14 pb-lg-13">
      <div class="floating-objects">
        <img id="banner_utama" src="./src/assets/banners/${(this.time.getHours() > 18 || this.time.getHours() <= 5) ? 'night' : 'day'}.jpg" class="img-fluid" alt="Day Image">
      </div>
    </section>
    `;
  }
  
}

customElements.define('home-screen', HomeScreen);