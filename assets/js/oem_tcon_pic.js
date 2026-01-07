var tp_mux2_structure = 0;
//==========================================================================
// Get variables
var ind_1_time_sta_DATA_LATCH = 0;
var ind_2_time_wth_DATA_LATCH = 1;
var ind_3_time_sta_PRE_CHARGE= 0;
var ind_4_time_stp_PRE_CHARGE = 6;
var ind_5_time_sta_SC_CLK1= 6;
var ind_6_time_stp_SC_CLK1 = 3007;
var ind_7_time_sta_RST0 = 0;
var ind_8_time_stp_RST0 = 249;
var ind_9_time_sta_dac_control = 249;
var ind_10_time_stp_dac_control = 3006;
var ind_11_time_per_dac_control = 250;
var ind_12_dac_control_slope = 0;
var ind_13_dac_control_type = 1;
var ind_14_time_sta_mixer_coef_en = 0;
var ind_15_time_stp_mixer_coef_en = 3006;
var ind_16_time_sta_SD_LE = 1;
var ind_17_time_stp_SD_LE = 2751;
var ind_18_time_per_SD_LE = 2750;
var ind_19_rawdata_go_en = 2;
var ind_20_time_sta_SYS_RSTB2 = 3008;
var ind_21_time_wth_SYS_RSTB2 = 2;

var Current_zoom ;
//==========================================================================
var VR_offset_switch = -1;
function Lookup_VRH(vrh){
	var value = 0;
	
	if(vrh == 0){
		value = -4.36;
		VR_offset_switch = -1;
	}
	else if(vrh == 1){
		value = -4.51;
		VR_offset_switch = -1;
	}
	else if(vrh == 2){
		value = -4.66;
		VR_offset_switch = -1;
	}
	else if(vrh == 3){
		value = -4.81;
		VR_offset_switch = -1;
	}
	else if(vrh == 4){
		value = -4.96;
		VR_offset_switch = 7*32*8;
	}
	else if(vrh == 5){
		value = -5.11;
		VR_offset_switch = 7*32*7;
	}
	else if(vrh == 6){
		value = -5.25;
		VR_offset_switch = 7*32*6;
	}
	else if(vrh == 7){
		value = -5.25;
		VR_offset_switch = 7*32*5;
	}
	else if(vrh == 8){
		value = -5.55;
		VR_offset_switch = 7*32*4;
	}
	else if(vrh == 9){
		value = -5.70;
		VR_offset_switch = 7*32*3;
	}
	else if(vrh == 10){
		value = -5.85;
		VR_offset_switch = 7*32*2;
	}
	else if(vrh == 11){
		value = -6.00;
		VR_offset_switch = 7*32;
	}
	else if(vrh == 12){
		value = -6.15;
		VR_offset_switch = -1;
	}
	else if(vrh == 13){
		value = -6.30;
		VR_offset_switch = -1;
	}
	else if(vrh == 14){
		value = -6.45;
		VR_offset_switch = -1;
	}
	else if(vrh == 15){
		value = -6.60;
		VR_offset_switch = 7*0;
	}
	
	return value;
}

//==========================================================================

var VR_Table = [
	// -6.6V************************************************************
	/*VR2, VR1, SET_CDAC_VRH, SET_CDAC_VRL, SET_VR3, SET_VR5, SET_VR6*/
	-3.248,-0.0058,-3.249,-0.004866,-0.007216,-0.006174,-0.2247,
	-3.357,-0.2216,-3.357,-0.221,-0.2233,-0.2222,-0.2153,
	-3.464,-0.3298,-3.464,-0.3292,-0.4392,-0.4384,-0.2142,
	-3.573,-0.4377,-3.573,-0.4373,-0.6554,-0.6545,-0.2186,
	-3.681,-0.5459,-3.681,-0.5452,-0.8713,-0.8703,-0.8705,
	-3.789,-0.6538,-3.789,-0.6534,-1.087,-1.086,-1.087,
	-3.897,-0.7618,-3.897,-0.7613,-1.303,-1.302,-1.303,
	-4.005,-0.87,-4.005,-0.8694,-1.52,-1.519,-1.519,
	-4.113,-0.9779,-4.113,-0.9776,-1.736,-1.735,-1.735,
	-4.221,-1.086,-4.221,-1.086,-1.952,-1.95,-1.951,
	-4.329,-1.194,-4.329,-1.194,-2.168,-2.167,-2.167,
	-4.437,-1.302,-4.437,-1.302,-2.384,-2.383,-2.383,
	-4.545,-1.41,-4.545,-1.41,-2.6,-2.599,-2.599,
	-4.653,-1.518,-4.653,-1.518,-2.816,-2.815,-2.815,
	-4.761,-1.626,-4.761,-1.626,-3.032,-3.031,-3.031,
	-4.869,-1.734,-4.869,-1.734,-3.248,-3.247,-3.247,
	-4.977,-1.842,-4.978,-1.842,-3.464,-3.463,-3.463,
	-5.085,-1.95,-5.086,-1.95,-3.68,-3.679,-3.679,
	-5.193,-2.058,-5.193,-2.058,-3.896,-3.895,-3.895,
	-5.301,-2.166,-5.301,-2.166,-4.112,-4.111,-4.111,
	-5.409,-2.274,-5.41,-2.274,-4.328,-4.327,-4.328,
	-5.517,-2.382,-5.518,-2.382,-4.544,-4.543,-4.543,
	-5.625,-2.49,-5.626,-2.49,-4.76,-4.759,-4.759,
	-5.734,-2.598,-5.734,-2.598,-4.976,-4.975,-4.975,
	-5.842,-2.706,-5.842,-2.706,-5.192,-5.191,-5.191,
	-5.949,-2.814,-5.95,-2.814,-5.408,-5.407,-5.407,
	-6.058,-2.922,-6.058,-2.922,-5.624,-5.623,-5.623,
	-6.166,-3.03,-6.166,-3.03,-5.84,-5.84,-5.839,
	-6.274,-3.138,-6.275,-3.138,-6.056,-6.047,-6.055,
	-6.382,-3.246,-6.382,-3.246,-6.272,-6.09,-6.271,
	-6.49,-3.354,-6.49,-3.354,-6.488,-6.121,-6.486,
	-6.595,-3.462,-6.595,-3.461,-6.595,-6.138,-6.593,
	// -6.00V************************************************************
	/*VR2, VR1, SET_CDAC_VRH, SET_CDAC_VRL, SET_VR3, SET_VR5, SET_VR6*/
	-2.95,-0.00518,-2.96,-0.00438,-0.0067,-0.00546,-0.267,
	-3.05,-0.202,-3.05,-0.201,-0.203,-0.202,-0.259,
	-3.15,-0.3,-3.15,-0.299,-0.4,-0.399,-0.258,
	-3.25,-0.398,-3.25,-0.398,-0.596,-0.595,-0.258,
	-3.35,-0.496,-3.35,-0.496,-0.793,-0.792,-0.395,
	-3.45,-0.595,-3.45,-0.594,-0.989,-0.988,-0.989,
	-3.54,-0.693,-3.54,-0.693,-1.19,-1.18,-1.19,
	-3.64,-0.791,-3.64,-0.791,-1.38,-1.38,-1.38,
	-3.74,-0.889,-3.74,-0.889,-1.58,-1.58,-1.58,
	-3.84,-0.988,-3.84,-0.987,-1.78,-1.77,-1.77,
	-3.94,-1.09,-3.94,-1.09,-1.97,-1.97,-1.97,
	-4.04,-1.18,-4.04,-1.18,-2.17,-2.17,-2.17,
	-4.13,-1.28,-4.13,-1.28,-2.36,-2.36,-2.36,
	-4.23,-1.38,-4.23,-1.38,-2.56,-2.56,-2.56,
	-4.33,-1.48,-4.33,-1.48,-2.76,-2.76,-2.76,
	-4.43,-1.58,-4.43,-1.58,-2.95,-2.95,-2.95,
	-4.53,-1.68,-4.53,-1.68,-3.15,-3.15,-3.15,
	-4.63,-1.77,-4.63,-1.77,-3.35,-3.35,-3.35,
	-4.72,-1.87,-4.72,-1.87,-3.54,-3.54,-3.54,
	-4.82,-1.97,-4.82,-1.97,-3.74,-3.74,-3.74,
	-4.92,-2.07,-4.92,-2.07,-3.94,-3.94,-3.94,
	-5.02,-2.17,-5.02,-2.17,-4.13,-4.13,-4.13,
	-5.12,-2.26,-5.12,-2.26,-4.33,-4.33,-4.33,
	-5.22,-2.36,-5.22,-2.36,-4.53,-4.52,-4.53,
	-5.31,-2.46,-5.31,-2.46,-4.72,-4.72,-4.72,
	-5.41,-2.56,-5.41,-2.56,-4.92,-4.92,-4.92,
	-5.51,-2.66,-5.51,-2.66,-5.12,-5.12,-5.11,
	-5.61,-2.76,-5.61,-2.76,-5.31,-5.31,-5.31,
	-5.71,-2.85,-5.71,-2.85,-5.51,-5.47,-5.51,
	-5.81,-2.95,-5.81,-2.95,-5.71,-5.51,-5.7,
	-5.9,-3.05,-5.9,-3.05,-5.9,-5.53,-5.9,
	-6,-3.15,-6,-3.15,-6,-5.55,-6,
	// -5.85V************************************************************
	-2.882,-0.005031,-2.882,-0.004083,-0.006582,-0.005498,-0.2505,
	-2.977,-0.1967,-2.977,-0.196,-0.1982,-0.1971,-0.242,
	-3.073,-0.2926,-3.073,-0.2917,-0.3898,-0.3888,-0.2408,
	-3.169,-0.3884,-3.169,-0.3878,-0.5815,-0.5805,-0.2411,
	-3.265,-0.4841,-3.265,-0.4835,-0.773,-0.7718,-0.3269,
	-3.361,-0.58,-3.361,-0.5795,-0.9647,-0.9636,-0.9638,
	-3.456,-0.6757,-3.457,-0.6754,-1.156,-1.155,-1.156,
	-3.552,-0.7716,-3.552,-0.7711,-1.348,-1.347,-1.347,
	-3.648,-0.8674,-3.649,-0.8669,-1.54,-1.539,-1.539,
	-3.744,-0.9633,-3.744,-0.9628,-1.731,-1.73,-1.731,
	-3.84,-1.059,-3.84,-1.059,-1.923,-1.922,-1.922,
	-3.936,-1.155,-3.936,-1.154,-2.114,-2.113,-2.114,
	-4.032,-1.251,-4.032,-1.25,-2.306,-2.305,-2.306,
	-4.127,-1.347,-4.128,-1.346,-2.498,-2.496,-2.497,
	-4.223,-1.442,-4.223,-1.442,-2.689,-2.688,-2.689,
	-4.319,-1.538,-4.319,-1.538,-2.881,-2.88,-2.88,
	-4.415,-1.634,-4.415,-1.634,-3.072,-3.071,-3.072,
	-4.511,-1.73,-4.511,-1.729,-3.264,-3.263,-3.263,
	-4.607,-1.825,-4.607,-1.825,-3.456,-3.455,-3.455,
	-4.702,-1.921,-4.703,-1.921,-3.647,-3.646,-3.646,
	-4.798,-2.017,-4.798,-2.017,-3.839,-3.838,-3.838,
	-4.894,-2.113,-4.894,-2.113,-4.031,-4.03,-4.03,
	-4.99,-2.209,-4.99,-2.208,-4.222,-4.221,-4.221,
	-5.085,-2.304,-5.086,-2.304,-4.413,-4.413,-4.413,
	-5.181,-2.4,-5.182,-2.4,-4.605,-4.604,-4.604,
	-5.278,-2.496,-5.278,-2.496,-4.797,-4.796,-4.796,
	-5.373,-2.592,-5.374,-2.592,-4.989,-4.988,-4.988,
	-5.469,-2.688,-5.469,-2.687,-5.18,-5.181,-5.179,
	-5.565,-2.783,-5.565,-2.783,-5.372,-5.32,-5.371,
	-5.661,-2.879,-5.661,-2.879,-5.563,-5.361,-5.562,
	-5.756,-2.975,-5.757,-2.975,-5.755,-5.384,-5.753,
	-5.851,-3.071,-5.851,-3.071,-5.851,-5.398,-5.849,
	// -5.7V************************************************************
	-2.808,-0.004873,-2.808,-0.003675,-0.006406,-0.005314,-0.2416,
	-2.901,-0.1916,-2.902,-0.1909,-0.1932,-0.192,-0.2329,
	-2.995,-0.2852,-2.995,-0.2843,-0.3799,-0.3788,-0.2318,
	-3.088,-0.3785,-3.088,-0.3778,-0.5666,-0.5656,-0.2313,
	-3.182,-0.4718,-3.182,-0.4712,-0.7533,-0.7523,-0.2849,
	-3.275,-0.5653,-3.275,-0.5646,-0.9401,-0.9391,-0.9392,
	-3.369,-0.6586,-3.369,-0.658,-1.127,-1.126,-1.126,
	-3.462,-0.7519,-3.462,-0.7515,-1.313,-1.312,-1.313,
	-3.555,-0.8452,-3.555,-0.8448,-1.5,-1.499,-1.5,
	-3.649,-0.9386,-3.649,-0.9383,-1.687,-1.686,-1.687,
	-3.742,-1.032,-3.742,-1.032,-1.874,-1.873,-1.873,
	-3.835,-1.125,-3.835,-1.125,-2.06,-2.059,-2.06,
	-3.929,-1.219,-3.929,-1.218,-2.247,-2.246,-2.247,
	-4.022,-1.312,-4.022,-1.312,-2.434,-2.433,-2.433,
	-4.115,-1.405,-4.116,-1.405,-2.621,-2.619,-2.62,
	-4.209,-1.499,-4.209,-1.498,-2.807,-2.806,-2.807,
	-4.302,-1.592,-4.303,-1.592,-2.994,-2.993,-2.994,
	-4.395,-1.686,-4.396,-1.685,-3.181,-3.18,-3.18,
	-4.489,-1.779,-4.489,-1.779,-3.367,-3.366,-3.367,
	-4.582,-1.872,-4.583,-1.872,-3.554,-3.553,-3.554,
	-4.676,-1.966,-4.676,-1.965,-3.741,-3.74,-3.74,
	-4.769,-2.059,-4.77,-2.059,-3.928,-3.927,-3.927,
	-4.863,-2.152,-4.863,-2.152,-4.114,-4.114,-4.114,
	-4.956,-2.246,-4.957,-2.245,-4.301,-4.3,-4.3,
	-5.049,-2.339,-5.05,-2.339,-4.488,-4.487,-4.487,
	-5.143,-2.432,-5.143,-2.432,-4.674,-4.674,-4.674,
	-5.236,-2.526,-5.237,-2.525,-4.861,-4.861,-4.86,
	-5.329,-2.619,-5.33,-2.619,-5.048,-5.049,-5.047,
	-5.423,-2.712,-5.424,-2.712,-5.235,-5.173,-5.234,
	-5.517,-2.806,-5.517,-2.805,-5.421,-5.214,-5.42,
	-5.61,-2.899,-5.611,-2.899,-5.608,-5.236,-5.606,
	-5.702,-2.992,-5.702,-2.992,-5.701,-5.249,-5.699,	

	// -5.55V************************************************************
	-2.735,-0.00477,-2.735,-0.003329,-0.006315,-0.005154,-0.239,
	-2.826,-0.1867,-2.826,-0.1858,-0.1882,-0.1871,-0.2304,
	-2.917,-0.2776,-2.917,-0.277,-0.37,-0.369,-0.2294,
	-3.007,-0.3685,-3.008,-0.3679,-0.5518,-0.5507,-0.2289,
	-3.099,-0.4595,-3.099,-0.4589,-0.7337,-0.7326,-0.2623,
	-3.189,-0.5504,-3.19,-0.5498,-0.9155,-0.9145,-0.9146,
	-3.28,-0.6413,-3.28,-0.6407,-1.097,-1.096,-1.097,
	-3.371,-0.7323,-3.371,-0.7317,-1.279,-1.278,-1.279,
	-3.462,-0.8232,-3.462,-0.8227,-1.461,-1.46,-1.461,
	-3.553,-0.914,-3.553,-0.9136,-1.643,-1.642,-1.642,
	-3.644,-1.005,-3.644,-1.005,-1.825,-1.824,-1.824,
	-3.735,-1.096,-3.735,-1.096,-2.006,-2.006,-2.006,
	-3.826,-1.187,-3.826,-1.186,-2.188,-2.187,-2.188,
	-3.917,-1.278,-3.917,-1.277,-2.37,-2.369,-2.37,
	-4.008,-1.369,-4.008,-1.368,-2.552,-2.551,-2.551,
	-4.099,-1.46,-4.099,-1.459,-2.734,-2.733,-2.733,
	-4.19,-1.55,-4.19,-1.55,-2.916,-2.915,-2.915,
	-4.281,-1.641,-4.281,-1.641,-3.097,-3.097,-3.097,
	-4.372,-1.732,-4.372,-1.732,-3.279,-3.278,-3.279,
	-4.463,-1.823,-4.463,-1.823,-3.461,-3.46,-3.461,
	-4.554,-1.914,-4.554,-1.914,-3.643,-3.642,-3.642,
	-4.644,-2.005,-4.645,-2.005,-3.825,-3.824,-3.824,
	-4.735,-2.096,-4.736,-2.096,-4.007,-4.006,-4.006,
	-4.826,-2.187,-4.827,-2.187,-4.188,-4.187,-4.188,
	-4.917,-2.278,-4.918,-2.278,-4.37,-4.369,-4.37,
	-5.008,-2.369,-5.009,-2.368,-4.552,-4.551,-4.551,
	-5.099,-2.46,-5.1,-2.459,-4.734,-4.734,-4.733,
	-5.19,-2.55,-5.19,-2.55,-4.915,-4.917,-4.914,
	-5.281,-2.641,-5.281,-2.641,-5.098,-5.025,-5.097,
	-5.372,-2.732,-5.373,-2.732,-5.279,-5.066,-5.278,
	-5.463,-2.823,-5.463,-2.823,-5.461,-5.087,-5.46,
	-5.552,-2.914,-5.552,-2.914,-5.552,-5.101,-5.55,
	// -5.4V************************************************************
	-2.661,-0.004854,-2.661,-0.003077,-0.006196,-0.005169,-0.2498,
	-2.75,-0.1817,-2.75,-0.1807,-0.1831,-0.182,-0.2414,
	-2.838,-0.2702,-2.838,-0.2694,-0.3601,-0.359,-0.2404,
	-2.926,-0.3585,-2.927,-0.3579,-0.5371,-0.536,-0.2398,
	-3.015,-0.4471,-3.015,-0.4465,-0.7139,-0.713,-0.2613,
	-3.104,-0.5356,-3.104,-0.535,-0.8909,-0.8899,-0.8902,
	-3.192,-0.6241,-3.192,-0.6236,-1.068,-1.067,-1.067,
	-3.281,-0.7126,-3.281,-0.7121,-1.245,-1.244,-1.244,
	-3.369,-0.8011,-3.369,-0.8005,-1.422,-1.421,-1.421,
	-3.458,-0.8895,-3.458,-0.889,-1.599,-1.598,-1.598,
	-3.546,-0.978,-3.546,-0.9776,-1.776,-1.775,-1.775,
	-3.634,-1.066,-3.634,-1.066,-1.952,-1.952,-1.952,
	-3.723,-1.155,-3.723,-1.155,-2.129,-2.129,-2.129,
	-3.812,-1.243,-3.812,-1.243,-2.306,-2.305,-2.306,
	-3.9,-1.332,-3.9,-1.332,-2.483,-2.483,-2.483,
	-3.989,-1.42,-3.989,-1.42,-2.66,-2.659,-2.66,
	-4.077,-1.509,-4.077,-1.508,-2.837,-2.836,-2.837,
	-4.166,-1.597,-4.166,-1.597,-3.014,-3.013,-3.014,
	-4.254,-1.686,-4.254,-1.685,-3.191,-3.19,-3.19,
	-4.342,-1.774,-4.343,-1.774,-3.368,-3.367,-3.367,
	-4.431,-1.863,-4.431,-1.862,-3.545,-3.544,-3.544,
	-4.52,-1.951,-4.52,-1.951,-3.722,-3.721,-3.721,
	-4.608,-2.039,-4.608,-2.039,-3.899,-3.898,-3.898,
	-4.696,-2.128,-4.697,-2.128,-4.076,-4.075,-4.075,
	-4.785,-2.217,-4.785,-2.216,-4.253,-4.252,-4.252,
	-4.874,-2.305,-4.874,-2.305,-4.43,-4.429,-4.429,
	-4.962,-2.393,-4.962,-2.393,-4.606,-4.606,-4.606,
	-5.051,-2.482,-5.051,-2.482,-4.783,-4.785,-4.782,
	-5.139,-2.57,-5.139,-2.57,-4.96,-4.878,-4.959,
	-5.228,-2.659,-5.228,-2.659,-5.137,-4.918,-5.136,
	-5.316,-2.747,-5.317,-2.747,-5.314,-4.938,-5.313,
	-5.403,-2.836,-5.403,-2.836,-5.403,-4.952,-5.401,
	// -5.25V************************************************************
	-2.588,-0.004636,-2.588,-0.00294,-0.006074,-0.005128,-0.2496,
	-2.674,-0.1767,-2.674,-0.1756,-0.1781,-0.1769,-0.2416,
	-2.76,-0.2627,-2.76,-0.2618,-0.3502,-0.349,-0.2404,
	-2.846,-0.3488,-2.846,-0.348,-0.5222,-0.5211,-0.24,
	-2.932,-0.4348,-2.932,-0.4341,-0.6942,-0.6932,-0.2532,
	-3.018,-0.5209,-3.018,-0.5202,-0.8663,-0.8653,-0.8627,
	-3.104,-0.6069,-3.104,-0.6063,-1.038,-1.037,-1.038,
	-3.19,-0.6928,-3.19,-0.6923,-1.21,-1.209,-1.21,
	-3.276,-0.7789,-3.276,-0.7784,-1.382,-1.381,-1.382,
	-3.362,-0.8649,-3.362,-0.8646,-1.554,-1.553,-1.554,
	-3.448,-0.9509,-3.448,-0.9506,-1.727,-1.726,-1.726,
	-3.534,-1.037,-3.534,-1.037,-1.899,-1.898,-1.898,
	-3.62,-1.123,-3.62,-1.123,-2.071,-2.07,-2.07,
	-3.706,-1.209,-3.707,-1.209,-2.243,-2.242,-2.242,
	-3.792,-1.295,-3.793,-1.295,-2.415,-2.414,-2.414,
	-3.878,-1.381,-3.879,-1.38,-2.587,-2.586,-2.586,
	-3.964,-1.467,-3.965,-1.467,-2.759,-2.758,-2.758,
	-4.05,-1.553,-4.051,-1.553,-2.931,-2.93,-2.93,
	-4.137,-1.639,-4.137,-1.639,-3.103,-3.102,-3.102,
	-4.222,-1.725,-4.222,-1.725,-3.275,-3.274,-3.274,
	-4.309,-1.811,-4.309,-1.811,-3.447,-3.446,-3.446,
	-4.395,-1.897,-4.395,-1.897,-3.619,-3.618,-3.618,
	-4.481,-1.983,-4.481,-1.983,-3.791,-3.79,-3.79,
	-4.567,-2.069,-4.567,-2.069,-3.963,-3.962,-3.963,
	-4.653,-2.155,-4.653,-2.155,-4.135,-4.134,-4.134,
	-4.739,-2.241,-4.739,-2.241,-4.307,-4.307,-4.306,
	-4.825,-2.327,-4.825,-2.327,-4.479,-4.479,-4.478,
	-4.911,-2.413,-4.912,-2.413,-4.651,-4.653,-4.65,
	-4.997,-2.499,-4.998,-2.499,-4.823,-4.731,-4.822,
	-5.083,-2.585,-5.084,-2.585,-4.995,-4.77,-4.994,
	-5.169,-2.671,-5.17,-2.671,-5.167,-4.79,-5.166,
	-5.254,-2.757,-5.254,-2.757,-5.253,-4.803,-5.251,
	
	// -5.11V************************************************************
	-2.514,-0.004505,-2.514,-0.002822,-0.005941,-0.004924,-0.2743,
	-2.598,-0.1717,-2.598,-0.1706,-0.1731,-0.172,-0.2667,
	-2.681,-0.2553,-2.681,-0.2543,-0.3403,-0.3392,-0.2658,
	-2.765,-0.3389,-2.765,-0.338,-0.5074,-0.5063,-0.2652,
	-2.848,-0.4224,-2.849,-0.4217,-0.6745,-0.6735,-0.2734,
	-2.932,-0.506,-2.932,-0.5053,-0.8417,-0.8407,-0.6826,
	-3.016,-0.5896,-3.016,-0.589,-1.009,-1.008,-1.008,
	-3.099,-0.6732,-3.099,-0.6726,-1.176,-1.175,-1.175,
	-3.183,-0.7568,-3.183,-0.7562,-1.343,-1.342,-1.343,
	-3.266,-0.8404,-3.267,-0.8398,-1.51,-1.509,-1.51,
	-3.35,-0.9239,-3.35,-0.9234,-1.678,-1.677,-1.677,
	-3.434,-1.007,-3.434,-1.007,-1.845,-1.844,-1.844,
	-3.517,-1.091,-3.518,-1.091,-2.012,-2.011,-2.011,
	-3.601,-1.175,-3.601,-1.174,-2.179,-2.178,-2.179,
	-3.685,-1.258,-3.685,-1.258,-2.346,-2.345,-2.346,
	-3.768,-1.342,-3.768,-1.341,-2.513,-2.512,-2.513,
	-3.852,-1.425,-3.852,-1.425,-2.68,-2.679,-2.68,
	-3.935,-1.509,-3.936,-1.509,-2.848,-2.847,-2.847,
	-4.019,-1.593,-4.019,-1.592,-3.015,-3.014,-3.014,
	-4.102,-1.676,-4.103,-1.676,-3.182,-3.181,-3.181,
	-4.186,-1.76,-4.187,-1.759,-3.349,-3.348,-3.348,
	-4.27,-1.843,-4.27,-1.843,-3.516,-3.515,-3.516,
	-4.353,-1.927,-4.354,-1.927,-3.683,-3.682,-3.683,
	-4.437,-2.01,-4.437,-2.01,-3.85,-3.849,-3.85,
	-4.521,-2.094,-4.521,-2.094,-4.018,-4.017,-4.017,
	-4.604,-2.178,-4.605,-2.177,-4.185,-4.185,-4.184,
	-4.688,-2.261,-4.688,-2.261,-4.352,-4.352,-4.351,
	-4.772,-2.345,-4.772,-2.344,-4.519,-4.52,-4.518,
	-4.855,-2.428,-4.855,-2.428,-4.686,-4.584,-4.685,
	-4.939,-2.512,-4.939,-2.512,-4.853,-4.622,-4.852,
	-5.023,-2.595,-5.023,-2.595,-5.021,-4.641,-5.019,
	-5.104,-2.679,-5.104,-2.679,-5.104,-4.654,-5.102,
	
	// -4.96V************************************************************
	-2.441,-0.004351,-2.441,-0.002642,-0.005809,-0.00472,-0.2496,
	-2.522,-0.1666,-2.522,-0.1656,-0.1681,-0.167,-0.2415,
	-2.603,-0.2478,-2.603,-0.2469,-0.3303,-0.3293,-0.2406,
	-2.684,-0.3289,-2.684,-0.3282,-0.4926,-0.4916,-0.24,
	-2.765,-0.4101,-2.766,-0.4094,-0.6548,-0.6539,-0.2443,
	-2.846,-0.4912,-2.847,-0.4906,-0.8171,-0.8161,-0.4811,
	-2.927,-0.5724,-2.928,-0.5717,-0.9794,-0.9783,-0.9785,
	-3.009,-0.6535,-3.009,-0.6529,-1.142,-1.141,-1.141,
	-3.09,-0.7346,-3.09,-0.734,-1.304,-1.303,-1.303,
	-3.171,-0.8157,-3.171,-0.8152,-1.466,-1.465,-1.466,
	-3.252,-0.8969,-3.252,-0.8964,-1.628,-1.627,-1.628,
	-3.333,-0.978,-3.334,-0.9775,-1.791,-1.79,-1.79,
	-3.414,-1.059,-3.415,-1.059,-1.953,-1.952,-1.953,
	-3.496,-1.14,-3.496,-1.14,-2.115,-2.114,-2.115,
	-3.577,-1.221,-3.577,-1.221,-2.278,-2.277,-2.277,
	-3.658,-1.302,-3.658,-1.302,-2.44,-2.439,-2.439,
	-3.739,-1.384,-3.739,-1.383,-2.602,-2.601,-2.601,
	-3.82,-1.465,-3.821,-1.465,-2.764,-2.763,-2.764,
	-3.901,-1.546,-3.902,-1.545,-2.926,-2.925,-2.926,
	-3.983,-1.627,-3.983,-1.627,-3.089,-3.088,-3.088,
	-4.064,-1.708,-4.064,-1.708,-3.251,-3.25,-3.25,
	-4.145,-1.789,-4.145,-1.789,-3.413,-3.412,-3.413,
	-4.226,-1.87,-4.227,-1.87,-3.576,-3.575,-3.575,
	-4.307,-1.951,-4.308,-1.951,-3.738,-3.737,-3.737,
	-4.388,-2.033,-4.389,-2.032,-3.9,-3.899,-3.899,
	-4.47,-2.114,-4.47,-2.113,-4.062,-4.062,-4.061,
	-4.551,-2.195,-4.551,-2.195,-4.225,-4.225,-4.224,
	-4.632,-2.276,-4.632,-2.276,-4.387,-4.386,-4.386,
	-4.713,-2.357,-4.714,-2.357,-4.549,-4.439,-4.548,
	-4.794,-2.438,-4.795,-2.438,-4.711,-4.474,-4.71,
	-4.876,-2.52,-4.876,-2.52,-4.874,-4.493,-4.872,
	-4.955,-2.6,-4.955,-2.6,-4.955,-4.506,-4.953,
];

