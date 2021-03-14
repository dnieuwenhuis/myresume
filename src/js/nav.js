// get all elements with the 'data-toggle'-attribute
var toggleElements = document.querySelectorAll('[data-toggle]');
// store activeClass
var activeClass = "-is-active";
// add a 'click'event listener to each toggleElement
toggleElements.forEach(function (toggleElement) {
    toggleElement.addEventListener("click", function () {
        // get value from 'aria-controls'-attribute which refers to the id of the target element
        var value = toggleElement.getAttribute("aria-controls"),
            target = document.getElementById(value);

        // get options from the 'data-toggle-options'-attribute (optional)
        // check if attribute exists, then parse otherwise set to an empty object
        var options = toggleElement.dataset.toggleOptions ? JSON.parse(toggleElement.dataset.toggleOptions) : {};
        // check if property exists, then store value of property "blockScroll" or default fallback
        var blockScroll = options.hasOwnProperty("blockScroll") ? options.blockScroll : false;

        // check if target is already active
        if (target.classList.contains(activeClass)) {
            // handle inactive-state
            deactivate(toggleElement, target);

            // if the value of blockScroll is truthy, enable scroll
            if (blockScroll) enableScroll();
        } else {
            // handle active-state
            activate(toggleElement, target);

            // if the value of blockScroll is truthy, disable scroll
            if (blockScroll) disableScroll();
        }
    });
});

var activate = function (toggleElement, target) {
    toggleElement.setAttribute("aria-expanded", true);
    target.classList.add(activeClass);
};
var deactivate = function (toggleElement, target) {
    console.log("deactivating..");
    toggleElement.setAttribute("aria-expanded", false);
    target.classList.remove(activeClass);
};

// get html-element
var html = document.querySelector('html');
var disableScrollClass = "noscroll";
var enableScroll = function () {
    html.classList.remove(disableScrollClass);
};
var disableScroll = function () {
    html.classList.add(disableScrollClass);
};