odoo.define('training.screen', function(require){
    "use strict";

    var core = require('web.core');
    var Widget = require('web.Widget');
    var formController = require('web.FormController');

    formController.include({
        _onSaveCustom: function (ev) {
            ev.stopPropagation(); // Prevent x2m lines to be auto-saved
            this.saveRecord();
        },

        _onSave: function(ev){
            var self = this;
            BootstrapDialog.confirm('Are you sure?', function(result){
                if(result) {
                    self._onSaveCustom(ev);
                }
            });
        },
    });
});