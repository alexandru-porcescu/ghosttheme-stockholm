import '../less/global.less';
import './global/analytics.js';
import {search} from './global/search.js';
import {series_icons} from './global/seriesicons.js';
import {tags} from './global/tags.js';
import {retina} from './global/retina_init.js';
import {fallback_images} from './global/picturefill.js';

$(document).ready(function() {
  fallback_images();
  retina();
  tags();
  series_icons();
  search();
});
