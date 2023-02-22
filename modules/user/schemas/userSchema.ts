import { t } from 'elysia'

export const userSchema = {
    body: t.Object({
        pass: t.String(),
    }),
}
