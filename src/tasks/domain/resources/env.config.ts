import { registerAs } from '@nestjs/config';
export default registerAs('configuration', () => ({
    PORT: parseInt(process.env.PORT, 10) || 8080
}));