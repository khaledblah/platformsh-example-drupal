/**
 * @file
 * Misc JQuery scripts in this file
 */
(function ($) {
  Drupal.behaviors.evergreen_hostel = {
    attach: function (context, settings) {
      if ($('#toolbar').length) {
        /* not disabled during dev. phase */
        $('#top-fixed').css('top', $('#toolbar').height());
      }
    }
  }
}
) (jQuery);
