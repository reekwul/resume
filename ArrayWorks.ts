import { WorksMe } from "@/types/works";

const Works: WorksMe[] = [
    {
        company_name:"Сеть аптек Апрель",
        company_link:"https://apteka-april.ru/",
        company_techologies:["Vue 3","Nuxt", "Pinia", "TypeScript", "Vite", "WebSocket", "Micro-frontends"],
        duration:"3 года 3 месяца",
        about:"Корпоративная B2B платформа с 25K+ пользователей",
        period:"Апрель 2022 — по настоящее время",
        position:"Frontend-разработчик",
        achivments:[
            "✔ Вывел продукт из \"техдолга\" – миграция Vue 2 → Vue 3 + TypeScript за 8 месяцев",
            "✔ Архитектурные решения:\n- Переход с Vuex → Pinia (снизил сложность кода на 40%)\n- Система lazy-load модулей (уменьшила initial bundle на 35%)",
            "✔ Командная роль:\n- Вел техревью для 4 разработчиков\n- Автор 80% UI-стандартов компании",
        ],
        indicators:[
            "65% – ускорение рендеринга дашбордов",
            "90% – покрытие TypeScript критичных модулей",
            "4.8/5 – оценка за code quality по внутреннему аудиту",
        ]
    },
    {
        company_name:"Freelace",
        company_link:"",
        company_techologies:["Vue 2", "Vuex", "Vue Router","TypeScript", "Webpack"],
        duration:"1 год 2 месяца",
        about:"Разработал 3 SPA-приложения на Vue 2 + TypeScript.\nОптимизировал производительность (Lazy Loading, Tree Shaking).",
        period:"Март 2021 — Апрель 2022",
        position:"Frontend-разработчик",
        achivments:[],
        indicators:[]
    }
]

export {
    Works
}