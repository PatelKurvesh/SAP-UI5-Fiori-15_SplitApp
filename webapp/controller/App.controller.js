sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("GithubSAP-UI5-Fiori-15_SplitApp.controller.App", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf GithubSAP-UI5-Fiori-15_SplitApp.view.App
		 */
			onInit: function() {
				
				var oApp = this.getView().byId("idApp");
				
				var oView1 = new sap.ui.view({
					id : "idView1",				//virtualy giving id to view1
					viewName:"GithubSAP-UI5-Fiori-15_SplitApp.view.View1",  //remember full path needed
					type:"XML"
				});
				var oView2 = new sap.ui.view({
					id:"idView2",				////virtualy giving id to view2
					viewName : "GithubSAP-UI5-Fiori-15_SplitApp.view.View2",   //remember full path needed
					type:"XML"
				});
				
				//in splitapp we have two pages "MasterPage" and "DetailPage" and we need to add in root page for spliting
				oApp.addMasterPage(oView1);          
				oApp.addDetailPage(oView2);          
		
			}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf GithubSAP-UI5-Fiori-15_SplitApp.view.App
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf GithubSAP-UI5-Fiori-15_SplitApp.view.App
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf GithubSAP-UI5-Fiori-15_SplitApp.view.App
		 */
		//	onExit: function() {
		//
		//	}

	});

});