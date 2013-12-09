//----------------------------------------------------------------------------
//  Copyright (C) 2013 The IPython Development Team
//
//  Distributed under the terms of the BSD License.  The full license is in
//  the file COPYING, distributed as part of this software.
//----------------------------------------------------------------------------

//============================================================================
// ImageWidget
//============================================================================

/**
 * @module IPython
 * @namespace IPython
 **/

define(["notebook/js/widget"], function(widget_manager){
    var ImageWidgetModel = IPython.WidgetModel.extend({});
    widget_manager.register_widget_model('ImageWidgetModel', ImageWidgetModel);

    var ImageView = IPython.WidgetView.extend({
      
        // Called when view is rendered.
        render : function(){
            this.setElement($("<img />"));
            this.update(); // Set defaults.
        },
        
        // Handles: Backend -> Frontend Sync
        //          Frontent -> Frontend Sync
        update : function(){
            var image_src = 'data:image/' + this.model.get('image_format') + ';base64,' + this.model.get('_b64value');
            this.$el.attr('src', image_src);
            
            var width = this.model.get('width');
            if (width !== undefined && width.length > 0) {
                this.$el.attr('width', width);
            } else {
                this.$el.removeAttr('width');
            }
            
            var height = this.model.get('height');
            if (height !== undefined && height.length > 0) {
                this.$el.attr('height', height);
            } else {
                this.$el.removeAttr('height');
            }
            return IPython.WidgetView.prototype.update.call(this);
        },
        
    });

    widget_manager.register_widget_view('ImageView', ImageView);

});