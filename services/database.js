import Sequelize from "sequelize";

const sequelize = new Sequelize(
    "gadgetdb",//Database name
    "root",//Database username
    "yjmredstrat123",//Database password
    {
        dialect: 'mysql',
        host:'localhost'
    }
)

export default sequelize;