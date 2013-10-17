import os

from ..widget import Widget
from IPython.utils.traitlets import Unicode, Float, Bool
from IPython.utils.javascript import display_all_js

class FloatRangeWidget(Widget):
    target_name = Unicode('FloatRangeWidgetModel')
    default_view_name = Unicode('FloatSliderView')
    _keys = ['value', 'step', 'max', 'min', 'disabled', 'orientation']
    
    value = Float(0.0) 
    max = Float(100.0) # Max value
    min = Float(0.0) # Min value
    disabled = Bool(False) # Enable or disable user changes
    step = Float(0.1) # Minimum step that the value can take (ignored by some views)
    orientation = Unicode(u'horizontal') # Vertical or horizontal (ignored by some views)