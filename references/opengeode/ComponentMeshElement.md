# struct ComponentMeshElement

```cpp
Defined at ../../include/geode/model/mixin/core/component_mesh_element.h#35
```

 Identify an element in a model component



## Members

```cpp
public ComponentID component_id

```

```cpp
public index_t element_id

```



## Functions

### ComponentMeshElement

```cpp
public void ComponentMeshElement()
```

```cpp
Defined at ../../include/geode/model/mixin/core/component_mesh_element.h#37
```

### ComponentMeshElement

```cpp
public void ComponentMeshElement(ComponentID component_id_in, index_t element_id_in)
```

```cpp
Defined at ../../include/geode/model/mixin/core/component_mesh_element.h#39
```

### mesh_element

```cpp
public MeshElement mesh_element()
```

```cpp
Defined at ../../include/geode/model/mixin/core/component_mesh_element.h#46
```

### operator==

```cpp
public bool operator==(const ComponentMeshElement & other)
```

```cpp
Defined at ../../include/geode/model/mixin/core/component_mesh_element.h#51
```

### serialize

```cpp
public void serialize(Archive & archive)
```

```cpp
Defined at ../../include/geode/model/mixin/core/component_mesh_element.h#58
```

### string

```cpp
public basic_string string()
```

```cpp
Defined at ../../include/geode/model/mixin/core/component_mesh_element.h#68
```



