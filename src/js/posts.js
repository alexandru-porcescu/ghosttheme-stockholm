// May not need this
require('es6-promise').polyfill();

// Import Styles
import '../less/posts.less';

// Additional Dependencies
import ScrollBooster from 'scrollbooster';
import baguetteBox from 'baguettebox.js';
const fetch = require('isomorphic-fetch');

// Import functions
import {code_snippet_full_screen} from './posts/snippet_full_screen.js';
import {scrollable_tables} from './posts/scrolltables.js';
import {enable_baguettebox} from './posts/baguetteinit.js';
import {detect_series} from './posts/serieswidgets.js';
import {add_image_alt_tags} from './posts/alttags';

// Import hljs
/*import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import shell from 'highlight.js/lib/languages/shell';
import sql from 'highlight.js/lib/languages/sql';
import json from 'highlight.js/lib/languages/json';
import ini from 'highlight.js/lib/languages/ini';
import yaml from 'highlight.js/lib/languages/yaml';
import handlebars from 'highlight.js/lib/languages/handlebars';
import less from 'highlight.js/lib/languages/less';
import xml from 'highlight.js/lib/languages/xml';
import bash from 'highlight.js/lib/languages/bash';
import nginx from 'highlight.js/lib/languages/nginx';
import hljs from 'highlight.js/lib/highlight';*/



// Register highlight.js languages
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('shell', shell);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('json', json);
hljs.registerLanguage('ini', ini);
hljs.registerLanguage('yaml', yaml);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('handlebars', handlebars);
hljs.registerLanguage('less', less);
hljs.registerLanguage('nginx', nginx);

// Init hljs
/*hljs.configure({
  tabReplace: '  ', // 2 spaces
  classPrefix: '' // don't append class prefix
});
hljs.initHighlightingOnLoad();*/

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
