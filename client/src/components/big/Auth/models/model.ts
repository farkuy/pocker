import {z} from "zod";

export const signInSchema = z.object({
    email: z
        .string()
        .toLowerCase()
        .min(1, "Введите эл.почту")
        .email("Введите корректную эл.почту"),
    password: z.string().min(1, "Введите пароль"),
});

export const signUpSchema = z.object({
    name: z
        .string()
        .min(1, 'Введите имя')
    ,
    email: z
        .string()
        .toLowerCase()
        .min(1, "Введите эл.почту")
        .email("Введите корректную эл.почту"),
    password: z.string().min(1, "Введите пароль"),
    repeatPassword: z.string().min(1, "Повторите пароль"),
    })
    .refine((data) => data.password === data.repeatPassword, {
        message: "Пароли не совпадают",
        path: ["repeatPassword"],
    })
    .refine((data) => {
        const forbiddenWords = ["хуй", "пизда"];
        if (!forbiddenWords.some(word => data.name.includes(word))) {
            return true;
        }
    }, {
        message: "Обнаружены недопустимые слова" ,
        path: ["name"]
    });

export type FormSchemaSigIn = z.infer<typeof signInSchema>
export type FormSchemaSigUp = z.infer<typeof signUpSchema>;
