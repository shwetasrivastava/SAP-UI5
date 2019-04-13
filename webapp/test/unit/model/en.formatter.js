/*global QUnit*/

sap.ui.define(
  [
    "sap/ui/demo/walkthrough/model/formatter",
    "sap/ui/model/resource/ResourceModel"
  ],
  function(formatter, ResourceModel) {
    "use strict";

    QUnit.module("Formatting functions: English", {
      beforeEach: function() {
        this._oResourceModel = new ResourceModel({
          bundleUrl:
            sap.ui.require.toUrl("sap/ui/demo/walkthrough") +
            "/i18n/i18n_en.properties"
        });
      },
      afterEach: function() {
        this._oResourceModel.destroy();
      }
    });

    QUnit.test("Should return the translated texts", function(assert) {
      // Arrange
      // this.stub() does not support chaining and always returns the right data
      // even if a wrong or empty parameter is passed.
      var oModel = this.stub();
      oModel.withArgs("i18n").returns(this._oResourceModel);
      var oViewStub = {
        getModel: oModel
      };
      var oControllerStub = {
        getView: this.stub().returns(oViewStub)
      };

      // System under test
      var fnIsolatedFormatter = formatter.statusText.bind(oControllerStub);

      // Assert
      assert.strictEqual(
        fnIsolatedFormatter("A"),
        "New",
        "The text for status A is correct"
      );

      assert.strictEqual(
        fnIsolatedFormatter("B"),
        "In Progress",
        "The text for status B is correct"
      );

      assert.strictEqual(
        fnIsolatedFormatter("C"),
        "Done",
        "The text for status C is correct"
      );

      assert.strictEqual(
        fnIsolatedFormatter("Foo"),
        "Foo",
        "The text for status Foo is correct"
      );
    });
  }
);
