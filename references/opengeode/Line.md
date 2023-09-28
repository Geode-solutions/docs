# class Line

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/line.cpp#132
```

```cpp
Inherits from Component<3U>
```



# class Line

```cpp
Defined at ../../include/geode/model/mixin/core/line.h#48
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
Defined at ../../include/geode/model/mixin/core/line.h#50
```

### operator=

```cpp
public Line<dimension> & operator=(const Line<dimension> & )
```

```cpp
Defined at ../../include/geode/model/mixin/core/line.h#50
```

### Line

```cpp
public void Line<dimension>(Line<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/line.cpp#66
```

### ~Line

```cpp
public void ~Line<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/line.cpp#54
```

### component_type_static

```cpp
public NamedType component_type_static()
```

```cpp
Defined at ../../include/geode/model/mixin/core/line.h#59
```

### component_type

```cpp
public NamedType component_type()
```

```cpp
Defined at ../../include/geode/model/mixin/core/line.h#64
```

### component_id

```cpp
public ComponentID component_id()
```

```cpp
Defined at ../../include/geode/model/mixin/core/line.h#69
```

### mesh

```cpp
public const EdgedCurve<dimension> & mesh()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/line.cpp#79
```

### mesh_type

```cpp
public const MeshImpl & mesh_type()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/line.cpp#91
```

### modifiable_mesh

```cpp
public EdgedCurve<dimension> & modifiable_mesh(LinesKey )
```

```cpp
Defined at ../../include/geode/model/mixin/core/line.h#78
```

### Line

```cpp
public void Line<dimension>(LinesKey )
```

```cpp
Defined at ../../include/geode/model/mixin/core/line.h#84
```

### Line

```cpp
public void Line<dimension>(const MeshImpl & impl, LinesKey )
```

```cpp
Defined at ../../include/geode/model/mixin/core/line.h#86
```

### set_mesh

```cpp
public void set_mesh(std::unique_ptr<EdgedCurve<dimension> > mesh, LinesKey )
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/line.cpp#117
```

### set_mesh

```cpp
public void set_mesh(std::unique_ptr<EdgedCurve<dimension> > mesh, LinesBuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/line.cpp#124
```

### set_line_name

```cpp
public void set_line_name(string_view name, LinesBuilderKey )
```

```cpp
Defined at ../../include/geode/model/mixin/core/line.h#94
```

### modifiable_mesh

```cpp
public EdgedCurve<dimension> & modifiable_mesh(LinesBuilderKey )
```

```cpp
Defined at ../../include/geode/model/mixin/core/line.h#99
```

### set_mesh

```cpp
public void set_mesh(int mesh, LinesKey )
```

### set_mesh

```cpp
public void set_mesh(int mesh, LinesBuilderKey )
```



# class Line

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/line.cpp#131
```

```cpp
Inherits from Component<2U>
```



