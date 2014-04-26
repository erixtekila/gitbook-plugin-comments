require
(
	["gitbook", "jquery"]
	, function ( gitbook, $ )
	{
		var buttontext = "Evaluate in console";

		/**
			Config time
		*/
		gitbook.events.on
		(
			"start", function( e, config )
			{
				
			}
		);

		/**
			Fired after each new page enhancment
		*/
		gitbook.events.on
		(
			"page.change", function ()
			{
				var $page_inner = $( ".page-inner" );
				$page_inner.html
				(
					$page_inner
						.html()
						.replace
						(
							/(<!---)([\s\S]*?)(--->)/g
							, '<p class="alert alert-warning">$2</p>'
						)
				);
			}
		);
	}
);