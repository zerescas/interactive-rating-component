$("#review-thanks-card").toggle();
let selectedOption;

$(".rating-option").on("click", function () {
    // an option is not selected OR an option difference from a new selected option
    if (selectedOption != this) {
        // deactive previous active option
        $(selectedOption).removeClass("rating-option-selected");

        // activate a new option
        $(this).addClass("rating-option-selected");
        selectedOption = this;
    } else {
        // deactive same option
        $(selectedOption).toggleClass("rating-option-selected");
        selectedOption = undefined;
    }
});

$("#submit-button").on("click", function () {
    if (selectedOption) {
        $("#rating-score").text($(selectedOption).text());

        $("#rating-card").fadeOut(250, () => {
            $("#review-thanks-card").fadeIn(250);
        });
    } else {
        $(".rating-options-container").fadeOut(250).fadeIn(250);
    }
});