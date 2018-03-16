(function() {
    'use strict';

    angular
        .module('jhipsterSampleApplicationApp')
        .controller('EmployeeMySuffixController', EmployeeMySuffixController);

    EmployeeMySuffixController.$inject = ['Employee'];

    function EmployeeMySuffixController(Employee) {

        var vm = this;

        vm.employees = [];

        loadAll();

        function loadAll() {
            Employee.query(function(result) {
                vm.employees = result;
                vm.searchQuery = null;
            });
        }
    }
})();
