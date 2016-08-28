;(function(){
    'use strict';

    angular.module('com.lihau.mipicker', [])
    .factory('MultiImagePicker', MultiImagePicker);

    MultiImagePicker.$inject = ['$q'];
    function MultiImagePicker($q){
        return {
            pickImage: pickImage,
        };

        ///////////////////////

        function pickImage(opts){
            var defer = $q.defer();
            opts = opts || {};
            window.MultiImagePicker.getPictures(defer.resolve, defer.reject, opts);
            return defer.promise;
        }
    });
})();
