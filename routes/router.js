const router = require('express').Router()
const authAdminMiddleware = require('../middleware/authMiddleware')

// import and setup controller
const {createAdmin,getAllAdmin,getOneAdmin,updateAdmin,deleteAdmin} = require('../controller/adminController')





/**
 * @swagger
 *  /api/admin/getAllAdmin:
 *  get:
 *    tags:
 *      - Admin
 *    summary: get admin of list panel
 *    description: retrieve a list of task from admin table
 *    responses:
 *      200:
 *        description: A list of Admin.
 *        content:
 *          application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 description:
 *                   type: string
 *                   example: successfully getAll admin
 *                 data:
 *                  type: array
 */
router.get('/getAllAdmin',authAdminMiddleware,getAllAdmin)


/**
 * @swagger
 *  /api/admin/create:
 *  post:
 *      tags:
 *        - Admin
 *      description: create Admin API
 *      summary: create Admin data
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userName:
 *                   type: string
 *                   description: enter your username
 *                   example: test
 *                 password:
 *                   type: string
 *                   description: enter your password
 *                   example: 12345678
 *                 confirmPassword:
 *                   type: virtual
 *                   description: enter your confirmPassword
 *                   example: 12345678
 *                 email:
 *                   type: object
 *                   format: email
 *                   description: enter email of model admin
 *                   example: test@email.com
 *                 age:
 *                   type: integer
 *                   description: enter your age
 *                   example: 12
 *                 role:
 *                   type: text
 *                   description: enter your rule of admin
 *                   example: admin
 *                 published:
 *                   type: boolean
 *                   description: enter your boolean
 *                   example: true or false
 *      responses:
 *        201:
 *          description: successfully create Admin panel model
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  description:
 *                    type: string
 *                    example: Successfully create data!
 */
router.post('/create',createAdmin)



/**
 * @swagger
 *  /api/admin/getOneAdmin{id}:
 *  get:
 *    tags:
 *      - Admin
 *    summary: get one admin data with id of list panel
 *    description: retrieve admin with id of table
 *    parameters:
 *      - name: id
 *        id: path
 *        required: true
 *        description: admin id
 *        schema:
 *          type: string
 *          format: int64
 *    responses:
 *      200:
 *        description: successfully get one admin with id.
 *        content:
 *          application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 description:
 *                   type: string
 *                   example: successfully getAll admin data with id by detail
 *                 data:
 *                   type: object
 *                   properties:
 *                     userName:
 *                       type: string
 *                       description: enter your username
 *                       example: test
 *                     password:
 *                       type: string
 *                       description: enter your password
 *                       example: 12345678
 *                     confirmPassword:
 *                       type: virtual
 *                       description: enter your confirmPassword
 *                       example: 12345678
 *                     email:
 *                       type: object
 *                       format: email
 *                       description: enter email of model admin
 *                       example: test@email.com
 *                     age:
 *                       type: integer
 *                       description: enter your age
 *                       example: 12
 *                     role:
 *                       type: text
 *                       description: enter your rule of admin
 *                       example: admin
 *                     published:
 *                       type: boolean
 *                       description: enter your boolean
 *                       example: true or false
 */
router.get('/getOneAdmin/:id',authAdminMiddleware,getOneAdmin)


/**
 * @swagger
 *  /api/admin/getOneAdmin{id}:
 *     patch:
 *       tags:
 *         - Admins
 *       summary: update admin data
 *       description: update admins data Api
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: Admins id
 *           schema:
 *             type: integer
 *             format: int64
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   userName:
 *                     type: string
 *                     description: enter your username
 *                     example: test
 *                   password:
 *                     type: string
 *                     description: enter your password
 *                     example:
 *                   confirmPassword:
 *                     type: virtual
 *                     description: enter your confirmPassword
 *                     example: 12345678
 *                   email:
 *                     type: object
 *                     format: email
 *                     description: enter email of model admin
 *                     example: test@email.com
 *                   age:
 *                     type: integer
 *                     description: enter your age
 *                     example: 12
 *                   role:
 *                     type: text
 *                     description: enter your rule of admin
 *                     example: admin
 *                   published:
 *                     type: boolean
 *                     description: enter your boolean
 *                     example: true or false
 *       responses:
 *         200:
 *            description: successfully  update panel admin
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                    description:
 *                      type: string
 *                      example: Successfully update data!
 */
router.patch('/updateAdmin/:id',authAdminMiddleware,updateAdmin)


/**
 * @swagger
 * /api/admin/deleteAdmin{id}:
 *     delete:
 *       tags:
 *         - Admins:
 *       summary: Remove Admins data by id
 *       description: Remove Admins Api
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: Admins id
 *           schema:
 *     responses:
 *         200:
 *            description: successfully delete panel admin
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                    description:
 *                      type: string
 *                      example: Successfully delete data!
 */
router.delete('/deleteAdmin/:id',deleteAdmin)




module.exports = router