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
				<div  style="">
          <p style="text-align:justify;padding-right:6vw"><strong style="padding:0.3px 5px" class="rounded bg-success text-light">Meningkatkan</strong> performa kerja sama dengan client demi tercapai nya kepentingan bersama dalam segala aspek dan bidang.</p>
          <hr>
          <p style="text-align:justify;padding-left:6vw"><strong style="padding:0.3px 5px" class="rounded bg-success text-light">Melakukan</strong> Keterampilan dalam segala aspek dan lini untuk memberikan kualitas dan kuantitas dengan tepat waktu sesuai dengan kebutuhan project dengan mengutamakan keselamatan pekerja dan keselamatan lingkungan.</p>
          <hr>
          <p style="text-align:justify;padding-right:6vw"><strong style="padding:0.3px 5px" class="rounded bg-success text-light">Mengoptimalkan</strong> nilai perusahaan dan kontribusi terhadap pemegang saham serta tanggung jawab social.</p>
          <hr>
          <p style="text-align:justify;padding-left:6vw"><strong style="padding:0.3px 5px" class="rounded bg-success text-light">Menciptakan</stronG> pekerjaan jasa konstruksi yang berkualitas dan bermutu dengan dimodali kejujuran dan disiplin sehingga bisa mencapai standar internasional yang tersertifikasi.</p>
				</div>
			</div>
		</div>
	</section>
    `;
  }
  
}

customElements.define('scope-page', VisionMission);