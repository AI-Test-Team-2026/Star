 
 <a id="back-to-top" href="#" class="btn btn-info back-to-top" role="button" aria-label="Scroll to top">
      <i class="fas fa-chevron-up"></i>
 </a>
  
 <footer class="main-footer">
    <div class="float-right d-none d-sm-block">
      <b>Version</b> 1.0.0-pre
    </div>
    <strong>Copyright &copy; 2020</strong> All rights reserved.
  </footer>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
  
	
</div>
<!-- ./wrapper -->

<div class="wrapper">
	<div class="oem_overlay justify-content-center align-items-center">
		<i class="fas fa-2x fa-sync fa-spin"></i>
    </div>
</div>
</body>
</html>


<?php
	echo '  <script src="'.base_url().'assets/js/canvasjs.min.js"></script>'."\n";
	echo '  <script src="'.base_url().'assets/fontawesome/js/all.min.js"></script>'."\n";
	
	echo '  <script src="'.base_url().'assets/js/bootstrap.bundle.min.js"></script>'."\n";
	echo '  <script src="'.base_url().'assets/js/adminlte.min.js"></script>'."\n";
	echo '  <script src="'.base_url().'assets/js/demo.js"></script>'."\n";

	echo '  <script src="'.base_url().'assets/js/jquery-ui.min.js"></script>'."\n";
	echo '  <script src="'.base_url().'assets/select2/js/select2.full.min.js"></script>'."\n";
	//echo '  <script src="'.base_url().'assets/bootstrap4-duallistbox/jquery.bootstrap-duallistbox.min.js"></script>'."\n";
	//echo '  <script src="'.base_url().'assets/js/oem_create_test.js"></script>'."\n"; // json create test
	//echo '  <script src="'.base_url().'assets/js/s_oem_upload.js"></script>'."\n";
	echo '  <script src="'.base_url().'assets/js/s_oem_select2.js"></script>'."\n";
	//echo '  <script src="'.base_url().'assets/js/oem_dd_osc.js"></script>'."\n";
	//echo '  <script src="'.base_url().'assets/js/oem_notice.js"></script>'."\n";
	echo '  <script src="'.base_url().'assets/js/oem_bin_pa5495.js"></script>'."\n";
	echo '  <script src="'.base_url().'assets/js/FileSaver.min.js"></script>'."\n";
	//echo '  <script src="'.base_url().'assets/js/s_oem_export_excel.js"></script>'."\n";
	//echo '  <script src="'.base_url().'assets/js/oem_editor.js"></script>'."\n";
	echo '  <script src="'.base_url().'assets/js/oem_editor_pa5495.js"></script>'."\n";
	echo '  <script src="'.base_url().'assets/js/xlsx.full.min.js"></script>'."\n";
	echo '  <script src="'.base_url().'assets/js/xlsx.bundle.js"></script>'."\n";
	echo '  <script src="'.base_url().'assets/highlight/highlight.min.js"></script>'."\n";
	echo '  <script src="'.base_url().'assets/js/oem_tcon_script.js"></script>'."\n";
	echo '  <script>hljs.highlightAll();</script>'."\n";
?>

<script>
$(function(){
	$('#back-to-top').click(function(){ 
		$('html,body').animate({scrollTop:0}, 333);
	});
	$(window).scroll(function() {
		if ( $(this).scrollTop() > 300 ){
			$('#back-to-top').fadeIn(222);
		} else {
			$('#back-to-top').stop().fadeOut(222);
		}
	}).scroll();
});
</script>