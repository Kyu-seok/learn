# Index in string
parrot = "Norwegian Blue"
print(parrot)       # "Norwegian Blue"
print(parrot[3])    # "w"
print(parrot[-1])   # "e"

# Slicing string
print(parrot[0:6])      # "Norweg"
print(parrot[3:5])      # "we"
print(parrot[0:9])      # "Norwegian"
print(parrot[:9])       # same as above
print(parrot[10:14])    # "Blue"
print(parrot[10:])      # same as above
print(parrot[:6] + parrot[6:])       # "Norwegian" + "Blue"
print(parrot[:])        # full string

# Slicing negative number
print(parrot[-4:-2])    # "Bl"
print(parrot[-4:12])    # "Bl"

# Step in slice
print(parrot[0:6:2])    # "Nre"
print(parrot[0:6:3])    # "Nw"
number = "9,223,372,036,854,775,807"
print(number[1::4])     # ",,,,,,"
number2 = "9,223;372:036 854,775;807"
print(number2[1::4])     # ",;: ,;"

# Example usage of separators in strings
separators = number2[1::4]
print(separators)
values = "".join(char if char not in separators else " " for char in number).split()
print([int(val) for val in values])
