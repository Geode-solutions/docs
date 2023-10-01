# class ComponentMeshesColocation

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/colocation/component_meshes_colocation.cpp#485
```

# class ComponentMeshesColocation

```cpp
Defined at ../include/geode/inspector/criterion/colocation/component_meshes_colocation.h#46
```

 Class for inspecting the colocation of points in the Component Meshes of a Model (BRep or Section).



## Functions

### ComponentMeshesColocation

```cpp
public void ComponentMeshesColocation<dimension, Model>(const ComponentMeshesColocation<dimension, Model> & )
```

```cpp
Defined at ../include/geode/inspector/criterion/colocation/component_meshes_colocation.h#48
```

### operator=

```cpp
public ComponentMeshesColocation<dimension, Model> & operator=(const ComponentMeshesColocation<dimension, Model> & )
```

```cpp
Defined at ../include/geode/inspector/criterion/colocation/component_meshes_colocation.h#48
```

### ComponentMeshesColocation

```cpp
public void ComponentMeshesColocation<dimension, Model>(const Model & model)
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/colocation/component_meshes_colocation.cpp#442
```

### ComponentMeshesColocation

```cpp
public void ComponentMeshesColocation<dimension, Model>(const Model & model, bool verbose)
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/colocation/component_meshes_colocation.cpp#449
```

### ~ComponentMeshesColocation

```cpp
public void ~ComponentMeshesColocation<dimension, Model>()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/colocation/component_meshes_colocation.cpp#456
```

### components_with_colocated_points

```cpp
public std::vector<uuid> components_with_colocated_points()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/colocation/component_meshes_colocation.cpp#461
```

### components_nb_colocated_points

```cpp
public flat_hash_map components_nb_colocated_points()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/colocation/component_meshes_colocation.cpp#468
```

### components_colocated_points_groups

```cpp
public absl::flat_hash_map<uuid, std::vector<std::vector<index_t> > > components_colocated_points_groups()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/colocation/component_meshes_colocation.cpp#475
```



# class ComponentMeshesColocation

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/colocation/component_meshes_colocation.cpp#483
```

