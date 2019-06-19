module.exports = {
    "type": "postgres",
    "host": "order-db",
    "port": 5432,
    "username": "postgres",
    "password": "postgres",
    "database": "order",
    "logging": true,
    "entities": ["src/entities/*.ts"],
    "migrations": ["src/database/migration/*.ts"],
    "cli": {
        "entitiesDir": "src/entities",
        "migrationsDir": "./src/database/migration"
    },
    "migrationRun": true
}