//==========================================================================
function svg_get_input_ac(inputid, rawdata_en, ac_number,c_role){
	var content = $(inputid).val(); //console.log(content);
	var a_word = content.split('\n'); 
	var i = 0, valid_word = 0, j = 0;

	var backup_word = 0;
	var tmp_sensing_freq;
	var tcon_clock = parseInt($('#ac_tcon_clock').text(), 10); //console.log("tcon clock "+tcon_clock);
	var sin_tbl_len;// parseInt($('#ac_sin_tbl_len').text(), 10);
	var win_tbl_len;// = parseInt($('#ac_win_tbl_len').text(), 10);???
	var pre_period_sta = 0, en_period_sta = 0;
	var pre_period = 0, en_period = 0, sc_clk2_period = 0;
	var rst0_sta = 0, rst0_stp = 0;
	var mixer_6T_check = 0;
	var tmp_ind_c = 0;
	var tmp_td_name;
	var pre_len, post_len;
	//===============================
	var get_role = c_role;//$('#tcon_script_role').attr('role'); 
	var tmp_id = '';
	//console.log(get_role);
	//===============================
	
	for(i = 0; i< a_word.length; i++){
		//var tmp_word = $.trim(a_word[i].replace('\n','')); //console.log(tmp_word);
		var tmp_word = $.trim(a_word[i].split(',')[0]); //console.log(tmp_word);
		if(tmp_word !== "" && tmp_word[0] != "/"){
			//console.log("valid word "+valid_word+" value is "+tmp_word);
			//=======================================================
			if(rawdata_en == 0){
				// TCON
				if(valid_word == 0){
					pre_period_sta = (tmp_word >> 4) & 0x0F;
					en_period_sta = (tmp_word >> 24) & 0x0F;
					
					pre_period = (tmp_word >> 8) & 0xFFFF;
					pre_period = pre_period - pre_period_sta;
					en_period = (tmp_word >> 28) & 0x0F;
					
					//.............................
					ind_1_time_sta_DATA_LATCH = tmp_word & 0x03;
					ind_2_time_wth_DATA_LATCH = (tmp_word >> 2) & 0x03;
					ind_3_time_sta_PRE_CHARGE = (tmp_word >> 4) & 0x0F;
					ind_4_time_stp_PRE_CHARGE = (tmp_word >> 8) & 0xFFFF;
					ind_5_time_sta_SC_CLK1 = (tmp_word >> 24) & 0x0F;
					
				}
				else if(valid_word == 1){
					en_period = (en_period | ((tmp_word & 0xFFF)<<4));
					ind_6_time_stp_SC_CLK1 = en_period;
					en_period = en_period - en_period_sta;
					
					tmp_id = "#"+get_role+"ac_sensing_time"; //console.log(tmp_id);
					$(tmp_id).text(((1/tcon_clock)*en_period).toFixed(2));
					
					
					// RST0 STA/STP
					rst0_sta = (tmp_word >> 12) & 0x0F;
					rst0_stp = (tmp_word >> 16) & 0xFFFF;
					
					//.............................
					ind_7_time_sta_RST0 = (tmp_word >> 12) & 0x0F;
					ind_8_time_stp_RST0 = (tmp_word >> 16) & 0xFFFF;
					
				}
				else if(valid_word == 2){
					sc_clk2_period = (tmp_word >> 20) & 0xFFF;
					
					// time_sta_dac_control
					var time_sta_dac_control = (tmp_word & 0x0F);
					
					if(time_sta_dac_control - rst0_sta != 6){
						mixer_6T_check |= 1;
					}
					else{
						mixer_6T_check &= 0xFE;
					}
					
					//.............................
					ind_9_time_sta_dac_control = (tmp_word) & 0x0F;
					ind_10_time_stp_dac_control = (tmp_word >> 4) & 0xFFFF;
					
				}
				else if(valid_word == 3){
					sc_clk2_period = sc_clk2_period | ((tmp_word & 0x0F) << 12); //console.log(sc_clk2_period);
					ind_11_time_per_dac_control = sc_clk2_period;
					
					tmp_id = "#"+get_role+"ac_slope";
					$(tmp_id).text((tmp_word >> 4) & 0x3F);
					
					tmp_id = "#"+get_role+"ac_sine_wave_en";
					$(tmp_id).text((tmp_word >> 10) & 0x07);
					
					tmp_sensing_freq = Math.round(1000*tcon_clock/sc_clk2_period); //console.log(tmp_sensing_freq);
					tmp_id = "#"+get_role+"ac_sensing_freq";
					$(tmp_id).text(tmp_sensing_freq.toFixed(2));
					
					tmp_id = "#"+get_role+"ac_osr";
					$(tmp_id).text(Math.round(en_period/sc_clk2_period));
					
					tmp_id = "#"+get_role+"ac_precharge_num";
					$(tmp_id).text(Math.round(pre_period/sc_clk2_period));
					
					tmp_id = "#"+get_role+"ac_rst0_num";
					$(tmp_id).text(Math.floor((rst0_stp - rst0_sta) / sc_clk2_period));
					
					// Note mixer_coef_en start time....
					var time_sta_mixer_coef_en = (tmp_word >> 13) & 0xFFFF;
					//console.log(time_sta_mixer_coef_en);
					if((time_sta_mixer_coef_en) != (rst0_stp-6)){
						mixer_6T_check |= 2;
					}
					else{
						mixer_6T_check &=0xFD;
					}
					
					//.............................
					ind_12_dac_control_slope = (tmp_word >> 4) &  0x3F;
					ind_13_dac_control_type = (tmp_word >> 10) & 0x07;
					ind_14_time_sta_mixer_coef_en = (tmp_word >> 13) & 0xFFFF;
					
					tmp_ind_c = (tmp_word >> 29) & 0x07;
				}
				else if(valid_word == 4){
					
					//.............................
					ind_15_time_stp_mixer_coef_en = tmp_ind_c | ((tmp_word & 0x1FFF) << 3); 
					ind_16_time_sta_SD_LE = (tmp_word >> 13) & 0xFFFF;
					
					tmp_ind_c = (tmp_word >> 29) & 0x07;
				}
				else if(valid_word == 5){
					
					//.............................
					ind_17_time_stp_SD_LE = tmp_ind_c | ((tmp_word & 0x1FFF) << 3); 
					ind_18_time_per_SD_LE = (tmp_word >> 13) & 0xFFFF;
					ind_19_rawdata_go_en = (tmp_word >> 29) & 0x03;
					
					tmp_ind_c = (tmp_word >> 31) & 0x01;
					
				}
				else if(valid_word == 6){
					tmp_id = "#"+get_role+"ac_time_with_SYS_RSTB2";
					$(tmp_id).text((tmp_word >> 15 )&0x03);

					//.............................
					ind_20_time_sta_SYS_RSTB2 = tmp_ind_c | ((tmp_word & 0x7FFF) << 1); 
					ind_21_time_wth_SYS_RSTB2 = (tmp_word >> 15) & 0x03;
				}
				else if(valid_word == 7){
					
				}
				//Mixer1==================================================
				else if(valid_word == 8){
					tmp_id = "#"+get_role+"ac_mixer1_coundown_cntr_init";
					$(tmp_id).text((tmp_word >> 16)&0xFF);
					tmp_id = "#"+get_role+"ac_mixer1_x_in";
					$(tmp_id).text((tmp_word >> 24)&0x0F);
					tmp_id = "#"+get_role+"ac_mixer1_turn_on";
					$(tmp_id).text((tmp_word >> 28)&0x0F);
				}
				else if(valid_word == 9){
					// mixer 1 sensing freq is the same with tcon
					tmp_id = "#"+get_role+"ac_mixer1_freq";
					$(tmp_id).text(tmp_sensing_freq);
					
					var tmp_cc = (tmp_word & 0x0FFFFFFF)*tcon_clock*1000/(1024*64*tmp_sensing_freq);
					sin_tbl_len = Math.round(tmp_cc);
					tmp_id = "#"+get_role+"ac_sin_tbl_len";
					$(tmp_id).text(sin_tbl_len);
					
					tmp_id = "#"+get_role+"ac_mixer1_mixer_win_sel";
					$(tmp_id).text((tmp_word >> 28)&0x0F);
				}
				else if(valid_word == 10){
					// Get win_tbl_len in word 11
					backup_word = (tmp_word & 0xFFFFFF); //console.log(backup_word);
					//$('#ac_mixer1_win_len').text((win_tbl_len *1024 * 64 / (tmp_word & 0xFFFFFF)).toFixed(2));
					
					tmp_id = "#"+get_role+"ac_mixer1_spl_type";
					$(tmp_id).text((tmp_word >> 24) & 0xFF);
				}
				else if(valid_word == 11){

					tmp_id = "#"+get_role+"ac_mixer1_sin_addr_init";
					$(tmp_id).text((tmp_word >> 16)&0xFFFF);
					
					var tmp_v = (tmp_word & 0xFFFF)+1;
					tmp_id = "#"+get_role+"ac_mixer1_win_len";
					$(tmp_id).text(tmp_v);
				
					// Get win_tbl_len
					win_tbl_len = (tmp_v*backup_word/1024/64);
					win_tbl_len = Math.round(win_tbl_len);
					tmp_id = "#"+get_role+"ac_win_tbl_len";
					$(tmp_id).text(win_tbl_len);
					
				}
				else if(valid_word == 12){
					if(tmp_word & 0xFFFF == 0xFFFF){
						tmp_id = "#"+get_role+"ac_mixer1_win_idle_cntr_post_init";
						$(tmp_id).text(0);
						post_len = 0xFFFF;
					}
					else{
						tmp_id = "#"+get_role+"ac_mixer1_win_idle_cntr_post_init";
						post_len = (tmp_word& 0xFFFF)+1;
						$(tmp_id).text(post_len);
					}
					if(((tmp_word >> 16) & 0xFFFF) == 0xFFFF){
						tmp_id = "#"+get_role+"ac_mixer1_win_idle_cntr_pre_init";
						$(tmp_id).text(0);
						pre_len = 0xFFFF;
					}
					else{
						tmp_id = "#"+get_role+"ac_mixer1_win_idle_cntr_pre_init";
						pre_len = (tmp_word& 0xFFFF)+1;
						$(tmp_id).text(pre_len);
					}
				}
				else if(valid_word == 13){
					tmp_id = "#"+get_role+"ac_mixer1_tx_win_addr_inc_pre";
					$(tmp_id).text(tmp_word & 0x00FFFFFF);
				}
				else if(valid_word == 14){
					tmp_id = "#"+get_role+"ac_mixer1_tx_win_addr_dec_post";
					$(tmp_id).text(tmp_word & 0x00FFFFFF);
				}
				else if(valid_word == 15){
					tmp_id = "#"+get_role+"ac_mixer1_tx_win_bias_scale";
					$(tmp_id).text((tmp_word >> 16) & 0xFFFF);
					tmp_id = "#"+get_role+"ac_mixer1_tx_win_bias_dc";
					$(tmp_id).text(tmp_word & 0xFFFF);
				}
				else if(valid_word == 16){
					
				}
				else if(valid_word == 17){
					
				}
				else if(valid_word == 18){
					
				}
				else if(valid_word == 19){
					
				}
				else if(valid_word == 20){
					
				}
				//Mixer2==================================================
				else if(valid_word == 21){
					tmp_id = "#"+get_role+"ac_mixer2_coundown_cntr_init";
					$(tmp_id).text((tmp_word >> 16)&0xFF);
					tmp_id = "#"+get_role+"ac_mixer2_x_in";
					$(tmp_id).text((tmp_word >> 24)&0x0F);
					tmp_id = "#"+get_role+"ac_mixer2_turn_on";
					$(tmp_id).text((tmp_word >> 28)&0x0F);
				}
				else if(valid_word == 22){
					tmp_id = "#"+get_role+"ac_mixer2_freq";
					$(tmp_id).text(((tmp_word & 0x0FFFFFFF)*tcon_clock*1000/(sin_tbl_len*1024*64)).toFixed(2));
					tmp_id = "#"+get_role+"ac_mixer2_mixer_win_sel";
					$(tmp_id).text((tmp_word >> 28)&0x0F);
				}
				else if(valid_word == 23){
					tmp_id = "#"+get_role+"ac_mixer2_win_len";
					$(tmp_id).text(Math.round(win_tbl_len *1024 * 64 / (tmp_word & 0xFFFFFF)));
					tmp_id = "#"+get_role+"ac_mixer2_spl_type";
					$(tmp_id).text((tmp_word >> 24) & 0xFF);
				}
				else if(valid_word == 24){
					//tmp_word+=1;
					//$('#gray_pt_win_len').text(tmp_word & 0xFFFF);
					tmp_id = "#"+get_role+"ac_mixer2_sin_addr_init";
					$(tmp_id).text((tmp_word >> 16)&0xFFFF);
				}
				else if(valid_word == 25){
					if(tmp_word & 0xFFFF == 0xFFFF){
						tmp_id = "#"+get_role+"ac_mixer2_win_idle_len_post";
						$(tmp_id).text(0);
					}
					else{
						tmp_id = "#"+get_role+"ac_mixer2_win_idle_len_post";
						$(tmp_id).text((tmp_word& 0xFFFF)+1);
					}
					if(((tmp_word >> 16) & 0xFFFF) == 0xFFFF){
						tmp_id = "#"+get_role+"ac_mixer2_win_idle_len_pre";
						$(tmp_id).text(0);
					}
					else{
						tmp_id = "#"+get_role+"ac_mixer2_win_idle_len_pre";
						$(tmp_id).text((tmp_word& 0xFFFF)+1);
					}
				}
				else if(valid_word == 26){
					// already know green_pt_win_len_pre in word 12
					//var tmp_c = parseInt($('#green_pt_win_len_pre').text(), 10);
					//$('#gray_pt_win_tbl_len').text(tmp_c*1024*32/(tmp_word & 0xFFFFFF));
				}
				else if(valid_word == 27){
					
				}
				else if(valid_word == 28){
					tmp_id = "#"+get_role+"ac_mixer2_tx_win_bias_scale";
					$(tmp_id).text((tmp_word >> 16) & 0xFFFF);
					tmp_id = "#"+get_role+"ac_mixer2_tx_win_bias_dc";
					$(tmp_id).text(tmp_word & 0xFFFF);
				}
				else if(valid_word == 29){
					
				}
				else if(valid_word == 30){
					
				}
				else if(valid_word == 31){
					
				}
				else if(valid_word == 32){
					
				}
				else if(valid_word == 33){
					
				}
				// DSP===================================================
				else if(valid_word == 35){
					tmp_id = "#"+get_role+"ac_i_const";
					$(tmp_id).text((tmp_word) & 0x7FFFFF);
					// ignore mixer2 setting
				}
				else if(valid_word == 36){
					tmp_id = "#"+get_role+"ac_q_const";
					$(tmp_id).text((tmp_word) & 0x7FFFFF);
					tmp_id = "#"+get_role+"ac_Ini_g_swdata";
					$(tmp_id).text((tmp_word >> 23) & 0x7F);
				}
				else if(valid_word == 37){
					tmp_id = "#"+get_role+"ac_adc_iq_downscale";
					$(tmp_id).text((tmp_word >> 20) & 0xFFF);
					tmp_id = "#"+get_role+"ac_adc_rawdata_downscale";
					$(tmp_id).text((tmp_word) & 0xFFF);
				}
				//=======================================================
				
				for(j = 0; j < 32; j++){
					tmp_td_name = '.0402_script_bitfield[word="'+valid_word+'"] td[offset="'+j+'"]';
					$(tmp_td_name).text((tmp_word >> j ) &0x01);
						
				}
				//console.log(tmp_td_name);
				//=======================================================
			}
			else{ // record rawdata only
				var tmp_id = '#fw_checker_ac'+ac_number+"_word"+valid_word; 
				if(valid_word == 3 || valid_word == 21 || valid_word == 35){
					//console.log(tmp_id);
					$(tmp_id).text(tmp_word); 
				}	
			}
			valid_word++; //console.log(valid_word);
		}
	}
	
	if(((mixer_6T_check & 0x03) == 0x03) && rawdata_en == 0){
		tmp_id = "#"+get_role+"ac_mixer_note";
		$(tmp_id).css('display','table-cell');
		tmp_id = "#"+get_role+"ac_mixer_note";
		$(tmp_id).text('time_sta_mixer_coef_en should be RST0 rising - 6T');
	}


}
function svg_input_dc(inputid, dc_set, rawdata_en, dc_number, c_role){ // TBD......??? 2023.3.10
	var content = $(inputid).val();
	var a_word = content.split('\n'); 
	var i = 0, valid_word = 0;
	var ptba = 0, adc_cyc=0;
	var vrh = 0, vr = 0;
	var voltage;
	var tmp_td_name;
	//===============================
	var get_role = c_role;//$('#tcon_script_role').attr('role'); //console.log(get_role);
	var tmp_id = '';
	//===============================


	for(i = 0; i< a_word.length; i++){
		//var tmp_word = $.trim(a_word[i].replace('\n','')); 
		var tmp_word = $.trim(a_word[i].split(',')[0]);
		if(tmp_word != "" && tmp_word[0] != "/"){
			//console.log("valid word "+valid_word+" value is "+tmp_word);
			//=======================================================
			if(rawdata_en == 0){
				if(valid_word == 0){ 
					
				}
				else if(valid_word == 1){
					
				}
				else if(valid_word == 2){
					// Get VRH===================
					vrh = (tmp_word >> 3 ) &0x0F; 
					voltage = Lookup_VRH(vrh);
					tmp_id = "#"+get_role+"dc_vrh";
					$(tmp_id).text(vrh+" ("+voltage+" V)");
					//****************************
					if(VR_offset_switch >= 0){
						vr = (tmp_word >> 7 ) &0x1F; 
						
						tmp_id = "#"+get_role+"dc_vr1";
						$(tmp_id).text(vr + " ("+VR_Table[VR_offset_switch+(7*vr)+1]+"V)");
						//****************************
						vr = (tmp_word >> 12 ) &0x1F; 
						
						tmp_id = "#"+get_role+"dc_vr2";
						$(tmp_id).text(vr + " ("+VR_Table[VR_offset_switch+(7*vr)+0]+"V)");
						//****************************
						vr = (tmp_word >> 17 ) &0x1F; 
						
						tmp_id = "#"+get_role+"dc_vr3";
						$(tmp_id).text(vr + " ("+VR_Table[VR_offset_switch+(7*vr)+4]+"V)");
						//****************************
						vr = (tmp_word >> 22 ) &0x1F; 
						
						tmp_id = "#"+get_role+"dc_vr5";
						$(tmp_id).text(vr + " ("+VR_Table[VR_offset_switch+(7*vr)+5]+"V)");
						//****************************
						vr = (tmp_word >> 27 ) &0x1F; 
						
						tmp_id = "#"+get_role+"dc_vr6";
						$(tmp_id).text(vr + " ("+VR_Table[VR_offset_switch+(7*vr)+6]+"V)");
					}
					else{
						vr = (tmp_word >> 7 ) &0x1F; 
						
						tmp_id = "#"+get_role+"dc_vr1";
						$(tmp_id).text(vr);
						//****************************
						vr = (tmp_word >> 12 ) &0x1F; 
						
						tmp_id = "#"+get_role+"dc_vr2";
						$(tmp_id).text(vr);
						//****************************
						vr = (tmp_word >> 17 ) &0x1F; 
						
						tmp_id = "#"+get_role+"dc_vr3";
						$(tmp_id).text(vr);
						//****************************
						vr = (tmp_word >> 22 ) &0x1F; 
						
						tmp_id = "#"+get_role+"dc_vr5";
						$(tmp_id).text(vr);
						//****************************
						vr = (tmp_word >> 27 ) &0x1F; 
						
						tmp_id = "#"+get_role+"dc_vr6";
						$(tmp_id).text(vr);
					}
					
				}
				else if(valid_word == 3){
					if(VR_offset_switch >= 0){
						vr = (tmp_word >> 15 ) &0x1F; 
						
						tmp_id = "#"+get_role+"dc_set_cdac_vrh";
						$(tmp_id).text(vr + " ("+VR_Table[VR_offset_switch+(7*vr)+2]+"V)");
						//****************************
						vr = (tmp_word >> 20 ) &0x1F; 
						
						tmp_id = "#"+get_role+"dc_set_cdac_vrl";
						$(tmp_id).text(vr + " ("+VR_Table[VR_offset_switch+(7*vr)+3]+"V)");
					}
					else{
						//****************************
						vr = (tmp_word >> 15 ) &0x1F; 
						
						tmp_id = "#"+get_role+"dc_set_cdac_vrh";
						$(tmp_id).text(vr);
						//****************************
						vr = (tmp_word >> 20 ) &0x1F; 
						
						tmp_id = "#"+get_role+"dc_set_cdac_vrl";
						$(tmp_id).text(vr);
					}
				}
			
			
				//=======================================================
				
				for(j = 0; j < 32; j++){
					tmp_td_name = '.0402_dc_script_bitfield[word="'+valid_word+'"] td[offset="'+j+'"]';
					$(tmp_td_name).text((tmp_word >> j ) &0x01);
						
				}
				//console.log(tmp_td_name);
				//========================================================
			}
			else{
				var tmp_id = '#fw_checker_dc'+dc_set+'_'+dc_number+"_word"+valid_word; 
				if(valid_word == 1 || valid_word == 2){
					//console.log(tmp_id);
					$(tmp_id).text(tmp_word); 
					
				}	
			}

			valid_word++;
		}
	}
}

