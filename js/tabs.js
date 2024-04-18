// Tab Panels
$(document).ready(function() {
    // grab all container panel DIVs
    var tabContainers = $('div.tabs > div');

    // hide them all, then show the first one
    tabContainers.hide().filter(':first').show().addClass('show');

    // set the first tab to class="selected"
    $('div.tabs ul.tabNavigation a:first').addClass('selected');

    // add onclick handlers to all tabs
    $('div.tabs ul.tabNavigation a').click(function() {
        // hide all tabContainers
        tabContainers.hide().removeClass('show');

        // show only the tabContainer with the ID that matches the href for the A that was clicked
        tabContainers.filter(this.hash).show().addClass('show');

        // remove class="selected" from all tabs
        $('div.tabs ul.tabNavigation a').removeClass('selected');

        // set class="selected" on the tab that was just clicked
        $(this).addClass('selected');

        // animate the h1 element
        $('h1').animate({ fontSize: '2em' }, 300).animate({ fontSize: '1.5em' }, 300);

        // stop following links
        return false;
    });
});