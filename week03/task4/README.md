

# Week 03
# Task 04
написать deepAssign, который работает ровно так же, как и Object.assign (порядок ключей, проверка на enumerable, проверяет на != null etc), но хэндлит nested объекты
правильно проверяет на объект, умеет работать с сабклассами
то есть new obj.constructor, а не []/{}
бонусные поинты: хэндлить даты/регэкспы/мэпы/сэты
https://github.com/shvaikalesh/polyfill-object/blob/master/assign.js
реализация Object.assign, ваш тоже должен работать с Object.create(null)
должно работать синхронно и в рамках ecmascript. то есть structured clone не юзать! и без JSON
