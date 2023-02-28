const { sequelize, DataTypes }= require('../DB');
const bcrypt = require('bcryptjs')


// create table and validation
const Admin = sequelize.define("admin", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    userName: {
        type: DataTypes.STRING(30),
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING(30),
        allowNull: true,
        unique:true,
        validate:{
            isEmail: {msg: "It must be a valid Email address"},
        }
    },
    password:{
        type:DataTypes.STRING(100),
        validate: {
            notEmpty: true
        }
    },
    age: {
        type: DataTypes.INTEGER(),
        allowNull: true,
        isNumeric: true
    },
    role: {
        type:DataTypes.TEXT,
        args: [['ADMIN', 'EMPLOYEE']],
        msg: "Must be admin and employee"
    },
    published: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: true,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: true,
    },
},{
    timestamps:true,

});

// hash admin password before create and save to database
Admin.beforeCreate(async(admin )=>{
    const saltRound = 1
    const hash = await bcrypt.hash(admin.password,saltRound)
    admin.password = hash
    console.log(hash)
})




module.exports = Admin
