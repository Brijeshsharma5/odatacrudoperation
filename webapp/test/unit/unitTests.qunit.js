/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"testcom/odatacrudoperation/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
