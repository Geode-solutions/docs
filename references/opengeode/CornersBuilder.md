# class CornersBuilder

```cpp
Defined at ../../include/geode/model/mixin/builder/corners_builder.h#45
```

## Functions

### load_corners

```cpp
public void load_corners(string_view directory)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/corners_builder.cpp#67
```

### corner_mesh_builder

```cpp
public std::unique_ptr<PointSetBuilder<dimension> > corner_mesh_builder(const uuid & id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/corners_builder.cpp#74
```

 Get a pointer to the builder of a Corner mesh

**id** [in] Unique index of the Corner

### set_corner_name

```cpp
public void set_corner_name(const uuid & id, string_view name)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/corners_builder.cpp#83
```

### CornersBuilder

```cpp
protected void CornersBuilder<dimension>(Corners<dimension> & corners)
```

```cpp
Defined at ../../include/geode/model/mixin/builder/corners_builder.h#60
```

### create_corner

```cpp
protected const uuid & create_corner()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/corners_builder.cpp#34
```

### create_corner

```cpp
protected const uuid & create_corner(const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/corners_builder.cpp#40
```

### create_corner

```cpp
protected void create_corner(uuid corner_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/corners_builder.cpp#47
```

### create_corner

```cpp
protected void create_corner(uuid corner_id, const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/corners_builder.cpp#53
```

### delete_corner

```cpp
protected void delete_corner(const Corner<dimension> & corner)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/corners_builder.cpp#60
```

### set_corner_mesh

```cpp
protected void set_corner_mesh(const uuid & id, std::unique_ptr<PointSet<dimension> > mesh)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/corners_builder.cpp#91
```

### modifiable_corner_mesh

```cpp
protected PointSet<dimension> & modifiable_corner_mesh(const uuid & id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/corners_builder.cpp#99
```



# class CornersBuilder

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/corners_builder.cpp#107
```

# class CornersBuilder

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/corners_builder.cpp#108
```

