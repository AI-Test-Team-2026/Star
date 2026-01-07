			<?php
				if($val_fae == 1){
					echo '<div class="card card-info collapsed-card" style="display: none;">';
				}
				else{
					echo '<div class="card card-info collapsed-card" style="display: block;">';
				}
			?>
			<!--<div class="card card-info collapsed-card">-->
				<div class="card-header" data-card-widget="collapse">
					<h3 class="card-title">Rom to Header</h3>
					<div class="card-tools">
						<button type="button" class="btn btn-tool parser_expand"  title="Collapse">
							<i class="fas fa-plus"></i>
						</button>
					</div>
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col-sm-3">
							<input type="file" class="custom-file-input" id="rom_parser" accept=".rom" >
							<label class="custom-file-label" for="rom_parser">Choose rom file</label>
						</div>
						<div class="col-sm-9">
							<button type="submit" class="btn btn-info" id="rom_save_header" style="width: 100%">
								Save As .h
							</button>
						</div>
					</div>
					<div class="row mt-3">
						<div class="col-sm-12">
							<textarea class="textnote" ic_type="<?php echo $val_ic;?>" style="width: 100%; height: 900px; font-size: 13px;" id="rom_result" readonly></textarea>
						</div>
					</div>
				</div>
			</div>