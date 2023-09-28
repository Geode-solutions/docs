# class ComponentsStorage

```cpp
Defined at ../../include/geode/model/mixin/core/detail/components_storage.h#51
```

## Functions

### nb_components

```cpp
public index_t nb_components()
```

```cpp
Defined at ../../include/geode/model/mixin/core/detail/components_storage.h#58
```

### has_component

```cpp
public bool has_component(const uuid & id)
```

```cpp
Defined at ../../include/geode/model/mixin/core/detail/components_storage.h#63
```

### component

```cpp
public const Component & component(const uuid & id)
```

```cpp
Defined at ../../include/geode/model/mixin/core/detail/components_storage.h#68
```

### component

```cpp
public Component & component(const uuid & id)
```

```cpp
Defined at ../../include/geode/model/mixin/core/detail/components_storage.h#73
```

### begin

```cpp
public Iterator begin()
```

```cpp
Defined at ../../include/geode/model/mixin/core/detail/components_storage.h#78
```

### end

```cpp
public Iterator end()
```

```cpp
Defined at ../../include/geode/model/mixin/core/detail/components_storage.h#83
```

### add_component

```cpp
public void add_component(ComponentPtr component)
```

```cpp
Defined at ../../include/geode/model/mixin/core/detail/components_storage.h#88
```

### save_components

```cpp
public void save_components(string_view filename)
```

```cpp
Defined at ../../include/geode/model/mixin/core/detail/components_storage.h#93
```

### delete_component

```cpp
public void delete_component(const uuid & id)
```

```cpp
Defined at ../../include/geode/model/mixin/core/detail/components_storage.h#109
```

### load_components

```cpp
public void load_components(string_view filename)
```

```cpp
Defined at ../../include/geode/model/mixin/core/detail/components_storage.h#114
```

### file_mapping

```cpp
public flat_hash_map file_mapping(string_view directory)
```

```cpp
Defined at ../../include/geode/model/mixin/core/detail/components_storage.h#137
```



