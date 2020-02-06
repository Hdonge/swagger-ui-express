const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express()
const port = 3000

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Customer API",
            description: "Customer API documentation",
            contact: {
                name: "Harshal Donge"
            },
            servers: ["https://localhost:3000"]
        }
    },
    apis: ["index.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Routes
/**
 * @swagger
 * /customers:
 *  get:
 *   description: request to get all customers
 *   responses:
 *       '200':
 *           description: A successful response
 *       '401':
 *         description: Bad username, not found in db
 *       '403':
 *         description: Username and password don't match
 */
app.get('/customers', (req, res) => {
    res.send('Hello World!')
});

/**
* @swagger
* /loginUser:
*   post:
*     name: Login
*     summary: Logs in a user
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           $ref: '#/definitions/User'
*           type: object
*           properties:
*             username:
*               type: string
*             password:
*               type: string
*               format: password
*         required:
*           - username
*           - password
*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       403:
*         description: Username and password don't match
*/
app.post('/loginUser', (req, res) => {
    res.send('User Authentication')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))