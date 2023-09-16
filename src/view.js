
import jQuery from 'jquery'; // Import jQuery with the correct handle

let $ = jQuery;
$(document).ready(function() 
{
  $('.slick-ul').each(function( index, slick ) 
  {
    const id = 'slick-'+Math.floor(Math.random() * 101);
    $(slick).attr('id',id);

    let settings = JSON.stringify($(slick).data('settings'));

    settings = settings.replace(/"([^"]+)":/g, '$1:');

    console.log('view settings ',settings);
    
    const scriptElement = $('<script>');
    scriptElement.text("console.log('* Gutenberg slick slider *'); jQuery('#"+id+"').slick("+settings+");");
    $('head').append(scriptElement);
  });  
});
