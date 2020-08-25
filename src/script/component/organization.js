class OrganizationPage extends HTMLElement {
  constructor() {
	super();
	this.time = new Date();
	this.time.setHours(this.time.getHours());
  }

  connectedCallback() {
    this.innerHTML = `
  <section id="struktur" class="pt-11 pb-10 pt-lg-14 pb-lg-13">
    <div class="container">
    <img id="banner_utama" src="./src/assets/company/Organization_Chart.svg" class="img-fluid" alt="Day Image">
    </div>
	</section>
	`;
}
  
}

customElements.define('organization-page', OrganizationPage);