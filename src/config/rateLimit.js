import { rateLimit } from 'express-rate-limit'

export default rateLimit({
	windowMs: 5 * 60 * 1000,
	limit: 100,
	standardHeaders: 'draft-7',
	legacyHeaders: false,
})