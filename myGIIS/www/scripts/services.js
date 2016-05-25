(function () {
    module.factory("CAMPUS", ["$resource", "host", function ($resource, host) {
        return $resource(host.debugHost + "campuses");
    }]);
    module.factory("INBOXList", ["$resource", "host", "settingVal", function ($resource, host, settingVal) {
        return $resource(host.debugHost + "mails/inbox/MailDefault/Descending/20/" + settingVal.listPageSize);
    }]);
    module.factory("SENTList", ["$resource", "host", "settingVal", function ($resource, host, settingVal) {
        return $resource(host.debugHost + "mails/sent/MailDefault/Descending/20/" + settingVal.listPageSize);
    }]);
    module.factory("CHILDList", ["$resource", "host", "settingVal", function ($resource, host, settingVal) {
        return $resource(host.debugHost + "mails/studentinbox/423/MailDefault/Descending/20/" + settingVal.listPageSize);
    }]);
    module.service("toastService", ["$cordovaToast", "$timeout", function ($cordovaToast, $timeout) {
        this.showToast = function (message) {
            $timeout(function () {
                $cordovaToast.showLongCenter(message);
            }, 100);
            return true;
        }
    }]);
}());


