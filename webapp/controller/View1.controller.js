sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("GithubSAP-UI5-Fiori-15_SplitApp.controller.View1", {
		
		onInit : function(){
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("model/splitApp.json");
			this.getView().setModel(oModel);
		},
		
		//onItemPress function for if you click view1 and get detail in view2
		onItemPress :function(oEvent){
			
			var oItem = oEvent.getParameter("listItem");
			var sPath = oItem.getBindingContext().sPath;
			var oView2 = this.getView().getParent().getParent().getDetailPages()[0];
			oView2.bindElement(sPath);
			sap.ui.getCore().byId("__xmlview0--idApp").to(oView2);
		}

	});
});