/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
  "use strict";

  sap.ui.require(
    [
      "sap/ui/demo/walkthrough/test/unit/model/en.formatter",
      "sap/ui/demo/walkthrough/test/unit/model/hi.formatter",
      "sap/ui/demo/walkthrough/test/unit/model/default.formatter"
    ],
    function() {
      QUnit.start();
    }
  );
});
