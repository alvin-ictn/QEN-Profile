class VisionMission extends HTMLElement {
  constructor() {
	super();
	this.time = new Date();
	this.time.setHours(this.time.getHours());
  }

  connectedCallback() {
    this.innerHTML = `
    <section id="tentang" class="pt-11 pb-10 pt-lg-14 pb-lg-13">
		<div class="row" style="margin-left:0;margin-right:0;">
			<div class="col-6 bg-light text-dark ">
				<div>
					<h1 style="margin-left:20px;">Visi</h1>
				</div>
				<div  style="padding:4vw 10vw 10vw 10vw;">
					<p>
					<i>Menjadi perusahaan yang memberikan kontrubusi dan inovasi dalam bisnis sehingga dapat bersaing secara global untuk meningkatkan mutu-mutu kemajuan pembangunan dan kemajuan teknologi sehingga bermanfaat bagi masyarakat</i>
					</p>
				</div>
			</div>
			<div class="col-6 bg-dark text-light ">
				<div>
					<h1 style="text-align:right;margin-right:20px;">Misi</h1>
				</div>
				<div  style="padding:4vw 10vw 10vw 10vw;">
          <ul>
            <li>Meningkatkan performa kerja sama dengan client demi tercapai nya kepentingan bersama dalam segala aspek dan bidang.</li>
            <li>Melakukan Keterampilan dalam segala aspek dan lini untuk memberikan kualitas dan kuantitas dengan tepat waktu sesuai dengan kebutuhan project dengan mengutamakan keselamatan pekerja dan keselamatan lingkungan.</li>
            <li>Mengoptimalkan nilai perusahaan dan kontribusi terhadap pemegang saham serta tanggung jawab social.</li>
            <li>Menciptakan pekerjaan jasa konstruksi yang berkualitas dan bermutu dengan dimodali kejujuran dan disiplin sehingga bisa mencapai standar internasional yang tersertifikasi.</li>
          </ul>
					</p>
				</div>
			</div>
		</div>
	</section>
    `;
  }
  
}

customElements.define('scope-page', VisionMission);