	<!-- Content Wrapper. Contains page content -->
	<div class="content-wrapper">
		<!-- Content Header (Page header) -->
		<section class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1> PA0402 HW RX Mapping
						</h1>
					</div>
					<!--
					<div class="col-sm-6">
						<ol class="breadcrumb float-sm-right">
							<li class="breadcrumb-item"><a href="#">Home</a></li>
							<li class="breadcrumb-item active">Project Detail</li>
						</ol>
					</div>-->
				</div>
			</div><!-- /.container-fluid -->

			<div class="row">
				<div class="col-sm-2">
					<img src="<?php echo base_url()?>assets/img/0402_Mapping/0402_mapping_01.png" style="width:100%" onclick="openModal();currentSlide(1)" class="hover-shadow cursor">
				</div>
				<div class="col-sm-2">
					<img src="<?php echo base_url()?>assets/img/0402_Mapping/0402_mapping_02.png" style="width:100%" onclick="openModal();currentSlide(2)" class="hover-shadow cursor">
				</div>
				<div class="col-sm-2">
					<img src="<?php echo base_url()?>assets/img/0402_Mapping/0402_mapping_03.png" style="width:100%" onclick="openModal();currentSlide(3)" class="hover-shadow cursor">
				</div>
				<div class="col-sm-2">
					<img src="<?php echo base_url()?>assets/img/0402_Mapping/0402_mapping_04.png" style="width:100%" onclick="openModal();currentSlide(4)" class="hover-shadow cursor">
				</div>
				<div class="col-sm-2">
					<img src="<?php echo base_url()?>assets/img/0402_Mapping/0402_mapping_05.png" style="width:100%" onclick="openModal();currentSlide(5)" class="hover-shadow cursor">
				</div>
				<div class="col-sm-2">
					<img src="<?php echo base_url()?>assets/img/0402_Mapping/0402_mapping_06.png" style="width:100%" onclick="openModal();currentSlide(6)" class="hover-shadow cursor">
				</div>
			</div> <!-- row -->
			<div id="myModal" class="modal">
				<span class="close cursor" onclick="closeModal()">&times;</span>
				<div class="modal-content">
					<div class="mySlides">
						<div class="numbertext">1 / 6</div>
						<img src="<?php echo base_url()?>assets/img/0402_Mapping/0402_mapping_01.png" style="width:100%">
					</div>

					<div class="mySlides">
						<div class="numbertext">2 / 6</div>
						<img src="<?php echo base_url()?>assets/img/0402_Mapping/0402_mapping_02.png" style="width:100%">
					</div>

					<div class="mySlides">
						<div class="numbertext">3 / 6</div>
						<img src="<?php echo base_url()?>assets/img/0402_Mapping/0402_mapping_03.png" style="width:100%">
					</div>
					
					<div class="mySlides">
						<div class="numbertext">4 / 6</div>
						<img src="<?php echo base_url()?>assets/img/0402_Mapping/0402_mapping_04.png" style="width:100%">
					</div>

					<div class="mySlides">
						<div class="numbertext">5 / 6</div>
						<img src="<?php echo base_url()?>assets/img/0402_Mapping/0402_mapping_05.png" style="width:100%">
					</div>
					
					<div class="mySlides">
						<div class="numbertext">6 / 6</div>
						<img src="<?php echo base_url()?>assets/img/0402_Mapping/0402_mapping_06.png" style="width:100%">
					</div>					
					
					<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
					<a class="next" onclick="plusSlides(1)">&#10095;</a>

					<div class="caption-container">
						<p id="caption"></p>
					</div>

					<div class="row">
						<div class="col-sm-2">
							<img class="demo cursor" src="<?php echo base_url()?>assets/img/0402_Mapping/0402_mapping_01.png" style="width:100%" onclick="currentSlide(1)" alt="">
						</div>
						<div class="col-sm-2">
							<img class="demo cursor" src="<?php echo base_url()?>assets/img/0402_Mapping/0402_mapping_02.png" style="width:100%" onclick="currentSlide(2)" alt="">
						</div>
						<div class="col-sm-2">
							<img class="demo cursor" src="<?php echo base_url()?>assets/img/0402_Mapping/0402_mapping_03.png" style="width:100%" onclick="currentSlide(3)" alt="">
						</div>
						<div class="col-sm-2">
							<img class="demo cursor" src="<?php echo base_url()?>assets/img/0402_Mapping/0402_mapping_04.png" style="width:100%" onclick="currentSlide(4)" alt="">
						</div>
						<div class="col-sm-2">
							<img class="demo cursor" src="<?php echo base_url()?>assets/img/0402_Mapping/0402_mapping_05.png" style="width:100%" onclick="currentSlide(5)" alt="">
						</div>
						<div class="col-sm-2">
							<img class="demo cursor" src="<?php echo base_url()?>assets/img/0402_Mapping/0402_mapping_06.png" style="width:100%" onclick="currentSlide(6)" alt="">
						</div>
					</div>
				</div> <!-- modal-content -->
			</div><!-- modal -->
			
		</section>
		


		<!-- Main content -->
		<section class="content">
			<div class="card card-info">
				<div class="card-body" >
					<div class="row">
						<div class="col-sm-12">
							<h5>Paste RX mapping from excel(without RX) </h5>
							<h6 style="color: #04bdde;">Direction&colon; IC is at the bottom</h6>
						</div>
					</div><!-- row-->
					<div class="row mb-2 post">
						<div class="col-sm-1">
							<button id="pa0402_remapping_enter" class="btn btn-info text-xs" style="width: 100%; height: 100%;">
								<i class="fas fa-arrow-alt-circle-right"></i>&nbsp;Enter
							</button>
						</div>
						<div class="col-sm-11">
							<label for="pa0402_ic_num">IC NUM</label>
							<input class="UserDEGroup" name="pa0402_ic_num" value="1">
							<label for="pa0402_tp_mux2_order">Left-Top TPMUX start from </label>
							<input class="UserDEGroup" name="pa0402_tp_mux2_order" value="1">
							<textarea style="width: 100%;height:200px; width: 100%; background-color: #f8f9f9 ;" id="pa0402_remapping_create"></textarea>
						</div>
					</div><!-- row-->
					
					<!--*******************************************-->
					<div class="row ">
						<div class="col-sm-12">
							<h5>Result</h5>
						</div>
					</div><!-- row-->
					<div class="row mb-2">
						<div class="col-sm-6">
							<h6>Remapping_Frame(with TX_RX_Reverse) fast mode</h6>
							<textarea readonly style="width: 100%;height:200px; width: 100%; background-color: #f8f9f9 ;" id="pa0402_remapping_1"></textarea>
						</div>
						<div class="col-sm-6">
							<h6>Remapping_Frame(with TX_RX_Reverse) normal mode</h6>
							<textarea readonly style="width: 100%;height:200px; width: 100%; background-color: #ddecd6 ;" id="pa0402_remapping_3"></textarea>
						</div>
					</div>
					<div class="row mb-2">
						<div class="col-sm-6">
							<h6>Remapping_Frame_Transpose PS0</h6>
							<div class="form-group">
								<select class="form-control custom-select" id="remapping_0402_transpose_sel">
									<option value="0">Origin at left top</option>
									<option value="1">Origin at right top</option>
									<option value="2">Origin at left bottom</option>
									<option value="3">Origin at right bottom</option>
									<option value="5">Unspport</option>
								</select>
							</div>
							<textarea readonly tx="0" rx="0" ic_num="0" style="width: 100%;height:200px; width: 100%; background-color: #ddecd6 ;" id="pa0402_remapping_2"></textarea>
						</div>
						<div class="col-sm-6">
							<h6>Remapping_Frame_Transpose PS1</h6>
							<div class="form-group">
								<select class="form-control custom-select" id="remapping_0402_transpose_sel_ps1">
									<option value="0">Origin at left top</option>
									<option value="1">Origin at right top</option>
									<option value="2">Origin at left bottom</option>
									<option value="3">Origin at right bottom</option>
									<option value="5">Unspport</option>
								</select>
							</div>
							<textarea readonly tx="0" rx="0" ic_num="0" style="width: 100%;height:200px; width: 100%; background-color: #e6e6ff ;" id="pa0402_remapping_ps1"></textarea>
						</div>
					</div><!-- row-->
					
					<div class="row mb-2 post">
						<div class="col-sm-6">
							<h6>Self Test Mapping -- Cfg_adc_en (fast mode)</h6>
							<textarea readonly style="width: 100%;height:200px; width: 100%; background-color: white ;" id="pa0402_self_test_fast_cfg_adc_en"></textarea>
						</div>
						<div class="col-sm-6">
							<h6>Self Test Mapping -- Cfg_adc_en (normal mode)</h6>
							<textarea readonly style="width: 100%;height:200px; width: 100%; background-color: #d3f1ef ;" id="pa0402_self_test_cfg_adc_en"></textarea>
						</div>
						<div class="col-sm-6">
							<h6>0402 Self Test Mapping -- DC Script (word 4~7)</h6>
							<textarea readonly style="width: 100%;height:200px; width: 100%; background-color: #d3f1ef ;" id="pa0402_self_test_dc"></textarea>
						</div>
						<div class="col-sm-6">
							<h6>0402 Self Test Mapping -- DC2 Script (word 4~7)</h6>
							<textarea readonly style="width: 100%;height:200px; width: 100%; background-color: #d3f1ef ;" id="pa0402_self_test_dc2"></textarea>
						</div>
						<div class="col-sm-6">
							<h6>0412 Self Test Mapping -- DC Script (word 5~8)</h6>
							<textarea readonly style="width: 100%;height:200px; width: 100%; background-color: white ;" id="pa0412_self_test_dc"></textarea>
						</div>
						<div class="col-sm-6">
							<h6>0412 Self Test Mapping -- DC2 Script (word 5~8)</h6>
							<textarea readonly style="width: 100%;height:200px; width: 100%; background-color: white ;" id="pa0412_self_test_dc2"></textarea>
						</div>
					</div><!-- row-->
					
					<div class="row mb-2 post"> <!-- show table-->
						<div class="col-sm-12">
							<div class="float-sm-left mr-2">
								<button class="btn btn-info " id="mapping_table_show_frame" style="width: 100%;">Show Frame</button>
							</div>
							<div class="float-sm-left mr-2">
								<button class="btn btn-info " id="mapping_table_show_adc" style="width: 100%;">Show ADC</button>
							</div>
							<div class="float-sm-left mr-2">
								<button class="btn btn-info " id="mapping_table_show_rx" style="width: 100%;">Show RX</button>
							</div>
						</div>
						<div class="col-sm-12">
							<div id="mapping_table_result" style="margin-top: 10px;"></div>
						</div>
					</div><!-- row-->

				</div> <!-- card-body-->
			</div><!-- card-info-->
		</section>
		
    <!-- /.content -->
	</div>
	<!-- /.content-wrapper -->
  
<?php 
	//echo '  <script src="'.base_url().'assets/js/oem_rom.js"></script>'."\n";
?>

<style>

/* The Modal (background) */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: black;
}

/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  width: 90%;
  max-width: 1200px;
}

/* The Close Button */
.close {
  color: white;
  position: absolute;
  top: 60px;
  right: 25px;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #999;
  text-decoration: none;
  cursor: pointer;
}

.mySlides {
  display: none;
}

.cursor {
  cursor: pointer;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

img {
  margin-bottom: -4px;
}

.caption-container {
  text-align: center;
  background-color: black;
  padding: 2px 16px;
  color: white;
}

.demo {
  opacity: 0.6;
}

.active,
.demo:hover {
  opacity: 1;
}

img.hover-shadow {
  transition: 0.3s;
}

.hover-shadow:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>

<script>
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
</script>