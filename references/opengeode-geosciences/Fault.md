# class Fault

```cpp
Defined at ../include/geode/geosciences/explicit/mixin/core/fault.h#46
```

 Geological component describing a Fault. This component is described by a fault type.



```cpp
Inherits from Component<dimension>
```



## Functions

### Fault

```cpp
public void Fault<dimension>(const Fault<dimension> & )
```

```cpp
Defined at ../include/geode/geosciences/explicit/mixin/core/fault.h#48
```

### operator=

```cpp
public Fault<dimension> & operator=(const Fault<dimension> & )
```

```cpp
Defined at ../include/geode/geosciences/explicit/mixin/core/fault.h#48
```

### Fault

```cpp
public void Fault<dimension>(Fault<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/mixin/core/fault.cpp#69
```

### ~Fault

```cpp
public void ~Fault<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/mixin/core/fault.cpp#76
```

### component_type_static

```cpp
public NamedType component_type_static()
```

```cpp
Defined at ../include/geode/geosciences/explicit/mixin/core/fault.h#68
```

### component_type

```cpp
public NamedType component_type()
```

```cpp
Defined at ../include/geode/geosciences/explicit/mixin/core/fault.h#73
```

### component_id

```cpp
public ComponentID component_id()
```

```cpp
Defined at ../include/geode/geosciences/explicit/mixin/core/fault.h#78
```

### has_type

```cpp
public bool has_type()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/mixin/core/fault.cpp#81
```

### type

```cpp
public FAULT_TYPE type()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/mixin/core/fault.cpp#87
```

### Fault

```cpp
public void Fault<dimension>(FaultsKey )
```

```cpp
Defined at ../include/geode/geosciences/explicit/mixin/core/fault.h#87
```

### Fault

```cpp
public void Fault<dimension>(FAULT_TYPE type, FaultsKey )
```

```cpp
Defined at ../include/geode/geosciences/explicit/mixin/core/fault.h#88
```

### set_type

```cpp
public void set_type(FAULT_TYPE type, FaultsBuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/mixin/core/fault.cpp#93
```

### set_fault_name

```cpp
public void set_fault_name(string_view name, FaultsBuilderKey )
```

```cpp
Defined at ../include/geode/geosciences/explicit/mixin/core/fault.h#92
```



## Enums

| enum class FAULT_TYPE |

--

| NO_TYPE |
| NORMAL |
| REVERSE |
| STRIKE_SLIP |
| LISTRIC |
| DECOLLEMENT |


```cpp
Defined at ../include/geode/geosciences/explicit/mixin/core/fault.h#53
```



# class Fault

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/mixin/core/fault.cpp#113
```

```cpp
Inherits from Component<3U>
```



# class Fault

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/mixin/core/fault.cpp#112
```

```cpp
Inherits from Component<2U>
```



