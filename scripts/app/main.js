require.config({ 
	paths: {
		jquery: '../utils/jquery',
		tpl: '../plugins/tpl'
	}
});

require(['comcom'], function(comcom){
	
	// Call comcom and pass in your username
	comcom.init('sirbrad')
	
});
