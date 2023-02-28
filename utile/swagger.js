const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require('swagger-ui-express');


// swagger Configuration

const options = {
    encoding: 'utf-8',
    failOnErrors: false,
    verbose: true,
    format: 'json',
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'My API',
            version: '1.0.0',
        },
    },
    definition: {},
    apis: ['./routes/router.js'],
};

// setup option swaggerDoc
const swaggerDocs = swaggerJsdoc(options)



// setup middleware running swagger then push in server.js
function swaggerDoc(app){

    try {

        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

        app.get('api-doc', (req, res) => {
            res.setHeader('Content-Type', 'application/json')
            res.send(swaggerDocs)
        })

    }catch(err){
        console.log(err.message)
    }
}


module.exports = swaggerDoc