function svg_input_dc_pa0412(inputid, dc_set, rawdata_en, dc_number, c_role){ // TBD......??? 2023.3.10
	var content = $(inputid).val();
	var a_word = content.split('\n'); 
	var i = 0, valid_word = 0;
	var ptba = 0, adc_cyc=0;
	var vrh = 0, vr = 0;
	var vrl = 0;
	var vrh_v = 0, vrl_v = 0;
	var temp_v = 0;
	var tmp_td_name;
	//===============================
	var get_role = "pa0412_"+c_role;//$('#tcon_script_role').attr('role'); //console.log(get_role);
	var tmp_id = '';
	//console.log("stella "+get_role);
	//===============================
	console.log("DC len is "+a_word.length);
	for(i = 0; i< a_word.length; i++){
		//var tmp_word = $.trim(a_word[i].replace('\n','')); 
		var tmp_word = $.trim(a_word[i].split(',')[0]);
		
		// var tmp_word = parseInt(tmp_word_t, 16);
		if(tmp_word != "" && tmp_word[0] != "/"){
			//console.log("valid word "+valid_word+" value is "+tmp_word);
			//=======================================================
			if(rawdata_en == 0){
				if(valid_word == 0){ 
					
				}
				else if(valid_word == 1){
					
				}
				else if(valid_word == 2){
					// Get VRH===================
					vrh = (tmp_word) &0x0F; //word2 bit[3:0]
					vrl = (tmp_word >> 16) &0x0F; //word2 bit[19:16]
					
					//===============
					vrh_v = Math.round(((1.8/36)*(37.7+vrh)) *100)/100;
					vrl_v = Math.round(((-1.8/18)*(29.1+vrl))*100)/100; 
					//===============

					tmp_id = "#"+get_role+"dc_vrh"; //console.log(tmp_id);
					$(tmp_id).text(vrh+" ("+vrh_v+" V)");
					tmp_id = "#"+get_role+"dc_vrl";
					$(tmp_id).text(vrl+" ("+vrl_v+" V)");
					//****************************
					
				}
				else if(valid_word == 4){
					vr = (tmp_word  ) &0x1F; //VR1 word 4 bit[4:0]
					tmp_id = "#"+get_role+"dc_vr1";
					
					if(vr == 31)
					{
						temp_v = vrl_v + (vrh_v-vrl_v)/61 * (2*vr - 1);
						temp_v = Math.round(temp_v * 100)/100;
					}
					else{
						temp_v = vrl_v + (vrh_v-vrl_v)/61 * 2*vr;
						temp_v = Math.round(temp_v * 100)/100;
						// console.log(temp_v);
					}
					
					$(tmp_id).text(vr+" ("+temp_v+" V)");
					//--------------------------------------
					vr = (tmp_word >> 5 ) &0x1F; //VR3 word 4 bit[9:5]
					tmp_id = "#"+get_role+"dc_vr3";
					if(vr == 31)
					{
						temp_v = vrl_v + (vrh_v-vrl_v)/61 * (2*vr - 1);
						temp_v = Math.round(temp_v * 100)/100;
					}
					else{
						temp_v = vrl_v + (vrh_v-vrl_v)/61 * 2*vr;
						temp_v = Math.round(temp_v * 100)/100;
					}
					$(tmp_id).text(vr+" ("+temp_v+" V)");
					//--------------------------------------
					vr = (tmp_word >> 10 ) &0x1F; //VR4 word 4 bit[14:10]
					tmp_id = "#"+get_role+"dc_vr4";
					if(vr == 31)
					{
						temp_v = vrl_v + (vrh_v-vrl_v)/61 * (2*vr - 1);
						temp_v = Math.round(temp_v * 100)/100;
					}
					else{
						temp_v = vrl_v + (vrh_v-vrl_v)/61 * 2*vr;
						temp_v = Math.round(temp_v * 100)/100;
					}
					$(tmp_id).text(vr+" ("+temp_v+" V)");
					//--------------------------------------
					vr = (tmp_word >> 15 ) &0x1F; //CDAC_VRL word 4 bit[19:15]
					tmp_id = "#"+get_role+"dc_set_cdac_vrl";
					if(vr == 0)
					{
						temp_v = vrl_v + (vrh_v-vrl_v)/61 * 1*vr;
						temp_v = Math.round(temp_v * 100)/100;
					}
					else{
						temp_v = vrl_v + (vrh_v-vrl_v)/61 * 1*(vr+1);
						temp_v = Math.round(temp_v * 100)/100;
					}
					$(tmp_id).text(vr+" ("+temp_v+" V)");
					//--------------------------------------
					vr = (tmp_word >> 20 ) &0x1F; //CDAC_VRH word 4 bit[24:20]
					tmp_id = "#"+get_role+"dc_set_cdac_vrh";
					
					temp_v = vrl_v + (vrh_v-vrl_v)/61 * 1*(vr+30);
					temp_v = Math.round(temp_v * 100)/100;
					
					$(tmp_id).text(vr+" ("+temp_v+" V)");
					//--------------------------------------
				}
				else if(valid_word == 11){
					// console.log(valid_word+" ???????????????");
					vr = (tmp_word  ) &0x1F; //VR2 word 11 bit[4:0]
					tmp_id = "#"+get_role+"dc_vr2";
					if(vr == 31)
					{
						temp_v = vrl_v + (vrh_v-vrl_v)/61 * 1*(vr+1);
						temp_v = Math.round(temp_v * 100)/100;
					}
					else{
						temp_v = vrl_v + (vrh_v-vrl_v)/61 * 1*vr;
						temp_v = Math.round(temp_v * 100)/100;
					}
					$(tmp_id).text(vr+" ("+temp_v+" V)");
					//--------------------------------------
					vr = (tmp_word >> 8 ) &0x1F; //VR2H word 11 bit[12:8]
					tmp_id = "#"+get_role+"dc_vr2h";
					
					temp_v = vrl_v + (vrh_v-vrl_v)/61 * 1*(vr+30);
					temp_v = Math.round(temp_v * 100)/100;
					
					$(tmp_id).text(vr+" ("+temp_v+" V)");
					//--------------------------------------
				}
			
				//=======================================================
				
				for(j = 0; j < 32; j++){
					tmp_td_name = '.0402_dc_script_bitfield[word="'+valid_word+'"] td[offset="'+j+'"]';
					$(tmp_td_name).text((tmp_word >> j ) &0x01);
						
				}
				//console.log(tmp_td_name);
				//========================================================
			}
			else{ // no checking!!!!!
				var tmp_id = '#fw_checker_dc'+dc_set+'_'+dc_number+"_word"+valid_word; 
				if(valid_word == 1 || valid_word == 2){
					//console.log(tmp_id);
					$(tmp_id).text(tmp_word); 
					
				}	
			}

			valid_word++;
		}
	}
}
function svg_range_event(){
	/*$('#svgrange').on('input', function(){
		Current_zoom = $(this).val();
		//console.log("hahah"+Current_zoom);
		svg_render();
	});*/
	
	$('#svgrange').change(function(){
		Current_zoom = parseFloat($(this).val());
		//console.log("hahah"+Current_zoom);
		svg_render();
		
	});
}

