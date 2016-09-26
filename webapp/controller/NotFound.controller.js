sap.ui.define([
	"sap/bb/payserv/disbursements/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("sap.bb.payserv.disbursements.controller.NotFound", {

		/**
		 * Navigates to the worklist when the link is pressed
		 * @public
		 */
		onLinkPressed: function() {
			this.getRouter().navTo("worklist");
		}

	});

});