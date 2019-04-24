function remove_images() {
  $('img').each(function() {
    if ($(this).attr('src') == 'null') {
      $(this).parent().remove();
    }
  });
}

export function post_link_previews() {
  var current_page = window.location.href;
  if (current_page.includes("lynx")) {
    $("main a").each(function(index, element) {
      var link = $(this).attr('href');
      console.log('link = ' + link);
      var endpoint_url = process.env.LINK_PREVIEW_ENDPOINT + '?url=' + link;
      $(this).html('<div class="ui placeholder"> <div class="image header"> <div class="line"></div> <div class="line"></div> </div> <div class="paragraph"> <div class="line"></div> <div class="line"></div> <div class="line"></div> <div class="line"></div> <div class="line"></div> </div><div class="gap">  </div><div class="column left"></div> <div class="column right"></div></div></div>');
      var headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      };
      $.ajax({
        method: 'GET',
        url: endpoint_url,
        headers: headers,
        dataType: 'json',
        success: function(json) {
          $(this).html('<a href="' + json.url + '"><div class="link-preview"> \n ' +
                        '<div class="link-info"> \n ' + '<div class="link-preview-image"><img alt="' + json.title + '" src="' + json.image + '"></div> \n' +
                        '<div class="detail-stack"> \n ' + '<h4 class="title-desktop">' + json.title + '</h4> \n ' +
                        '<p>' + json.description + '</p> \n' +
                        '<h4 class="title-mobile">' + json.title + '</h4> \n ' +
                        '<span class="url-info"><i class="far fa-link"></i>' + json.url.split('://')[1] + '</span> \n ' +
                        '</div></div></a>'
                      );
          remove_images();
        }
      });
    });
  }
}