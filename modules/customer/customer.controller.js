(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();


    var CustomerMiddleware = require('./customer.module')().CustomerMiddleware;

    /** 
    * @swagger 
    * /customers: 
    *   post: 
    *     description: Create an Employee 
    *     parameters: 
    *     - in: formData
    *       name: name
    *       type: string
    *       description: A person's name.
    *     - in: formData
    *       name: fav_number
    *       type: number
    *       description: A person's favorite number.
    *     - in: formData
    *       name: fav_number2
    *       type: number
    *       description: A person's favorite number.
    *     - in: formData
    *       name: fav_number3
    *       type: number
    *       description: A person's favorite number.
    *     responses:  
    *       201: 
    *         description: Created  
    *   
    */
    router.post('/',
        CustomerMiddleware.addCustomer,
        function (req, res) {
            res.status(201).json(req.response);
        });

    /** 
* @swagger 
* /customers: 
*   get: 
*     description: Get all Employee 
*     responses:  
*       200: 
*         description: Success  
*   
*/
    router.get('/',
        CustomerMiddleware.getCustomers,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:customerId',
        CustomerMiddleware.getCustomerById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/:customerId',
        CustomerMiddleware.modifyCustomer,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.delete('/:customerId',
        CustomerMiddleware.removeCustomer,
        function (req, res) {
            res.status(200).json(req.response);
        });
    module.exports = router;

})();