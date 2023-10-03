# class Horizon

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/mixin/core/horizon.cpp#113
```

```cpp
Inherits from Component<2U>
```



# class Horizon

```cpp
Defined at ../include/geode/geosciences/explicit/mixin/core/horizon.h#46
```

 Geological component describing a Horizon. This component is described by a horizon type.



```cpp
Inherits from Component<dimension>
```



## Functions

### Horizon

```cpp
public void Horizon<dimension>(const Horizon<dimension> & )
```

```cpp
Defined at ../include/geode/geosciences/explicit/mixin/core/horizon.h#48
```

### operator=

```cpp
public Horizon<dimension> & operator=(const Horizon<dimension> & )
```

```cpp
Defined at ../include/geode/geosciences/explicit/mixin/core/horizon.h#48
```

### Horizon

```cpp
public void Horizon<dimension>(Horizon<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/mixin/core/horizon.cpp#69
```

### ~Horizon

```cpp
public void ~Horizon<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/mixin/core/horizon.cpp#76
```

### component_type_static

```cpp
public NamedType component_type_static()
```

```cpp
Defined at ../include/geode/geosciences/explicit/mixin/core/horizon.h#67
```

### component_type

```cpp
public NamedType component_type()
```

```cpp
Defined at ../include/geode/geosciences/explicit/mixin/core/horizon.h#72
```

### component_id

```cpp
public ComponentID component_id()
```

```cpp
Defined at ../include/geode/geosciences/explicit/mixin/core/horizon.h#77
```

### has_type

```cpp
public bool has_type()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/mixin/core/horizon.cpp#81
```

### type

```cpp
public HORIZON_TYPE type()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/mixin/core/horizon.cpp#87
```

### Horizon

```cpp
public void Horizon<dimension>(HorizonsKey )
```

```cpp
Defined at ../include/geode/geosciences/explicit/mixin/core/horizon.h#86
```

### Horizon

```cpp
public void Horizon<dimension>(HORIZON_TYPE type, HorizonsKey )
```

```cpp
Defined at ../include/geode/geosciences/explicit/mixin/core/horizon.h#87
```

### set_type

```cpp
public void set_type(HORIZON_TYPE type, HorizonsBuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/mixin/core/horizon.cpp#94
```

### set_horizon_name

```cpp
public void set_horizon_name(string_view name, HorizonsBuilderKey )
```

```cpp
Defined at ../include/geode/geosciences/explicit/mixin/core/horizon.h#91
```



## Enums

| enum class HORIZON_TYPE |

--

| NO_TYPE |
| CONFORMAL |
| NON_CONFORMAL |
| TOPOGRAPHY |
| INTRUSION |


```cpp
Defined at ../include/geode/geosciences/explicit/mixin/core/horizon.h#53
```



# class Horizon

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/mixin/core/horizon.cpp#114
```

```cpp
Inherits from Component<3U>
```



