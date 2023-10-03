# class Line

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/line.cpp#169
```

```cpp
Inherits from Component<3U>
```



# class Line

```cpp
Defined at ../../include/geode/model/mixin/core/line.h#52
```

 Geometric component describing a Line. This component is described by a mesh.



```cpp
Inherits from Component<dimension>
```



## Functions

### Line

```cpp
public void Line<dimension>(const Line<dimension> & )
```

```cpp
Defined at ../../include/geode/model/mixin/core/line.h#54
```

### operator=

```cpp
public Line<dimension> & operator=(const Line<dimension> & )
```

```cpp
Defined at ../../include/geode/model/mixin/core/line.h#54
```

### Line

```cpp
public void Line<dimension>(Line<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/line.cpp#72
```

### ~Line

```cpp
public void ~Line<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/line.cpp#61
```

### component_type_static

```cpp
public NamedType component_type_static()
```

```cpp
Defined at ../../include/geode/model/mixin/core/line.h#65
```

### component_type

```cpp
public NamedType component_type()
```

```cpp
Defined at ../../include/geode/model/mixin/core/line.h#70
```

### component_id

```cpp
public ComponentID component_id()
```

```cpp
Defined at ../../include/geode/model/mixin/core/line.h#75
```

### mesh

```cpp
public const Mesh & mesh()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/line.cpp#96
```

### mesh_type

```cpp
public const MeshImpl & mesh_type()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/line.cpp#114
```

### modifiable_mesh

```cpp
public Mesh & modifiable_mesh(LinesKey key)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/line.cpp#102
```

### Line

```cpp
public void Line<dimension>(LinesKey key)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/line.cpp#79
```

### Line

```cpp
public void Line<dimension>(const MeshImpl & impl, LinesKey key)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/line.cpp#84
```

### set_mesh

```cpp
public void set_mesh(std::unique_ptr<Mesh> mesh, LinesKey key)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/line.cpp#140
```

### set_mesh

```cpp
public void set_mesh(std::unique_ptr<Mesh> mesh, LinesBuilderKey key)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/line.cpp#147
```

### set_line_name

```cpp
public void set_line_name(string_view name, LinesBuilderKey key)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/line.cpp#154
```

### modifiable_mesh

```cpp
public Mesh & modifiable_mesh(LinesBuilderKey key)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/line.cpp#161
```

### set_mesh

```cpp
public void set_mesh(int mesh, LinesKey key)
```

### set_mesh

```cpp
public void set_mesh(int mesh, LinesBuilderKey key)
```



# class Line

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/line.cpp#168
```

```cpp
Inherits from Component<2U>
```



