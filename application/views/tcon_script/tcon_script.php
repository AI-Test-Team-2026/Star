  <!-- Content Wrapper. Contains page content -->
<div class="content-wrapper pa5495_oem_wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
		<div class="container-fluid">
			<div class="row mb-2">
				<div class="col-sm-6">
					<h1>TCON Script</h1>
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
    </section>

    <!-- Main content -->
   <section class="content text-sm">

		<!-- Default box -->
		<div class="card card-solid">
			<div class="card-header">
				<div class="row">
					<div class="col-sm-6">
						<h5>AC Script (without comment)</h5>
					</div>
					<div class="col-sm-6">
						<h5>DC Script (without comment)</h5>
					</div>
				</div>
			</div>
			<div class="card-body pb-0">
				<div class="row mb-2">	
					<div class="col-sm-6">
						<table class="table table-bordered">
							<tr>
								<td>TCON clock(MHz) (Demical)</td>
								<td contenteditable='true' style="background-color: #ffe6f2;" id="ac_tcon_clock">20</td>
							</tr>
							
						</table>
					</div>
				</div>
				<div class="row mb-2<!--d-flex align-items-stretch card-cust-style-->" id="tcon_script_role" role="">
					<div class="col-sm-6">
						<textarea style="width: 100%;height:200px; width: 100%; background-color: #f9ffe6;" id="tcon_reverse">
						</textarea>
					</div>
					
					<div class="col-sm-6">
						<textarea style="width: 100%;height:200px; width: 100%; background-color: #cceeff;" id="dc_reverse">
						</textarea>
					</div> <!-- col-->
				</div><!--row-->
			
				<?php 
					echo $ac_dc_parser;
				?>
			<!-- /.card-footer -->
			</div><!-- /.card-body -->
			<!--
			<div class="card-footer">
			  <nav aria-label="Contacts Page Navigation">
				<ul class="pagination justify-content-center m-0">
				  <li class="page-item active"><a class="page-link" href="#">1</a></li>
				  <li class="page-item"><a class="page-link" href="#">2</a></li>
				  <li class="page-item"><a class="page-link" href="#">3</a></li>
				  <li class="page-item"><a class="page-link" href="#">4</a></li>
				  <li class="page-item"><a class="page-link" href="#">5</a></li>
				  <li class="page-item"><a class="page-link" href="#">6</a></li>
				  <li class="page-item"><a class="page-link" href="#">7</a></li>
				  <li class="page-item"><a class="page-link" href="#">8</a></li>
				</ul>
			  </nav>
			</div>
			-->
		</div><!-- /.card -->
		
    </section>
	<button id="reverse-script" class="btn btn-warning" style="width: 80px; font-size: 10px; position: fixed; bottom: 60%; right: 1.25rem; z-index: 1032;">
      <i class="fas fa-arrow-alt-circle-left"></i>&nbsp;Reverse
	</button>

    <!-- /.content -->
</div>
<!-- /.content-wrapper -->
 
 

