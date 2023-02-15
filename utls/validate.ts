const ValidateJS = require("validate.js")

const Validate: any = ValidateJS.default ? ValidateJS.default : ValidateJS

/**
 * Проверяет, что 1 атрибут не отображается в содержимом атрибутов другого.
 */
Validate.validators.excludes = function custom(value, options, key, attributes) {
  const list = attributes[options.attribute] || []
  if (value && list.includes(value)) {
    return options.message || `${value} в списке`
  }
}

/**
 *
 Проверяет, что другой атрибут не верен.
 */
Validate.validators.tripped = function custom(value, options, key, attributes) {
  if (value && attributes[options.attribute] === true) {
    return options.message || `${options.attribute} верно`
  }
}

/**
 * Определяем проавила проверки.
 *
 * Example:
 * ``ts
 * const RULES = {
 *   favoriteBand: {
 *     inclusion: { ['Weezer', 'Other'], message: 'Pick wisely.' }
 *   },
 *   name: {
 *     presence: { message: 'A developer has no name?' }
 *   }
 * }
 * validate(RULES, {})
 * ```
 *
 * See https://validatejs.org/#validators for more examples.
 *
 */
export interface ValidationRules {
  [key: string]: Record<string, unknown>
}

/**
 * Объект, содержащий все найденные ошибки
 *
 * Example:
 * ```js
 * {
 *   email: ['Invalid email address.'],
 *   password: [
 *     'Password must be 6 characters.',
 *     'Password must have at least 1 digit.'
 *   ]
 * }
 * ```
 */
export interface ValidationErrors {
  [key: string]: string[]
}

/**
 * Выполняет указанные правила для объекта данных.
 *
 * @param rules The rules to apply.
 * @param data The object to validate.
 */
export function validate(rules: ValidationRules, data: Record<string, unknown>): ValidationErrors {
  if (typeof data !== "object") {
    return {} as ValidationErrors
  }
  return Validate(data, rules, { fullMessages: false }) || {}
}
