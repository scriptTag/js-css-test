var Layout = {

	init: function() {
		Layout.resizeSections();
	},

	resizeSections: function () {
		var wrapper = $("#wrapper"),
				header = $("#master_header"),
				sidebar = $("#sidebar"),
				content = $("#content");

		wrapper.width($(window).width()).height($(window).height());
		content.width(wrapper.width() - (sidebar.width() + 2));
		content.height(wrapper.height() - header.height());
		sidebar.height(wrapper.height() - header.height());


		$(window).resize(function() {
			wrapper.width($(window).width()).height($(window).height());
			content.width(wrapper.width() - (sidebar.width() + 2));
			content.height(wrapper.width() - header.height());
			sidebar.height(wrapper.height() - header.height());
		});

	}

}