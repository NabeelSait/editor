Numbas.queueScript('scripts/editor-extras.js',['jme-display'],function() {
	Numbas.jme.display.texOps.subvar = function(thing,texArgs) {
		return '\\class{jme-subvar}{\\left\\{'+texArgs[0]+'\\right\\}}';
	};
});