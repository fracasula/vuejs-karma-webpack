const fs = require('fs');

module.exports = {
    generate: () => {
        'use strict';

        if (!process.env.NODE_ENV) {
            throw new Error('NODE_ENV environment variable is not set');
        }

        const config = `${__dirname}/${process.env.NODE_ENV}.json`;

        if (fs.existsSync(config)) {
            fs.writeFileSync(
                `${__dirname}/../dist/config.json`,
                fs.readFileSync(config)
            );
        }
    }
};