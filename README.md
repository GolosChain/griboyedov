# CORE-SERVICE

**CORE-SERVICE** является набором корневых классов и утилит для микросервисов CyberWay. 
 
Основные возможности:

-   Базовый класс виртуального сервиса, на основе которого строятся все микросервисы.  
    Каждый микросервис содержит в себе 1 или более виртуальных сервисов, работающих асинхронно и скомпанованных в древовидную структуру зависимостей.  
    Базовый класс предлагает общий интерфейс и некоторые утилитные методы для работы, подробнее в описании самого класса.

-   Виртуальный сервис для подписки на блоки, генерируемые блокчейном CyberWay.

-   Виртуальный сервис восстановления пропущенный блоков на случай если микросервис был перезапущен или произошло что-либо иное подобное.

-   Виртуальный сервис работы с базой данных MongoDB, используя Mongoose.

-   Виртуальный сервис связи микросервисов, позволяющий осуществлять двухстороннюю связь между микросервисами через HTTP, используя JSON-RPC, добавляя к этому возможность множественного ответа на единичный запрос JSON-RPC (например для подписки на что-либо).

-   Утилиты и обертки для работы со временем, логами и переменными окружения.

-   StatsD мониторинг.

Набор `ENV`, которые можно определять для корневых классов:

-   `GLS_CONNECTOR_HOST` _(обязательно)_ - адрес, который будет использован для входящих подключений связи микросервисов.  
    Дефолтное значение при запуске без докера - `127.0.0.1`

-   `GLS_CONNECTOR_PORT` _(обязательно)_ - адрес порта, который будет использован для входящих подключений связи микросервисов.  
    Дефолтное значение при запуске без докера - `3000`

-   `GLS_METRICS_HOST` _(обязательно)_ - адрес хоста для метрик StatsD.  
    Дефолтное значение при запуске без докера - `127.0.0.1`
-   `GLS_METRICS_PORT` _(обязательно)_ - адрес порта для метрик StatsD.  
    Дефолтное значение при запуске без докера - `8125`

-   `GLS_MONGO_CONNECT` - строка подключения к базе MongoDB.  
    Дефолтное значение - `mongodb://mongo/admin`

-   `GLS_DAY_START` - время начала нового дня в часах относительно UTC, используется для таких вещей как валидация "1 пост в сутки".  
    Дефолтное значение - `3` (день начинается в 00:00 по Москве).
