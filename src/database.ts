import mongoose from 'mongoose';
import config from './config';

(async () => {
    try {
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`);

        console.log(`Database connected to ${db.connection.name.toUpperCase()}`);
    } catch (error) {
        console.error(error);
    }
})();