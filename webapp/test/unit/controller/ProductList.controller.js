/*global QUnit*/

sap.ui.define([
	"testcom/odatacrudoperation/controller/ProductList.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ProductList Controller");

	QUnit.test("I should test the ProductList controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