function svg_render(){
	var html_content = '';
	var i = 0, j = 0;
	//==========================================================================
	svg_get_input_ac('#svg_input_ac', 0 ,0, ""); // if rawdata_en is 0, ac_nuymber will be ignored

	// select IC
	material = $('input[name="icsel_radio"]:checked').val();
	// console.log("material is "+material);
	// if(material =="HX83194-A" || material == "HX84195-A"){
	if(material =="PA0402"){
		svg_input_dc('#svg_input_dc', 1, 0,0,'');
	}
	else{
		svg_input_dc_pa0412('#svg_input_dc', 1, 0,0,'');
	}
	//$('.oem_svg_tcon_script_pic').css('overflow-x', 'auto');
	//==========================================================================
	var offset_x = 120;
	var offset_y = 0;
	var interval_y = 20;
	
	var interval_x = 10;//10;---> from rangebar
	//=========================
	//overlap interval_x from rangebar
	interval_x = Current_zoom;
	
	var next_y = 10;
	var max_sclk1_count = ind_20_time_sta_SYS_RSTB2 + 100;
	var max_len = offset_x + 2*interval_x*max_sclk1_count; //console.log(max_len);
	var text_offset = offset_y + interval_y;
	var offset_y_i = 0;
	
	var svg_max_heigh = 500;
	var svg_max_width = max_len;
	
	//=========================
	// render start
	html_content+= '<svg height="'+svg_max_heigh+'" width="'+svg_max_width+'">';
	if(Current_zoom >= 10){
		// Grid......
		var grid_count = (svg_max_width);
		for(i = 0; i < grid_count; i++){
			html_content+= '<line x1="'+(offset_x + i*interval_x)+'" y1="0" x2="'+(offset_x + i*interval_x)+'" y2="'+svg_max_heigh+'" style="stroke:#d6dbdf ; stroke-width:1" />';
		}
	}
	// dashed......
	html_content+='<line x1="'+(offset_x-1)+'" y1="'+offset_y+'" x2="'+(offset_x-1)+'" y2="'+svg_max_heigh+'" style="stroke:#85c1e9 ; stroke-width:2" stroke-dasharray="5"/>';
	//waveform...................................
	//echo '<text class="oem_pic_tcon_font" fill="#010413" x="0" y="'.$text_offset.'">sc_clk1 counter</text>'; 
	html_content+= '<rect fill="#f9ebea" fill-opacity="0.5" x="'+offset_x+'" y="'+(offset_y)+'" width="'+svg_max_width+'" height="'+(offset_y+interval_y)+'" />';
	for(i = 0;i< max_sclk1_count; i++){
		html_content+= '<line x1="'+(offset_x + 2*i*interval_x)+'" y1="'+(offset_y+interval_y)+'" x2="'+(offset_x + 2*i*interval_x)+'" y2="'+offset_y+'" style="stroke: #d93973 ; stroke-width:1"/>';
		html_content+= '<line x1="'+(offset_x + 2*i*interval_x)+'" y1="'+offset_y+'" x2="'+(offset_x + 2*(i+0.5)*interval_x)+'" y2="'+offset_y+'" style="stroke: #d93973 ; stroke-width:1"/>';
		html_content+= '<line x1="'+(offset_x + 2*(i+0.5)*interval_x)+'" y1="'+offset_y+'" x2="'+(offset_x + 2*(i+0.5)*interval_x)+'" y2="'+(offset_y+interval_y)+'" style="stroke: #d93973 ; stroke-width:1"/>';
		html_content+= '<line x1="'+(offset_x + 2*(i+0.5)*interval_x)+'" y1="'+(offset_y+interval_y)+'" x2="'+(offset_x + 2*(i+1)*interval_x)+'" y2="'+(offset_y+interval_y)+'" style="stroke: #d93973 ; stroke-width:1"/>';
	}
	//......................................................................................
	offset_y_i += offset_y + interval_y + next_y;
	//html_content+= '<text class="oem_pic_tcon_font" fill="#010413" x="0" y="'+text_offset+'">DATA_LATCH</text>';
	html_content+= '<rect fill="#f9ebea" fill-opacity="0.5" x="'+offset_x+'" y="'+(offset_y_i)+'" width="'+svg_max_width+'" height="'+(offset_y+interval_y)+'" />';
	html_content+= '<line x1="'+(offset_x)+'" y1="'+(offset_y_i+interval_y)+'" x2="'+(offset_x + 2*interval_x*ind_1_time_sta_DATA_LATCH)+'" y2="'+(offset_y_i+interval_y)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*ind_1_time_sta_DATA_LATCH)+'" y1="'+(offset_y_i+interval_y)+'" x2="'+(offset_x + 2*interval_x*ind_1_time_sta_DATA_LATCH)+'" y2="'+offset_y_i+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*ind_1_time_sta_DATA_LATCH)+'" y1="'+offset_y_i+'" x2="'+(offset_x + 2*interval_x*(ind_1_time_sta_DATA_LATCH+ind_2_time_wth_DATA_LATCH))+'" y2="'+offset_y_i+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*(ind_1_time_sta_DATA_LATCH+ind_2_time_wth_DATA_LATCH))+'" y1="'+offset_y_i+'" x2="'+(offset_x + 2*interval_x*(ind_1_time_sta_DATA_LATCH+ind_2_time_wth_DATA_LATCH))+'" y2="'+(offset_y_i+interval_y)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*(ind_1_time_sta_DATA_LATCH+ind_2_time_wth_DATA_LATCH))+'" y1="'+(offset_y_i+interval_y)+'" x2="'+(max_len)+'" y2="'+(offset_y_i+interval_y)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	//......................................................................................
	offset_y_i += offset_y + interval_y + next_y;
	//text_offset+=(interval_y+next_y);

	//html_content+= '<text class="oem_pic_tcon_font" fill="#010413" x="0" y="'+text_offset+'">PRE_CHARGE</text>';
	html_content+= '<rect fill=" #f9ebea" fill-opacity="0.5" x="'+offset_x+'" y="'+(offset_y_i)+'" width="'+svg_max_width+'" height="'+(offset_y+interval_y)+'" />';
	html_content+= '<line x1="'+(offset_x)+'" y1="'+(offset_y_i+interval_y)+'" x2="'+(offset_x + 2*interval_x*ind_3_time_sta_PRE_CHARGE)+'" y2="'+(offset_y_i+interval_y)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*ind_3_time_sta_PRE_CHARGE)+'" y1="'+(offset_y_i+interval_y)+'" x2="'+(offset_x + 2*interval_x*ind_3_time_sta_PRE_CHARGE)+'" y2="'+offset_y_i+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*ind_3_time_sta_PRE_CHARGE)+'" y1="'+offset_y_i+'" x2="'+(offset_x + 2*interval_x*(ind_4_time_stp_PRE_CHARGE))+'" y2="'+offset_y_i+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*(ind_4_time_stp_PRE_CHARGE))+'" y1="'+offset_y_i+'" x2="'+(offset_x + 2*interval_x*(ind_4_time_stp_PRE_CHARGE))+'" y2="'+(offset_y_i+interval_y)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*(ind_4_time_stp_PRE_CHARGE))+'" y1="'+(offset_y_i+interval_y)+'" x2="'+(max_len)+'" y2="'+(offset_y_i+interval_y)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	offset_y_i += offset_y + interval_y + next_y;
	//text_offset+=(interval_y+next_y);

	//html_content+= '<text class="oem_pic_tcon_font" fill="#010413" x="0" y="'+text_offset+'">SC_CLK1_EN</text>';
	html_content+= '<rect fill=" #f9ebea " fill-opacity="0.5" x="'+offset_x+'" y="'+(offset_y_i)+'" width="'+svg_max_width+'" height="'+(offset_y+interval_y)+'" />';
	html_content+= '<line x1="'+(offset_x)+'" y1="'+(offset_y_i+interval_y)+'" x2="'+(offset_x + 2*interval_x*ind_5_time_sta_SC_CLK1)+'" y2="'+(offset_y_i+interval_y)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*ind_5_time_sta_SC_CLK1)+'" y1="'+(offset_y_i+interval_y)+'" x2="'+(offset_x + 2*interval_x*ind_5_time_sta_SC_CLK1)+'" y2="'+offset_y_i+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*ind_5_time_sta_SC_CLK1)+'" y1="'+offset_y_i+'" x2="'+(offset_x + 2*interval_x*(ind_6_time_stp_SC_CLK1))+'" y2="'+offset_y_i+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*(ind_6_time_stp_SC_CLK1))+'" y1="'+offset_y_i+'" x2="'+(offset_x + 2*interval_x*(ind_6_time_stp_SC_CLK1))+'" y2="'+(offset_y_i+interval_y)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*(ind_6_time_stp_SC_CLK1))+'" y1="'+(offset_y_i+interval_y)+'" x2="'+(max_len)+'" y2="'+(offset_y_i+interval_y)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++					
	offset_y_i += offset_y + interval_y + next_y;
	//text_offset+=(interval_y+next_y);

	//html_content+= '<text class="oem_pic_tcon_font" fill="#010413" x="0" y="'+text_offset+'">RST0</text>';
	html_content+= '<rect fill=" #f9ebea " fill-opacity="0.5" x="'+offset_x+'" y="'+(offset_y_i)+'" width="'+svg_max_width+'" height="'+(offset_y+interval_y)+'" />';
	html_content+= '<line x1="'+(offset_x)+'" y1="'+(offset_y_i)+'" x2="'+(offset_x + 2*interval_x*ind_7_time_sta_RST0)+'" y2="'+(offset_y_i)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*ind_7_time_sta_RST0)+'" y1="'+(offset_y_i)+'" x2="'+(offset_x + 2*interval_x*ind_7_time_sta_RST0)+'" y2="'+(offset_y_i+interval_y)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*ind_7_time_sta_RST0)+'" y1="'+(offset_y_i+interval_y)+'" x2="'+(offset_x + 2*interval_x*(ind_8_time_stp_RST0))+'" y2="'+(offset_y_i+interval_y)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*(ind_8_time_stp_RST0))+'" y1="'+(offset_y_i+interval_y)+'" x2="'+(offset_x + 2*interval_x*(ind_8_time_stp_RST0))+'" y2="'+(offset_y_i)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*(ind_8_time_stp_RST0))+'" y1="'+(offset_y_i)+'" x2="'+(max_len)+'" y2="'+(offset_y_i)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	offset_y_i += offset_y + interval_y + next_y;
	//text_offset+=(interval_y+next_y);

	//html_content+= '<text class="oem_pic_tcon_font" fill="#010413" x="0" y="'+text_offset+'">MIXER_COEF_EN</text>';
	html_content+= '<rect fill=" #f9ebea " fill-opacity="0.5" x="'+offset_x+'" y="'+(offset_y_i)+'" width="'+svg_max_width+'" height="'+(offset_y+interval_y)+'" />';
	html_content+= '<line x1="'+(offset_x)+'" y1="'+(offset_y_i+interval_y)+'" x2="'+(offset_x + 2*interval_x*ind_14_time_sta_mixer_coef_en)+'" y2="'+(offset_y_i+interval_y)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*ind_14_time_sta_mixer_coef_en)+'" y1="'+(offset_y_i+interval_y)+'" x2="'+(offset_x + 2*interval_x*ind_14_time_sta_mixer_coef_en)+'" y2="'+offset_y_i+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*ind_14_time_sta_mixer_coef_en)+'" y1="'+offset_y_i+'" x2="'+(offset_x + 2*interval_x*(ind_15_time_stp_mixer_coef_en))+'" y2="'+offset_y_i+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*(ind_15_time_stp_mixer_coef_en))+'" y1="'+offset_y_i+'" x2="'+(offset_x + 2*interval_x*(ind_15_time_stp_mixer_coef_en))+'" y2="'+(offset_y_i+interval_y)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*(ind_15_time_stp_mixer_coef_en))+'" y1="'+(offset_y_i+interval_y)+'" x2="'+(max_len)+'" y2="'+(offset_y_i+interval_y)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	offset_y_i += offset_y + interval_y + next_y;
	//text_offset+=(interval_y+next_y);

	//html_content+= '<text class="oem_pic_tcon_font" fill="#010413" x="0" y="'+text_offset+'">SD_LE_EN</text>';
	html_content+= '<rect fill=" #f9ebea " fill-opacity="0.5" x="'+offset_x+'" y="'+(offset_y_i)+'" width="'+svg_max_width+'" height="'+(offset_y+interval_y)+'" />';
	html_content+= '<line x1="'+(offset_x)+'" y1="'+(offset_y_i+interval_y)+'" x2="'+(offset_x + 2*interval_x*ind_16_time_sta_SD_LE)+'" y2="'+(offset_y_i+interval_y)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*ind_16_time_sta_SD_LE)+'" y1="'+(offset_y_i+interval_y)+'" x2="'+(offset_x + 2*interval_x*ind_16_time_sta_SD_LE)+'" y2="'+offset_y_i+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*ind_16_time_sta_SD_LE)+'" y1="'+offset_y_i+'" x2="'+(offset_x + 2*interval_x*(ind_17_time_stp_SD_LE))+'" y2="'+offset_y_i+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*(ind_17_time_stp_SD_LE))+'" y1="'+offset_y_i+'" x2="'+(offset_x + 2*interval_x*(ind_17_time_stp_SD_LE))+'" y2="'+(offset_y_i+interval_y)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*(ind_17_time_stp_SD_LE))+'" y1="'+(offset_y_i+interval_y)+'" x2="'+(max_len)+'" y2="'+(offset_y_i+interval_y)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	offset_y_i += offset_y + interval_y + next_y;
	//text_offset+=(interval_y+next_y);

	//html_content+= '<text class="oem_pic_tcon_font" fill="#010413" x="0" y="'+text_offset+'">SYS_RSTB2</text>';
	html_content+= '<rect fill=" #f9ebea " fill-opacity="0.5" x="'+offset_x+'" y="'+(offset_y_i)+'" width="'+svg_max_width+'" height="'+(offset_y+interval_y)+'" />';
	html_content+= '<line x1="'+(offset_x)+'" y1="'+(offset_y_i)+'" x2="'+(offset_x + 2*interval_x*ind_20_time_sta_SYS_RSTB2)+'" y2="'+(offset_y_i)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*ind_20_time_sta_SYS_RSTB2)+'" y1="'+(offset_y_i)+'" x2="'+(offset_x + 2*interval_x*ind_20_time_sta_SYS_RSTB2)+'" y2="'+(offset_y_i+interval_y)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*ind_20_time_sta_SYS_RSTB2)+'" y1="'+(offset_y_i+interval_y)+'" x2="'+(offset_x + 2*interval_x*(ind_20_time_sta_SYS_RSTB2+ind_21_time_wth_SYS_RSTB2))+'" y2="'+(offset_y_i+interval_y)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*(ind_20_time_sta_SYS_RSTB2+ind_21_time_wth_SYS_RSTB2))+'" y1="'+(offset_y_i+interval_y)+'" x2="'+(offset_x + 2*interval_x*(ind_20_time_sta_SYS_RSTB2+ind_21_time_wth_SYS_RSTB2))+'" y2="'+(offset_y_i)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*(ind_20_time_sta_SYS_RSTB2+ind_21_time_wth_SYS_RSTB2))+'" y1="'+(offset_y_i)+'" x2="'+(max_len)+'" y2="'+(offset_y_i)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	offset_y_i += offset_y + interval_y + next_y;
	//text_offset+=(interval_y+next_y);

	//html_content+= '<text class="oem_pic_tcon_font" fill="#010413" x="0" y="'+text_offset+'">DAC_CONTROL_EN</text>';
	html_content+= '<rect fill=" #f9ebea " fill-opacity="0.5" x="'+offset_x+'" y="'+(offset_y_i)+'" width="'+svg_max_width+'" height="'+(offset_y+interval_y)+'" />';
	html_content+= '<line x1="'+(offset_x)+'" y1="'+(offset_y_i+interval_y)+'" x2="'+(offset_x + 2*interval_x*ind_9_time_sta_dac_control)+'" y2="'+(offset_y_i+interval_y)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*ind_9_time_sta_dac_control)+'" y1="'+(offset_y_i+interval_y)+'" x2="'+(offset_x + 2*interval_x*ind_9_time_sta_dac_control)+'" y2="'+offset_y_i+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*ind_9_time_sta_dac_control)+'" y1="'+offset_y_i+'" x2="'+(offset_x + 2*interval_x*(ind_10_time_stp_dac_control))+'" y2="'+offset_y_i+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*(ind_10_time_stp_dac_control))+'" y1="'+offset_y_i+'" x2="'+(offset_x + 2*interval_x*(ind_10_time_stp_dac_control))+'" y2="'+(offset_y_i+interval_y)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	html_content+= '<line x1="'+(offset_x + 2*interval_x*(ind_10_time_stp_dac_control))+'" y1="'+(offset_y_i+interval_y)+'" x2="'+(max_len)+'" y2="'+(offset_y_i+interval_y)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	interval_y = 100;

	offset_y_i += offset_y + interval_y + next_y;
	//text_offset+=(interval_y+next_y);

	//html_content+= '<text class="oem_pic_tcon_font" fill="#010413" x="0" y="'+text_offset+'">DAC_CONTROL</text>';
	html_content+= '<line x1="'+(offset_x)+'" y1="'+(offset_y_i+interval_y)+'" x2="'+(offset_x + 2*interval_x*ind_9_time_sta_dac_control)+'" y2="'+(offset_y_i+interval_y)+'" style="stroke: #5583ed ; stroke-width:1"/>';

	var tri_center = (ind_11_time_per_dac_control/2);
	var tri_osr = Math.floor((ind_10_time_stp_dac_control - ind_9_time_sta_dac_control)/ind_11_time_per_dac_control);

	for(j = 0; j < tri_osr; j++){
		html_content+= '<line x1="'+(offset_x + 2*interval_x*(ind_9_time_sta_dac_control + j*2*tri_center))+'" y1="'+(offset_y_i+interval_y)+'" x2="'+(offset_x + 2*interval_x*(ind_9_time_sta_dac_control+tri_center*(2*j+1)))+'" y2="'+offset_y_i+'" style="stroke: #5583ed ; stroke-width:1"/>';
		html_content+= '<line x1="'+(offset_x + 2*interval_x*(ind_9_time_sta_dac_control+tri_center*(2*j+1)))+'" y1="'+(offset_y_i)+'" x2="'+(offset_x + 2*interval_x*(ind_9_time_sta_dac_control+tri_center*(2*j+2)))+'" y2="'+(offset_y_i+interval_y)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	}
	html_content+= '<line x1="'+(offset_x + 2*interval_x*(ind_9_time_sta_dac_control+tri_center*(2*(tri_osr-1)+2)))+'" y1="'+(offset_y_i+interval_y)+'" x2="'+(max_len)+'" y2="'+(offset_y_i+interval_y)+'" style="stroke: #5583ed ; stroke-width:1"/>';
	
	//......................................................................................
	html_content+= 'Sorry, your browser does not support inline SVG.';
	html_content+= '</svg>';
	//......................................................................................
	
	//=========================
	//Paste result
	$('.oem_svg_tcon_script_pic').html(html_content);

	//=========================
	svg_drag();
}

function svg_drag(){
	/*var curDown = false, curYPos = 0, curXPos = 0;

	$('.oem_svg_tcon_script_pic').mousemove(function(m){
		if(curDown){
			window.scrollBy(curXPos - m.pageX, curYPos - m.pageY);
			console.log("vv");
		}
	});

	$('.oem_svg_tcon_script_pic').mousedown(function(m){
		curYPos = m.pageY;
		curXPos = m.pageX;
		curDown = true;
	});

	$('.oem_svg_tcon_script_pic').mouseup(function(){
		curDown = false;
	});
*/
	const slider = document.querySelector('.oem_svg_tcon_script_pic');
	let mouseDown = false;
	let startX, scrollLeft;

	let startDragging = function (e) {
	  mouseDown = true;
	  startX = e.pageX - slider.offsetLeft;
	  scrollLeft = slider.scrollLeft;
	};
	let stopDragging = function (event) {
	  mouseDown = false;
	};

	slider.addEventListener('mousemove', (e) => {
	  e.preventDefault();
	  if(!mouseDown) { return; }
	  const x = e.pageX - slider.offsetLeft;
	  const scroll = x - startX;
	  slider.scrollLeft = scrollLeft - scroll;
	});

	// Add the event listeners
	slider.addEventListener('mousedown', startDragging, false);
	slider.addEventListener('mouseup', stopDragging, false);
	slider.addEventListener('mouseleave', stopDragging, false);
}

