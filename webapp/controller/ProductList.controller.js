sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageBox) {
        "use strict";

        return Controller.extend("test.com.odatacrudoperation.controller.ProductList", {
            onInit: function () {
                var that = this;
                
                var odataModel = this.getOwnerComponent().getModel();
                odataModel.read("/Products",{
                    success:function(oData,oResponse){
                        MessageBox.success("Success");
                        
                    },
                    error: function(oError){
                        MessageBox.error("Error");
                    }
                });
                this.getView().setModel(odataModel);

            },
            createData: function(){
                debugger;
                var ID = this.getView().byId("idinput").getValue();
                var Name = this.getView().byId("nameinput").getValue();
               
                var data = {
                    CategoryID: parseInt(ID),
                    CategoryName: Name
                };
                var odataModel = this.getOwnerComponent().getModel();
                odataModel.create("/Categories", data, {
                    success: function(data, response){
                        MessageBox.success("Data successfully created");
                    },
                    error: function(error){
                        MessageBox.error("Error while creating the data");
                    }
                });
           
            },
            deleteData: function(){
                var list = this.getView().byId("list");
                var selItem = list.getSelectedItem();
                var title = selItem.getTitle();
                var path = "/Categories(" + title + ")"; ///Categories(3);
                var odataModel = this.getOwnerComponent().getModel();
                odataModel.remove(path,{
                    success: function(data,response){
                        MessageBox.success("Deleted data");
                    },
                    error: function(error){
                        MessageBox.error("Deletion failed");
                    }
                })
            }
           
        });
    });
