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
        },
        salt: DataTypes.STRING,
        hash: DataTypes.STRING,
        email_confirm_token: DataTypes.STRING,
        email_is_confirmed: DataTypes.BOOLEAN,
        reset_password_token: DataTypes.STRING,
        reset_password_expires: DataTypes.STRING,
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
        btc_address: DataTypes.STRING,
        eth_address: DataTypes.STRING,
        bio: DataTypes.STRING
    },
    {
                    freezeTableName: true
                }
    
    );
    return User;
};
