# class Horizon

```cpp
Inherits from Component<2U>
```

# class Horizon

Geological component describing a Horizon. This component is described by a horizon type.

```cpp
Inherits from Component<dimension>
```

## Functions

### Horizon

```cpp
public void Horizon<dimension>(const Horizon<dimension> & )
```

### operator=

```cpp
public Horizon<dimension> & operator=(const Horizon<dimension> & )
```

### Horizon

```cpp
public void Horizon<dimension>(Horizon<dimension> && other)
```

### ~Horizon

```cpp
public void ~Horizon<dimension>()
```

### component_type_static

```cpp
public NamedType component_type_static()
```

### component_type

```cpp
public NamedType component_type()
```

### component_id

```cpp
public ComponentID component_id()
```

### has_type

```cpp
public bool has_type()
```

### type

```cpp
public HORIZON_TYPE type()
```

### Horizon

```cpp
public void Horizon<dimension>(HorizonsKey )
```

### Horizon

```cpp
public void Horizon<dimension>(HORIZON_TYPE type, HorizonsKey )
```

### set_type

```cpp
public void set_type(HORIZON_TYPE type, HorizonsBuilderKey )
```

### set_horizon_name

```cpp
public void set_horizon_name(string_view name, HorizonsBuilderKey )
```

## Enums

| enum class HORIZON_TYPE |

--

| NO_TYPE |
| CONFORMAL |
| NON_CONFORMAL |
| TOPOGRAPHY |
| INTRUSION |

# class Horizon

```cpp
Inherits from Component<3U>
```
