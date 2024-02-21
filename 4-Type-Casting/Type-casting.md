# Type Casting

## String Conversion

String conversion is mostly obvious. A false becomes "false", null becomes "null", etc.

## Numeric Conversion

| Value | Becomes |
| ----------- | ----------- |
| undefined | NaN |
| null | 0 |
| true | 1 |
| false | 0 |
| string | Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN. |

## Boolean Conversion

The conversion rule:

- Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
- Other values become true.

:warning: **Please note: the string with zero "0" is true**
