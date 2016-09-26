jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
jQuery.sap.require("sap.ui.test.opaQunit");
jQuery.sap.require("sap.ui.test.Opa5");

jQuery.sap.require("sap.bb.payserv.disbursements.test.integration.pages.Common");
jQuery.sap.require("sap.bb.payserv.disbursements.test.integration.pages.Worklist");
jQuery.sap.require("sap.bb.payserv.disbursements.test.integration.pages.Object");
jQuery.sap.require("sap.bb.payserv.disbursements.test.integration.pages.NotFound");
jQuery.sap.require("sap.bb.payserv.disbursements.test.integration.pages.Browser");
jQuery.sap.require("sap.bb.payserv.disbursements.test.integration.pages.App");

sap.ui.test.Opa5.extendConfig({
	arrangements: new sap.bb.payserv.disbursements.test.integration.pages.Common(),
	viewNamespace: "sap.bb.payserv.disbursements.view."
});

// Start the tests
jQuery.sap.require("sap.bb.payserv.disbursements.test.integration.WorklistJourney");
jQuery.sap.require("sap.bb.payserv.disbursements.test.integration.ObjectJourney");
jQuery.sap.require("sap.bb.payserv.disbursements.test.integration.NavigationJourney");
jQuery.sap.require("sap.bb.payserv.disbursements.test.integration.NotFoundJourney");
jQuery.sap.require("sap.bb.payserv.disbursements.test.integration.FLPIntegrationJourney");