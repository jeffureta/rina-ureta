import { iconsColorSecondary } from "./variables.js";

export const hoverOverlay = () => {
    return $(document).ready(function() {
        $('.profile').hover(
          function() {
            $('.overlay', this).css('opacity', '1');
          },
          function() {
            $('.overlay', this).css('opacity', '0');
          }
        );
    });
}

export const hoverIcons = () => {
    return $(document).ready(function() {
        $('.social-icons li').hover(
            function() {
                $(this).css({'background-color': iconsColorSecondary, 'color': "white"});
            },
            function() {
                $(this).css({'background-color': '', 'color': "white"});
            }
        );
    });
}