# Comparison: Unsupported operators

```py
a = 1 in 7  # error: "Operator `in` is not supported for types `Literal[1]` and `Literal[7]`"
reveal_type(a)  # revealed: bool

b = 0 not in 10  # error: "Operator `not in` is not supported for types `Literal[0]` and `Literal[10]`"
reveal_type(b)  # revealed: bool

c = object() < 5  # error: "Operator `<` is not supported for types `object` and `Literal[5]`"
reveal_type(c)  # revealed: Unknown

# TODO should error, need to check if __lt__ signature is valid for right operand
d = 5 < object()
# TODO: should be `Unknown`
reveal_type(d)  # revealed: bool
```