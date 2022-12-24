/* 
    Create Action
    Функция, которая позволяет создать создатель-экшенов.
    Принимает один аргумент, тип - строка.
*/

import { createAction } from "@reduxjs/toolkit";

export const reset = createAction('app/reset');