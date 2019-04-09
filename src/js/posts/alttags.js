export function add_image_alt_tags() {
  $('main img').each(function() {
    const caption = $(this).closest('figure').find('figcaption').text();
    $(this).attr('alt', caption);
  });
}
