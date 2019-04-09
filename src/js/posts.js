// Import Styles
import '../less/posts.less';

// Import functions
import {code_snippet_full_screen} from './posts/snippet_full_screen.js';
import {scrollable_tables} from './posts/scrolltables.js';
import {enable_baguettebox} from './posts/baguetteinit.js';
import {detect_series} from './posts/serieswidgets.js';
import {add_image_alt_tags} from './posts/alttags';



// Useless Functions
/*function mergedTableCells() {
  $('table').find('th').each(function() {
    if ($(this).attr('rowspan')) {
      $(this).css('border-bottom', '2px solid #f6f8fe');
    }
  });
}

function reduce_indents() {
  $('.language-python').text(function() {
    return $(this).text().replace("    ", "  ");
  });
  $('.language-json').text(function() {
    return $(this).text().replace("    ", "  ");
  })
  $('.language-javascript').text(function() {
    return $(this).text().replace("    ", "  ");
  })
}*/

$(document).ready(function() {
  code_snippet_full_screen();
  scrollable_tables();
  enable_baguettebox();
  add_image_alt_tags();
  detect_series();
});
