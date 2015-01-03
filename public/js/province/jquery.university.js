(function ($) {
    var jqueryUniversity;
    jqueryUniversity = function (el) {
        this.init = function () {
            var initHtml = '<div class="rlf-group profile-address">' +
                '<select id="province-select" hidefocus="true">' +
                '<option value="0">选择省份</option>' +
                '</select>' +
                '<select id="university-select" hidefocus="true">' +
                '<option value="0">选择学校</option>' +
                '</select>' +
                '<select id="college-select" hidefocus="true">' +
                '<option value="0">选择学院</option>' +
                '</select>' +
                '<p class="rlf-tip-wrap"></p>' +
                '</div>';
            $(el).html(initHtml);
            for (var i = 0, pLen = provices.length; i < pLen; i++) {
                $("#province-select")[0].innerHTML += '<option data-name="' + provices[i].provinceName + '" value="' + (i + 1) + '">' + provices[i].province + '</option>';
            }

            $("#province-select").change(function () {
                $(this).find("option").each(function () {
                    var changeProvice;
                    $("#college-select").html('<option value="0">选择学院</option>');
                    if ($(this).attr("selected") === "selected") {
                        changeProvice = $(this).attr("data-name");
                        getUniversity(changeProvice);
                    }
                });
            });

            $("#university-select").change(function () {
                $(this).find("option").each(function () {
                    var changeUniversity;
                    if ($(this).attr("selected") === "selected") {
                        changeUniversity = $(this).attr("data-name");
                        getCollege(changeUniversity);
                    }
                });
            });
        };

        function getUniversity(provice) {
            var currentUniversities = rightUniversity[provice];
            var html = '<option value="0">选择学校</option>';
            for(var i = 0, uLen = currentUniversities.length; i < uLen; i++) {
                html += '<option data-name="' + currentUniversities[i].universityName + '" value="' + (i + 1) + '">' + currentUniversities[i].university + '</option>';
            }
            $("#university-select").html(html);
        }

        function getCollege(university) {
            var currentColleges = rightCollege[university];
            var html = '<option value="0">选择学院</option>';
            for(var i = 0, cLen = currentColleges.length; i < cLen; i++) {
                html += '<option value="' + (i + 1) + '">' + currentColleges[i].college + '</option>';
            }
            $("#college-select").html(html);
        }
    };

    $.fn.jqueryUniversity = function () {
            $(this).each(function () {
               var university = new jqueryUniversity(this);
                university.init();
            });
    }
})(jQuery);