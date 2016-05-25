(function () {
    module.controller("writeToTeacherController", ["$q", "$timeout", "$scope", function ($q, $timeout, $scope) {
        $scope.child = "Select Child Reference";
        //Chips Logic Below
        //Source https://material.angularjs.org/latest/demo/chips
        var self = this;
        var pendingSearch, cancelSearch = angular.noop;
        var cachedQuery, lastSearch;
        self.allContacts = loadContacts();
        self.contacts = [self.allContacts[0]];
        self.asyncContacts = [];
        self.filterSelected = true;
        self.querySearch = querySearch;
        self.delayedQuerySearch = delayedQuerySearch;
        function querySearch(criteria) {
            cachedQuery = cachedQuery || criteria;
            return cachedQuery ? self.allContacts.filter(createFilterFor(cachedQuery)) : [];
        }
        function delayedQuerySearch(criteria) {
            cachedQuery = criteria;
            if (!pendingSearch || !debounceSearch()) {
                cancelSearch();
                return pendingSearch = $q(function (resolve, reject) {
                    cancelSearch = reject;
                    $timeout(function () {
                        resolve(self.querySearch());
                        refreshDebounce();
                    }, Math.random() * 500, true)
                });
            }
            return pendingSearch;
        }
        function refreshDebounce() {
            lastSearch = 0;
            pendingSearch = null;
            cancelSearch = angular.noop;
        }
        function debounceSearch() {
            var now = new Date().getMilliseconds();
            lastSearch = lastSearch || now;
            return ((now - lastSearch) < 300);
        }
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(contact) {
                return (contact._lowername.indexOf(lowercaseQuery) != -1);
                ;
            };
        }
        //Function to Fetch and Load Contacts
        function loadContacts() {
            var contacts = [
                'Yogesh Paisode',
                'Parag Dekate',
                'Mayur Paradkar',
                'Rutika Medhe',
                'Suraj Bowade',
                'Jyoti Bowade',
                'Suresh Pal',
                'one',
                'two',
                'three',
                'four',
                'five',
                'six',
                'seven',
                'eight',
                'nine',
                'ten'
            ];

            return contacts.map(function (c, index) {
                var contact = {
                    name: c
                };
                contact._lowername = contact.name.toLowerCase();
                return contact;
            });
        }
        //Chips logic ends

    }]);
}());