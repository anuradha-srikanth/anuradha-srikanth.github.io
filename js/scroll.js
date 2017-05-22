(function($) {
    $(document).ready(function() {
        $.jScrollability([
        {
            'selector': '.slide-in-demo',

            'start': 'parent',
            'end': 'parent', 
            // 'end': function($el) { return $el.offset().top + $(window).height(); },
            'fn': {
                'left': {
                    'start': 100,
                    'end': 0,
                    'unit': '%'
                }
            }
        }
        ]);
    });
})(jQuery);