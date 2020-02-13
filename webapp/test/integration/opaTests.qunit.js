/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"pract_1/Practice_1/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});