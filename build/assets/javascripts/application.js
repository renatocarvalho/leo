(function(){var e;e={},e.headingLinks=function(t){return t.els.each(function(){var t,n;return t=$(this),n=e.slugify(t.text()),t.attr("id",n),t.prepend("<a class='anchor' href='#"+n+"'>#</a>")})},e.readTime=function(e){var t;return t=Math.ceil(e.text.split(" ").length/e.wordsPerMinute),e.element.append("<b>"+t+" minute read</b>")},e.slugify=function(e){return e.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},jQuery(function(t){return e.headingLinks({els:t("h2, h3, h4, h5, h6")}),e.readTime({wordsPerMinute:200,text:t(".content").text(),element:t(".content h1")}),t(".toggle").on("click",function(e){return e.preventDefault(),t(this).toggleClass("is-active"),t("body").toggleClass("is-sidebar-open"),t(".sidebar").toggleClass("is-open")})})}).call(this);