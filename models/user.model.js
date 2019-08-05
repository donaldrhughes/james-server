module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            unique: true,
            required: true,
            validate: {
                isEmail: true
            }
        },
        username: {
            type: DataTypes.STRING,
            validate: {
                // args: [3, 12]
                // msg: "Username must be between 3 and 12 characters in length"
            }
        },
        salt: DataTypes.STRING,
        hash: DataTypes.STRING,
        address: DataTypes.STRING,
        zip: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        phone_number: DataTypes.STRING,
        isConfirmed: DataTypes.BOOLEAN,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        dob: DataTypes.STRING,
        userid: DataTypes.STRING,
        bio: DataTypes.STRING
    },
    {
                    freezeTableName: true
                }
    
    );
    return User;
};
