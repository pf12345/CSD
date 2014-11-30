/**
 * Created by pengfeng on 2014/11/30.
 */
/**
 * 验证邮箱
 * @param email
 * @returns {boolean}
 */
var validEmail = function (email) {
    var re;
    if (!email) {
        return false;
    }
    re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

/**
 * showMsg提示框
 * @param string
 * @param callback
 */
var showMsg = function(string, callback) {
    $('#showMsg').html(string).show();
    var timer = setTimeout(function() {
        $('#showMsg').html('').hide();
        if(callback && typeof callback === 'function') {
            callback();
        }
        clearTimeout(timer);
    }, 3000);
}