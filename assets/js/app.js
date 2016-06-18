function ToggleMenu(args){
    if(jQuery('#'+args).hasClass('active') || args == 'close'){
      jQuery('.js-menu').removeClass("active");
      jQuery('#overlaybody').removeClass("active");
    }else{
      jQuery('.js-menu').removeClass("active");
      jQuery('#overlaybody').addClass("active");
      jQuery('#'+args).addClass("active");
    }
  }

function ToggleSection(elem){
  var elem = jQuery(elem)[0];
  var section = jQuery(elem).data('section');

  if(jQuery(elem).hasClass('active') || section == 'close'){
    jQuery(elem).removeClass('active');
    jQuery('.js-section').removeClass("active");
    jQuery('.js-section-launch').removeClass("active");
  }else{
    jQuery('.js-section').removeClass("active");
    jQuery('.js-section-launch').removeClass("active");
    jQuery('.js-section-'+section).addClass("active");
    jQuery('#'+section).addClass("active");
    jQuery(elem).addClass('active');
  } 
}

function ToggleSelect(select_id){
  var section = jQuery('#'+select_id+' option:selected').val();
  if(jQuery('#js-select-'+section).hasClass('active') || select_id == 'close'){
    jQuery('.js-select-'+select_id).removeClass("active");
  }else{
    jQuery('.js-select-'+select_id).removeClass("active");
    jQuery('#js-select-'+section).addClass("active");
  }
}

function imageresize() {
    if (jQuery('.js-fullheight').length > 0) jQuery('.js-fullheight').css("height", jQuery(window).height() - jQuery('#headertop').outerHeight());
    if (jQuery('.js-fullheight-thumb').length > 0) jQuery('.js-fullheight-thumb').imagefill();
}


jQuery(document).ready(function($) {

});