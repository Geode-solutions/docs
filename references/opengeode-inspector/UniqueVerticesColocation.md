# class UniqueVerticesColocation

# class UniqueVerticesColocation

# class UniqueVerticesColocation

```cpp
Defined at ../include/geode/inspector/criterion/colocation/unique_vertices_colocation.h#43
```

 Class for inspecting the colocation of unique vertices in a Model (BRep or Section)



## Functions

### UniqueVerticesColocation

```cpp
public void UniqueVerticesColocation<dimension, Model>(const UniqueVerticesColocation<dimension, Model> & )
```

```cpp
Defined at ../include/geode/inspector/criterion/colocation/unique_vertices_colocation.h#45
```

### operator=

```cpp
public UniqueVerticesColocation<dimension, Model> & operator=(const UniqueVerticesColocation<dimension, Model> & )
```

```cpp
Defined at ../include/geode/inspector/criterion/colocation/unique_vertices_colocation.h#45
```

### UniqueVerticesColocation

```cpp
public void UniqueVerticesColocation<dimension, Model>(const Model & model)
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/colocation/unique_vertices_colocation.cpp#349
```

### UniqueVerticesColocation

```cpp
public void UniqueVerticesColocation<dimension, Model>(const Model & model, bool verbose)
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/colocation/unique_vertices_colocation.cpp#356
```

### ~UniqueVerticesColocation

```cpp
public void ~UniqueVerticesColocation<dimension, Model>()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/colocation/unique_vertices_colocation.cpp#363
```

### model_has_unique_vertices_linked_to_different_points

```cpp
public bool model_has_unique_vertices_linked_to_different_points()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/colocation/unique_vertices_colocation.cpp#368
```

### model_has_colocated_unique_vertices

```cpp
public bool model_has_colocated_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/colocation/unique_vertices_colocation.cpp#375
```

### nb_colocated_unique_vertices

```cpp
public index_t nb_colocated_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/colocation/unique_vertices_colocation.cpp#382
```

### nb_unique_vertices_linked_to_different_points

```cpp
public index_t nb_unique_vertices_linked_to_different_points()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/colocation/unique_vertices_colocation.cpp#389
```

### colocated_unique_vertices_groups

```cpp
public std::vector<std::vector<index_t> > colocated_unique_vertices_groups()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/colocation/unique_vertices_colocation.cpp#396
```

### unique_vertices_linked_to_different_points

```cpp
public vector unique_vertices_linked_to_different_points()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/colocation/unique_vertices_colocation.cpp#403
```



