class AboutPage extends HTMLElement {
  constructor() {
	super();
	this.time = new Date();
	this.time.setHours(this.time.getHours());
  }

  connectedCallback() {
    this.innerHTML = `
	<section id="tentang" class="pt-11 pb-10 pt-lg-14 pb-lg-13">
		<h1 style="margin-left:20px;">Tentang Kita</h1>
			<div class="row" style="margin-left:0;margin-right:0;">
				<div class="col-7 bg-dark text-light" style="padding:10vw;">
					<p>
					<strong style="padding:0.3px 5px" style="padding:0.3px 5px" class="rounded bg-light text-dark">PT.QYLA ESTU NST (PT.QEN)</strong> Adalah perusahaan jasa konstruksi alat berat terbesar yang ada <strong style="padding:0.3px 5px" class="rounded bg-primary text-light">di Riau</strong> semenjak <strong style="padding:0.3px 5px" class="rounded bg-success text-light">26 Februari 2020.</strong> Perusahaan ini lahir untuk membawa perubahan bagi ekonomi negara dan untuk  menunjukan kualitas <strong style="padding:0.3px 5px" class="rounded bg-info text-dark">daya saing</strong> sumber daya softskill yang kita miliki mampu bersaing secara global dengan hasil kerja yang optimal dan efisien sehingga membuat kemajuan-kemajuan yang berguna bagi client juga masyarakat banyak nantinya. 
					</p>
				</div>
				<div class="col-5 bg-light text-dark" style="padding:10vw">
					<p>
					<strong style="padding:0.3px 5px" class="rounded bg-dark text-light">PT.QYLA ESTU NST</strong> sekarang ini walau masih merupakan perusahaan baru namun sudah membuat prestasi di client perdana nya yaitu sebagai kontraktor pekerjaan <strong style="padding:0.3px 5px" class="rounded bg-danger text-light">land clearing</strong> lahan akasia menggunakan alat berat excavator.
					</p>
				</div>
			</div>
	</section>
	`;
}
  
}

customElements.define('about-page', AboutPage);