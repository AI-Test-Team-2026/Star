		<!-- Navbar -->
			<nav class="main-header navbar navbar-expand navbar-white navbar-light">
			<!-- Left navbar links -->
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
					</li>
					<li class="nav-item d-none d-sm-inline-block">
						<?php
							echo '<a href="'.base_url().'Automotive/index" class="nav-link">PA5478/PA5486</a>';
						?>
					</li>
					<?php
					if(1 /*$level > 0*/ ){ 
						echo '<li class="nav-item d-none d-sm-inline-block">';
						echo '<a href="'.base_url().'Automotive/pa5495_bin_parser" class="nav-link">PA5495</a>';
						echo '</li>';
					}
					if(1 /*$level > 0*/ ){ 
						echo '<li class="nav-item d-none d-sm-inline-block">';
						echo '<a href="'.base_url().'Automotive/pa0402_bin_parser" class="nav-link">PA0402</a>';
						echo '</li>';
					}					
					if($level > 0){
						echo '<li class="nav-item d-none d-sm-inline-block" style="background-color: #fcf3cf ; border-radius: 99% 30% 20% 50% / 60% 90% 40% 70%;">';
						echo '<a href="'.base_url().'Automotive/pa5738_bin_parser" class="nav-link">PA5738</a>';
						echo '</li>';
					}
					
					?>
					<!--
					<li class="nav-item d-none d-sm-inline-block">
						<a href="#" class="nav-link">Contact</a>
					</li>-->
				</ul>
	
				<!-- SEARCH FORM -->
				<!--
				<form class="form-inline ml-3">
					<div class="input-group input-group-sm">
						<input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
						<div class="input-group-append">
							<button class="btn btn-navbar" type="submit">
								<i class="fas fa-search"></i>
							</button>
						</div>
					</div>
				</form>
				-->

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Database Backend Indicator -->
      <li class="nav-item">
        <?php
        // Load database indicator helper
        $this->load->helper('db_indicator');
        echo db_backend_badge();
        ?>
      </li>

      <!-- Messages Dropdown Menu -->
      
      <!-- Notifications Dropdown Menu -->
	  
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
			<?php
			echo "Hi ".$username
			?>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <!--<span class="dropdown-item dropdown-header">15 Notifications</span>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-envelope mr-2"></i> 4 new messages
            <span class="float-right text-muted text-sm">3 mins</span>
          </a>-->
          <!--<div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-users mr-2"></i> 8 friend requests
            <span class="float-right text-muted text-sm">12 hours</span>
          </a>-->
          <div class="dropdown-divider"></div>
		  <?php
			echo '<a href="'.base_url().'Automotive/pa5478_logout" class="dropdown-item">';
		  ?>
            <i class="fas fa-sign-out-alt mr-2"></i> Log out
            <!--<span class="float-right text-muted text-sm">2 days</span>-->
          </a>
          <!--<div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
		  -->
        </div>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
		<?php
        if($level == 2){ // admin
			//echo '<img style="height: 2.5rem;" src="'.base_url().'assets/img/role/onepiece04_usopp_sogeking.png"></img>';
			echo '<img style="height: 2.5rem;" src="'.base_url().'assets/img/role/role_admin.png"></img>';
		}
		else if($level == 1){
			//echo '<img style="height: 2.5rem;" src="'.base_url().'assets/img/role/onepiece01_luffy.png"></img>';
			if($username == "DD SE"){
				echo '<img style="height: 2.5rem;" src="'.base_url().'assets/img/role/role_users.png"></img>';
			}
			else{
				echo '<img style="height: 2.5rem;" src="'.base_url().'assets/img/role/role_e.png"></img>';
			}
		}
		else{
			//echo '<img style="height: 2.5rem;" src="'.base_url().'assets/img/role/onepiece17_doflamingo.png"></img>';
			echo '<img style="height: 2.5rem;" src="'.base_url().'assets/img/role/role_s.png"></img>';
		}
        ?>
      </li>
      <!--
	  <li class="nav-item">
        <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
          <i class="fas fa-th-large"></i>
        </a>
      </li>
	  -->
    </ul>
  </nav>
  <!-- /.navbar -->
  

  <!-- Main Sidebar Container -->
	<?php
		if($level == 0){
			echo '<aside class="main-sidebar  sidebar-dark-primary elevation-4 oem_sidebar_fae">';
		}
		else{
			echo '<aside class="main-sidebar sidebar-dark-primary elevation-4">';
		}
	?>
	<!--<aside class="main-sidebar sidebar-dark-primary elevation-4">-->
		<!-- Brand Logo -->
		<?php 
		echo ' <a href="'.base_url().'Automotive/index" class="brand-link">'."\n";
		?>
			<span class="brand-text font-weight-light">Automotive Bin Parser</span>
		</a>

		<!-- Sidebar -->
		<div class="sidebar">
			<!-- Sidebar user (optional) -->
			<!--
			<div class="user-panel mt-3 pb-3 mb-3 d-flex">
			<div class="image">
			<img src="../../dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
			</div>
			<div class="info">
			<a href="#" class="d-block">Alexander Pierce</a>
			</div>
			</div>
			-->
			<!-- SidebarSearch Form -->
			<!--
			<div class="form-inline">
			<div class="input-group" data-widget="sidebar-search">
			<input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
			<div class="input-group-append">
			<button class="btn btn-sidebar">
			<i class="fas fa-search fa-fw"></i>
			</button>
			</div>
			</div>
			</div>
			-->
			<!-- Sidebar Menu -->
			<nav class="mt-2">
				<ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
					<!-- Add icons to the links using the .nav-icon class
					with font-awesome or any other icon font library -->
					<!--
					<li class="nav-item">
						<a href="#" class="nav-link">
						<i class="nav-icon fas fa-tachometer-alt"></i>
						<p>
						Projects
						<i class="right fas fa-angle-left"></i>
						</p>
						</a>
						<ul class="nav nav-treeview">
						<li class="nav-item">
						<?php 
						//echo ' <a href="'.base_url().'Automotive/project_show_item/1" class="nav-link">'."\n";
						?>
						<i class="far fa-circle nav-icon"></i>
						<p>Dashboard v1</p>
						</a>
						</li>
						<li class="nav-item">
						<?php 
						//echo ' <a href="'.base_url().'Automotive/project_show_item/2" class="nav-link">'."\n";
						?>
						<i class="far fa-circle nav-icon"></i>
						<p>Dashboard v2</p>
						</a>
						</li>
						</ul>
					</li>-->
					<?php
						if($level > 0){ 
							
							
							echo '<li class="nav-item">';
							echo '	<a href="'.base_url().'Automotive/pa5738_bin_parser" class="nav-link">';
							echo '	<i class="nav-icon fas fa-umbrella-beach"></i><p>Bin Parser<span class="right badge badge-danger">New</span></p>';
							echo '	</a>';
							echo '</li>';

						
							
						}
					?>
					
					<!--
					<li class="nav-item">
						<?php 
						//echo ' <a href="'.base_url().'Automotive/upload_parse" class="nav-link">'."\n";
						?>
						<i class="nav-icon fas fa-th"></i>
							<p>
							Macro Parser
								<span class="right badge badge-danger">New</span>
							</p>
						</a>
					</li>-->
					
				</ul>
			</nav>
			<!-- /.sidebar-menu -->
		</div>
		<!-- /.sidebar -->
	</aside>