//////////////////////////////////////////////////
// Remapping
function Vertical_Remapping(isbin){
	var rx_mapping_input = $('#pa0402_remapping_create').val();
	var line = rx_mapping_input.split('\n'); //console.log(line.length);
	var each_rx, each_rx_trim;
	var TX = 0, RX = 0;
	var i = 0, j = 0, k =0;
	var result_remapping_frame = '', result_remapping_frame_transpose = '';
	var mux_class = '';
	var current_index = 0;
	var current_index_2 = '';
	var ic_num = parseInt($('input[name="pa0402_ic_num"]').val(), 10);
	var tp_mux2_order = parseInt($('input[name="pa0402_tp_mux2_order"]').val(), 10);
	//console.log(ic_num);
	var rx_each = 0;

	var ADC_RX = [];
	ADC_RX.length = 960;
	for(i = 0; i < 960; i++){
		ADC_RX[i] = 0;
	}
	////////////////////////
	var html_table='<table class="mapping_table">'+'\n';
	var m_rx = 0;
	var rx_to_remapping_index = 0;
	var rx_to_remmaping_index_fast_mode = 0;
	
	// init
	//console.log(line[0]);

	// Check if it is tp mux2
	if(line.length > 1){
		var tp_mux2_first_rc = $.trim(line[0].split('\t')[0]); console.log(tp_mux2_first_rc);
		var tp_mux2_second_rc = $.trim(line[1].split('\t')[0]); console.log(tp_mux2_second_rc);
		if(tp_mux2_first_rc == tp_mux2_second_rc){
			tp_mux2_structure = 1;
		}
		else{
			tp_mux2_structure = 0;
			tp_mux2_order = 1; // fixed
		}
		console.log("TP MUX2 structure is "+tp_mux2_structure);
	}
	else{
		console.log("Fail to check TP mux2");
	}

	for(i = 0; i < line.length; i++){
		each_rx = line[i].split('\t');

		rx_each =  (each_rx.length) / ic_num; 
		//console.log(rx_each);
		for(j = 0; j < rx_each/*each_rx.length*/; j++){
			each_rx_trim = $.trim(each_rx[j]);
			//console.log(each_rx_trim);
			if(each_rx_trim){
				k = each_rx_trim-1;

				//TP MUX2 Check...
				if(ADC_RX[k] == 1){
					ADC_RX[k] = 2;
				}
				else{
					ADC_RX[k] = 1; // RX#-1
				}

				if(j == 0){
					TX++;
				}
				RX = rx_each;//each_rx.length;
				
				/////////////////////
				if(m_rx == RX){
					m_rx = 0;
					html_table+='</tr>'+'\n';
				}
				if(m_rx == 0){
					html_table+='<tr>'+'\n';
				}
				//===========================
				if(k < 120){ // mux0_L
					mux_class = 'mux0_color';
					current_index = k;
					rx_to_remapping_index = 2*k;
					rx_to_remmaping_index_fast_mode = k;

					//----------------------
					if(tp_mux2_structure && (ADC_RX[k] == 2)){ 
						if(tp_mux2_order == 1){  //mux0_L is 2, 1
							current_index_2 = '_2';
						}
						else{ //mux0_L is 1,2
							current_index_2 = '';
						}
						
					}
					else{
						if(tp_mux2_order == 1){ 
							current_index_2 = '';
						}
						else{
							current_index_2 = '_2';
						}
						
					}
					//----------------------
				}
				else if(k < 240){ // mux1_L
					mux_class = 'mux1_color';
					current_index = k - 120;
					rx_to_remapping_index = 2*k;
					rx_to_remmaping_index_fast_mode = k+120;

					//----------------------
					if(tp_mux2_structure && (ADC_RX[k] == 2)){ 
						if(tp_mux2_order == 1){  //mux1_L is 1,2
							current_index_2 = '_2';
						}
						else{
							current_index_2 = '';
						}
						
					}
					else{
						if(tp_mux2_order == 1){ 
							current_index_2 = '';
						}
						else{
							current_index_2 = '_2';
						}
						
					}
					//----------------------
				}
				else if(k < 360){ // mux2_L
					mux_class = 'mux2_color';
					current_index = k - 240;
					rx_to_remapping_index = 2*k;
					rx_to_remmaping_index_fast_mode = k+240;

					//----------------------
					if(tp_mux2_structure && (ADC_RX[k] == 2)){
						if(tp_mux2_order == 1){ 
							current_index_2 = '_2';
						}
						else{
							current_index_2 = '';
						}
						
					}
					else{
						if(tp_mux2_order == 1){ 
							current_index_2 = '';
						}
						else{
							current_index_2 = '_2';
						}						
						
					}
					//----------------------
				}
				else if(k < 480){ // mux3_L
					mux_class = 'mux3_color';
					current_index = k - 360;
					rx_to_remapping_index = 2*k;
					rx_to_remmaping_index_fast_mode = k+360;

					//----------------------
					if(tp_mux2_structure && (ADC_RX[k] == 2)){ 
						if(tp_mux2_order == 1){ 
							current_index_2 = '_2';
						}
						else{
							current_index_2 = '';
						}
						
					}
					else{
						if(tp_mux2_order == 1){ 
							current_index_2 = '';
						}
						else{
							current_index_2 = '_2';
						}
						
					}
					//----------------------
				}
				else if(k < 600){ // mux3_R
					mux_class = 'mux3_color';
					current_index = 600 - (k+1) + 120;
					rx_to_remapping_index = 2*(960-k)-1;
					rx_to_remmaping_index_fast_mode = 960-k+480-1;

					//----------------------
					if(tp_mux2_structure && (ADC_RX[k] == 2)){ 
						if(tp_mux2_order == 1){ 
							current_index_2 = '_2';
						}
						else{
							current_index_2 = '';
						}
						
					}
					else{
						if(tp_mux2_order == 1){ 
							current_index_2 = '';
						}
						else{
							current_index_2 = '_2';
						}
						
					}
					//----------------------
				}
				else if(k < 720){ // mux2_R
					mux_class = 'mux2_color';
					current_index = 720 - (k+1) + 120;
					rx_to_remapping_index = 2*(960-k)-1;
					rx_to_remmaping_index_fast_mode = 960-k+360-1;

					//----------------------
					if(tp_mux2_structure && (ADC_RX[k] == 2)){ //mux2 is 2, 1
						if(tp_mux2_order == 1){ 
							current_index_2 = '_2';
						}
						else{
							current_index_2 = '';
						}
						
					}
					else{
						if(tp_mux2_order == 1){ 
							current_index_2 = '';
						}
						else{
							current_index_2 = '_2';
						}
						
					}
					//----------------------
				}
				else if(k < 840){ // mux1_R
					mux_class = 'mux1_color';
					current_index = 840 - (k+1) + 120;
					rx_to_remapping_index = 2*(960-k)-1;
					rx_to_remmaping_index_fast_mode = 960-k+240-1;

					//----------------------
					if(tp_mux2_structure && (ADC_RX[k] == 2)){ 
						if(tp_mux2_order == 1){ 
							current_index_2 = '_2';
						}
						else{
							current_index_2 = '';
						}
						
					}
					else{
						if(tp_mux2_order == 1){ 
							current_index_2 = '';
						}
						else{
							current_index_2 = '_2';
						}
						
					}
					//----------------------
				}
				else{ // mux0_R
					mux_class = 'mux0_color';
					current_index = 960 - (k+1) + 120;
					rx_to_remapping_index = 2*(960-k)-1;
					rx_to_remmaping_index_fast_mode = 960-k+120-1;

					//----------------------
					if(tp_mux2_structure && (ADC_RX[k] == 2)){ //mux0 is 2, 1
						if(tp_mux2_order == 1){ 
							current_index_2 = '_2';
						}
						else{
							current_index_2 = '';
						}
						
					}
					else{
						if(tp_mux2_order == 1){ 
							current_index_2 = '';
						}
						else{
							current_index_2 = '_2';
						}
						
					}
					//----------------------
				}
				
				html_table+='<td class="'+mux_class+'" id="'+mux_class+'_'+current_index+current_index_2+'" tx="'+TX+'" remapping="'+rx_to_remapping_index+'" remapping_fast="'+rx_to_remmaping_index_fast_mode+'" col_offset="'+(j+1)+'">'+current_index+'</td>'+'\n';
				m_rx++;
				/////////////////////
			}
		}
		//console.log(each_rx.length);
	}
	//console.log(ADC_RX);
	// Paste result
	html_table+='</table>'+'\n';
	$('#mapping_table_result').html(html_table);
	//***********************
	//console.log(TX);
	//console.log(RX);

	var c_remapping_frame_l = '';
	var c_remapping_frame_r = '';
	var current_val = 0;
	var cl = 0, cl_backup = 0;
	var c_count = 0;
	
	//////////////////////
	var c_normal_remapping_l = '';
	var c_normal_remapping_r = '';
	var normal_current_val = 0;
	//////////////////////
	var first_rx = 0;
	var first_rx_index = 0;
	var first_rx_row = 0;
	var first_rx_col = 0;
	for(i = 0; i< 960/2; i++){ // Left
		if(ADC_RX[i] == 1){
			//***** Find out the first RX location**
			if(first_rx == 0){
				first_rx = 1;
				first_rx_index = i;
				var tmp_first;
				if(first_rx_index < 120){
					tmp_first = "#mux0_color_"+first_rx_index;
				}
				else if(first_rx_index < 240){
					tmp_first = "#mux1_color_"+first_rx_index;
				}
				else if(first_rx_index < 360){
					tmp_first = "#mux2_color_"+first_rx_index;
				}
				else {
					tmp_first = "#mux3_color_"+first_rx_index;
				}
				
				first_rx_row = parseInt($(tmp_first).attr('tx'), 10);
				first_rx_col = parseInt($(tmp_first).attr('col_offset'), 10);
				console.log("the first rx is "+tmp_first);
				console.log("is at (" + first_rx_row + ", "+first_rx_col+") --> start from 1");
			}
			//***************************************
			if(i < 120){ // mux0_L
				current_val = i;
				cl = 0;
				
				normal_current_val = 2*i;
			}
			else if(i < 240){ // mux1_L
				current_val = (i+120);
				//c_remapping_frame_l  = c_remapping_frame_l + (i+120) + ', ';
				cl = 1;
				
				
				normal_current_val = 2*i;
			}
			else if(i < 360){ // mux2_L
				current_val = (i+240);
				//c_remapping_frame_l  = c_remapping_frame_l + (i+240) + ', ';
				cl = 2;
				
				
				normal_current_val = 2*i;
			}
			else if(i < 480){ // mux3_L
				current_val = (i+360);
				//c_remapping_frame_l  = c_remapping_frame_l + (i+360) + ', ';
				cl = 4;
				
				normal_current_val = 2*i;
			}
			
			if(cl^cl_backup){
				cl_backup = cl;
				c_remapping_frame_l=c_remapping_frame_l+"\n"+current_val+", ";
				
				c_normal_remapping_l=c_normal_remapping_l+"\n"+normal_current_val+", ";
				
			}
			else{
				c_remapping_frame_l=c_remapping_frame_l+current_val+", ";
				
				c_normal_remapping_l=c_normal_remapping_l+normal_current_val+", ";
			}
			
			c_count++;
			if(c_count%TX == 0 && c_count > 0){
				c_remapping_frame_l+='\n';
				
				c_normal_remapping_l+='\n';
			}
		}
		// TP MUX2-----------------------------
		else if(ADC_RX[i] == 2){
			//***** Find out the first RX location**
			if(first_rx == 0){
				first_rx = 1;
				first_rx_index = i;
				var tmp_first;
				if(first_rx_index < 120){
					if(tp_mux2_order == 1){
						tmp_first = "#mux0_color_"+first_rx_index+"_2"; // find mux2
					}
					else{
						tmp_first = "#mux0_color_"+first_rx_index+""; // find mux1
					}
					
				}
				else if(first_rx_index < 240){
					if(tp_mux2_order == 1){
						tmp_first = "#mux1_color_"+first_rx_index+"_2";
					}
					else{
						tmp_first = "#mux1_color_"+first_rx_index+"";
					}					
					
				}
				else if(first_rx_index < 360){
					if(tp_mux2_order == 1){
						tmp_first = "#mux2_color_"+first_rx_index+"_2";
					}
					else{
						tmp_first = "#mux2_color_"+first_rx_index+"";
					}					
					
				}
				else {
					if(tp_mux2_order == 1){
						tmp_first = "#mux3_color_"+first_rx_index+"_2";
					}
					else{
						tmp_first = "#mux3_color_"+first_rx_index+"";
					}					
					
				}
				console.log(tmp_first);
				first_rx_row = parseInt($(tmp_first).attr('tx'), 10);
				first_rx_col = parseInt($(tmp_first).attr('col_offset'), 10);
				console.log("the first rx is "+tmp_first);
				console.log("is at (" + first_rx_row + ", "+first_rx_col+") --> start from 1");
			}
			//***************************************
			var current_val_mux2 = 0;
			var normal_current_val_mux2 = 0;
			if(i < 120){ // mux0_L --> tp_mux2, tp_mux1, ......
				cl = 0;
				// tp_mux1.................
				current_val = i; 
				normal_current_val = 2*i;
				// tp_mux2.................
				current_val_mux2 = i+240;
				normal_current_val_mux2 = 2*i + 240;
			}
			else if(i < 240){ // mux1_L
				cl = 1;
				// tp_mux1...............
				current_val = (i+480-120);
				normal_current_val = 2*(i + 120);
				// tp mux2...............
				current_val_mux2 = i+720-120;
				normal_current_val_mux2 = 2*(i+120) + 240;
			}
			else if(i < 360){ // mux2_L
				cl = 2;
				// tp_mux1...............
				current_val = (i+960-240);
				normal_current_val = 2*(i + 240);
				// tp_mux2..............
				current_val_mux2 = i+1200-240;
				normal_current_val_mux2 = 2*(i+240) + 240;
			}
			else if(i < 480){ // mux3_L
				cl = 4;
				// tp_mux1................
				current_val = (i+1440-360);
				normal_current_val = 2*(i+360);
				// tp_mux2...............
				current_val_mux2 = i+1680-360;
				normal_current_val_mux2 = 2*(i+360) + 240;

			}
			
			if(cl^cl_backup){
				cl_backup = cl;
				if(tp_mux2_order == 1){ // order: 1,2
					c_remapping_frame_l=c_remapping_frame_l+"\n"+current_val_mux2+", "+current_val+", ";
				
					c_normal_remapping_l=c_normal_remapping_l+"\n"+normal_current_val_mux2+", "+normal_current_val+", ";
				}
				else{
					c_remapping_frame_l=c_remapping_frame_l+"\n"+current_val+", "+current_val_mux2+", ";
				
					c_normal_remapping_l=c_normal_remapping_l+"\n"+normal_current_val+", "+normal_current_val_mux2+", ";
				}
				
			}
			else{

				if(tp_mux2_order == 1){ // order: 1,2
					c_remapping_frame_l=c_remapping_frame_l+current_val_mux2+", "+current_val+", ";
				
					c_normal_remapping_l=c_normal_remapping_l+normal_current_val_mux2+", "+normal_current_val+", ";
				}
				else{
					c_remapping_frame_l=c_remapping_frame_l+current_val+", "+current_val_mux2+", ";
				
					c_normal_remapping_l=c_normal_remapping_l+normal_current_val+", "+normal_current_val_mux2+", ";
				}

			}
			
			c_count++;
			if(c_count%(TX/2) == 0 && c_count > 0){
				c_remapping_frame_l+='\n';
				
				c_normal_remapping_l+='\n';
			}
		}
		//-------------------------------------
	}	
	c_count = 0;
	current_val = 0;
	normal_current_val = 0;
	cl_backup = 0;
	cl = 0;
	for(i = 960/2; i< 960; i++){ // Right
		if(ADC_RX[i] == 1){
			if(i < 600){ // mux3_R
				current_val = (960-(i-480)-1);
				cl = 0;			
				//c_remapping_frame_r  += (960-(i-480)-1) + ', ';
				
				
				normal_current_val = 2*(960-i)-1;
			}
			else if(i < 720){ // mux2_R
				current_val = (960-(i-360)-1);
				cl = 1;			
				//c_remapping_frame_r  += (960-(i-360)-1) + ', ';
				
				normal_current_val = 2*(960-i)-1;
			}
			else if(i < 840){ // mux1_R
				current_val = (960-(i-240)-1);
				cl = 2;			
				//c_remapping_frame_r  += (960-(i-240)-1) + ', ';
				
				normal_current_val = 2*(960-i)-1;
			}
			else if(i < 960){ // mux0_R
				current_val = (960-(i-120)-1);
				cl = 4;
				//c_remapping_frame_r  += (960-(i-120)-1) + ', ';
				
				normal_current_val = 2*(960-i)-1;
			}
			
			if(cl^cl_backup){
				cl_backup = cl;
				c_remapping_frame_r=c_remapping_frame_r+"\n"+current_val+", ";
				
				c_normal_remapping_r=c_normal_remapping_r+"\n"+normal_current_val+", ";
			}
			else{
					c_remapping_frame_r=c_remapping_frame_r+current_val+", ";
				
					c_normal_remapping_r=c_normal_remapping_r+normal_current_val+", ";
				}
			
			c_count++;
			if(c_count%TX == 0 && c_count > 0){
				c_remapping_frame_r+='\n';
				
				c_normal_remapping_r+='\n';
			}	
		}
		else if(ADC_RX[i] == 2){ // TP MUX2 Case.................
			var current_val_mux2 = 0;
			var normal_current_val_mux2 = 0;
			if(i < 600){ // mux3_R
				cl = 0;	
				// fast mode: 599 -> 1560; 598 -> 1561....
				// normal mode 599 -> 1441, 598 -> 1443....
				// tp_mux1....................................
				current_val = (1560+(600-i)-1);
				normal_current_val = 1440 + 2*(600-i)-1;
				// tp_mux2...................................
				current_val_mux2 = (1800+(600-i)-1);
				normal_current_val_mux2 = 1680 + 2*(600-i)-1;
			}
			else if(i < 720){ // mux2_R
				cl = 1;	
				// tp_mux1..................................
				current_val = (1080+(720-i)-1);			
				normal_current_val = 960 + 2*(720-i)-1;
				// tp_mux2...................................
				current_val_mux2 = (1320+(720-i)-1);
				normal_current_val_mux2 = 1200 + 2*(720-i)-1;
			}
			else if(i < 840){ // mux1_R
				cl = 2;	
				// tp_mux1...................................
				current_val = (600+(840-i)-1);			
				normal_current_val = 480 + 2*(840-i)-1;
				// tp_mux2...................................
				current_val_mux2 = (840+(840-i)-1);
				normal_current_val_mux2 = 720 + 2*(840-i)-1;
			}
			else if(i < 960){ // mux0_R
				cl = 4;
				// tp_mux1...................................
				current_val = (120+(960-i)-1);
				normal_current_val = 0+2*(960-i)-1;
				// tp_mux2...................................
				current_val_mux2 = (360+(960-i)-1);
				normal_current_val_mux2 = 240 + 2*(960-i)-1;
			}
			
			if(cl^cl_backup){
				cl_backup = cl;

				if(tp_mux2_order == 1){ // order: 1,2
					c_remapping_frame_r=c_remapping_frame_r+"\n"+current_val_mux2+", "+current_val+", ";
					
					c_normal_remapping_r=c_normal_remapping_r+"\n"+normal_current_val_mux2+", "+normal_current_val+", ";
				}
				else{
					c_remapping_frame_r=c_remapping_frame_r+"\n"+current_val+", "+current_val_mux2+", ";
					
					c_normal_remapping_r=c_normal_remapping_r+"\n"+normal_current_val+", "+normal_current_val_mux2+", ";
				}
			}
			else{
				if(tp_mux2_order == 1){ // order: 1,2
					c_remapping_frame_r=c_remapping_frame_r+current_val_mux2+", "+ current_val + ", ";
					
					c_normal_remapping_r=c_normal_remapping_r+normal_current_val_mux2+", "+normal_current_val+", ";
				}
				else{
					c_remapping_frame_r=c_remapping_frame_r+current_val+", "+ current_val_mux2 + ", ";
					
					c_normal_remapping_r=c_normal_remapping_r+normal_current_val+", "+normal_current_val_mux2+", ";
				}
			}
			
			c_count++;
			if(c_count%(TX/2) == 0 && c_count > 0){
				c_remapping_frame_r+='\n';
				
				c_normal_remapping_r+='\n';
			}
			
		}
	}
	//***********************
	//console.log(ADC_RX);
	$('#pa0402_remapping_1').val(c_remapping_frame_l+"\n"+c_remapping_frame_r);
	
	$('#pa0402_remapping_3').val(c_normal_remapping_l+"\n"+c_normal_remapping_r);
	//***********************
	// Transpose suppot:
	// 1. IC is at the bottom
	//***********************
	$('#pa0402_remapping_2').attr('tx', TX);
	$('#pa0402_remapping_2').attr('rx', RX);
	$('#pa0402_remapping_2').attr('ic_num', ic_num);

	var c_remapping_frame_transpose = '';
	var c_tx = 0, c_rx = 0;
	//console.log("TX is "+TX+" RX is "+RX);
	if((first_rx_row == TX) && (first_rx_col == RX)){ // RX1 is at right_bottom
		for(i = 0; i< TX*RX*ic_num;i++){
			c_remapping_frame_transpose += ((TX*RX*ic_num)-1)-(c_rx*TX)-c_tx + ", ";
			c_rx++;
			
			if(c_rx%(RX*ic_num) == 0 && c_rx > 0){
				c_remapping_frame_transpose+='\n';
				c_rx = 0;
				c_tx++;
			}
		}
		if(isbin == 0)
			document.getElementById('remapping_0402_transpose_sel').value = 3;
	}
	else if((first_rx_row == 1) && (first_rx_col == RX)){ // RX1 is at right_up
		var tmp_right_up = '';
		for(i = 0; i< TX*RX*ic_num;i++){
			tmp_right_up += ((TX*RX*ic_num)-1)-(c_rx*TX)-c_tx + ", ";
			c_rx++;
			
			if(c_rx%(RX*ic_num) == 0 && c_rx > 0){
				//c_remapping_frame_transpose+='\n';
				c_remapping_frame_transpose = tmp_right_up +'\n'+ c_remapping_frame_transpose;
				c_rx = 0;
				c_tx++;
				tmp_right_up = '';
			}
		}
		if(isbin == 0)
			document.getElementById('remapping_0402_transpose_sel').value = 1;
	}
	else if((first_rx_row == TX) && (first_rx_col == 1)){ // RX1 is at left_bottom
		var tmp_left_bottom = '';
		for(i = 0; i< TX*RX*ic_num;i++){
			tmp_left_bottom += (c_rx*TX)+c_tx + ", ";
			c_rx++;
			
			if(c_rx%(RX*ic_num) == 0 && c_rx > 0){
				c_remapping_frame_transpose = tmp_left_bottom +'\n'+ c_remapping_frame_transpose;
				c_rx = 0;
				c_tx++;
				tmp_left_bottom = '';
			}
		}
		if(isbin == 0)
			document.getElementById('remapping_0402_transpose_sel').value = 2;
	}
	else if((first_rx_row == 1) && (first_rx_col == 1)){ // RX1 is at left_up
		for(i = 0; i< TX*RX*ic_num;i++){
			c_remapping_frame_transpose += (c_rx*TX)+c_tx + ", ";
			c_rx++;
			
			if(c_rx%(RX*ic_num) == 0 && c_rx > 0){
				c_remapping_frame_transpose+='\n';
				c_rx = 0;
				c_tx++;
			}
		}
		if(isbin == 0)
			document.getElementById('remapping_0402_transpose_sel').value = 0;
	}
	else{
		c_remapping_frame_transpose = "unsupported!!\n";
		c_remapping_frame_transpose+="the first rx is at ";
		c_remapping_frame_transpose+="(" + first_rx_row + ", "+first_rx_col+") --> start from 1";
		if(isbin == 0)
			document.getElementById('remapping_0402_transpose_sel').value = 5;
	}
	
	$('#pa0402_remapping_2').val(c_remapping_frame_transpose);
	///////////////////////////////////////////////////////////////////////////////////////////
	$('#pa0402_remapping_ps1').attr('tx', TX);
	$('#pa0402_remapping_ps1').attr('rx', RX);
	$('#pa0402_remapping_ps1').attr('ic_num', ic_num);

	var c_remapping_frame_transpose_ps1 = '';
	var c_tx_ps1 = 0, c_rx_ps1 = 0;
	
	var ps1_rx_num = RX*1.5;
	var ps1_visit_first = 0;
	
	if((first_rx_row == TX) && (first_rx_col == RX)){ // RX1 is at right_bottom
		for(i = 0; i< TX;i++){
			ps1_visit_first = 0;
			for(j = 0; j < ps1_rx_num; j++){
				if(j < (RX/2)){
					c_remapping_frame_transpose_ps1 += ((TX*(RX/2)-1))-(c_rx_ps1*TX)-c_tx_ps1 + ", ";
				}
				else{
					if(ps1_visit_first == 0){
						c_rx_ps1 = 0;
						c_tx_ps1 = i;
						ps1_visit_first = 1;
						
					}
					c_remapping_frame_transpose_ps1 += ((TX*ps1_rx_num)-1)-(c_rx_ps1*TX)-c_tx_ps1 + ", ";
				}
				
				c_rx_ps1++;
				if(c_rx_ps1%(RX) == 0 && c_rx_ps1 > 0){
					c_remapping_frame_transpose_ps1+='\n';
					c_rx_ps1 = 0;
					c_tx_ps1++;
				}
			}
		}
		if(isbin == 0)
			document.getElementById('remapping_0402_transpose_sel_ps1').value = 3;
	}
	else if((first_rx_row == 1) && (first_rx_col == RX)){ // RX1 is at right_up
		var tmp_right_up = '';
		for(i = 0; i< TX;i++){
			ps1_visit_first = 0;
			for(j = 0; j < ps1_rx_num; j++){
				if(j < (RX/2)){
					tmp_right_up += ((TX*(RX/2)-1))-(c_rx_ps1*TX)-c_tx_ps1 + ", ";
				}
				else{
					if(ps1_visit_first == 0){
						c_rx_ps1 = 0;
						c_tx_ps1 = i;
						ps1_visit_first = 1;
						
					}
					tmp_right_up += ((TX*ps1_rx_num)-1)-(c_rx_ps1*TX)-c_tx_ps1 + ", ";
				}
				
				c_rx_ps1++;
				if(c_rx_ps1%(RX) == 0 && c_rx_ps1 > 0){
					c_remapping_frame_transpose_ps1 = tmp_right_up+'\n'+c_remapping_frame_transpose_ps1;
					c_rx_ps1 = 0;
					c_tx_ps1++;
					tmp_right_up = '';
				}
			}
			///////////////////////////////////////////////////
		}
		if(isbin == 0)
			document.getElementById('remapping_0402_transpose_sel_ps1').value = 1;
	}
	else if((first_rx_row == TX) && (first_rx_col == 1)){ // RX1 is at left_bottom
		for(i = 0; i< TX; i++){
			ps1_visit_first = 0;
			for(j = 0; j < ps1_rx_num; j++){
				if(j < (RX/2)){
					c_remapping_frame_transpose_ps1 += j*TX + (TX - i - 1) + ", ";
				}
				else{
					if(ps1_visit_first == 0){
						c_rx_ps1 = 0;
						c_tx_ps1 = i;
						ps1_visit_first = 1;
						
					}
					c_remapping_frame_transpose_ps1 += j*TX + (TX - i - 1) + ", ";
				}
				
				c_rx_ps1++;
				if(c_rx_ps1%(RX) == 0 && c_rx_ps1 > 0){
					c_remapping_frame_transpose_ps1 += '\n';
					c_rx_ps1 = 0;
					c_tx_ps1++;
				}
			}
			///////////////////////////////////////////////////
		}
		if(isbin == 0)
			document.getElementById('remapping_0402_transpose_sel_ps1').value = 2;
	}
	else if((first_rx_row == 1) && (first_rx_col == 1)){ // RX1 is at left_up
		for(i = 0; i< TX;i++){
			ps1_visit_first = 0;
			for(j = 0; j < ps1_rx_num; j++){
				if(j < (RX/2)){
					c_remapping_frame_transpose_ps1 += (j*TX + i)+ ", ";
				}
				else{
					if(ps1_visit_first == 0){
						c_rx_ps1 = 0;
						c_tx_ps1 = i;
						ps1_visit_first = 1;
						
					}
					c_remapping_frame_transpose_ps1 += (j*TX + i)+ ", ";
				}
				
				c_rx_ps1++;
				if(c_rx_ps1%(RX) == 0 && c_rx_ps1 > 0){
					c_remapping_frame_transpose_ps1 += '\n';
					c_rx_ps1 = 0;
					c_tx_ps1++;
				}
			}
			///////////////////////////////////////////////////
		}
		if(isbin == 0)
			document.getElementById('remapping_0402_transpose_sel_ps1').value = 0;
	}
	else{
		c_remapping_frame_transpose_ps1 = "unsupported!!\n";
		c_remapping_frame_transpose_ps1+="the first rx is at ";
		c_remapping_frame_transpose_ps1+="(" + first_rx_row + ", "+first_rx_col+") --> start from 1";

		if(isbin == 0)
			document.getElementById('remapping_0402_transpose_sel_ps1').value = 5;
	}
	
	$('#pa0402_remapping_ps1').val(c_remapping_frame_transpose_ps1);
	///////////////////////////////////////////////////////////////////////////////////////////
	if(tp_mux2_structure == 1){
		$('#pa0412_self_test_dc').val("TP MUX2 current not support normal self test mapping");
		$('#pa0412_self_test_dc2').val("TP MUX2 current not support normal self test mapping");
		$('#pa0402_self_test_dc').val("TP MUX2 current not support normal self test mapping");
		$('#pa0402_self_test_dc2').val("TP MUX2 current not support normal self test mapping");
		$('#pa0402_self_test_fast_cfg_adc_en').val("TP MUX2 current not support normal self test mapping");
		$('#pa0402_self_test_cfg_adc_en').val("TP MUX2 current not support normal self test mapping");

		$('#mapping_table_show_frame').prop("disabled", true);
		// Test on 2024.07.28 TBD........................
		for(i = 0; i< 960; i++){
			if(ADC_RX[i] == 2){
				if(i < 120){
					current_td_id = '#mux0_color'+ "_"+i;
				}
				else if(i < 240){
					current_td_id = '#mux1_color'+ "_"+(i-120);
				}
				else if(i < 360){
					current_td_id = '#mux2_color'+ "_"+(i-240);
				}
				else if(i < 480){
					current_td_id = '#mux3_color'+ "_"+(i-360);
				}
				else if(i < 600){
					current_td_id = '#mux3_color'+ "_"+(600 - (i+1) + 120);
				}
				else if(i < 720){
					current_td_id = '#mux2_color'+ "_"+(720 - (i+1) + 120);
				}
				else if(i < 840){
					current_td_id = '#mux1_color'+ "_"+(840 - (i+1) + 120);
				}
				else{// if(i < 960){
					current_td_id = '#mux0_color'+ "_"+(960 - (i+1) + 120);
				}
				// tp mux1......................................
				$(current_td_id).attr("rx_m", i+1);
				$(current_td_id).addClass("frame_tp_mux2_1_color");
				// tp mux2......................................
				$(current_td_id+'_2').attr("rx_m", i+1); 
				$(current_td_id+'_2').addClass("frame_tp_mux2_2_color");
			}
		}
		return;
	}
	else{
		$('#mapping_table_show_frame').prop("disabled", false);
	}
	//-----------------------------------------------------------------------------------------
	// Set self test mapping frame color
	var adc_class;
	var rx_class;
	var current_td_id;
	var cycle, frame_index = 0;
	
	var ml0_count = 0, ml1_count = 0, ml2_count = 0, ml3_count = 0, mr0_count = 0, mr1_count = 0, mr2_count = 0, mr3_count = 0;
	var ml0_start_frame_index = 0, ml1_start_frame_index = 0, ml2_start_frame_index = 0, ml3_start_frame_index = 0;
	var mr0_start_frame_index = 0, mr1_start_frame_index = 0, mr2_start_frame_index = 0, mr3_start_frame_index = 0;
	var ml0_first = 0, ml1_first = 0, ml2_first = 0, ml3_first = 0, mr0_first = 0, mr1_first = 0, mr2_first = 0, mr3_first = 0;
	var ml0_col_start = 0, ml1_col_start = 0, ml2_col_start = 0, ml3_col_start = 0, mr0_col_start = 0, mr1_col_start = 0, mr2_col_start = 0, mr3_col_start = 0;
	var frame0_r_adc_en = [], frame1_r_adc_en = [], frame2_r_adc_en = [], frame3_r_adc_en = [], frame4_r_adc_en = [], frame5_r_adc_en = [], frame6_r_adc_en = [], frame7_r_adc_en = [];
	var frame0_l_adc_en = [], frame1_l_adc_en = [], frame2_l_adc_en = [], frame3_l_adc_en = [], frame4_l_adc_en = [], frame5_l_adc_en = [], frame6_l_adc_en = [], frame7_l_adc_en = [];
	var frame_arr_mux0 = [0, 4];
	var frame_arr_mux1 = [1, 5];
	var frame_arr_mux2 = [2, 6];
	var frame_arr_mux3 = [3, 7];
	var tmp, tmp_fast;
	var framel0_content = '// Frame 0 L==================================\n';
	var framer0_content = '// Frame 0 R==================================\n';
	var framel1_content = '// Frame 1 L==================================\n';
	var framer1_content = '// Frame 1 R==================================\n';
	var framel2_content = '// Frame 2 L==================================\n';
	var framer2_content = '// Frame 2 R==================================\n';
	var framel3_content = '// Frame 3 L==================================\n';
	var framer3_content = '// Frame 3 R==================================\n';
	var framel4_content = '// Frame 4 L==================================\n';
	var framer4_content = '// Frame 4 R==================================\n';
	var framel5_content = '// Frame 5 L==================================\n';
	var framer5_content = '// Frame 5 R==================================\n';
	var framel6_content = '// Frame 6 L==================================\n';
	var framer6_content = '// Frame 6 R==================================\n';
	var framel7_content = '// Frame 7 L==================================\n';
	var framer7_content = '// Frame 7 R==================================\n';
	var framel0_count = 0, framel1_count = 0, framel2_count = 0, framel3_count = 0, framel4_count = 0, framel5_count = 0, framel6_count = 0, framel7_count = 0;
	var framer0_count = 0, framer1_count = 0, framer2_count = 0, framer3_count = 0, framer4_count = 0, framer5_count = 0, framer6_count = 0, framer7_count = 0;
	
	var framel0_content_fast = '// Frame 0 L==================================\n';
	var framer0_content_fast = '// Frame 0 R==================================\n';
	var framel1_content_fast = '// Frame 1 L==================================\n';
	var framer1_content_fast = '// Frame 1 R==================================\n';
	var framel2_content_fast = '// Frame 2 L==================================\n';
	var framer2_content_fast = '// Frame 2 R==================================\n';
	var framel3_content_fast = '// Frame 3 L==================================\n';
	var framer3_content_fast = '// Frame 3 R==================================\n';
	var framel4_content_fast = '// Frame 4 L==================================\n';
	var framer4_content_fast = '// Frame 4 R==================================\n';
	var framel5_content_fast = '// Frame 5 L==================================\n';
	var framer5_content_fast = '// Frame 5 R==================================\n';
	var framel6_content_fast = '// Frame 6 L==================================\n';
	var framer6_content_fast = '// Frame 6 R==================================\n';
	var framel7_content_fast = '// Frame 7 L==================================\n';
	var framer7_content_fast = '// Frame 7 R==================================\n';
	var start_event = 0;

	for(i = 0; i< 128; i++){
		frame0_r_adc_en[i] = 0;
		frame1_r_adc_en[i] = 0;
		frame2_r_adc_en[i] = 0;
		frame3_r_adc_en[i] = 0;
		frame4_r_adc_en[i] = 0;
		frame5_r_adc_en[i] = 0;
		frame6_r_adc_en[i] = 0;
		frame7_r_adc_en[i] = 0;
		
		frame0_l_adc_en[i] = 0;
		frame1_l_adc_en[i] = 0;
		frame2_l_adc_en[i] = 0;
		frame3_l_adc_en[i] = 0;
		frame4_l_adc_en[i] = 0;
		frame5_l_adc_en[i] = 0;
		frame6_l_adc_en[i] = 0;
		frame7_l_adc_en[i] = 0;		
	}
	
	for(i = 0; i< 960; i++){
		if(ADC_RX[i] == 1){
			if(i < 120){
				current_td_id = '#mux0_color'+ "_"+i;
				
				if(ml0_first == 0){
					ml0_first = 1;
					//tmp = parseInt($(current_td_id).attr('tx'), 10);
					//ml0_count = TX - tmp;
					
					ml0_count = 0;
					start_event = (ml0_count & 0x01); // is odd
				}
				
				if(ml0_count%TX == 0 && ml0_count > 0){
					if(ml0_col_start == 0){ 
						ml0_start_frame_index = 1;

					}
					else{
						ml0_start_frame_index = 0;
					}
					frame_index = ml0_start_frame_index;
					ml0_col_start ^=1;
				}
				else{
					frame_index = ml0_start_frame_index;
					
				}
				ml0_start_frame_index^=1;

				cycle = frame_arr_mux0[frame_index];
				
				adc_class = "frame"+cycle+'_color';
				$(current_td_id).addClass(adc_class);
				$(current_td_id).attr("frame", cycle);
				
				//-------------------------------------
				tmp = parseInt($(current_td_id).attr('remapping'), 10);
				tmp_fast = parseInt($(current_td_id).attr('remapping_fast'), 10);
				if(cycle == 0){
					framel0_content += tmp+', ';
					framel0_content_fast += tmp_fast+', ';
					framel0_count++;
					
					frame0_l_adc_en[i] = 1;
				}
				else{
					framel4_content += tmp+', ';
					framel4_content_fast += tmp_fast+', ';
					framel4_count++;
					
					frame4_l_adc_en[i] = 1;
				}
				//-------------------------------------
				ml0_count++;
			}
			else if(i < 240){
				current_td_id = '#mux1_color'+ "_"+(i-120);
				
				if(ml1_first == 0){
					ml1_first = 1;
					//tmp = parseInt($(current_td_id).attr('tx'), 10); 
					//ml1_count = TX - tmp; 
					ml1_count = ml0_count%TX;
					start_event = (ml1_count & 0x01); // is odd
					//console.log("stella +++++ ml0_count is "+ml0_count+" . ml1_count init is "+ml1_count);
				}
				
				if(ml1_count%TX == 0 && ml1_count > 0){
					if(ml1_col_start == 0){
						if(start_event == 0){
							ml1_start_frame_index = 1;
						}
						else{
							ml1_start_frame_index = 0;
						}
					}
					else{
						if(start_event == 0){
							ml1_start_frame_index = 0;
						}
						else{
							ml1_start_frame_index = 1;
						}
					}
					frame_index = ml1_start_frame_index;
					ml1_col_start^=1;
				}
				else{
					frame_index = ml1_start_frame_index;
				}
				ml1_start_frame_index^=1;


				cycle = frame_arr_mux1[frame_index];
				
				adc_class = "frame"+cycle+'_color';
				$(current_td_id).addClass(adc_class);
				$(current_td_id).attr("frame", cycle);
				//-------------------------------------
				tmp = parseInt($(current_td_id).attr('remapping'), 10);
				tmp_fast = parseInt($(current_td_id).attr('remapping_fast'), 10);
				if(cycle == 1){
					framel1_content += tmp+', ';
					framel1_content_fast += tmp_fast+', ';
					framel1_count++;
					
					frame1_l_adc_en[i-120] = 1;
				}
				else{
					framel5_content += tmp+', ';
					framel5_content_fast += tmp_fast+', ';
					framel5_count++;
					
					frame5_l_adc_en[i-120] = 1;
				}
				//-------------------------------------
				ml1_count++;
			}
			else if(i < 360){
				current_td_id = '#mux2_color'+ "_"+(i-240);
				
				if(ml2_first == 0){
					ml2_first = 1;
					//tmp = parseInt($(current_td_id).attr('tx'), 10); 
					//ml2_count = TX - tmp; 
					
					ml2_count = ml1_count%TX; 
					start_event = (ml2_count & 0x01); // is odd

					//console.log("stella +++++ ml1_count is "+ml1_count+" . ml2_count init is "+ml2_count);
				}
				
				if(ml2_count%TX == 0 && ml2_count > 0){
					if(ml2_col_start == 0){
						if(start_event == 0){
							ml2_start_frame_index = 1;
						}
						else{
							ml2_start_frame_index = 0;
						}
					}
					else{
						if(start_event == 0){
							ml2_start_frame_index = 0;
						}
						else{
							ml2_start_frame_index = 1;
						}
					}
					
					frame_index = ml2_start_frame_index;
					ml2_col_start^=1;
				}
				else{
					frame_index = ml2_start_frame_index;
				}
				ml2_start_frame_index^=1;

				cycle = frame_arr_mux2[frame_index];
				
				adc_class = "frame"+cycle+'_color';
				$(current_td_id).addClass(adc_class);
				$(current_td_id).attr("frame", cycle);
				//-------------------------------------
				tmp = parseInt($(current_td_id).attr('remapping'), 10);
				tmp_fast = parseInt($(current_td_id).attr('remapping_fast'), 10);
				if(cycle == 2){
					framel2_content += tmp+', ';
					framel2_content_fast += tmp_fast+', ';
					framel2_count++;
					
					frame2_l_adc_en[i-240] = 1;
				}
				else{
					framel6_content += tmp+', ';
					framel6_content_fast += tmp_fast+', ';
					framel6_count++;
					
					frame6_l_adc_en[i-240] = 1;
				}
				//-------------------------------------
				ml2_count++;
			}
			else if(i < 480){
				current_td_id = '#mux3_color'+ "_"+(i-360);
				
				if(ml3_first == 0){
					ml3_first = 1;
					//tmp = parseInt($(current_td_id).attr('tx'), 10); 
					//ml3_count = TX - tmp; 
					ml3_count = ml2_count%TX;
					start_event = (ml3_count & 0x01); // is odd
					//console.log("stella +++++ ml2_count is "+ml2_count+" . ml3_count init is "+ml3_count);
				}
				
				if(ml3_count%TX == 0 && ml3_count > 0){
					if(ml3_col_start == 0){
						if(start_event == 0){
							ml3_start_frame_index = 1;
						}
						else{
							ml3_start_frame_index = 0;
						}
					}
					else{
						if(start_event == 0){
							ml3_start_frame_index = 0;
						}
						else{
							ml3_start_frame_index = 1;
						}
					}

					frame_index = ml3_start_frame_index;
					ml3_col_start^=1;
				}
				else{
					frame_index = ml3_start_frame_index;
				}
				ml3_start_frame_index^=1;

				cycle = frame_arr_mux3[frame_index];
				
				adc_class = "frame"+cycle+'_color';
				$(current_td_id).addClass(adc_class);
				$(current_td_id).attr("frame", cycle);
				//-------------------------------------
				tmp = parseInt($(current_td_id).attr('remapping'), 10);
				tmp_fast = parseInt($(current_td_id).attr('remapping_fast'), 10);
				if(cycle == 3){
					framel3_content += tmp+', ';
					framel3_content_fast += tmp_fast+', ';
					framel3_count++;
					
					frame3_l_adc_en[i-360] = 1;
				}
				else{
					framel7_content += tmp+', ';
					framel7_content_fast += tmp_fast+', ';
					framel7_count++;
					
					frame7_l_adc_en[i-360] = 1;
				}
				//-------------------------------------
				ml3_count++;
			}
			else if(i < 600){
				current_td_id = '#mux3_color'+ "_"+(600 - (i+1) + 120);
				
				if(mr3_first == 0){
					mr3_first = 1;
					//tmp = parseInt($(current_td_id).attr('tx'), 10); 
					//mr3_count = TX - tmp; 
					mr3_count = ml3_count%TX;
					start_event = (mr3_count & 0x01); // is odd
					//console.log("stella +++++ ml3_count is "+ml3_count+" . mr3_count init is "+mr3_count);
				}
				
				if(mr3_count%TX == 0 && mr3_count > 0){
					if(mr3_col_start == 0){
						if(start_event == 0){
							mr3_start_frame_index = 1;
						}
						else{
							mr3_start_frame_index = 0;
						}
					}
					else{
						if(start_event == 0){
							mr3_start_frame_index = 0;
						}
						else{
							mr3_start_frame_index = 1;
						}
					}
					frame_index = mr3_start_frame_index;
					mr3_col_start^=1;
				}
				else{
					frame_index = mr3_start_frame_index;
				}
				mr3_start_frame_index^=1;

				cycle = frame_arr_mux0[frame_index];// use mux0
				
				adc_class = "frame"+cycle+'_color';
				$(current_td_id).addClass(adc_class);
				$(current_td_id).attr("frame", cycle);
				//-------------------------------------
				tmp = parseInt($(current_td_id).attr('remapping'), 10);
				tmp_fast = parseInt($(current_td_id).attr('remapping_fast'), 10);
				if(cycle == 0){
					framer0_content += tmp+', ';
					framer0_content_fast += tmp_fast+', ';
					framer0_count++;
					
					frame0_r_adc_en[600 - (i+1) ] = 1;
				}
				else{
					framer4_content += tmp+', ';
					framer4_content_fast += tmp_fast+', ';
					framer4_count++;
					
					frame4_r_adc_en[600 - (i+1) ] = 1;
				}
				//-------------------------------------
				mr3_count++;
			}
			else if(i < 720){
				current_td_id = '#mux2_color'+ "_"+(720 - (i+1) + 120);
				
				if(mr2_first == 0){
					mr2_first = 1;
					//tmp = parseInt($(current_td_id).attr('tx'), 10); 
					//mr2_count = TX - tmp; 
					mr2_count = mr3_count%TX;
					start_event = (mr2_count & 0x01); // is odd
					//console.log("stella +++++ mr3_count is "+mr3_count+" . mr2_count init is "+mr2_count);
				}
				
				if(mr2_count%TX == 0 && mr2_count > 0){
					if(mr2_col_start == 0){
						if(start_event == 0){
							mr2_start_frame_index = 1;
						}
						else{
							mr2_start_frame_index = 0;
						}
					}
					else{
						if(start_event == 0){
							mr2_start_frame_index = 0;
						}
						else{
							mr2_start_frame_index = 1;
						}
					}
					frame_index = mr2_start_frame_index;
					mr2_col_start^=1;
				}
				else{
					frame_index = mr2_start_frame_index;
				}
				mr2_start_frame_index^=1;

				cycle = frame_arr_mux1[frame_index];// use mux1
				
				adc_class = "frame"+cycle+'_color';
				$(current_td_id).addClass(adc_class);
				$(current_td_id).attr("frame", cycle);
				//-------------------------------------
				tmp = parseInt($(current_td_id).attr('remapping'), 10);
				tmp_fast = parseInt($(current_td_id).attr('remapping_fast'), 10);
				if(cycle == 1){
					framer1_content += tmp+', ';
					framer1_content_fast += tmp_fast+', ';
					framer1_count++;
					
					frame1_r_adc_en[720 - (i+1) ] = 1;
				}
				else{
					framer5_content += tmp+', ';
					framer5_content_fast += tmp_fast+', ';
					framer5_count++;
					
					frame5_r_adc_en[720 - (i+1) ] = 1;
				}
				//-------------------------------------
				mr2_count++;
			}
			else if(i < 840){
				
				current_td_id = '#mux1_color'+ "_"+(840 - (i+1) + 120);
				
				if(mr1_first == 0){
					mr1_first = 1;
					//tmp = parseInt($(current_td_id).attr('tx'), 10); 
					//mr1_count = TX - tmp; 
					mr1_count = mr2_count%TX;
					start_event = (mr1_count & 0x01); // is odd
					//console.log("stella +++++ mr2_count is "+mr2_count+" . mr1_count init is "+mr1_count);
				}
				
				if(mr1_count%TX == 0 && mr1_count > 0){
					if(mr1_col_start == 0){
						if(start_event == 0){
							mr1_start_frame_index = 1;
						}
						else{
							mr1_start_frame_index = 0;
						}
					}
					else{
						if(start_event == 0){
							mr1_start_frame_index = 0;
						}
						else{
							mr1_start_frame_index = 1;
						}
					}
					frame_index = mr1_start_frame_index;

					mr1_col_start^=1;
				}
				else{
					frame_index = mr1_start_frame_index;
				}
				mr1_start_frame_index^=1;

				cycle = frame_arr_mux2[frame_index];// use mux2
				
				adc_class = "frame"+cycle+'_color';
				$(current_td_id).addClass(adc_class);
				$(current_td_id).attr("frame", cycle);
				//-------------------------------------
				tmp = parseInt($(current_td_id).attr('remapping'), 10);
				tmp_fast = parseInt($(current_td_id).attr('remapping_fast'), 10);
				if(cycle == 2){
					framer2_content += tmp+', ';
					framer2_content_fast += tmp_fast+', ';
					framer2_count++;
					
					frame2_r_adc_en[840 - (i+1) ] = 1;
				}
				else{
					framer6_content += tmp+', ';
					framer6_content_fast += tmp_fast+', ';
					framer6_count++;
					
					frame6_r_adc_en[840 - (i+1) ] = 1;
				}
				//-------------------------------------
				mr1_count++;
			}
			else{// if(i < 960){
				current_td_id = '#mux0_color'+ "_"+(960 - (i+1) + 120);
				
				if(mr0_first == 0){
					mr0_first = 1;
					//tmp = parseInt($(current_td_id).attr('tx'), 10); 
					//mr0_count = TX - tmp; 
					mr0_count = mr1_count%TX; 

					start_event = (mr0_count & 0x01); // is odd

					//console.log("stella +++++ mr1_count is "+mr1_count+" . mr0_count init is "+mr0_count);
				}
				
				if(mr0_count%TX == 0 && mr0_count > 0){
					if(mr0_col_start == 0){
						if(start_event == 0){
							mr0_start_frame_index = 1;
						}
						else{
							mr0_start_frame_index = 0;
						}
					}
					else{
						if(start_event == 0){
							mr0_start_frame_index = 0;
						}
						else{
							mr0_start_frame_index = 1;
						}
					}
					frame_index = mr0_start_frame_index;
					mr0_col_start ^= 1;
				}
				else{
					frame_index = mr0_start_frame_index;
				}
				mr0_start_frame_index^=1;
				
				cycle = frame_arr_mux3[frame_index];// use mux3
				
				adc_class = "frame"+cycle+'_color';
				$(current_td_id).addClass(adc_class);
				$(current_td_id).attr("frame", cycle);
				//-------------------------------------
				tmp = parseInt($(current_td_id).attr('remapping'), 10);
				tmp_fast = parseInt($(current_td_id).attr('remapping_fast'), 10);
				if(cycle == 3){
					framer3_content += tmp+', ';
					framer3_content_fast += tmp_fast+', ';
					framer3_count++;
					
					frame3_r_adc_en[960 - (i+1) ] = 1;
				}
				else{
					framer7_content += tmp+', ';
					framer7_content_fast += tmp_fast+', ';
					framer7_count++;
					
					frame7_r_adc_en[960 - (i+1) ] = 1;
				}
				//-------------------------------------
				mr0_count++;
			}
			//-------RX information------
			$(current_td_id).attr("rx_m", i+1);
		} // end of if(ADC_RX[i] == 1)
	}


	if(isbin == 1){
		console.log("is bin file***");
		return;
	}
	console.log("not bin file");
	// ------------------------------------------------------
	// Fill out unused adc with 0xFFFF......................
	//console.log(framel0_count);
	for(i = framel0_count; i < 60; i++){
		framel0_content+="0xFFFF, ";
		framel0_content_fast+="0xFFFF, ";
	}
	for(i = framel1_count; i < 60; i++){
		framel1_content+="0xFFFF, ";
		framel1_content_fast+="0xFFFF, ";
	}
	for(i = framel2_count; i < 60; i++){
		framel2_content+="0xFFFF, ";
		framel2_content_fast+="0xFFFF, ";
	}
	for(i = framel3_count; i < 60; i++){
		framel3_content+="0xFFFF, ";
		framel3_content_fast+="0xFFFF, ";
	}
	for(i = framel4_count; i < 60; i++){
		framel4_content+="0xFFFF, ";
		framel4_content_fast+="0xFFFF, ";
	}
	for(i = framel5_count; i < 60; i++){
		framel5_content+="0xFFFF, ";
		framel5_content_fast+="0xFFFF, ";
	}
	for(i = framel6_count; i < 60; i++){
		framel6_content+="0xFFFF, ";
		framel6_content_fast+="0xFFFF, ";
	}
	for(i = framel7_count; i < 60; i++){
		framel7_content+="0xFFFF, ";
		framel7_content_fast+="0xFFFF, ";
	}
	for(i = framer0_count; i < 60; i++){
		framer0_content+="0xFFFF, ";
		framer0_content_fast+="0xFFFF, ";
	}
	for(i = framer1_count; i < 60; i++){
		framer1_content+="0xFFFF, ";
		framer1_content_fast+="0xFFFF, ";
	}
	for(i = framer2_count; i < 60; i++){
		framer2_content+="0xFFFF, ";
		framer2_content_fast+="0xFFFF, ";
	}
	for(i = framer3_count; i < 60; i++){
		framer3_content+="0xFFFF, ";
		framer3_content_fast+="0xFFFF, ";
	}
	for(i = framer4_count; i < 60; i++){
		framer4_content+="0xFFFF, ";
		framer4_content_fast+="0xFFFF, ";
	}
	for(i = framer5_count; i < 60; i++){
		framer5_content+="0xFFFF, ";
		framer5_content_fast+="0xFFFF, ";
	}
	for(i = framer6_count; i < 60; i++){
		framer6_content+="0xFFFF, ";
		framer6_content_fast+="0xFFFF, ";
	}
	for(i = framer7_count; i < 60; i++){
		framer7_content+="0xFFFF, ";
		framer7_content_fast+="0xFFFF, ";
	}
	//-------------------------------------------------------
	framel0_content = framel0_content+'\n'+framer0_content+'\n';
	framel0_content+= framel1_content+'\n'+framer1_content+'\n';
	framel0_content+= framel2_content+'\n'+framer2_content+'\n';
	framel0_content+= framel3_content+'\n'+framer3_content+'\n';
	framel0_content+= framel4_content+'\n'+framer4_content+'\n';
	framel0_content+= framel5_content+'\n'+framer5_content+'\n';
	framel0_content+= framel6_content+'\n'+framer6_content+'\n';
	framel0_content+= framel7_content+'\n'+framer7_content+'\n';
	$('#pa0402_self_test_cfg_adc_en').val(framel0_content);
	//--------------------------------------------------------
	framel0_content_fast = framel0_content_fast+'\n'+framer0_content_fast+'\n';
	framel0_content_fast+= framel1_content_fast+'\n'+framer1_content_fast+'\n';
	framel0_content_fast+= framel2_content_fast+'\n'+framer2_content_fast+'\n';
	framel0_content_fast+= framel3_content_fast+'\n'+framer3_content_fast+'\n';
	framel0_content_fast+= framel4_content_fast+'\n'+framer4_content_fast+'\n';
	framel0_content_fast+= framel5_content_fast+'\n'+framer5_content_fast+'\n';
	framel0_content_fast+= framel6_content_fast+'\n'+framer6_content_fast+'\n';
	framel0_content_fast+= framel7_content_fast+'\n'+framer7_content_fast+'\n';
	$('#pa0402_self_test_fast_cfg_adc_en').val(framel0_content_fast);
	//--------------------------------------------------------
	// PA0402****************************************************
	var dc_adc_en_content = '//==== DC5 ==== Self Test Frame 0\n';
	var dc2_adc_en_content = '//==== DC2  -5 ==== Self Test Frame 0\n';
	//console.log(frame0_l_adc_en);
	//console.log(frame0_r_adc_en);
	var adc_result_l = 0, adc_result_r = 0;
	
	//------padding with zeros-- with word 0,1,2,3
	dc_adc_en_content+='0x00000000, // DC word 0\n';
	dc_adc_en_content+='0x00000000, // DC word 1\n';
	dc_adc_en_content+='0x00000000, // DC word 2\n';
	dc_adc_en_content+='0x00000000, // DC word 3\n';
	
	dc2_adc_en_content+='0x00000000, // DC2 word 0\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 1\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 2\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 3\n';	
	//---------------
	for(j = 0; j < 4; j++){ // word 4,5,6,7
		adc_result_l = 0;
		adc_result_r = 0;
		for(i = 0; i< 32; i++){
			adc_result_l|= (frame0_l_adc_en[(j*32)+i]<<i);
			adc_result_l>>>=0;
			
			adc_result_r|= (frame0_r_adc_en[(j*32)+i]<<i);
			adc_result_r>>>=0;
		}
		dc_adc_en_content+="0x"+adc_result_l.toString(16).padStart(8, '0')+", // DC Word "+(j+4)+"\n";
		dc2_adc_en_content+="0x"+adc_result_r.toString(16).padStart(8, '0')+", // DC2 Word "+(j+4)+"\n";
	}
	//------padding with zeros-- with word 8,9,10
	dc_adc_en_content+='0x00000000, // DC word 8\n';
	dc_adc_en_content+='0x00000000, // DC word 9\n';
	dc_adc_en_content+='0x00000000, // DC word 10\n';
	
	dc2_adc_en_content+='0x00000000, // DC2 word 8\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 9\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 10\n';	
	//---------------
	
	//---------------------------
	dc_adc_en_content+='\n//==== DC6 ==== Self Test Frame 1\n';
	dc2_adc_en_content += '\n//==== DC2  -6 ==== Self Test Frame 1\n';
	//------padding with zeros-- with word 0,1,2,3
	dc_adc_en_content+='0x00000000, // DC word 0\n';
	dc_adc_en_content+='0x00000000, // DC word 1\n';
	dc_adc_en_content+='0x00000000, // DC word 2\n';
	dc_adc_en_content+='0x00000000, // DC word 3\n';
	
	dc2_adc_en_content+='0x00000000, // DC2 word 0\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 1\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 2\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 3\n';	
	//---------------
	for(j = 0; j < 4; j++){ // word 4,5,6,7
		adc_result_l = 0;
		adc_result_r = 0;
		for(i = 0; i< 32; i++){
			adc_result_l|= (frame1_l_adc_en[(j*32)+i]<<i);
			adc_result_l>>>=0;
			
			adc_result_r|= (frame1_r_adc_en[(j*32)+i]<<i);
			adc_result_r>>>=0;
		}
		dc_adc_en_content+="0x"+adc_result_l.toString(16).padStart(8, '0')+", // DC Word "+(j+4)+"\n";
		dc2_adc_en_content+="0x"+adc_result_r.toString(16).padStart(8, '0')+", // DC2 Word "+(j+4)+"\n";
	}
	//------padding with zeros-- with word 8,9,10
	dc_adc_en_content+='0x00000000, // DC word 8\n';
	dc_adc_en_content+='0x00000000, // DC word 9\n';
	dc_adc_en_content+='0x00000000, // DC word 10\n';
	
	dc2_adc_en_content+='0x00000000, // DC2 word 8\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 9\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 10\n';	
	//---------------
	//---------------------------
	dc_adc_en_content+='\n//==== DC7 ==== Self Test Frame 2\n';
	dc2_adc_en_content += '\n//==== DC2  -7 ==== Self Test Frame 2\n';
	//------padding with zeros-- with word 0,1,2,3
	dc_adc_en_content+='0x00000000, // DC word 0\n';
	dc_adc_en_content+='0x00000000, // DC word 1\n';
	dc_adc_en_content+='0x00000000, // DC word 2\n';
	dc_adc_en_content+='0x00000000, // DC word 3\n';
	
	dc2_adc_en_content+='0x00000000, // DC2 word 0\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 1\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 2\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 3\n';	
	//---------------	
	for(j = 0; j < 4; j++){ // word 4,5,6,7
		adc_result_l = 0;
		adc_result_r = 0;
		for(i = 0; i< 32; i++){
			adc_result_l|= (frame2_l_adc_en[(j*32)+i]<<i);
			adc_result_l>>>=0;
			
			adc_result_r|= (frame2_r_adc_en[(j*32)+i]<<i);
			adc_result_r>>>=0;
		}
		dc_adc_en_content+="0x"+adc_result_l.toString(16).padStart(8, '0')+", // DC Word "+(j+4)+"\n";
		dc2_adc_en_content+="0x"+adc_result_r.toString(16).padStart(8, '0')+", // DC2 Word "+(j+4)+"\n";
	}
	//------padding with zeros-- with word 8,9,10
	dc_adc_en_content+='0x00000000, // DC word 8\n';
	dc_adc_en_content+='0x00000000, // DC word 9\n';
	dc_adc_en_content+='0x00000000, // DC word 10\n';
	
	dc2_adc_en_content+='0x00000000, // DC2 word 8\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 9\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 10\n';	
	//---------------	
	//---------------------------
	dc_adc_en_content+='\n//==== DC8 ==== Self Test Frame 3\n';
	dc2_adc_en_content += '\n//==== DC2  -8 ==== Self Test Frame 3\n';
	//------padding with zeros-- with word 0,1,2,3
	dc_adc_en_content+='0x00000000, // DC word 0\n';
	dc_adc_en_content+='0x00000000, // DC word 1\n';
	dc_adc_en_content+='0x00000000, // DC word 2\n';
	dc_adc_en_content+='0x00000000, // DC word 3\n';
	
	dc2_adc_en_content+='0x00000000, // DC2 word 0\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 1\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 2\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 3\n';	
	//---------------	
	for(j = 0; j < 4; j++){ // word 4,5,6,7
		adc_result_l = 0;
		adc_result_r = 0;
		for(i = 0; i< 32; i++){
			adc_result_l|= (frame3_l_adc_en[(j*32)+i]<<i);
			adc_result_l>>>=0;
			
			adc_result_r|= (frame3_r_adc_en[(j*32)+i]<<i);
			adc_result_r>>>=0;
		}
		dc_adc_en_content+="0x"+adc_result_l.toString(16).padStart(8, '0')+", // DC Word "+(j+4)+"\n";
		dc2_adc_en_content+="0x"+adc_result_r.toString(16).padStart(8, '0')+", // DC2 Word "+(j+4)+"\n";
	}
	//------padding with zeros-- with word 8,9,10
	dc_adc_en_content+='0x00000000, // DC word 8\n';
	dc_adc_en_content+='0x00000000, // DC word 9\n';
	dc_adc_en_content+='0x00000000, // DC word 10\n';
	
	dc2_adc_en_content+='0x00000000, // DC2 word 8\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 9\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 10\n';	
	//---------------	
	//---------------------------
	dc_adc_en_content+='\n//==== DC9 ==== Self Test Frame 4\n';
	dc2_adc_en_content += '\n//==== DC2  -9 ==== Self Test Frame 4\n';
	//------padding with zeros-- with word 0,1,2,3
	dc_adc_en_content+='0x00000000, // DC word 0\n';
	dc_adc_en_content+='0x00000000, // DC word 1\n';
	dc_adc_en_content+='0x00000000, // DC word 2\n';
	dc_adc_en_content+='0x00000000, // DC word 3\n';
	
	dc2_adc_en_content+='0x00000000, // DC2 word 0\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 1\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 2\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 3\n';	
	//---------------	
	for(j = 0; j < 4; j++){ // word 4,5,6,7
		adc_result_l = 0;
		adc_result_r = 0;
		for(i = 0; i< 32; i++){
			adc_result_l|= (frame4_l_adc_en[(j*32)+i]<<i);
			adc_result_l>>>=0;
			
			adc_result_r|= (frame4_r_adc_en[(j*32)+i]<<i);
			adc_result_r>>>=0;
		}
		dc_adc_en_content+="0x"+adc_result_l.toString(16).padStart(8, '0')+", // DC Word "+(j+4)+"\n";
		dc2_adc_en_content+="0x"+adc_result_r.toString(16).padStart(8, '0')+", // DC2 Word "+(j+4)+"\n";
	}
	//------padding with zeros-- with word 8,9,10
	dc_adc_en_content+='0x00000000, // DC word 8\n';
	dc_adc_en_content+='0x00000000, // DC word 9\n';
	dc_adc_en_content+='0x00000000, // DC word 10\n';
	
	dc2_adc_en_content+='0x00000000, // DC2 word 8\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 9\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 10\n';	
	//---------------	
	//---------------------------
	dc_adc_en_content+='\n//==== DC10 ==== Self Test Frame 5\n';
	dc2_adc_en_content += '\n//==== DC2  -10 ==== Self Test Frame 5\n';
	//------padding with zeros-- with word 0,1,2,3
	dc_adc_en_content+='0x00000000, // DC word 0\n';
	dc_adc_en_content+='0x00000000, // DC word 1\n';
	dc_adc_en_content+='0x00000000, // DC word 2\n';
	dc_adc_en_content+='0x00000000, // DC word 3\n';
	
	dc2_adc_en_content+='0x00000000, // DC2 word 0\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 1\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 2\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 3\n';	
	//---------------	
	for(j = 0; j < 4; j++){ // word 4,5,6,7
		adc_result_l = 0;
		adc_result_r = 0;
		for(i = 0; i< 32; i++){
			adc_result_l|= (frame5_l_adc_en[(j*32)+i]<<i);
			adc_result_l>>>=0;
			
			adc_result_r|= (frame5_r_adc_en[(j*32)+i]<<i);
			adc_result_r>>>=0;
		}
		dc_adc_en_content+="0x"+adc_result_l.toString(16).padStart(8, '0')+", // DC Word "+(j+4)+"\n";
		dc2_adc_en_content+="0x"+adc_result_r.toString(16).padStart(8, '0')+", // DC2 Word "+(j+4)+"\n";
	}
	//------padding with zeros-- with word 8,9,10
	dc_adc_en_content+='0x00000000, // DC word 8\n';
	dc_adc_en_content+='0x00000000, // DC word 9\n';
	dc_adc_en_content+='0x00000000, // DC word 10\n';
	
	dc2_adc_en_content+='0x00000000, // DC2 word 8\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 9\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 10\n';	
	//---------------	
	//---------------------------
	dc_adc_en_content+='\n//==== DC11 ==== Self Test Frame 6\n';
	dc2_adc_en_content += '\n//==== DC2  -11 ==== Self Test Frame 6\n';
	//------padding with zeros-- with word 0,1,2,3
	dc_adc_en_content+='0x00000000, // DC word 0\n';
	dc_adc_en_content+='0x00000000, // DC word 1\n';
	dc_adc_en_content+='0x00000000, // DC word 2\n';
	dc_adc_en_content+='0x00000000, // DC word 3\n';
	
	dc2_adc_en_content+='0x00000000, // DC2 word 0\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 1\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 2\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 3\n';	
	//---------------	
	for(j = 0; j < 4; j++){ // word 4,5,6,7
		adc_result_l = 0;
		adc_result_r = 0;
		for(i = 0; i< 32; i++){
			adc_result_l|= (frame6_l_adc_en[(j*32)+i]<<i);
			adc_result_l>>>=0;
			
			adc_result_r|= (frame6_r_adc_en[(j*32)+i]<<i);
			adc_result_r>>>=0;
		}
		dc_adc_en_content+="0x"+adc_result_l.toString(16).padStart(8, '0')+", // DC Word "+(j+4)+"\n";
		dc2_adc_en_content+="0x"+adc_result_r.toString(16).padStart(8, '0')+", // DC2 Word "+(j+4)+"\n";
	}
	//------padding with zeros-- with word 8,9,10
	dc_adc_en_content+='0x00000000, // DC word 8\n';
	dc_adc_en_content+='0x00000000, // DC word 9\n';
	dc_adc_en_content+='0x00000000, // DC word 10\n';
	
	dc2_adc_en_content+='0x00000000, // DC2 word 8\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 9\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 10\n';	
	//---------------	
	//---------------------------
	dc_adc_en_content+='\n//==== DC12 ==== Self Test Frame 7\n';
	dc2_adc_en_content += '\n//==== DC2  -12 ==== Self Test Frame 7\n';
	//------padding with zeros-- with word 0,1,2,3
	dc_adc_en_content+='0x00000000, // DC word 0\n';
	dc_adc_en_content+='0x00000000, // DC word 1\n';
	dc_adc_en_content+='0x00000000, // DC word 2\n';
	dc_adc_en_content+='0x00000000, // DC word 3\n';
	
	dc2_adc_en_content+='0x00000000, // DC2 word 0\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 1\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 2\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 3\n';	
	//---------------	
	for(j = 0; j < 4; j++){ // word 4,5,6,7
		adc_result_l = 0;
		adc_result_r = 0;
		for(i = 0; i< 32; i++){
			adc_result_l|= (frame7_l_adc_en[(j*32)+i]<<i);
			adc_result_l>>>=0;
			
			adc_result_r|= (frame7_r_adc_en[(j*32)+i]<<i);
			adc_result_r>>>=0;
		}
		dc_adc_en_content+="0x"+adc_result_l.toString(16).padStart(8, '0')+", // DC Word "+(j+4)+"\n";
		dc2_adc_en_content+="0x"+adc_result_r.toString(16).padStart(8, '0')+", // DC2 Word "+(j+4)+"\n";
	}
	//------padding with zeros-- with word 8,9,10
	dc_adc_en_content+='0x00000000, // DC word 8\n';
	dc_adc_en_content+='0x00000000, // DC word 9\n';
	dc_adc_en_content+='0x00000000, // DC word 10\n';
	
	dc2_adc_en_content+='0x00000000, // DC2 word 8\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 9\n';
	dc2_adc_en_content+='0x00000000, // DC2 word 10\n';	
	//---------------	
	//---------------------------
	
	$('#pa0402_self_test_dc').val(dc_adc_en_content);
	$('#pa0402_self_test_dc2').val(dc2_adc_en_content);

	// PA0412****************************************************
	var dc_adc_en_content_0412 = '//==== DC5 ==== Self Test Frame 0\n';
	var dc2_adc_en_content_0412 = '//==== DC2  -5 ==== Self Test Frame 0\n';

	//------padding with zeros-- with word 0,1,2,3
	dc_adc_en_content_0412+='0x00000000, // DC word 0\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 1\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 2\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 3\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 4\n';
	
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 0\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 1\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 2\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 3\n';	
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 4\n';	
	//---------------
	for(j = 0; j < 4; j++){ // word 5,6,7,8
		adc_result_l = 0;
		adc_result_r = 0;
		for(i = 0; i< 32; i++){
			adc_result_l|= (frame0_l_adc_en[(j*32)+i]<<i);
			adc_result_l>>>=0;
			
			adc_result_r|= (frame0_r_adc_en[(j*32)+i]<<i);
			adc_result_r>>>=0;
		}
		dc_adc_en_content_0412+="0x"+adc_result_l.toString(16).padStart(8, '0')+", // DC Word "+(j+5)+"\n";
		dc2_adc_en_content_0412+="0x"+adc_result_r.toString(16).padStart(8, '0')+", // DC2 Word "+(j+5)+"\n";
	}
	//------padding with zeros-- with word 9,10,11
	dc_adc_en_content_0412+='0x00000000, // DC word 9\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 10\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 11\n';
	
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 9\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 10\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 11\n';	
	//---------------
	//---------------------------
	dc_adc_en_content_0412+='\n//==== DC6 ==== Self Test Frame 1\n';
	dc2_adc_en_content_0412 += '\n//==== DC2  -6 ==== Self Test Frame 1\n';
	//------padding with zeros-- with word 0,1,2,3,4
	dc_adc_en_content_0412+='0x00000000, // DC word 0\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 1\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 2\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 3\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 4\n';
	
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 0\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 1\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 2\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 3\n';	
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 4\n';	
	//---------------
	for(j = 0; j < 4; j++){ // word 5,6,7,8
		adc_result_l = 0;
		adc_result_r = 0;
		for(i = 0; i< 32; i++){
			adc_result_l|= (frame1_l_adc_en[(j*32)+i]<<i);
			adc_result_l>>>=0;
			
			adc_result_r|= (frame1_r_adc_en[(j*32)+i]<<i);
			adc_result_r>>>=0;
		}
		dc_adc_en_content_0412+="0x"+adc_result_l.toString(16).padStart(8, '0')+", // DC Word "+(j+5)+"\n";
		dc2_adc_en_content_0412+="0x"+adc_result_r.toString(16).padStart(8, '0')+", // DC2 Word "+(j+5)+"\n";
	}
	//------padding with zeros-- with word 9,10,11
	dc_adc_en_content_0412+='0x00000000, // DC word 9\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 10\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 11\n';
	
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 9\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 10\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 11\n';	
	//---------------
	//---------------------------
	dc_adc_en_content_0412+='\n//==== DC7 ==== Self Test Frame 2\n';
	dc2_adc_en_content_0412 += '\n//==== DC2  -7 ==== Self Test Frame 2\n';
	//------padding with zeros-- with word 0,1,2,3,4
	dc_adc_en_content_0412+='0x00000000, // DC word 0\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 1\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 2\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 3\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 4\n';
	
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 0\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 1\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 2\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 3\n';	
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 4\n';	
	//---------------	
	for(j = 0; j < 4; j++){ // word 5,6,7,8
		adc_result_l = 0;
		adc_result_r = 0;
		for(i = 0; i< 32; i++){
			adc_result_l|= (frame2_l_adc_en[(j*32)+i]<<i);
			adc_result_l>>>=0;
			
			adc_result_r|= (frame2_r_adc_en[(j*32)+i]<<i);
			adc_result_r>>>=0;
		}
		dc_adc_en_content_0412+="0x"+adc_result_l.toString(16).padStart(8, '0')+", // DC Word "+(j+5)+"\n";
		dc2_adc_en_content_0412+="0x"+adc_result_r.toString(16).padStart(8, '0')+", // DC2 Word "+(j+5)+"\n";
	}
	//------padding with zeros-- with word 9,10,11
	dc_adc_en_content_0412+='0x00000000, // DC word 9\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 10\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 11\n';
	
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 9\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 10\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 11\n';	
	//---------------	
	//---------------------------
	dc_adc_en_content_0412+='\n//==== DC8 ==== Self Test Frame 3\n';
	dc2_adc_en_content_0412 += '\n//==== DC2  -8 ==== Self Test Frame 3\n';
	//------padding with zeros-- with word 0,1,2,3,4
	dc_adc_en_content_0412+='0x00000000, // DC word 0\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 1\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 2\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 3\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 4\n';
	
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 0\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 1\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 2\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 3\n';	
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 4\n';	
	//---------------	
	for(j = 0; j < 4; j++){ // word 5,6,7,8
		adc_result_l = 0;
		adc_result_r = 0;
		for(i = 0; i< 32; i++){
			adc_result_l|= (frame3_l_adc_en[(j*32)+i]<<i);
			adc_result_l>>>=0;
			
			adc_result_r|= (frame3_r_adc_en[(j*32)+i]<<i);
			adc_result_r>>>=0;
		}
		dc_adc_en_content_0412+="0x"+adc_result_l.toString(16).padStart(8, '0')+", // DC Word "+(j+5)+"\n";
		dc2_adc_en_content_0412+="0x"+adc_result_r.toString(16).padStart(8, '0')+", // DC2 Word "+(j+5)+"\n";
	}
	//------padding with zeros-- with word 9,10,11
	dc_adc_en_content_0412+='0x00000000, // DC word 9\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 10\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 11\n';
	
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 9\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 10\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 11\n';	
	//---------------	
	//---------------------------
	dc_adc_en_content_0412+='\n//==== DC9 ==== Self Test Frame 4\n';
	dc2_adc_en_content_0412 += '\n//==== DC2  -9 ==== Self Test Frame 4\n';
	//------padding with zeros-- with word 0,1,2,3,4
	dc_adc_en_content_0412+='0x00000000, // DC word 0\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 1\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 2\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 3\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 4\n';
	
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 0\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 1\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 2\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 3\n';	
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 4\n';	
	//---------------	
	for(j = 0; j < 4; j++){ // word 5,6,7,8
		adc_result_l = 0;
		adc_result_r = 0;
		for(i = 0; i< 32; i++){
			adc_result_l|= (frame4_l_adc_en[(j*32)+i]<<i);
			adc_result_l>>>=0;
			
			adc_result_r|= (frame4_r_adc_en[(j*32)+i]<<i);
			adc_result_r>>>=0;
		}
		dc_adc_en_content_0412+="0x"+adc_result_l.toString(16).padStart(8, '0')+", // DC Word "+(j+5)+"\n";
		dc2_adc_en_content_0412+="0x"+adc_result_r.toString(16).padStart(8, '0')+", // DC2 Word "+(j+5)+"\n";
	}
	//------padding with zeros-- with word 9,10,11
	dc_adc_en_content_0412+='0x00000000, // DC word 9\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 10\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 11\n';
	
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 9\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 10\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 11\n';	
	//---------------	
	//---------------------------
	dc_adc_en_content_0412+='\n//==== DC10 ==== Self Test Frame 5\n';
	dc2_adc_en_content_0412 += '\n//==== DC2  -10 ==== Self Test Frame 5\n';
	//------padding with zeros-- with word 0,1,2,3,4
	dc_adc_en_content_0412+='0x00000000, // DC word 0\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 1\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 2\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 3\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 4\n';
	
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 0\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 1\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 2\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 3\n';	
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 4\n';
	//---------------	
	for(j = 0; j < 4; j++){ // word 5,6,7,8
		adc_result_l = 0;
		adc_result_r = 0;
		for(i = 0; i< 32; i++){
			adc_result_l|= (frame5_l_adc_en[(j*32)+i]<<i);
			adc_result_l>>>=0;
			
			adc_result_r|= (frame5_r_adc_en[(j*32)+i]<<i);
			adc_result_r>>>=0;
		}
		dc_adc_en_content_0412+="0x"+adc_result_l.toString(16).padStart(8, '0')+", // DC Word "+(j+5)+"\n";
		dc2_adc_en_content_0412+="0x"+adc_result_r.toString(16).padStart(8, '0')+", // DC2 Word "+(j+5)+"\n";
	}
	//------padding with zeros-- with word 9,10,11
	dc_adc_en_content_0412+='0x00000000, // DC word 9\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 10\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 11\n';
	
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 9\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 10\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 11\n';	
	//---------------	
	//---------------------------
	dc_adc_en_content_0412+='\n//==== DC11 ==== Self Test Frame 6\n';
	dc2_adc_en_content_0412 += '\n//==== DC2  -11 ==== Self Test Frame 6\n';
	//------padding with zeros-- with word 0,1,2,3,4
	dc_adc_en_content_0412+='0x00000000, // DC word 0\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 1\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 2\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 3\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 4\n';
	
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 0\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 1\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 2\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 3\n';	
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 4\n';
	//---------------	
	for(j = 0; j < 4; j++){ // word 5,6,7,8
		adc_result_l = 0;
		adc_result_r = 0;
		for(i = 0; i< 32; i++){
			adc_result_l|= (frame6_l_adc_en[(j*32)+i]<<i);
			adc_result_l>>>=0;
			
			adc_result_r|= (frame6_r_adc_en[(j*32)+i]<<i);
			adc_result_r>>>=0;
		}
		dc_adc_en_content_0412+="0x"+adc_result_l.toString(16).padStart(8, '0')+", // DC Word "+(j+5)+"\n";
		dc2_adc_en_content_0412+="0x"+adc_result_r.toString(16).padStart(8, '0')+", // DC2 Word "+(j+5)+"\n";
	}
	//------padding with zeros-- with word 9,10,11
	dc_adc_en_content_0412+='0x00000000, // DC word 9\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 10\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 11\n';
	
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 9\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 10\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 11\n';	
	//---------------	
	//---------------------------
	dc_adc_en_content_0412+='\n//==== DC12 ==== Self Test Frame 7\n';
	dc2_adc_en_content_0412 += '\n//==== DC2  -12 ==== Self Test Frame 7\n';
	//------padding with zeros-- with word 0,1,2,3,4
	dc_adc_en_content_0412+='0x00000000, // DC word 0\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 1\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 2\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 3\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 4\n';
	
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 0\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 1\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 2\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 3\n';	
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 4\n';
	//---------------	
	for(j = 0; j < 4; j++){ // word 5,6,7,8
		adc_result_l = 0;
		adc_result_r = 0;
		for(i = 0; i< 32; i++){
			adc_result_l|= (frame7_l_adc_en[(j*32)+i]<<i);
			adc_result_l>>>=0;
			
			adc_result_r|= (frame7_r_adc_en[(j*32)+i]<<i);
			adc_result_r>>>=0;
		}
		dc_adc_en_content_0412+="0x"+adc_result_l.toString(16).padStart(8, '0')+", // DC Word "+(j+5)+"\n";
		dc2_adc_en_content_0412+="0x"+adc_result_r.toString(16).padStart(8, '0')+", // DC2 Word "+(j+5)+"\n";
	}
	//------padding with zeros-- with word 9,10,11
	dc_adc_en_content_0412+='0x00000000, // DC word 9\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 10\n';
	dc_adc_en_content_0412+='0x00000000, // DC word 11\n';
	
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 9\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 10\n';
	dc2_adc_en_content_0412+='0x00000000, // DC2 word 11\n';	
	//---------------	
	//---------------------------
	
	$('#pa0412_self_test_dc').val(dc_adc_en_content_0412);
	$('#pa0412_self_test_dc2').val(dc2_adc_en_content_0412);
	
	
}
//////////////////////////////////////////////////
function Transpose_change(){
	$('#remapping_0402_transpose_sel').change(function(){
		var i = 0;
		var c_tx = 0, c_rx = 0;
		var c_transpose_content = '';
		var TX = parseInt($('#pa0402_remapping_2').attr('tx'), 10);
		var RX = parseInt($('#pa0402_remapping_2').attr('rx'), 10);
		var ic_num = parseInt($('#pa0402_remapping_2').attr('ic_num'), 10);
		var direction = $(this).val();

		if(direction == 0){ // left-top
			for(i = 0; i< TX*RX*ic_num;i++){
				c_transpose_content += (c_rx*TX)+c_tx + ", ";
				c_rx++;
				
				if(c_rx%(RX*ic_num) == 0 && c_rx > 0){
					c_transpose_content+='\n';
					c_rx = 0;
					c_tx++;
				}
			}
		}
		else if(direction == 1){ // right-top
			var tmp_right_up = '';
			for(i = 0; i< TX*RX*ic_num;i++){
				tmp_right_up += ((TX*RX*ic_num)-1)-(c_rx*TX)-c_tx + ", ";
				c_rx++;
				
				if(c_rx%(RX*ic_num) == 0 && c_rx > 0){
					c_transpose_content = tmp_right_up +'\n'+ c_transpose_content;
					c_rx = 0;
					c_tx++;
					tmp_right_up = '';
				}
			}
		}
		else if(direction == 2){ // left-bottom
			var tmp_left_bottom = '';
			for(i = 0; i< TX*RX*ic_num;i++){
				tmp_left_bottom += (c_rx*TX)+c_tx + ", ";
				c_rx++;
				
				if(c_rx%(RX*ic_num) == 0 && c_rx > 0){
					c_transpose_content = tmp_left_bottom +'\n'+ c_transpose_content;
					c_rx = 0;
					c_tx++;
					tmp_left_bottom = '';
				}
			}
		}
		else if(direction == 3){ // right-bottom
			for(i = 0; i< TX*RX*ic_num;i++){
				c_transpose_content += ((TX*RX*ic_num)-1)-(c_rx*TX)-c_tx + ", ";
				c_rx++;
				
				if(c_rx%(RX*ic_num) == 0 && c_rx > 0){
					c_transpose_content+='\n';
					c_rx = 0;
					c_tx++;
				}
			}
		}
		else{
			c_transpose_content = "unsupported!!\n";
			c_transpose_content+="the first rx is at ";
			c_transpose_content+="(" + first_rx_row + ", "+first_rx_col+") --> start from 1";
		}

		$('#pa0402_remapping_2').val(c_transpose_content);	
	});
	$('#remapping_0402_transpose_sel_ps1').change(function(){
		var TX = parseInt($('#pa0402_remapping_ps1').attr('tx'), 10);
		var RX = parseInt($('#pa0402_remapping_ps1').attr('rx'), 10);
		var ic_num = parseInt($('#pa0402_remapping_ps1').attr('ic_num'), 10);		
		var ps1_rx_num = RX*1.5;
		var ps1_visit_first = 0;
		var i = 0, j = 0;
		var c_tx = 0, c_rx = 0;
		var c_transpose_content = '';
		var direction = $(this).val(); 
		
		if(direction == 0){ // left-top
			
			for(i = 0; i< TX; i++){
				ps1_visit_first = 0;
				for(j = 0; j < ps1_rx_num; j++){
					if(j < (RX/2)){
						c_transpose_content += (j*TX + i)+ ", ";
					}
					else{
						if(ps1_visit_first == 0){
							c_rx = 0;
							c_tx = i;
							ps1_visit_first = 1;
							
						}
						c_transpose_content += (j*TX + i)+ ", ";
					}
					
					c_rx++;
					if(c_rx%(RX) == 0 && c_rx > 0){
						c_transpose_content += '\n';
						c_rx = 0;
						c_tx++;
					}
				}
				///////////////////////////////////////////////////
			}
		}
		else if(direction == 1){ // right-top
			var tmp_right_up = '';
			for(i = 0; i< TX;i++){
				ps1_visit_first = 0;
				for(j = 0; j < ps1_rx_num; j++){
					if(j < (RX/2)){
						tmp_right_up += ((TX*(RX/2)-1))-(c_rx*TX)-c_tx + ", ";
					}
					else{
						if(ps1_visit_first == 0){
							c_rx = 0;
							c_tx = i;
							ps1_visit_first = 1;
							
						}
						tmp_right_up += ((TX*ps1_rx_num)-1)-(c_rx*TX)-c_tx + ", ";
					}
					
					c_rx++;
					if(c_rx%(RX) == 0 && c_rx > 0){
						c_transpose_content = tmp_right_up+'\n'+c_transpose_content;
						c_rx = 0;
						c_tx++;
						tmp_right_up = '';
					}
				}
				///////////////////////////////////////////////////
			}
		}
		else if(direction == 2){ // left-bottom
			for(i = 0; i< TX;i++){
				ps1_visit_first = 0;
				for(j = 0; j < ps1_rx_num; j++){
					if(j < (RX/2)){
						c_transpose_content += j*TX + (TX - i - 1) + ", ";
					}
					else{
						if(ps1_visit_first == 0){
							c_rx = 0;
							c_tx = i;
							ps1_visit_first = 1;
							
						}
						c_transpose_content += j*TX + (TX - i - 1) + ", ";
					}
					
					c_rx++;
					if(c_rx%(RX) == 0 && c_rx > 0){
						c_transpose_content += '\n';
						c_rx = 0;
						c_tx++;
					}
				}
				///////////////////////////////////////////////////
			}
		}
		else if(direction == 3){ // right-bottom
			for(i = 0; i< TX;i++){
				ps1_visit_first = 0;
				for(j = 0; j < ps1_rx_num; j++){
					if(j < (RX/2)){
						c_transpose_content += ((TX*(RX/2)-1))-(c_rx*TX)-c_tx + ", ";
					}
					else{
						if(ps1_visit_first == 0){
							c_rx = 0;
							c_tx = i;
							ps1_visit_first = 1;
							
						}
						c_transpose_content += ((TX*ps1_rx_num)-1)-(c_rx*TX)-c_tx + ", ";
					}
					
					c_rx++;
					if(c_rx%(RX) == 0 && c_rx > 0){
						c_transpose_content+='\n';
						c_rx = 0;
						c_tx++;
					}
				}
			}
		}
		else{
			c_transpose_content = "unsupported!!\n";
			c_transpose_content+="the first rx is at ";
			c_transpose_content+="(" + first_rx_row + ", "+first_rx_col+") --> start from 1";
		}
		$('#pa0402_remapping_ps1').val(c_transpose_content);
	});
	
}
//////////////////////////////////////////////////
$(document).ready(function(){
	Transpose_change();
	if($('#svg_create').length > 0) { // exist
		Current_zoom = parseFloat($('#svgrange').val()); //console.log(Current_zoom);
	
		svg_range_event();
		svg_render();
	
		$('#svg_create').click(function(){
			//console.log('jnnj');
			$("body").addClass('loading');
			svg_render();
			$("body").removeClass('loading');
		});
	}
	
	$('#pa0402_remapping_enter').click(function(){
		Vertical_Remapping(0); // not bin
	});
	
	///////////////////////////////////////////////
	// Self Test Mapping
	var current_id, td_color, frame, addedclass, rx_m;
	$('#mapping_table_show_adc').click(function(){
		$('#mapping_table_result td').each(function() {
			current_id = $(this).attr('id');
			frame = $(this).attr('frame');
			addedclass = 'f'+frame+'_bg';
			if(tp_mux2_structure == 1){ // TP mux2.................
				var m_mux_split = current_id.split('_');
				if(m_mux_split.length > 3){
					// $(this).text(m_mux_split[2]+'_'+m_mux_split[3]);
					$(this).addClass("frame_tp_mux2_2_color");
				}
				else{
					// $(this).text(m_mux_split[2]);
					$(this).addClass("frame_tp_mux2_1_color");
				}
				$(this).text(m_mux_split[2]);
			}
			else{
				$(this).text(current_id.split('_')[2]);
			}
			$(this).removeClass(addedclass);
			
		});
	});
	$('#mapping_table_show_frame').click(function(){
		$('#mapping_table_result td').each(function() {
			current_id = $(this).attr('id'); 
			frame = $(this).attr('frame');
			addedclass = 'f'+frame+'_bg';
			$(this).text(frame);
			$(this).addClass(addedclass);
		});
	});
	$('#mapping_table_show_rx').click(function(){
		$('#mapping_table_result td').each(function() {
			current_id = $(this).attr('id');
			frame = $(this).attr('frame');
			addedclass = 'f'+frame+'_bg';
			rx_m = $(this).attr('rx_m');
			$(this).text(rx_m);
			$(this).removeClass(addedclass);
			
		});
	});
	
});