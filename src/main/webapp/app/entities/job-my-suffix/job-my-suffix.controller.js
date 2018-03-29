(function() {
    'use strict';

    angular
        .module('jhipsterSampleApplicationApp')
        .controller('JobMySuffixController', JobMySuffixController);

    JobMySuffixController.$inject = ['Job'];

    function JobMySuffixController(Job) {

        var vm = this;

        vm.jobs = [];

        loadAll();

        function loadAll() {
            Job.query(function(result) {
                vm.jobs = result;
                vm.searchQuery = null;
            });
        }
    }
})();
