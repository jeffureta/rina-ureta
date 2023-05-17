export const animateTextOnHover = () => {
    return $(document).ready(function() {
        $('.profile a').hover(
            function() {
                $(this).css(
                    {
                        'font-size': '1.2em',
                        'transition': 'font-size 0.3s ease-in'
                    }
                    );
            },
            function() {
                $(this).css({'font-size': '1em'});
            }
        );
    });
}