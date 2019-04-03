sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"
  ],
  function(UIComponent, JSONModel, ResourceModel, HelloDialog) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
        manifest: "json"
      },
      init: function() {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);
        //get the current language for the user
        var sCurrentLocale = sap.ui
          .getCore()
          .getConfiguration()
          .getLanguage();
        // set data model
        var oData = {
          recipient: {
            name: "World"
          }
        };
        var oModel = new JSONModel(oData);
        this.setModel(oModel);

        // set i18n model
        var i18nModel = new ResourceModel({
          bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
        });
        this.setModel(i18nModel, "i18n");
        // set dialog
        this._helloDialog = new HelloDialog(this.getRootControl());
      },

      exit: function() {
        this._helloDialog.destroy();
        delete this._helloDialog;
      },

      openHelloDialog: function() {
        this._helloDialog.open();
      }
    });
  }
);
