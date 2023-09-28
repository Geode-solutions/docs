# struct ComponentMeshVertex

```cpp
Defined at ../../include/geode/model/mixin/core/vertex_identifier.h#22
```

 Identify a vertex in a geometric component



## Members

```cpp
public ComponentID component_id

```

```cpp
public index_t vertex

```



## Functions

### ComponentMeshVertex

```cpp
public void ComponentMeshVertex(ComponentID component_id_in, index_t vertex_id_in)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/vertex_identifier.cpp#33
```

### ~ComponentMeshVertex

```cpp
public void ~ComponentMeshVertex()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/vertex_identifier.cpp#44
```

### mesh_vertex

```cpp
public MeshVertex mesh_vertex()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/vertex_identifier.cpp#46
```

### operator==

```cpp
public bool operator==(const ComponentMeshVertex & other)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/vertex_identifier.cpp#51
```

### serialize

```cpp
public void serialize(Archive & archive)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/vertex_identifier.cpp#58
```

### string

```cpp
public basic_string string()
```

```cpp
Defined at ../../include/geode/model/mixin/core/vertex_identifier.h#36
```



