# class LinesBuilder

```cpp
Defined at ../../include/geode/model/mixin/builder/lines_builder.h#45
```

## Functions

### load_lines

```cpp
public void load_lines(string_view directory)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/lines_builder.cpp#65
```

### line_mesh_builder

```cpp
public std::unique_ptr<EdgedCurveBuilder<dimension> > line_mesh_builder(const uuid & id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/lines_builder.cpp#71
```

 Get a pointer to the builder of a Line mesh

**id** [in] Unique index of the Line

### set_line_name

```cpp
public void set_line_name(const uuid & id, string_view name)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/lines_builder.cpp#80
```

### LinesBuilder

```cpp
protected void LinesBuilder<dimension>(Lines<dimension> & lines)
```

```cpp
Defined at ../../include/geode/model/mixin/builder/lines_builder.h#60
```

### create_line

```cpp
protected const uuid & create_line()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/lines_builder.cpp#34
```

### create_line

```cpp
protected const uuid & create_line(const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/lines_builder.cpp#40
```

### create_line

```cpp
protected void create_line(uuid line_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/lines_builder.cpp#46
```

### create_line

```cpp
protected void create_line(uuid line_id, const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/lines_builder.cpp#52
```

### delete_line

```cpp
protected void delete_line(const Line<dimension> & line)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/lines_builder.cpp#59
```

### set_line_mesh

```cpp
protected void set_line_mesh(const uuid & id, std::unique_ptr<EdgedCurve<dimension> > mesh)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/lines_builder.cpp#88
```

### modifiable_line_mesh

```cpp
protected EdgedCurve<dimension> & modifiable_line_mesh(const uuid & id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/lines_builder.cpp#96
```



# class LinesBuilder

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/lines_builder.cpp#105
```

# class LinesBuilder

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/lines_builder.cpp#104
```

