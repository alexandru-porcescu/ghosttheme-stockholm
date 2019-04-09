export function fallback_images() {
  var images = $('picture');
  $(images).each(function() {
    var imagepaths = $(this).find('source:last-of-type').attr('srcset');
    var standardres = String(imagepaths).split(' @1x')[0];
    var highres = String(imagepaths).split(' @1x,')[1];
    var fallback_src = imagepaths.replace('webp', 'jpg');
    var new_srcset = '<source srcset="' + fallback_src + '">';
    $(this).find('source:last-of-type').after(new_srcset);
    console.log('new_srcset = ' + new_srcset);
  });
  picturefill({
    elements: [document.getElementsByName('picture')]
  });
}
