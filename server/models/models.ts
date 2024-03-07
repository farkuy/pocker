import {sequelize} from "../index";

const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    user_name: {type: DataTypes.STRING, unique: true},
    bank_account: {type: DataTypes.INTEGER, defaultValue: 0},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const TotalUserStats = sequelize.define('total_user_stats', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    bank_account_all_time: {type: DataTypes.INTEGER, defaultValue: 0},
    count_game: {type: DataTypes.INTEGER, defaultValue: 0},
    total_win_hands: {type: DataTypes.INTEGER, defaultValue: 0},
    total_loose_hands: {type: DataTypes.INTEGER, defaultValue: 0},
    total_all_in: {type: DataTypes.INTEGER, defaultValue: 0},
    total_pre_flop: {type: DataTypes.INTEGER, defaultValue: 0},
    total_flop: {type: DataTypes.INTEGER, defaultValue: 0},
    total_turn: {type: DataTypes.INTEGER, defaultValue: 0},
    total_river: {type: DataTypes.INTEGER, defaultValue: 0},
    total_show_down: {type: DataTypes.INTEGER, defaultValue: 0},
    total_pass: {type: DataTypes.INTEGER, defaultValue: 0},
})

const UserStatsInGame = sequelize.define('user_stats_in_game', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    bank_account_in_game: {type: DataTypes.INTEGER, defaultValue: 0},
    count_game_in_table: {type: DataTypes.INTEGER, defaultValue: 0},
    win_hands_in_game: {type: DataTypes.INTEGER, defaultValue: 0},
    loose_hands_in_game: {type: DataTypes.INTEGER, defaultValue: 0},
    all_in_in_game: {type: DataTypes.INTEGER, defaultValue: 0},
    pre_flop_in_game: {type: DataTypes.INTEGER, defaultValue: 0},
    flop_in_game: {type: DataTypes.INTEGER, defaultValue: 0},
    turn_in_game: {type: DataTypes.INTEGER, defaultValue: 0},
    river_in_game: {type: DataTypes.INTEGER, defaultValue: 0},
    show_down_in_game: {type: DataTypes.INTEGER, defaultValue: 0},
    pass_in_game: {type: DataTypes.INTEGER, defaultValue: 0},
})

const InfoAboutEnemy = sequelize.define('info_about_enemy', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    enemy_name: {type: DataTypes.STRING, unique: true},
    color: {type: DataTypes.STRING},
    notes: {type: DataTypes.STRING},
})

const Table = sequelize.define('table', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    password: {type: DataTypes.STRING, allowNull: true},
    name: {type: DataTypes.STRING, unique: true},
    limits: {type: DataTypes.INTEGER},
    table_bank_account: {type: DataTypes.INTEGER, defaultValue: 0},
})

/*const Tournament = sequelize.define('tournament', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    password: {type: DataTypes.STRING, allowNull: true},
    name: {type: DataTypes.STRING, unique: true},
    limits: {type: DataTypes.INTEGER},
    table_bank_account: {type: DataTypes.INTEGER, defaultValue: 0},
})*/

const TypeUserTable = sequelize.define('type_user_table', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(TotalUserStats);
TotalUserStats.belongsTo(User);

User.hasOne(UserStatsInGame);
UserStatsInGame.belongsTo(User);

User.hasMany(InfoAboutEnemy);
InfoAboutEnemy.belongsTo(User);

Table.belongsToMany(User, {through: TypeUserTable});
User.belongsToMany(Table, {through: TypeUserTable});

module.exports = {
    User,
    TotalUserStats,
    UserStatsInGame,
    InfoAboutEnemy,
    Table,
    TypeUserTable,
}

